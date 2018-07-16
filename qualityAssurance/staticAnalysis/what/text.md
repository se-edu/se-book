<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain static analysis</span>

<div id="body">

<tip-box type="definition">

<include src="../../../common/definitions.md#def-static-analysis" />

</tip-box>

Static analysis of code can find useful information such unused variables, unhandled exceptions, style errors, and statistics. Most modern IDEs come with some inbuilt static analysis capabilities. For example, an IDE can highlight unused variables as you type the code into the editor. 

Higher-end static analyzer tools can perform for more complex analysis such as locating potential bugs, memory leaks, inefficient code structures etc.

<tip-box> 

{{ icon_example }} Some example static analyzer for Java:
* [CheckStyle](http://checkstyle.sourceforge.net/)
* [PMD](http://findbugs.sourceforge.net/)
* [FindBugs](https://pmd.github.io/)

</tip-box>

_Linters_ are a subset of static analyzers that specifically aim to locate areas where the code can be made 'cleaner'.

</div>

<div id="extras">
</div>