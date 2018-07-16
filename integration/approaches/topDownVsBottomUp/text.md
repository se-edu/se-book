<div id="title">

#### Top-Down vs Bottom-Up Integration

</div>

<span id="prereqs"><panel src="../bigBangVsIncremental/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Integration → Approaches → Big-Bang Vs Incremental%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain how integration approaches vary based on the order of integration</span>

<div id="body">

<img src="{{baseUrl}}/integration/approaches/topDownVsBottomUp/images/approaches.png" height="100" />
<p/>

**Based on the order in which components are integrated, incremental integration can be done in three ways.**

**_Top-down_ integration: higher-level components are integrated before bringing in the lower-level components.** One advantage of this approach is that higher-level problems can be discovered early. One disadvantage is that this requires the use of <trigger for="pop:topdown-stub">stubs</trigger> in place of lower level components until the real lower-level components are integrated to the system. Otherwise, higher-level components cannot function as they depend on lower level ones.

<popover id="pop:topdown-stub" title="{{icon_preview}}" placement="top">
  <div slot="content">
    <include src="../../../common/definitions.md#def-stub" />
  </div>
</popover>

**_Bottom-up_ integration: the reverse of top-down integration.** Note that when integrating lower level components, <tooltip content="additional code written to provide inputs to a component via an API">drivers</tooltip> may be needed to test the integrated components %%&nbsp;because the UI may not be integrated yet%%, just like top-down integration needs stubs.

**_Sandwich_ integration: a mix of the top-down and the bottom-up approaches.** The idea is to do both top-down and bottom-up so as to 'meet' in the middle.

<div v-closeable alt="slideshow: comparison">

Here is an animation that compares the three approaches: 

@[powerpoint](https://onedrive.live.com/embed?cid=A5AF047C4CAD67AB&resid=A5AF047C4CAD67AB%212318&authkey=AD27jxfKqq3nqpQ&em=2)

</div>

</div>

<div id="extras">

<include src="exercises.md" />

</div>