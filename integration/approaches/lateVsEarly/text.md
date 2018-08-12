<div id="title">

#### 'Late and One Time' vs 'Early and Frequent'

</div>

<span id="prereqs"><panel src="../../introduction/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Integration → Introduction → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain how integration approaches vary based on timing and frequency</span>

<div id="body">

**In terms of timing and frequency, there are two general approaches to integration: _late and one-time_, _early and frequent_.**

**_Late and one-time_: wait till all components are completed and integrate all finished components near the end of the project.** 

<tip-box type="wrong">
 
  This approach is not recommended because integration often causes many component incompatibilities (due to previous miscommunications and misunderstandings) to surface which can lead to delivery delays %%&nbsp;i.e. Late integration → incompatibilities found → major rework required → cannot meet the delivery date%%.

</tip-box>

**_Early and frequent_: integrate early and evolve each part in parallel, in small steps, re-integrating frequently.** 

<tip-box> 

{{ icon_example }} A _<tooltip content="it compiles and runs but does not produce any useful output">walking skeleton</tooltip>_ can be written first. This can be done by one developer, possibly the one in charge of integration. After that, all developers can flesh out the skeleton in parallel, adding one feature at a time. After each feature is done, simply integrate the new code to the main system.

</tip-box>

<div v-closeable alt="slideshow: comparison" class="non-printable">

Here is an animation that compares the two approaches: 

@[powerpoint](https://onedrive.live.com/embed?cid=A5AF047C4CAD67AB&resid=A5AF047C4CAD67AB%212312&authkey=AHtrsZMwQmNcyAE&em=2)

</div>

</div>

<div id="extras">
</div>