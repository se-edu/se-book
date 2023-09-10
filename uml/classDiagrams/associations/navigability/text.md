<span id="title">Navigability</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret association navigabilities in class diagrams</span>

<div id="body">

**Use arrowheads to indicate the navigability of an association.**

<box>

{{ icon_example }} In this example, the navigability is unidirectional, and is from the `Logic` class to the `Minefield` class. That means if a `Logic` object `L` is associated with a `Minefield` object `M`, `L` has a reference to `M` but `M` doesn't have a reference to `L`.

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/logicMinefield.png" height="40" />

<include src="logic-minefield.md" />

{{ icon_example }} Here is an example of a bidirectional navigability; i.e., if a `Dog` object `d` is associated with a `Man` object `m`, `d` has a reference to `m` and `m` has a reference to `d`.<p/>
<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/manDog.png" height="40" />

<include src="dog-man.md" />

</box>

**Navigability can be shown in class diagrams as well as object diagrams**.

<box>

{{ icon_example }} According to this object diagram, the given `Logic` object is associated with and aware of two `MineField` objects.

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/logicMinefieldObjects.png" height="80" />

</box>


</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
