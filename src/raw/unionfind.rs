use crate::raw::reflect_const::{PathCompress, PathCompressT};
use crate::{ClassId, Id, U31_MAX};
use core::marker::PhantomData;
use no_std_compat::prelude::v1::*;
use std::fmt::{Debug, Formatter};

#[derive(Debug, Copy, Clone)]
pub(super) enum UnionFindElt {
    Parent(Id),
    Root(ClassId),
}

/// Compact version of [`UnionFindElt`]
#[derive(Copy, Clone, Eq, PartialEq)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde-1", serde(transparent))]
pub(super) struct RawUnionFindElt(u32);

const RAW_ELT_DATA_MASK: u32 = U31_MAX;
const RAW_ELT_FLAG_MASK: u32 = U31_MAX + 1;

impl From<UnionFindElt> for RawUnionFindElt {
    fn from(elt: UnionFindElt) -> Self {
        match elt {
            UnionFindElt::Parent(Id(x)) => {
                debug_assert_eq!(x, x & !RAW_ELT_FLAG_MASK);
                // all Id's must be 31 bits
                RawUnionFindElt(x)
            }
            UnionFindElt::Root(ClassId(x)) => RawUnionFindElt(x | RAW_ELT_FLAG_MASK),
        }
    }
}

impl RawUnionFindElt {
    pub(super) fn open(self) -> UnionFindElt {
        let data = self.0 & RAW_ELT_DATA_MASK;
        if self.0 & RAW_ELT_FLAG_MASK == 0 {
            UnionFindElt::Parent(Id(data))
        } else {
            UnionFindElt::Root(ClassId(data))
        }
    }
}

impl Debug for RawUnionFindElt {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        self.open().fmt(f)
    }
}

#[derive(Debug, Clone, Default)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
/// Data structure that stores disjoint sets of `Id`s each with a representative
pub struct UnionFind<P: PathCompressT = PathCompress<true>> {
    pub(super) parents: Vec<RawUnionFindElt>,
    phantom: PhantomData<P>,
}

impl<P: PathCompressT> UnionFind<P> {
    /// Creates a singleton set and returns its representative
    pub fn make_set(&mut self) -> Id {
        self.make_set_with_id(0.into())
    }

    pub(super) fn make_set_with_id(&mut self, class_id: ClassId) -> Id {
        let id = Id::from(self.parents.len());
        self.parents.push(UnionFindElt::Root(class_id).into());
        id
    }

    /// Creates a fresh non-canonical id with the parent `parent`
    pub fn make_child_set(&mut self, parent: Id) -> Id {
        let id = Id::from(self.parents.len());
        self.parents.push(UnionFindElt::Parent(parent).into());
        id
    }

    /// Returns the number of ids in all the sets
    pub fn size(&self) -> usize {
        self.parents.len()
    }

    pub(super) fn parent(&self, query: Id) -> UnionFindElt {
        self.parents[usize::from(query)].open()
    }

    pub(super) fn parent_id(&self, query: Id) -> Id {
        match self.parent(query) {
            UnionFindElt::Parent(id) => id,
            UnionFindElt::Root(_) => query,
        }
    }

    fn set_parent(&mut self, query: Id, parent: Id) {
        debug_assert_ne!(query, parent);
        self.parents[usize::from(query)] = UnionFindElt::Parent(parent).into()
    }

    pub(super) fn reset_root(&mut self, query: Id, class_id: ClassId) {
        self.parents[usize::from(query)] = UnionFindElt::Root(class_id).into()
    }

    pub(super) fn find_full(&self, mut current: Id) -> (Id, ClassId) {
        loop {
            match self.parent(current) {
                UnionFindElt::Parent(parent) => {
                    debug_assert_ne!(current, parent);
                    current = parent
                }
                UnionFindElt::Root(cid) => return (current, cid),
            }
        }
    }

    pub(super) fn find_canon(&self, id: Id) -> ClassId {
        match self.parent(id) {
            UnionFindElt::Parent(_) => panic!("Non-canonical id {}", id),
            UnionFindElt::Root(c) => c,
        }
    }

    /// Returns the representative of the set `current` belongs to
    pub fn find(&self, current: Id) -> Id {
        self.find_full(current).0
    }

    pub(super) fn find_mut_full(&mut self, mut current: Id) -> (Id, ClassId) {
        if !P::PATH_COMPRESS {
            return self.find_full(current);
        }
        let canon = self.find(current);
        loop {
            match self.parent(current) {
                UnionFindElt::Parent(parent) => {
                    self.set_parent(current, canon);
                    current = parent;
                }
                UnionFindElt::Root(cid) => {
                    debug_assert!(current == canon);
                    return (current, cid);
                }
            }
        }
    }

    /// Equivalent to [`find`](UnionFind::find) but preforms path-compression to optimize further calls
    pub fn find_mut(&mut self, current: Id) -> Id {
        self.find_mut_full(current).0
    }

    /// Given two representative ids, unions the two eclasses making root1 the representative.
    pub fn union(&mut self, root1: Id, root2: Id) -> Id {
        self.set_parent(root2, root1);
        root1
    }

    /// Resets the union find
    pub fn clear(&mut self) {
        self.parents.clear()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn union_find() {
        let n = 10;
        let id = Id::from;

        let mut uf: UnionFind = UnionFind::default();
        for i in 0..n {
            uf.make_set_with_id(i.into());
        }

        let root = |x: usize| RawUnionFindElt::from(UnionFindElt::Root(x.into()));
        let parent = |x: usize| RawUnionFindElt::from(UnionFindElt::Parent(x.into()));

        // test the initial condition of everyone in their own set
        assert_eq!(uf.parents, (0..n).into_iter().map(root).collect::<Vec<_>>());

        // build up one set
        uf.union(id(0), id(1));
        uf.union(id(0), id(2));
        uf.union(id(0), id(3));

        // build up another set
        uf.union(id(6), id(7));
        uf.union(id(6), id(8));
        uf.union(id(6), id(9));

        // this should compress all paths
        for i in 0..n {
            uf.find_mut(id(i));
        }

        // indexes:         0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        let expected = vec![
            root(0),
            parent(0),
            parent(0),
            parent(0),
            root(4),
            root(5),
            root(6),
            parent(6),
            parent(6),
            parent(6),
        ];
        assert_eq!(uf.parents, expected);
    }
}
