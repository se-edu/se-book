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

<box type="info" seamless>

**The arrow<u>head</u> (not the entire arrow) denotes the navigability.** The line denotes the association, as before. So, the navigability (i.e., the arrowhead) is an extra annotation added to an association line.

For example, both diagrams below show an association between `Foo` and `Bar`. But the one on the right shows the navigability as well.

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/withAndwithoutNavigability.png" height="40" />

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
