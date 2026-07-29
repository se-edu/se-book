{% from "common/macros.njk" import show_term with context %}
<span id="title">Objects as abstractions</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the abstraction aspect of OOP</span>

<div id="body">

The concept of **_Objects_ in OOP is an <trigger trigger="click" for="modal:objectsAsAbstractions-abstraction">{{ show_term("abstraction") }}</trigger> mechanism because it allows us to abstract away the lower level details and work with bigger granularity entities** i.e., ignore details of data formats and the method implementation details and work at the level of objects.

<modal large header="Definition: Abstraction" id="modal:objectsAsAbstractions-abstraction">
  <include src="../../../common/definitions.md#def-abstraction"/>
</modal><br>
{{ label_example }} %%You can deal with a `Person` object that represents the person Adam and query the object for Adam's age instead of dealing with details such as Adam’s date of birth (DoB), in what format the DoB is stored, the algorithm used to calculate the age from the DoB, etc.%%

</div>

<div id="extras">
</div>
