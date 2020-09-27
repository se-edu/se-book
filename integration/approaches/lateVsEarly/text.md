<span id="title">Late and one time versus early and frequent</span>

<span id="prereqs"><panel src="../../introduction/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Integration → Introduction → What%%" popup-url="{{ baseUrl }}/integration/introduction/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain how integration approaches vary based on timing and frequency</span>

<div id="body">

**In terms of timing and frequency, there are two general approaches to integration: _late and one-time_, _early and frequent_.**

**_Late and one-time_: wait till all components are completed and integrate all finished components near the end of the project.** 

<box type="wrong">
 
  This approach is not recommended because integration often causes many component incompatibilities (due to previous miscommunications and misunderstandings) to surface which can lead to delivery delays %%i.e. Late integration → incompatibilities found → major rework required → cannot meet the delivery date%%.

</box>

**_Early and frequent_: integrate early and evolve each part in parallel, in small steps, re-integrating frequently.** 

<box>

{{ icon_example }} A _<tooltip content="it has all the high-level components needed for the first version in their minimal form, compiles, and runs but may not produce any useful output yet">walking skeleton</tooltip>_ can be written first. This can be done by one developer, possibly the one in charge of integration. After that, all developers can flesh out the skeleton in parallel, adding one feature at a time. After each feature is done, simply integrate the new code to the main system.

</box>

<div v-closeable alt="slideshow: comparison" class="non-printable">

Here is an animation that compares the two approaches: 

@[powerpoint](https://onedrive.live.com/embed?cid=A5AF047C4CAD67AB&resid=A5AF047C4CAD67AB%212312&authkey=AHtrsZMwQmNcyAE&em=2)

</div>

</div>

<div id="extras">
</div>
