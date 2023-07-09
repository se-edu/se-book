<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret sequence diagrams with parallel paths</span>

<span id="title">Parallel paths</span>

<div id="body">

**UML uses `par` frames to indicate parallel paths.**

Notation:

<pic src="{{baseUrl}}/uml/sequenceDiagrams/parallelPaths/images/notation.png" height="100" />
<p/>

<box>

{{ icon_example }} `Logic` is calling methods `CloudServer#poll()` and `LocalData#poll()` in parallel.

<pic src="{{baseUrl}}/uml/sequenceDiagrams/parallelPaths/images/logicServerData.png" height="150" />
<p/>

<box>

{{ icon_tip }} If you show parallel paths in a sequence diagram, the corresponding Java implementation is likely to be _multi-threaded_ %%because a normal Java program cannot do multiple things at the same time%%.

</box>

</box>

</div>

<div id="extras">
</div>
