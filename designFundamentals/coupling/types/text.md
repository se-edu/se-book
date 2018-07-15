<div id="title">

#### Types of Coupling

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Design Fundamentals → Coupling → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can identify types of coupling</span>

<div id="body">

Some examples of different coupling types:

* **Content coupling**: one module modifies or relies on the internal workings of another module %%&nbsp;e.g., accessing local data of another module%% 
* **Common/Global coupling**: two modules share the same global data 
* **Control coupling**: one module controlling the flow of another, by passing it information on what to do %%&nbsp;e.g., passing a flag%%
* **Data coupling**: one module sharing data with another module %%&nbsp;e.g. via passing parameters%% 
* **External coupling**: two modules share an externally imposed convention %%&nbsp;e.g., data formats, communication protocols, device interfaces%%. 
* **Subclass coupling**: a class inherits from another class. Note that a child class is coupled to the parent class but not the other way around.
* **Temporal coupling**: two actions are bundled together just because they happen to occur at the same time %%&nbsp;e.g. extracting a contiguous block of code as a method although the code block contains statements unrelated to each other%%

</div>

<div id="extras">
</div>