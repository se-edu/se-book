{% from "common/macros.njk" import show_term with context %}
<span id="title">Late and one time versus early and frequent</span>

<span id="prereqs"><panel src="../../introduction/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Integration → Introduction → What%%" popup-url="{{ baseUrl }}/integration/introduction/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain how integration approaches vary based on timing and frequency</span>

<div id="body">

**In terms of timing and frequency, there are two general approaches to integration: _late and one-time_, and _early and frequent_.**

**{{ show_term("Late and one-time") }}: wait until all components are completed and integrate all finished components near the end of the project.** 

<box type="wrong">
 
  This approach is not recommended because integration often causes many component incompatibilities (due to previous miscommunications and misunderstandings) to surface, which can lead to delivery delays %%i.e., late integration → incompatibilities found → major rework required → cannot meet the delivery date%%.

</box>

**{{ show_term("Early and frequent") }}: integrate early and evolve each part in parallel, in small steps, re-integrating frequently.**<br>
{{ label_example }} %%A <tooltip content="it has all the high-level components needed for the first version in their minimal form, compiles, and runs but may not produce any useful output yet">walking skeleton</tooltip> can be written first. This can be done by one developer, possibly the one in charge of integration. After that, all developers can flesh out the skeleton in parallel, adding one feature at a time. After each feature is done, simply integrate the new code into the main system.%%

</div>

<div id="extras">
</div>
