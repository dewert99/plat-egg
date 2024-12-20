use crate::raw::reflect_const::{PathCompress, PathCompressT};
use crate::raw::{Language, RawEGraph};
use crate::{ClassId, Id};
use no_std_compat::prelude::v1::*;
use std::fmt::Debug;

pub trait Sealed {}
impl Sealed for () {}
impl<U: Sealed> Sealed for Option<U> {}

/// A sealed trait for types that can be used for `push`/`pop` APIs
/// It is trivially implemented for `()`
pub trait UndoLogPC {
    /// When this type of undo log allows for path compression
    type AllowPathCompress: PathCompressT;
}

/// A sealed trait for types that can be used for `push`/`pop` APIs
/// It is trivially implemented for `()`
pub trait UndoLogT<L, D>: Default + Debug + Sealed + UndoLogPC {
    #[doc(hidden)]
    fn add_node(&mut self, node: &L, canon_children: &[Id], node_id: Id, cid: ClassId);

    #[doc(hidden)]
    fn union(&mut self, id1: Id, id2: Id, id2_parents: Vec<Id>, old_cid: ClassId);

    #[doc(hidden)]
    fn fix_id(&mut self, fixup_id: Id, cid: ClassId);

    #[doc(hidden)]
    fn insert_memo(&mut self, hash: u64);

    #[doc(hidden)]
    fn add_congruence_duplicate(&mut self, id: Id);

    #[doc(hidden)]
    fn clear(&mut self);

    #[doc(hidden)]
    fn is_enabled(&self) -> bool;
}

impl UndoLogPC for () {
    type AllowPathCompress = PathCompress<true>;
}

impl<L, D> UndoLogT<L, D> for () {
    #[inline]
    fn add_node(&mut self, _: &L, _: &[Id], _: Id, _: ClassId) {}

    #[inline]
    fn union(&mut self, _: Id, _: Id, _: Vec<Id>, _: ClassId) {}

    fn fix_id(&mut self, _: Id, _: ClassId) {}

    #[inline]
    fn insert_memo(&mut self, _: u64) {}

    fn add_congruence_duplicate(&mut self, _: Id) {}

    #[inline]
    fn clear(&mut self) {}

    fn is_enabled(&self) -> bool {
        false
    }
}

impl<U: UndoLogPC> UndoLogPC for Option<U> {
    type AllowPathCompress = U::AllowPathCompress;
}

impl<L, D, U: UndoLogT<L, D>> UndoLogT<L, D> for Option<U> {
    #[inline]
    fn add_node(&mut self, node: &L, canon_children: &[Id], node_id: Id, cid: ClassId) {
        if let Some(undo) = self {
            undo.add_node(node, canon_children, node_id, cid)
        }
    }

    #[inline]
    fn union(&mut self, id1: Id, id2: Id, id2_parents: Vec<Id>, old_cid: ClassId) {
        if let Some(undo) = self {
            undo.union(id1, id2, id2_parents, old_cid)
        }
    }

    fn fix_id(&mut self, fixup_id: Id, cid: ClassId) {
        if let Some(undo) = self {
            undo.fix_id(fixup_id, cid)
        }
    }

    #[inline]
    fn insert_memo(&mut self, hash: u64) {
        if let Some(undo) = self {
            undo.insert_memo(hash)
        }
    }

    fn add_congruence_duplicate(&mut self, id: Id) {
        if let Some(undo) = self {
            undo.add_congruence_duplicate(id)
        }
    }

    #[inline]
    fn clear(&mut self) {
        if let Some(undo) = self {
            undo.clear()
        }
    }

    #[inline]
    fn is_enabled(&self) -> bool {
        self.as_ref().map(U::is_enabled).unwrap_or(false)
    }
}

/// Trait implemented for `T` and `Option<T>` used to provide bounds for push/pop impls
pub trait AsUnwrap<T> {
    #[doc(hidden)]
    fn as_unwrap(&self) -> &T;

    #[doc(hidden)]
    fn as_mut_unwrap(&mut self) -> &mut T;
}

impl<T> AsUnwrap<T> for T {
    #[inline]
    fn as_unwrap(&self) -> &T {
        self
    }

    #[inline]
    fn as_mut_unwrap(&mut self) -> &mut T {
        self
    }
}
impl<T> AsUnwrap<T> for Option<T> {
    #[inline]
    fn as_unwrap(&self) -> &T {
        self.as_ref().unwrap()
    }

    #[inline]
    fn as_mut_unwrap(&mut self) -> &mut T {
        self.as_mut().unwrap()
    }
}

impl<L: Language, D, U: UndoLogT<L, D>> RawEGraph<L, D, U> {
    /// Change the [`UndoLogT`] being used
    ///
    /// If the new [`UndoLogT`] is enabled then the egraph must be empty
    pub fn set_undo_log(&mut self, undo_log: U) {
        if !self.is_empty() && undo_log.is_enabled() {
            panic!("Need to set undo log enabled before adding any expressions to the egraph.")
        }
        self.undo_log = undo_log
    }

    /// Check if the [`UndoLogT`] being used is enabled
    pub fn has_undo_log(&self) -> bool {
        self.undo_log.is_enabled()
    }
}
