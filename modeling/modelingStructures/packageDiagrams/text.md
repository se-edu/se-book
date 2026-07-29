{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Package diagrams</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain package diagrams</span>

<div id="body">

**A {{ show_term("package diagram") }} shows packages and their dependencies.** A package is a grouping construct for grouping UML elements (classes, use cases, etc.).

{% call show_example() %}
A package diagram showing dependencies among packages:

<pic eager src="{{baseUrl}}/modeling/modelingStructures/packageDiagrams/images/diagram.png" height="450" /><br>
<sub>source:[https://commons.wikimedia.org](https://en.wikipedia.org/wiki/Package_diagram)</sub>
{% endcall %}

</div>

<div id="extras">
</div>
