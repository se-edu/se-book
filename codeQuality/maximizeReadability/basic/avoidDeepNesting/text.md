<span id="title">Avoid deep nesting</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: avoid deep nesting </span>

<div id="body">

>If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program. <sub>--Linux 1.3.53 Coding Style</sub>

**Avoid deep nesting** -- the deeper the nesting, the harder it is for the reader to keep track of the logic.

**In particular, avoid [_arrowhead_ style code](https://blog.codinghorror.com/flattening-arrow-code/).**

<pic eager src="{{baseUrl}}/codeQuality/maximizeReadability/basic/avoidDeepNesting/images/arrowheadStyle.png" width="500" />
<p/>

<box>

{{ icon_example }} A real code example:

<div class="alt-java">
  <include src="../../introduction/example-java.md" />
</div>
<div class="alt-python">
  <include src="../../introduction/example-python.md" />
</div>

</box>

</div>

<div id="extras">
</div>
