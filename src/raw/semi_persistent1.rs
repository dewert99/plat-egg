use crate::raw::reflect_const::PathCompress;
use crate::raw::{AsUnwrap, Language, RawEClass, RawEGraph, Sealed, UndoLogT};
use crate::{ClassId, Id};
use core::mem;
use no_std_compat::prelude::v1::*;
use std::fmt::Debug;

/// Stored information required to restore the egraph to a previous state
///
/// see [`push1`](RawEGraph::push1) and [`pop1`](RawEGraph::pop1)
#[derive(Debug, Clone)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
pub struct PushInfo {
    node_count: u32,
    union_count: u32,
    memo_log_count: u32,
    pop_parents_count: u32,
    congr_dup_count: u32,
}

impl PushInfo {
    /// Returns the result of [`EGraphResidual::number_of_uncanonical_nodes`](super::EGraphResidual::number_of_uncanonical_nodes)
    /// from the state where `self` was created
    pub fn number_of_uncanonical_nodes(&self) -> usize {
        self.node_count as usize
    }

    /// Returns the number of unions from the state where `self` was created
    pub fn number_of_unions(&self) -> usize {
        self.union_count as usize - 1
    }
}

#[derive(Clone, Debug)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
struct UnionInfo {
    old_id: Id,
    old_parents: Vec<Id>,
    parents_added_after: u32,
    nodes_added_after: u32,
    old_cid: ClassId,
}

/// Value for [`UndoLogT`] that enables [`push1`](RawEGraph::push1) and [`raw_pop1`](RawEGraph::raw_pop1)
#[derive(Clone, Debug)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
pub struct UndoLog {
    pop_parents: Vec<Id>,
    union_log: Vec<UnionInfo>,
    memo_log: Vec<u64>,
    congr_dup_log: Vec<Id>,
}

impl Default for UndoLog {
    fn default() -> Self {
        UndoLog {
            pop_parents: Default::default(),
            union_log: vec![UnionInfo {
                old_id: Id::from(0),
                old_parents: vec![],
                parents_added_after: 0,
                nodes_added_after: 0,
                old_cid: ClassId::from(0),
            }],
            memo_log: Default::default(),
            congr_dup_log: vec![],
        }
    }
}

impl Sealed for UndoLog {}

impl<L: Language, D> UndoLogT<L, D> for UndoLog {
    type AllowPathCompress = PathCompress<false>;

    fn add_node(&mut self, _: &L, canon_children: &[Id], _: Id, _: ClassId) {
        self.pop_parents.extend(canon_children);
        let log = self.union_log.last_mut().unwrap();
        log.parents_added_after += canon_children.len() as u32;
        log.nodes_added_after += 1;
    }

    fn union(&mut self, _: Id, id2: Id, old_parents: Vec<Id>, old_cid: ClassId) {
        self.union_log.push(UnionInfo {
            old_id: id2,
            parents_added_after: 0,
            nodes_added_after: 0,
            old_parents,
            old_cid,
        })
    }

    fn fix_id(&mut self, _: Id, _: ClassId) {}

    fn insert_memo(&mut self, hash: u64) {
        self.memo_log.push(hash);
    }

    fn add_congruence_duplicate(&mut self, id: Id) {
        self.congr_dup_log.push(id);
    }

    fn clear(&mut self) {
        self.union_log.truncate(1);
        self.union_log[0].parents_added_after = 0;
        self.memo_log.clear();
        self.congr_dup_log.clear();
    }

    #[inline]
    fn is_enabled(&self) -> bool {
        true
    }
}

impl<L: Language, D, U: AsUnwrap<UndoLog> + UndoLogT<L, D>> RawEGraph<L, D, U> {
    /// Create a [`PushInfo`] representing the current state of the egraph
    /// which can later be passed into [`raw_pop1`](RawEGraph::raw_pop1)
    ///
    /// Requires [`self.is_clean()`](RawEGraph::is_clean)
    ///
    /// # Example
    /// ```
    /// use plat_egg::{raw::*, SymbolLang as S};
    /// use plat_egg::raw::semi_persistent1::UndoLog;
    /// let mut egraph = RawEGraph::<S, (), UndoLog>::default();
    /// let a = egraph.add_uncanonical(S::leaf("a"));
    /// let fa = egraph.add_uncanonical(S::new("f", vec![a]));
    /// let c = egraph.add_uncanonical(S::leaf("c"));
    /// egraph.rebuild();
    /// let old = egraph.clone();
    /// let restore_point = egraph.push1();
    /// let b = egraph.add_uncanonical(S::leaf("b"));
    /// let _fb = egraph.add_uncanonical(S::new("g", vec![b]));
    /// egraph.union(b, a);
    /// egraph.union(b, c);
    /// egraph.rebuild();
    /// egraph.pop1(restore_point);
    /// assert_eq!(format!("{:#?}", egraph.dump_uncanonical()), format!("{:#?}", old.dump_uncanonical()));
    /// assert_eq!(format!("{:#?}", egraph), format!("{:#?}", old));
    /// ```
    pub fn push1(&self) -> PushInfo {
        assert!(self.is_clean());
        let undo = self.undo_log.as_unwrap();
        PushInfo {
            node_count: self.number_of_uncanonical_nodes() as u32,
            union_count: undo.union_log.len() as u32,
            memo_log_count: undo.memo_log.len() as u32,
            pop_parents_count: undo.pop_parents.len() as u32,
            congr_dup_count: undo.congr_dup_log.len() as u32,
        }
    }

