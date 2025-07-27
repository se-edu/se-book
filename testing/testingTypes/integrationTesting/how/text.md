<span id="title">How</span>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Quality Assurance → Testing → Integration Testing → What →%%" popup-url="{{ baseUrl }}/testing/testingTypes/integrationTesting/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can use integration testing</span>

<div id="body">

**Integration testing is not simply a case of repeating the unit test cases using the actual dependencies** (instead of the stubs used in unit testing). Instead, integration tests are additional test cases that focus on the interactions between the parts.

<box>

{{ icon_example }} Suppose a class `Car` uses classes `Engine` and `Wheel`. Here is how you would go about doing pure integration tests:

a) First, unit test `Engine` and `Wheel`.<br>
b) Next, unit test `Car` in isolation of `Engine` and `Wheel`, ==using stubs for `Engine` and `Wheel`==.<br>
c) After that, do an integration test for `Car` by using it together with the `Engine` and `Wheel` classes to ensure that `Car` integrates properly with the `Engine` and the `Wheel`.

</box>

**In practice, developers often use a hybrid of unit+integration tests to minimize the need for stubs.**

<box>

{{ icon_example }} Here's how a hybrid unit+integration approach could be applied to the same example used above:

(a) First, unit test `Engine` and `Wheel`.<br>
~~(b) Next, unit test `Car` in isolation of `Engine` and `Wheel`, using stubs for `Engine` and `Wheel`.~~<br>
(c) After that, do an integration test for `Car` by using it together with the `Engine` and `Wheel` classes to ensure that `Car` integrates properly with the `Engine` and the `Wheel`.  ==This step should include test cases that are meant to unit test `Car`== (i.e., test cases used in the step (b) of the example above) as well as test cases that are meant to test the integration of `Car` with `Wheel` and `Engine` (i.e., pure integration test cases used of the step (c) in the example above).

{{ icon_tip }} Note that you no longer need stubs for `Engine` and `Wheel`. The downside is that `Car` is never tested in isolation of its dependencies. Given that its dependencies are already unit tested, the risk of bugs in `Engine` and `Wheel` affecting the testing of `Car` can be considered minimal.

</box>


</div>

<div id="extras">
</div>