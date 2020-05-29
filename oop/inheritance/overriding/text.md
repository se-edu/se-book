<span id="title">Overriding</span>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} OOP → Inheritance → What%%" popup-url="{{ baseUrl }}/oop/inheritance/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain method overriding</span>

<div id="body">

**Method _overriding_ is when a sub-class changes the behavior inherited from the parent class** by re-implementing the method. Overridden methods have the same name, same type signature, and same return type.

<box>

{{ icon_example }} Consider the following case of `EvaluationReport` class inheriting the `Report` class:

`Report` methods | `EvaluationReport` methods | Overrides?
-----------------|----------------------------|-----------
`print()`        |`print()`                   | Yes
`write(String)`  |`write(String)`             | Yes
`read():String`  |`read(int):String`          | No. %%Reason: the two methods have different signatures; This is a case of <trigger trigger="click" for="modal:overriding-overloading"> _overloading_ </trigger> (rather than overriding).%%

<modal large header="**Overloading**" id="modal:overriding-overloading">
  <include src="../overloading/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

</box>


</div>

<div id="extras">
  <include src="exercises.mbdf" />
</div>