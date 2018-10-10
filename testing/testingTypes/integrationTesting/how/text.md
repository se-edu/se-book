<div id="title">

#### How

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Quality Assurance → Testing → Integration Testing → What →%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use integration testing</span>

<div id="body">

**Integration testing is not simply a repetition of the unit test cases but run using the actual dependencies** (instead of the stubs used in unit testing). Instead, integration tests are additional test cases that focus on the interactions between the parts.

<tip-box> 

{{ icon_example }} Suppose a class `Car` uses classes `Engine` and `Wheel`. Here is how you would go about doing pure integration tests:

a) First, unit test `Engine` and `Wheel`.<br>
b) Next, unit test `Car` in isolation of `Engine` and `Wheel`, ==using stubs for `Engine` and `Wheel`==.<br>
c) After that, do an integration test for `Car` using it together with the `Engine` and `Wheel` classes to ensure the `Car` integrates properly with the `Engine` and the `Wheel`.  

</tip-box>

**In practice, developers often use a hybrid of unit+integration tests to minimize the need for stubs.**

<tip-box> 

{{ icon_example }} Here's how a hybrid unit+integration approach could be applied to the same example used above:

(a) First, unit test `Engine` and `Wheel`.<br>
~~(b) Next, unit test `Car` in isolation of `Engine` and `Wheel`, using stubs for `Engine` and `Wheel`.~~<br>
(c) After that, do an integration test for `Car` using it together with the `Engine` and `Wheel` classes to ensure the `Car` integrates properly with the `Engine` and the `Wheel`.  ==This step should include test cases that are meant to test the unit `Car`== (i.e. test cases used in the step (b) of the example above) as well as test cases that are meant to test the integration of `Car` with `Wheel` and `Engine` (i.e. pure integration test cases used of the step (c) in the example above). 

:bulb: Note that you no longer need stubs for `Engine` and `Wheel`. The downside is that `Car` is never tested in isolation of its dependencies. Given that its dependencies are already unit tested, the risk of bugs in `Engine` and `Wheel` affecting the testing of `Car` can be considered minimal.

</tip-box>


</div>

<div id="extras">
</div>