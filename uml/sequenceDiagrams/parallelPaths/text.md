<span id="outcomes">{{glyphicon_flag}} Can interpret sequence diagrams with parallel paths :three:</span>

<div id="title">

#### Parallel Paths :three:

</div>

<div id="body">

**UML uses `par` frames to indicate parallel paths.**

Notation:

<img src="{{baseUrl}}/uml/sequenceDiagrams/parallelPaths/images/notation.png" height="100" />
<p/>

<tip-box>

:package: `Logic` is calling methods `CloudServer#poll()` and `LocalServer#poll()` in parallel.

<img src="{{baseUrl}}/uml/sequenceDiagrams/parallelPaths/images/logicServerData.png" height="150" />
<p/>

<tip-box> 

:bulb: If you show parallel paths in a sequence diagram, the corresponding Java implementation is likely to be _multi-threaded_ %%&nbsp; because a normal Java program cannot do multiple things at the same time%%.

</tip-box>

</tip-box>

</div>

<div id="extras">
</div>