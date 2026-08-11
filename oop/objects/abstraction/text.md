{% from "common/macros.njk" import show_term with context %}
<span id="title">Objects as abstractions</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the abstraction aspect of OOP</span>

<div id="body">

The concept of **_Objects_ in OOP is an <trigger trigger="click" for="modal:objectsAsAbstractions-abstraction">{{ show_term("abstraction") }}</trigger> mechanism because it allows us to abstract away lower-level details and work with larger units.** That is, we can ignore details such as data formats and method implementations, and work at the level of objects.

{{ label_example }} %%You can deal with a `Person` object that represents the person Adam and query the object for Adam's age instead of dealing with details such as Adam’s date of birth (DoB), in what format the DoB is stored, the algorithm used to calculate the age from the DoB, etc.%%

<modal large header="Definition: Abstraction" id="modal:objectsAsAbstractions-abstraction">
  <include src="../../../common/definitions.md#def-abstraction"/>
</modal><br>
</div>

<div id="extras">
</div>
