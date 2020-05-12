<span id="title">Types of coupling</span>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Design Fundamentals → Coupling → What%%" popup-url="{{ baseUrl }}/designFundamentals/coupling/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can identify types of coupling</span>

<div id="body">

Some examples of different coupling types:

* **Content coupling**: one module modifies or relies on the internal workings of another module %%e.g., accessing local data of another module%% 
* **Common/Global coupling**: two modules share the same global data 
* **Control coupling**: one module controlling the flow of another, by passing it information on what to do %%e.g., passing a flag%%
* **Data coupling**: one module sharing data with another module %%e.g. via passing parameters%% 
* **External coupling**: two modules share an externally imposed convention %%e.g., data formats, communication protocols, device interfaces%%. 
* **Subclass coupling**: a class inherits from another class. Note that a child class is coupled to the parent class but not the other way around.
* **Temporal coupling**: two actions are bundled together just because they happen to occur at the same time %%e.g. extracting a contiguous block of code as a method although the code block contains statements unrelated to each other%%

</div>

<div id="extras">
</div>
