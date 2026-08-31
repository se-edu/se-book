{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Facade design pattern</span>

<div id="body">

**Context**

Components need to access functionality deep inside other components.

{% call show_example() %}
The `UI` component of a `Library` system might want to access functionality of the `Book` class contained inside the `Logic` component.

<pic eager class="tbg" src="{{baseUrl}}/designPatterns/facade/what/images/textBook.png" height="120" />
<p/>
{% endcall %}

**Problem**

Access to the component should be allowed without exposing its internal details.<br>
{{ label_example }} %%The `UI` component should access the functionality of the `Logic` component without knowing that it contains a `Book` class within it.%%

**Solution**

Include a {{ show_term("Façade", "a French word that means 'front of a building'") }} class that sits between the component internals and users of the component such that all access to the component happens through the Facade class.

{% call show_example() %}
The following class diagram applies the Facade pattern to the `Library System` example. The `LibraryLogic` class is the Facade class.

<pic eager class="tbg" src="{{baseUrl}}/designPatterns/facade/what/images/textLibraryBook.png" height="120" />
<p/>
{% endcall %}

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
