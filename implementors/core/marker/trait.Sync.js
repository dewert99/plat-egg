(function() {var implementors = {};
implementors["plat_egg"] = [{"text":"impl&lt;'a, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Dot.html\" title=\"struct plat_egg::Dot\">Dot</a>&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::dot::Dot"]},{"text":"impl&lt;L, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.EClassData.html\" title=\"struct plat_egg::EClassData\">EClassData</a>&lt;L, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::eclass::EClassData"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.EGraph.html\" title=\"struct plat_egg::EGraph\">EGraph</a>&lt;L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt;&gt;::<a class=\"associatedtype\" href=\"plat_egg/trait.Analysis.html#associatedtype.Data\" title=\"type plat_egg::Analysis::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;L as <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt;::<a class=\"associatedtype\" href=\"plat_egg/raw/trait.Language.html#associatedtype.Discriminant\" title=\"type plat_egg::raw::Language::Discriminant\">Discriminant</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::egraph::EGraph"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"plat_egg/enum.Justification.html\" title=\"enum plat_egg::Justification\">Justification</a>","synthetic":true,"types":["plat_egg::explain::Justification"]},{"text":"impl&lt;L&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Explanation.html\" title=\"struct plat_egg::Explanation\">Explanation</a>&lt;L&gt;","synthetic":true,"types":["plat_egg::explain::Explanation"]},{"text":"impl&lt;L&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.TreeTerm.html\" title=\"struct plat_egg::TreeTerm\">TreeTerm</a>&lt;L&gt;","synthetic":true,"types":["plat_egg::explain::TreeTerm"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.FlatTerm.html\" title=\"struct plat_egg::FlatTerm\">FlatTerm</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::explain::FlatTerm"]},{"text":"impl&lt;'a, CF, L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Extractor.html\" title=\"struct plat_egg::Extractor\">Extractor</a>&lt;'a, CF, L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CF: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;CF as <a class=\"trait\" href=\"plat_egg/trait.CostFunction.html\" title=\"trait plat_egg::CostFunction\">CostFunction</a>&lt;L&gt;&gt;::<a class=\"associatedtype\" href=\"plat_egg/trait.CostFunction.html#associatedtype.Cost\" title=\"type plat_egg::CostFunction::Cost\">Cost</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt;&gt;::<a class=\"associatedtype\" href=\"plat_egg/trait.Analysis.html#associatedtype.Data\" title=\"type plat_egg::Analysis::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;L as <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt;::<a class=\"associatedtype\" href=\"plat_egg/raw/trait.Language.html#associatedtype.Discriminant\" title=\"type plat_egg::raw::Language::Discriminant\">Discriminant</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::extract::Extractor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.AstSize.html\" title=\"struct plat_egg::AstSize\">AstSize</a>","synthetic":true,"types":["plat_egg::extract::AstSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.AstDepth.html\" title=\"struct plat_egg::AstDepth\">AstDepth</a>","synthetic":true,"types":["plat_egg::extract::AstDepth"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.FromOpError.html\" title=\"struct plat_egg::FromOpError\">FromOpError</a>","synthetic":true,"types":["plat_egg::language::FromOpError"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"plat_egg/enum.RecExprParseError.html\" title=\"enum plat_egg::RecExprParseError\">RecExprParseError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::language::RecExprParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.DidMerge.html\" title=\"struct plat_egg::DidMerge\">DidMerge</a>","synthetic":true,"types":["plat_egg::language::DidMerge"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.SymbolLang.html\" title=\"struct plat_egg::SymbolLang\">SymbolLang</a>","synthetic":true,"types":["plat_egg::language::SymbolLang"]},{"text":"impl&lt;'a, L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.LpExtractor.html\" title=\"struct plat_egg::LpExtractor\">LpExtractor</a>&lt;'a, L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt;&gt;::<a class=\"associatedtype\" href=\"plat_egg/trait.Analysis.html#associatedtype.Data\" title=\"type plat_egg::Analysis::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;L as <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt;::<a class=\"associatedtype\" href=\"plat_egg/raw/trait.Language.html#associatedtype.Discriminant\" title=\"type plat_egg::raw::Language::Discriminant\">Discriminant</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::lp_extract::LpExtractor"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.MultiPattern.html\" title=\"struct plat_egg::MultiPattern\">MultiPattern</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::multipattern::MultiPattern"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"plat_egg/enum.MultiPatternParseError.html\" title=\"enum plat_egg::MultiPatternParseError\">MultiPatternParseError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::multipattern::MultiPatternParseError"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Pattern.html\" title=\"struct plat_egg::Pattern\">Pattern</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::pattern::Pattern"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"plat_egg/enum.ENodeOrVar.html\" title=\"enum plat_egg::ENodeOrVar\">ENodeOrVar</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::pattern::ENodeOrVar"]},{"text":"impl&lt;'a, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.SearchMatches.html\" title=\"struct plat_egg::SearchMatches\">SearchMatches</a>&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::pattern::SearchMatches"]},{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RawEClass.html\" title=\"struct plat_egg::raw::RawEClass\">RawEClass</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::raw::eclass::RawEClass"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.EGraphResidual.html\" title=\"struct plat_egg::raw::EGraphResidual\">EGraphResidual</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::raw::egraph::EGraphResidual"]},{"text":"impl&lt;L, D, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RawEGraph.html\" title=\"struct plat_egg::raw::RawEGraph\">RawEGraph</a>&lt;L, D, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::raw::egraph::RawEGraph"]},{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.UnionInfo.html\" title=\"struct plat_egg::raw::UnionInfo\">UnionInfo</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::raw::egraph::UnionInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent1/struct.PushInfo.html\" title=\"struct plat_egg::raw::semi_persistent1::PushInfo\">PushInfo</a>","synthetic":true,"types":["plat_egg::raw::semi_persistent1::PushInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent1/struct.UndoLog.html\" title=\"struct plat_egg::raw::semi_persistent1::UndoLog\">UndoLog</a>","synthetic":true,"types":["plat_egg::raw::semi_persistent1::UndoLog"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RecExpr.html\" title=\"struct plat_egg::raw::RecExpr\">RecExpr</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::raw::language::RecExpr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent2/struct.PushInfo.html\" title=\"struct plat_egg::raw::semi_persistent2::PushInfo\">PushInfo</a>","synthetic":true,"types":["plat_egg::raw::semi_persistent2::PushInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent2/struct.UndoLog.html\" title=\"struct plat_egg::raw::semi_persistent2::UndoLog\">UndoLog</a>","synthetic":true,"types":["plat_egg::raw::semi_persistent2::UndoLog"]},{"text":"impl&lt;'a, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent2/struct.UndoCtx.html\" title=\"struct plat_egg::raw::semi_persistent2::UndoCtx\">UndoCtx</a>&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::raw::semi_persistent2::UndoCtx"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.UnionFind.html\" title=\"struct plat_egg::raw::UnionFind\">UnionFind</a>","synthetic":true,"types":["plat_egg::raw::unionfind::UnionFind"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Rewrite.html\" title=\"struct plat_egg::Rewrite\">Rewrite</a>&lt;L, N&gt;","synthetic":true,"types":["plat_egg::rewrite::Rewrite"]},{"text":"impl&lt;C, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.ConditionalApplier.html\" title=\"struct plat_egg::ConditionalApplier\">ConditionalApplier</a>&lt;C, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::rewrite::ConditionalApplier"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.ConditionEqual.html\" title=\"struct plat_egg::ConditionEqual\">ConditionEqual</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::rewrite::ConditionEqual"]},{"text":"impl&lt;L, N, IterData&nbsp;=&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.unit.html\">()</a>&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Runner.html\" title=\"struct plat_egg::Runner\">Runner</a>&lt;L, N, IterData&gt;","synthetic":true,"types":["plat_egg::run::Runner"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"plat_egg/enum.StopReason.html\" title=\"enum plat_egg::StopReason\">StopReason</a>","synthetic":true,"types":["plat_egg::run::StopReason"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Report.html\" title=\"struct plat_egg::Report\">Report</a>","synthetic":true,"types":["plat_egg::run::Report"]},{"text":"impl&lt;IterData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Iteration.html\" title=\"struct plat_egg::Iteration\">Iteration</a>&lt;IterData&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IterData: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["plat_egg::run::Iteration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.SimpleScheduler.html\" title=\"struct plat_egg::SimpleScheduler\">SimpleScheduler</a>","synthetic":true,"types":["plat_egg::run::SimpleScheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.BackoffScheduler.html\" title=\"struct plat_egg::BackoffScheduler\">BackoffScheduler</a>","synthetic":true,"types":["plat_egg::run::BackoffScheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Var.html\" title=\"struct plat_egg::Var\">Var</a>","synthetic":true,"types":["plat_egg::subst::Var"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Subst.html\" title=\"struct plat_egg::Subst\">Subst</a>","synthetic":true,"types":["plat_egg::subst::Subst"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"plat_egg/struct.Id.html\" title=\"struct plat_egg::Id\">Id</a>","synthetic":true,"types":["plat_egg::Id"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()