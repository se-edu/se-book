<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain static analysis</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-static-analysis" trim />
</box>

**Static analysis of code can find useful information such as unused variables**, unhandled exceptions, style errors, and statistics. Most modern IDEs come with some inbuilt static analysis capabilities. For example, an IDE can highlight unused variables as you type the code into the editor.

The term _static_ in static analysis refers to the fact that the code is analyzed without executing the code. **In contrast, _dynamic analysis_ requires the code to be executed to gather additional information about the code** e.g., performance characteristics.

**Higher-end static analysis tools (static analyzers) can perform more complex analysis such as locating potential bugs**, memory leaks, inefficient code structures, etc.

<box>

{{ icon_example }} Some example static analyzers for Java: [CheckStyle](http://checkstyle.sourceforge.net/), [PMD](https://pmd.github.io/), [FindBugs](http://findbugs.sourceforge.net/)
</box>

**_Linters_ are a subset of static analyzers** that specifically aim to locate areas where the code can be made 'cleaner'.

</div>

<div id="extras">
</div>