    /// Mostly restores the egraph to the state it was it when it called [`push1`](RawEGraph::push1)
    /// to create `info`
    ///
    /// Invalidates all [`PushInfo`]s that were created after `info`
    ///
    /// The `raw_data` fields of the [`RawEClass`]s are not properly restored
    /// Instead, `split` is called to undo each union with a mutable reference to the merged data, and the two ids
    /// that were merged to create the data for the eclass of the second `id` (the eclass of the first `id` will
    /// be what's left of the merged data after the call)
    pub fn raw_pop1(&mut self, info: PushInfo, split: impl FnMut(&mut D, Id, Id) -> D) {
        let PushInfo {
            node_count,
            union_count,
            memo_log_count,
            pop_parents_count,
            congr_dup_count,
        } = info;
        self.pending.clear();
        for id in self
            .undo_log
            .as_mut_unwrap()
            .congr_dup_log
            .drain(congr_dup_count as usize..)
        {
            self.congruence_duplicates.remove(id);
        }
        self.pop_memo1(memo_log_count as usize);
        self.pop_unions1(
            union_count as usize,
            pop_parents_count as usize,
            node_count as usize,
            split,
        );
        self.pop_nodes1(node_count as usize);
    }

    fn pop_memo1(&mut self, old_count: usize) {
        assert!(self.memo.len() >= old_count);
        let memo_log = &mut self.undo_log.as_mut_unwrap().memo_log;
        let len = memo_log.len();
        for (hash, idx) in memo_log.drain(old_count..).zip(old_count..len).rev() {
            self.residual.memo.remove_nth(hash, idx);
        }
    }

    fn pop_unions1(
        &mut self,
        old_count: usize,
        pop_parents_count: usize,
        node_count: usize,
        mut split: impl FnMut(&mut D, Id, Id) -> D,
    ) {
        let undo = self.undo_log.as_mut_unwrap();
        let mut node_count_rem = (self.residual.unionfind.size() - node_count) as u32;
        assert!(self.residual.number_of_uncanonical_nodes() >= old_count);
        for info in undo.union_log.drain(old_count..).rev() {
            for _ in 0..info.parents_added_after {
                let id = undo.pop_parents.pop().unwrap();
                self.classes[self.residual.unionfind.find_canon(id).idx()]
                    .parents
                    .pop();
            }
            self.classes
                .truncate(self.classes.len() - info.nodes_added_after as usize);
            node_count_rem -= info.nodes_added_after;
            let old_id = info.old_id;
            let new_id = self.residual.unionfind.parent_id(old_id);
            debug_assert_ne!(new_id, old_id);
            debug_assert_eq!(self.residual.unionfind.find(new_id), new_id);
            let new_cid = self.residual.unionfind.find_canon(new_id);
            self.residual.unionfind.reset_root(old_id, info.old_cid);
            let new_class = &mut self.classes[new_cid.idx()];
            debug_assert_eq!(new_class.id, new_id);
            let cut = new_class.parents.len() - info.old_parents.len();
            debug_assert_eq!(&new_class.parents[cut..], &info.old_parents);
            new_class.parents.truncate(cut);
            let old_data = split(&mut new_class.raw_data, new_id, old_id);
            let mut class = RawEClass {
                id: old_id,
                raw_data: old_data,
                parents: info.old_parents,
            };
            if info.old_cid.idx() != self.classes.len() {
                mem::swap(&mut self.classes[info.old_cid.idx()], &mut class);
                self.residual
                    .unionfind
                    .reset_root(class.id, ClassId::from(self.classes.len()))
            }
            self.classes.push(class)
        }
        let parent_rem = undo.pop_parents.len() - pop_parents_count;
        for _ in 0..parent_rem {
            let id = undo.pop_parents.pop().unwrap();
            self.classes[self.residual.unionfind.find_canon(id).idx()]
                .parents
                .pop();
        }
        self.classes
            .truncate(self.classes.len() - node_count_rem as usize);
        let log = undo.union_log.last_mut().unwrap();
        log.parents_added_after -= parent_rem as u32;
        log.nodes_added_after -= node_count_rem;
    }

    fn pop_nodes1(&mut self, old_count: usize) {
        assert!(self.number_of_uncanonical_nodes() >= old_count);
        self.residual.unionfind.parents.truncate(old_count);
        self.residual.nodes.truncate(old_count);
    }
}

impl<L: Language, U: AsUnwrap<UndoLog> + UndoLogT<L, ()>> RawEGraph<L, (), U> {
    /// Simplified version of [`raw_pop1`](RawEGraph::raw_pop1) for egraphs without eclass data
    pub fn pop1(&mut self, info: PushInfo) {
        self.raw_pop1(info, |_, _, _| ())
    }
}
