(function() {var implementors = {};
implementors["plat_egg"] = [{"text":"impl&lt;'a, L, P:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/reflect_const/trait.PathCompressT.html\" title=\"trait plat_egg::raw::reflect_const::PathCompressT\">PathCompressT</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.Dot.html\" title=\"struct plat_egg::Dot\">Dot</a>&lt;'a, L, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["plat_egg::dot::Dot"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"plat_egg/trait.FromOp.html\" title=\"trait plat_egg::FromOp\">FromOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.Explanation.html\" title=\"struct plat_egg::Explanation\">Explanation</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::explain::Explanation"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"plat_egg/trait.FromOp.html\" title=\"trait plat_egg::FromOp\">FromOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.FlatTerm.html\" title=\"struct plat_egg::FlatTerm\">FlatTerm</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::explain::FlatTerm"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"plat_egg/trait.FromOp.html\" title=\"trait plat_egg::FromOp\">FromOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.TreeTerm.html\" title=\"struct plat_egg::TreeTerm\">TreeTerm</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::explain::TreeTerm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.FromOpError.html\" title=\"struct plat_egg::FromOpError\">FromOpError</a>","synthetic":false,"types":["plat_egg::language::FromOpError"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/raw/struct.RecExpr.html\" title=\"struct plat_egg::raw::RecExpr\">RecExpr</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::raw::language::RecExpr"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"plat_egg/enum.RecExprParseError.html\" title=\"enum plat_egg::RecExprParseError\">RecExprParseError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["plat_egg::language::RecExprParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.SymbolLang.html\" title=\"struct plat_egg::SymbolLang\">SymbolLang</a>","synthetic":false,"types":["plat_egg::language::SymbolLang"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"plat_egg/enum.MultiPatternParseError.html\" title=\"enum plat_egg::MultiPatternParseError\">MultiPatternParseError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["plat_egg::multipattern::MultiPatternParseError"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"plat_egg/enum.ENodeOrVar.html\" title=\"enum plat_egg::ENodeOrVar\">ENodeOrVar</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::pattern::ENodeOrVar"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"plat_egg/raw/trait.Language.html\" title=\"trait plat_egg::raw::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.Pattern.html\" title=\"struct plat_egg::Pattern\">Pattern</a>&lt;L&gt;","synthetic":false,"types":["plat_egg::pattern::Pattern"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.Report.html\" title=\"struct plat_egg::Report\">Report</a>","synthetic":false,"types":["plat_egg::run::Report"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.Var.html\" title=\"struct plat_egg::Var\">Var</a>","synthetic":false,"types":["plat_egg::subst::Var"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"plat_egg/struct.Id.html\" title=\"struct plat_egg::Id\">Id</a>","synthetic":false,"types":["plat_egg::Id"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()