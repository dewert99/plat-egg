window.SIDEBAR_ITEMS = {"enum":[["ENodeOrVar","The language of [`Pattern`]s."],["Justification","A justification for a union, either via a rule or congruence. A direct union with a justification is also stored as a rule."],["MultiPatternParseError","An error raised when parsing a [`MultiPattern`]"],["RecExprParseError","An error type for failures when attempting to parse an s-expression as a [`RecExpr<L>`]."],["StopReason","Error returned by [`Runner`] when it stops."]],"fn":[["merge_max","A utility for implementing [`Analysis::merge`] when the `Data` type has a total ordering. This will take the maximum of the two values."],["merge_min","A utility for implementing [`Analysis::merge`] when the `Data` type has a total ordering. This will take the minimum of the two values."],["merge_option","A utility for implementing [`Analysis::merge`] when the `Data` type is an [`Option`]."]],"macro":[["define_language","A macro to easily create a [`Language`]."],["multi_rewrite","A macro to easily make [`Rewrite`]s using [`MultiPattern`]s."],["rewrite","A macro to easily make [`Rewrite`]s."],["test_fn","Utility to make a test proving expressions equivalent"]],"mod":[["raw","Lower level egraph API"],["tutorials","A Guide-level Explanation of `egg`"]],"struct":[["AstDepth","A simple [`CostFunction`] that counts maximum AST depth."],["AstSize","A simple [`CostFunction`] that counts total AST size."],["BackoffScheduler","A [`RewriteScheduler`] that implements exponentional rule backoff."],["ConditionEqual","A [`Condition`] that checks if two terms are equivalent."],["ConditionalApplier","An [`Applier`] that checks a [`Condition`] before applying."],["DidMerge","Result of [`Analysis::merge`] indicating which of the inputs are different from the merged result."],["Dot","A wrapper for an [`EGraphResidual`] that can output GraphViz for visualization."],["EClassData","The additional data required to turn a [`raw::RawEClass`] into a [`EClass`]"],["EGraph","A data structure to keep track of equalities between expressions."],["Explanation","A data structure representing an explanation that two terms are equivalent."],["Extractor","Extracting a single [`RecExpr`] from an [`EGraph`]."],["FlatTerm","A single term in an flattened explanation. After the first term in a [`FlatExplanation`], each term will be annotated with exactly one `backward_rule` or one `forward_rule`. This can appear in children [`FlatTerm`]s, indicating that the child is being rewritten."],["FromOpError","A generic error for failing to parse an operator. This is the error type used by [`define_language!`] for [`FromOp::Error`], and is a sensible choice when implementing [`FromOp`] manually."],["Id","A key to identify [`EClass`]es within an [`EGraph`]."],["Iteration","Data generated by running a [`Runner`] one iteration."],["LpExtractor","A structure to perform extraction using integer linear programming. This uses the `cbc` solver. You must have it installed on your machine to use this feature. You can install it using:"],["MultiPattern","A set of open expressions bound to variables."],["Pattern","A pattern that can function as either a [`Searcher`] or [`Applier`]."],["RecExpr","A recursive expression from a user-defined [`Language`]."],["Report","A report containing data about an entire [`Runner`] run."],["Rewrite","A rewrite that searches for the lefthand side and applies the righthand side."],["Runner","Faciliates running rewrites over an [`EGraph`]."],["SearchMatches","The result of searching a [`Searcher`] over one eclass."],["SimpleScheduler","A very simple [`RewriteScheduler`] that runs every rewrite every time."],["Subst","A substitution mapping [`Var`]s to eclass [`Id`]s."],["Symbol","An interned string."],["SymbolLang","A simple language used for testing."],["TreeTerm","An explanation for a term and its equivalent children. Each child is a proof transforming the initial child into the final child term. The initial term is given by taking each first sub-term in each `child_proofs` recursively. The final term is given by all of the final terms in each `child_proofs`."],["Var","A variable for use in [`Pattern`]s or [`Subst`]s."]],"trait":[["Analysis","Arbitrary data associated with an [`EClass`]."],["Applier","The righthand side of a [`Rewrite`]."],["Condition","A condition to check in a [`ConditionalApplier`]."],["CostFunction","A cost function that can be used by an [`Extractor`]."],["FromOp","A trait for parsing e-nodes. This is implemented automatically by [`define_language!`]."],["IterationData","Custom data to inject into the [`Iteration`]s recorded by a [`Runner`]"],["Language","Trait that defines a Language whose terms will be in the [`EGraph`]."],["LanguageChildren","A marker that defines acceptable children types for [`define_language!`]."],["LpCostFunction","A cost function to be used by an [`LpExtractor`]."],["RewriteScheduler","A way to customize how a [`Runner`] runs [`Rewrite`]s."],["Searcher","The lefthand side of a [`Rewrite`]."]],"type":[["EClass","An equivalence class of enodes"],["FlatExplanation","FlatExplanation are the simpler, expanded representation showing one term being rewritten to another. Each step contains a full `FlatTerm`. Each flat term is connected to the previous by exactly one rewrite."],["PatternAst","A [`RecExpr`] that represents a [`Pattern`]."],["TreeExplanation","Explanation trees are the compact representation showing how one term can be rewritten to another."],["UnionEqualities","A vector of equalities based on enode ids. Each entry represents two enode ids that are equal and why."]]};