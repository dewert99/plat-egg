pub(crate) use hashmap::*;

pub(crate) type BuildHasher = std::hash::BuildHasherDefault<rustc_hash::FxHasher>;

#[cfg(feature = "deterministic")]
mod hashmap {
    use super::BuildHasher;
    pub(crate) type HashMap<K, V> = indexmap::IndexMap<K, V, BuildHasher>;
    pub(crate) type HashSet<K> = indexmap::IndexSet<K, BuildHasher>;
}
#[cfg(not(feature = "deterministic"))]
mod hashmap {
    use super::BuildHasher;
    pub(crate) type HashMap<K, V> = hashbrown::HashMap<K, V, BuildHasher>;
    pub(crate) type HashSet<K> = hashbrown::HashSet<K, BuildHasher>;
}
