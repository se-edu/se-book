<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Patterns &rarr; Facade Pattern &rarr;</div>

<div id="title">

#### What :two:

</div>

<div id="body">

**Context**

Components need to access functionality deep inside other components. For example, the `UI` component of a `Library` system might want to access functionality of the `Book` class contained inside the `Logic` component.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/facade/what/images/textBook.png" height="120" />
<p/>

</tip-box>

**Problem**

Access to the component should be allowed without exposing its internal details. For example, the `UI` component should access the functionality of the `Logic` component without knowing that it contained a `Book` class within it.

**Solution**

Include a Façade class that sits between the component internals and users of the component such that all access to the component happens through the Façade class. The following class diagram shows the application of the Façade pattern to the `Library System` example. In this example, the `LibraryLogic` class acts as the Façade class.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/facade/what/images/textLibraryBook.png" height="120" />
<p/>

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
