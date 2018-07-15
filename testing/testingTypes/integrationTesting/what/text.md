<div id="title">

#### What

</div>

<span id="prereqs"><panel src="../../unitTesting/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Quality Assurance → Testing → Unit Testing → What →%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain integration testing</span>

<div id="body">

**_Integration testing_ : testing whether different parts of the software _work together_ (i.e. integrates) as expected.** Integration tests aim to discover bugs in the 'glue code' related to how components interact with each other. These bugs are often the result of misunderstanding of what the parts are supposed to do vs what the parts are actually doing. 

<tip-box> 

{{ icon_example }} Suppose a class `Car` users classes `Engine` and `Wheel`. If the `Car` class assumed a `Wheel` can support 200 mph speed but the actual `Wheel` can only support 150 mph, it is the integration test that is supposed to uncover this discrepancy.

</tip-box>

</div>

<div id="extras">
</div>