{% from "common/macros.njk" import show_term with context %}
<span id="title">Types of coupling</span>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Design Fundamentals → Coupling → What%%" popup-url="{{ baseUrl }}/designFundamentals/coupling/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can identify types of coupling</span>

<div id="body">

Coupling comes in several types:

* **{{ show_term("Content coupling") }}**: one module modifies or relies on the internal workings of another module<br>
  {{ label_example }} %%Accessing local data of another module.%%
* **{{ show_term("Common/Global coupling") }}**: two modules share the same global data
* **{{ show_term("Control coupling") }}**: one module controls the flow of another by passing it information on what to do<br>
  {{ label_example }} %%Passing a flag.%%
* **{{ show_term("Data coupling") }}**: one module shares data with another module<br>
  {{ label_example }} %%Passing parameters.%%
* **{{ show_term("External coupling") }}**: two modules share an externally imposed convention<br>
  {{ label_example }} %%Data formats, communication protocols, device interfaces.%%
* **{{ show_term("Subclass coupling") }}**: a class inherits from another class. Note that a child class is coupled to the parent class but not the other way around.
* **{{ show_term("Temporal coupling") }}**: two actions are bundled together just because they happen to occur at the same time<br>
  {{ label_example }} %%Extracting a contiguous block of code as a method although the code block contains statements unrelated to each other.%%

</div>

<div id="extras">
</div>
