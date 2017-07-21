<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Testing :arrow_right: Dependency Injection :arrow_right:</div>

<div id="title">

#### What :three:

</div>

<div id="body">

_Dependency injection_ is the process of ‘injecting’ objects to replace current dependencies with a different object. This is often used to inject stubs to isolate the SUT from other collaborating objects so that it can be tested independently. In the example below, a Foo object normally depends on a Bar object, but we have injected a BarStub object so that the Foo object no longer depends on a Bar object. Now we can test the Foo object in isolation from the Bar object.

<img src="{{baseUrl}}/testing/dependencyInjection/what/images/diagram.png" height="150" />
<p/>

</div>

<div id="extras">
<div>

</div>
