<div id="title">

#### Navigability

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret association navigabilities in class diagrams</span>

<div id="body">

**We use arrow heads to indication the navigability of an association.**

<tip-box>

{{ icon_example }} `Logic` is aware of `Minefield`, but `Minefield` is not aware of `Logic`

<img src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/logicMinefield.png" height="40" />

<include src="logic-minefield.md" />

{{ icon_example }} Here is an example of a bidirectional navigability; each class is aware of the other.<p/>
<img src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/manDog.png" height="40" />

</tip-box>

**Navigability can be shown in class diagrams as well as object diagrams**.

<tip-box> 

{{ icon_example }} According to this object diagram the given `Logic` object is associated with and aware of two `MineField` objects.

<img src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/logicMinefieldObjects.png" height="80" />

</tip-box>


</div>

<div id="extras">
  <include src="exercises.md" />
</div>