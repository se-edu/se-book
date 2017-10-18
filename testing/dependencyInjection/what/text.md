<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### What :three:

</div>

<div id="body">

**_Dependency injection_ is the process of 'injecting' objects to replace current dependencies with a different object.** This is often used to inject <trigger trigger="click" for="modal:explainDi-stub">stubs</trigger> to isolate the <tooltip content="Software Under Test">SUT</tooltip> from its <tooltip content="objects it depends on">dependencies</tooltip> so that it can be tested in isolation. 

<modal large title="" id="modal:explainDi-stub">
  <include src="../../testingTypes/unitTesting/stubs/full.md"/>
</modal>

<tip-box> 

:package: A `Foo` object normally depends on a `Bar` object, but we can inject a `BarStub` object so that the `Foo` object no longer depends on a `Bar` object. Now we can test the `Foo` object in isolation from the `Bar` object.

<img src="{{baseUrl}}/testing/dependencyInjection/what/images/diagram.png" height="150" />

</tip-box>

</div>

<div id="extras">
</div>

</div>
