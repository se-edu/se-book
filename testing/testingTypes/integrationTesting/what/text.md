<span id="title">What</span>

<span id="prereqs"><panel src="../../unitTesting/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Quality Assurance → Testing → Unit Testing → What →%%" popup-url="{{ baseUrl }}/testing/testingTypes/unitTesting/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain integration testing</span>

<div id="body">

**_Integration testing_ : testing whether different parts of the software _work together_ (i.e., integrates) as expected.** Integration tests aim to discover bugs in the 'glue code' related to how components interact with each other. These bugs are often the result of misunderstanding what the parts are supposed to do vs what the parts are actually doing.

<box>

{{ icon_example }} Suppose a class `Car` uses classes `Engine` and `Wheel`. If the `Car` class assumed a `Wheel` can support a speed of up to 200 mph but the actual `Wheel` can only support a speed of up to 150 mph, it is the integration test that is supposed to uncover this discrepancy.

</box>

</div>

<div id="extras">
</div>