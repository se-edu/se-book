<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain dependency injection</span>

<div id="body">

**_Dependency injection_ is the process of 'injecting' objects to replace current dependencies with a different object.** This is often used to inject <trigger trigger="click" for="modal:explainDi-stub">stubs</trigger> to isolate the <tooltip content="Software Under Test">SUT</tooltip> from its <tooltip content="objects it depends on">dependencies</tooltip> so that it can be tested in isolation.

<modal large header="" id="modal:explainDi-stub">
  <include src="../../testingTypes/unitTesting/stubs/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

{{ icon_example }} A `Foo` object normally depends on a `Bar` object, but you can inject a `BarStub` object so that the `Foo` object no longer depends on a `Bar` object. Now you can test the `Foo` object in isolation from the `Bar` object.

<pic src="{{baseUrl}}/testing/dependencyInjection/what/images/diagram.png" height="150" />

</box>

</div>

<div id="extras">
</div>
