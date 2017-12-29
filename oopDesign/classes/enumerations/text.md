<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Enumerations :two:

</div>

<div id="body">

**An _Enumeration_ is a fixed set of values that can be considered as a data type.** 

An enumeration is often useful when using a regular data type such as `int` or `String` would allow invalid values to be assigned to a variable. %%e.g. if a variable can only take values `0` and `1`, declaring it as an `int` would allow invalid values such as `2` to be assigned to it. But if you define an enumeration called `Binary` that has values `0` and `1` only, a variable of type `Binary` will never be assigned an invalid value such as `2` because the compiler is able to catch the error.%%

<dynamic-panel src="../../../uml/classDiagrams/enumerations/what/full.md" header=":mortar_board: UML → Class Diagrams → Enumerations" />

<p/>

<tip-box>

:package: `Priority` can be considered an enumeration because it has only three values.

`Priority`: `HIGH`, `MEDIUM`, `LOW`

<img src="{{baseUrl}}/oopDesign/classes/enumerations/images/priority.png" height="100" />
<p/>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md"/>
</div>

</div>
