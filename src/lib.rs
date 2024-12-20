#![cfg_attr(docsrs, feature(doc_cfg))]
#![warn(missing_docs)]
/*!

`egg` (**e**-**g**raphs **g**ood) is a e-graph library optimized for equality saturation.

This is the API documentation.

The [tutorial](tutorials) is a good starting point if you're new to
e-graphs, equality saturation, or Rust.

The [tests](https://github.com/egraphs-good/egg/tree/main/tests)
on Github provide some more elaborate examples.

There is also a [paper](https://arxiv.org/abs/2004.03082)
describing `egg` and some of its technical novelties.

## Logging

Many parts of `egg` dump useful logging info using the [`log`](https://docs.rs/log/) crate.
The easiest way to see this info is to use the [`env_logger`](https://docs.rs/env_logger/)
crate in your binary or test.
The simplest way to enable `env_logger` is to put the following line near the top of your `main`:
`env_logger::init();`.
Then, set the environment variable `RUST_LOG=egg=info`, or use `warn` or `debug` instead of info
for less or more logging.

*/
#![doc = "## Simple Example\n```"]
#![doc = include_str!("../tests/simple.rs")]
#![doc = "\n```"]

extern crate core;
extern crate no_std_compat as std;

#[cfg(feature = "egg_compat")]
mod macros;

#[cfg(feature = "egg_compat")]
#[doc(hidden)]
pub mod test;

#[cfg(feature = "egg_compat")]
pub mod tutorials;

mod dot;
#[cfg(feature = "egg_compat")]
mod eclass;
#[cfg(feature = "egg_compat")]
mod egraph;
#[cfg(feature = "egg_compat")]
mod explain;

#[cfg(feature = "egg_compat")]
mod extract;

#[cfg(feature = "egg_compat")]
mod language;

#[cfg(all(feature = "lp", feature = "egg_compat"))]
mod lp_extract;

#[cfg(feature = "egg_compat")]
mod machine;

#[cfg(feature = "egg_compat")]
mod multipattern;

#[cfg(feature = "egg_compat")]
mod pattern;

const U31_MAX: u32 = (1 << (u32::BITS - 1)) - 1;

/// Lower level egraph API
pub mod raw;

#[cfg(feature = "egg_compat")]
mod rewrite;

#[cfg(feature = "egg_compat")]
mod run;

#[cfg(feature = "egg_compat")]
mod subst;

#[cfg(feature = "egg_compat")]
mod util;

/// A key to identify [`EClass`]es within an
/// [`EGraph`].
#[derive(Clone, Copy, Default, Ord, PartialOrd, Eq, PartialEq, Hash)]
#[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde-1", serde(transparent))]
pub struct Id(u32);

impl Id {
    /// Dummy id value
    pub const MAX: Id = Id(U31_MAX);
}

impl From<usize> for Id {
    fn from(n: usize) -> Id {
        assert!(n <= U31_MAX as usize);
        Id(n as u32)
    }
}

impl From<Id> for usize {
    fn from(id: Id) -> usize {
        id.0 as usize
    }
}

impl std::fmt::Debug for Id {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl std::fmt::Display for Id {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

mod cid {
    /// Index into the classes field of an [`EGraph`]
    #[derive(Hash, Clone, Copy, Eq, PartialEq)]
    #[cfg_attr(feature = "serde-1", derive(serde::Serialize, serde::Deserialize))]
    #[cfg_attr(feature = "serde-1", serde(transparent))]
    pub struct ClassId(pub(crate) u32);

    impl std::fmt::Debug for ClassId {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{}", self.0)
        }
    }

    impl From<usize> for ClassId {
        fn from(n: usize) -> ClassId {
            assert!(n <= crate::U31_MAX as usize);
            ClassId(n as u32)
        }
    }

    impl ClassId {
        pub(crate) fn idx(self) -> usize {
            self.0 as usize
        }
    }
}

use cid::ClassId;

#[cfg(feature = "egg_compat")]
pub(crate) use {explain::Explain, raw::UnionFind};

#[cfg(feature = "egg_compat")]
pub use {
    dot::Dot,
    eclass::{EClass, EClassData},
    egraph::EGraph,
    explain::{
        Explanation, FlatExplanation, FlatTerm, Justification, TreeExplanation, TreeTerm,
        UnionEqualities,
    },
    extract::*,
    language::*,
    multipattern::*,
    pattern::{ENodeOrVar, Pattern, PatternAst, SearchMatches},
    rewrite::{Applier, Condition, ConditionEqual, ConditionalApplier, Rewrite, Searcher},
    run::*,
    subst::{Subst, Var},
    util::*,
};

#[cfg(feature = "lp")]
pub use lp_extract::*;

#[cfg(test)]
fn init_logger() {
    let _ = env_logger::builder().is_test(true).try_init();
}
