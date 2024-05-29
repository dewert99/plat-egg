use no_std_compat::prelude::v1::*;
#[cfg(feature = "serde-1")]
use serde::{Deserialize, Serialize};
use std::fmt::{Debug, Formatter};
use std::mem;

/// A mapping from indexes to values where all indexes initially map to [`Default::default`]
#[derive(Debug, Default, Clone)]
#[cfg_attr(feature = "serde-1", derive(Serialize, Deserialize))]
pub struct DefaultVec<T>(Box<[T]>);

impl<T: Default> DefaultVec<T> {
    #[cold]
    #[inline(never)]
    fn reserve(&mut self, i: usize) {
        let mut v = mem::take(&mut self.0).into_vec();
        v.reserve(i + 1 - v.len());
        v.resize_with(v.capacity(), T::default);
        self.0 = v.into_boxed_slice();
        assert!(i < self.0.len())
    }

    /// Returns mutable access to the element at `i`
    pub fn get_mut(&mut self, i: usize) -> &mut T {
        if i < self.0.len() {
            &mut self.0[i]
        } else {
            self.reserve(i);
            &mut self.0[i]
        }
    }

    /// Returns shared access to the element at `i`
    pub fn get(&self, i: usize) -> T
    where
        T: Copy,
    {
        self.0.get(i).copied().unwrap_or_default()
    }

    /// Resets all elements to there default value
    pub fn clear(&mut self) {
        self.0.fill_with(Default::default)
    }
}

type Elt = u32;

#[derive(Default, Clone)]
#[cfg_attr(feature = "serde-1", derive(Serialize, Deserialize))]
pub struct BitSet(DefaultVec<Elt>);

#[inline]
fn split(x: usize) -> (usize, Elt) {
    let offset = (x % Elt::BITS as usize) as u32;
    (x / Elt::BITS as usize, 1 << offset)
}

/// Set of indexes
impl BitSet {
    /// Adds an element to the set
    pub fn insert(&mut self, x: usize) -> bool {
        let (chunk_idx, mask) = split(x);
        let chunk = self.0.get_mut(chunk_idx);
        let res = (*chunk & mask) != 0;
        *chunk |= mask;
        res
    }

    /// Removes an element form the set
    pub fn remove(&mut self, x: usize) -> bool {
        let (chunk_idx, mask) = split(x);
        let chunk = self.0.get_mut(chunk_idx);
        let res = (*chunk & mask) != 0;
        *chunk &= !mask;
        res
    }

    /// Checks if the set contains an element
    pub fn contains(&self, x: usize) -> bool {
        let (chunk_idx, mask) = split(x);
        let chunk = self.0.get(chunk_idx);
        (chunk & mask) != 0
    }

    /// Same as contains but already reserves space for `x`
    pub fn contains_mut(&mut self, x: usize) -> bool {
        let (chunk_idx, mask) = split(x);
        let chunk = *self.0.get_mut(chunk_idx);
        (chunk & mask) != 0
    }

    /// Removes all elements from the set
    pub fn clear(&mut self) {
        self.0.clear()
    }

    /// Iterate over all elements in the set
    /// Run time is proportional to the largest element that has ever been in the set

    pub fn iter(&self) -> impl Iterator<Item = usize> + '_ {
        let max = self.0 .0.len() * (Elt::BITS as usize);
        (0..max).filter(|x| self.contains(*x))
    }
}

impl Debug for BitSet {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.debug_set().entries(self.iter()).finish()
    }
}
