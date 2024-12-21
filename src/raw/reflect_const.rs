#![allow(missing_docs)]
use core::fmt::Debug;

#[derive(Copy, Clone, Eq, PartialEq, Default, Debug)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
pub struct PathCompress<const B: bool>;

impl<const B: bool> PathCompressT for PathCompress<B> {
    const PATH_COMPRESS: bool = B;
}

pub trait PathCompressT: Copy + Clone + Eq + PartialEq + Default + Debug {
    const PATH_COMPRESS: bool;
}
