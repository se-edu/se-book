<span id="title">Big-bang versus incremental integration</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain how integration approaches vary based on amount merged at a time</span>

<div id="body">

**_Big-bang integration_: integrate all (or too many) components at the same time.** More generally, integrating too many changes at the same time.

<box type="wrong">

Big-bang is not recommended because it will uncover too many problems at the same time which could make debugging and bug-fixing more complex than when problems are uncovered incrementally.

</box>

**_Incremental integration_: integrate a few components at a time.** More generally, integrating changes gradually. This approach is better than big-bang integration because it surfaces integration problems in a more manageable way.

<div v-closeable alt="slideshow: comparison" class="non-printable">

Here is an animation that compares the two approaches:

@[powerpoint](https://onedrive.live.com/embed?cid=A5AF047C4CAD67AB&resid=A5AF047C4CAD67AB%212315&authkey=AG4cur5IrM7vr7M&em=2)

</div>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
