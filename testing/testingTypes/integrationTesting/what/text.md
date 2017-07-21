<div id="path">Testing :arrow_right: Testing Types :arrow_right:</div>

<div id="title">

#### What :one:

</div>

<div id="body">

In _Integration testing_ we test whether different parts of the software ‘work together’ (i.e. integrates) as expected. Here, we assume the individual parts have been unit tested already. Therefore, integration tests aim to discover bugs in the ‘glue code’ that are often the result of misunderstanding of what the parts are supposed to do vs what the parts are actually doing. For example let us assume a class `Car` users classes `Engine` and `Wheel`.

* First, we should unit test `Engine` and `Wheel`.
* Next, we should unit test `Car` in isolation of `Engine` and `Wheel`, using stubs for `Engine` and `Wheel`.
* After that, we can do an integration test for `Car` using it together with the `Engine` and `Wheel` classes to ensure the `Car` integrates properly with the `Engine` and the `Wheel`.  

In the example above, if the `Car` class assumed a `Wheel` can support 200 mph speed but the `Wheel` can only support 150 mph, it is the integration test that is supposed to uncover this discrepancy.

</div>

<div id="extras">
</div>

</div>
