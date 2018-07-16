<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Facade design pattern</span>

<div id="body">

**Context**

Components need to access functionality deep inside other components. 

<tip-box>

{{ icon_example }} The `UI` component of a `Library` system might want to access functionality of the `Book` class contained inside the `Logic` component.

<img src="{{baseUrl}}/designPatterns/facade/what/images/textBook.png" height="120" />
<p/>

</tip-box>

**Problem**

Access to the component should be allowed without exposing its internal details. %%&nbsp;e.g.  the `UI` component should access the functionality of the `Logic` component without knowing that it contained a `Book` class within it.%%

**Solution**

Include a <tooltip content="a French word that means 'front of a building'">Façade</tooltip> class that sits between the component internals and users of the component such that all access to the component happens through the Facade class. 

<tip-box>

{{ icon_example }} The following class diagram applies the Façade pattern to the `Library System` example. The `LibraryLogic` class is the Facade class.

<img src="{{baseUrl}}/designPatterns/facade/what/images/textLibraryBook.png" height="120" />
<p/>

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>