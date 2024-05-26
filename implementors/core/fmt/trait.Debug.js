(function() {var implementors = {};
implementors["plat_egg"] = [{"text":"impl&lt;'a, L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Dot.html\" title=\"struct plat_egg::Dot\">Dot</a>&lt;'a, L&gt;","synthetic":false,"types":["plat_egg::dot::Dot"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>, D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.EClassData.html\" title=\"struct plat_egg::EClassData\">EClassData</a>&lt;L, D&gt;","synthetic":false,"types":["plat_egg::eclass::EClassData"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.EGraph.html\" title=\"struct plat_egg::EGraph\">EGraph</a>&lt;L, N&gt;","synthetic":false,"types":["plat_egg::egraph::EGraph"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"plat_egg/enum.Justification.html\" title=\"enum plat_egg::Justification\">Justification</a>","synthetic":false,"types":["plat_egg::explain::Justification"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.TreeTerm.html\" title=\"struct plat_egg::TreeTerm\">TreeTerm</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::explain::TreeTerm"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.FlatTerm.html\" title=\"struct plat_egg::FlatTerm\">FlatTerm</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::explain::FlatTerm"]},{"text":"impl&lt;'a, CF:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"plat_egg/trait.CostFunction.html\" title=\"trait plat_egg::CostFunction\">CostFunction</a>&lt;L&gt;, L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Extractor.html\" title=\"struct plat_egg::Extractor\">Extractor</a>&lt;'a, CF, L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CF::<a class=\"associatedtype\" href=\"plat_egg/trait.CostFunction.html#associatedtype.Cost\" title=\"type plat_egg::CostFunction::Cost\">Cost</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["plat_egg::extract::Extractor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.AstSize.html\" title=\"struct plat_egg::AstSize\">AstSize</a>","synthetic":false,"types":["plat_egg::extract::AstSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.AstDepth.html\" title=\"struct plat_egg::AstDepth\">AstDepth</a>","synthetic":false,"types":["plat_egg::extract::AstDepth"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.FromOpError.html\" title=\"struct plat_egg::FromOpError\">FromOpError</a>","synthetic":false,"types":["plat_egg::language::FromOpError"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"plat_egg/enum.RecExprParseError.html\" title=\"enum plat_egg::RecExprParseError\">RecExprParseError</a>&lt;E&gt;","synthetic":false,"types":["plat_egg::language::RecExprParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.SymbolLang.html\" title=\"struct plat_egg::SymbolLang\">SymbolLang</a>","synthetic":false,"types":["plat_egg::language::SymbolLang"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.MultiPattern.html\" title=\"struct plat_egg::MultiPattern\">MultiPattern</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::multipattern::MultiPattern"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"plat_egg/enum.MultiPatternParseError.html\" title=\"enum plat_egg::MultiPatternParseError\">MultiPatternParseError</a>&lt;E&gt;","synthetic":false,"types":["plat_egg::multipattern::MultiPatternParseError"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Pattern.html\" title=\"struct plat_egg::Pattern\">Pattern</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::pattern::Pattern"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"plat_egg/enum.ENodeOrVar.html\" title=\"enum plat_egg::ENodeOrVar\">ENodeOrVar</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::pattern::ENodeOrVar"]},{"text":"impl&lt;'a, L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.SearchMatches.html\" title=\"struct plat_egg::SearchMatches\">SearchMatches</a>&lt;'a, L&gt;","synthetic":false,"types":["plat_egg::pattern::SearchMatches"]},{"text":"impl&lt;D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RawEClass.html\" title=\"struct plat_egg::raw::RawEClass\">RawEClass</a>&lt;D&gt;","synthetic":false,"types":["plat_egg::raw::eclass::RawEClass"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.EGraphResidual.html\" title=\"struct plat_egg::raw::EGraphResidual\">EGraphResidual</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::raw::egraph::EGraphResidual"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>, D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RawEGraph.html\" title=\"struct plat_egg::raw::RawEGraph\">RawEGraph</a>&lt;L, D, U&gt;","synthetic":false,"types":["plat_egg::raw::egraph::RawEGraph"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent1/struct.PushInfo.html\" title=\"struct plat_egg::raw::semi_persistent1::PushInfo\">PushInfo</a>","synthetic":false,"types":["plat_egg::raw::semi_persistent1::PushInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent1/struct.UndoLog.html\" title=\"struct plat_egg::raw::semi_persistent1::UndoLog\">UndoLog</a>","synthetic":false,"types":["plat_egg::raw::semi_persistent1::UndoLog"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RecExpr.html\" title=\"struct plat_egg::raw::RecExpr\">RecExpr</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::raw::language::RecExpr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent2/struct.PushInfo.html\" title=\"struct plat_egg::raw::semi_persistent2::PushInfo\">PushInfo</a>","synthetic":false,"types":["plat_egg::raw::semi_persistent2::PushInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/semi_persistent2/struct.UndoLog.html\" title=\"struct plat_egg::raw::semi_persistent2::UndoLog\">UndoLog</a>","synthetic":false,"types":["plat_egg::raw::semi_persistent2::UndoLog"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.UnionFind.html\" title=\"struct plat_egg::raw::UnionFind\">UnionFind</a>","synthetic":false,"types":["plat_egg::raw::unionfind::UnionFind"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Rewrite.html\" title=\"struct plat_egg::Rewrite\">Rewrite</a>&lt;L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt; + 'static,&nbsp;</span>","synthetic":false,"types":["plat_egg::rewrite::Rewrite"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.ConditionalApplier.html\" title=\"struct plat_egg::ConditionalApplier\">ConditionalApplier</a>&lt;C, A&gt;","synthetic":false,"types":["plat_egg::rewrite::ConditionalApplier"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.ConditionEqual.html\" title=\"struct plat_egg::ConditionEqual\">ConditionEqual</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::rewrite::ConditionEqual"]},{"text":"impl&lt;L, N, IterData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Runner.html\" title=\"struct plat_egg::Runner\">Runner</a>&lt;L, N, IterData&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"plat_egg/trait.Analysis.html\" title=\"trait plat_egg::Analysis\">Analysis</a>&lt;L&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;IterData: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["plat_egg::run::Runner"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"plat_egg/enum.StopReason.html\" title=\"enum plat_egg::StopReason\">StopReason</a>","synthetic":false,"types":["plat_egg::run::StopReason"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Report.html\" title=\"struct plat_egg::Report\">Report</a>","synthetic":false,"types":["plat_egg::run::Report"]},{"text":"impl&lt;IterData:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Iteration.html\" title=\"struct plat_egg::Iteration\">Iteration</a>&lt;IterData&gt;","synthetic":false,"types":["plat_egg::run::Iteration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.SimpleScheduler.html\" title=\"struct plat_egg::SimpleScheduler\">SimpleScheduler</a>","synthetic":false,"types":["plat_egg::run::SimpleScheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.BackoffScheduler.html\" title=\"struct plat_egg::BackoffScheduler\">BackoffScheduler</a>","synthetic":false,"types":["plat_egg::run::BackoffScheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Var.html\" title=\"struct plat_egg::Var\">Var</a>","synthetic":false,"types":["plat_egg::subst::Var"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Subst.html\" title=\"struct plat_egg::Subst\">Subst</a>","synthetic":false,"types":["plat_egg::subst::Subst"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"plat_egg/struct.Id.html\" title=\"struct plat_egg::Id\">Id</a>","synthetic":false,"types":["plat_egg::Id"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()