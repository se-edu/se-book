<span id="title">Alternative paths</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret sequence diagrams with alternative paths</span>

<div id="body">

**UML uses `alt` frames to indicate alternative paths.**

Notation:

<img src="{{baseUrl}}/uml/sequenceDiagrams/alternativePaths/images/notation.png" height="100" />
<p/>

<box>

{{ icon_example }} `Minefield` calls the `Cell#setMine` method if the cell is supposed to be a mined cell, and calls the `Cell:setMineCount(...)` method otherwise.

<img src="{{baseUrl}}/uml/sequenceDiagrams/alternativePaths/images/minefieldCell.png" height="180" />
<p/>

</box>

**No more than one alternative partitions be executed** in an `alt` frame. That is, it is acceptable for none of the alternative partitions to be executed but it is not acceptable for multiple partitions to be executed.

</div>

<div id="extras">
</div>
