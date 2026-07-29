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

**{{ show_term("Early and frequent") }}: integrate early and evolve each part in parallel, in small steps, re-integrating frequently.**

**A good way to start is to write a {{ show_term("walking skeleton") }}** -- a version that has all the high-level components needed for the first version in their minimal form, compiles, and runs, but may not produce any useful output yet.<br>
{{ label_example }} %%One developer, possibly the one in charge of integration, writes the walking skeleton. After that, all developers flesh it out in parallel, adding one feature at a time, integrating each new feature into the main system as soon as it is done.%%

</div>

<div id="extras">
</div>
