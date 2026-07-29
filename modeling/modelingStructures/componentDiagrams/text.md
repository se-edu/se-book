{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Component diagrams</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain component diagrams</span>

<div id="body">

**A {{ show_term("component diagram") }} is used to show how a system is divided into components and how they are connected to each other through interfaces.**

{% call show_example() %}
A component diagram for an order-processing system:

<pic eager src="{{baseUrl}}/modeling/modelingStructures/componentDiagrams/images/diagram.png" height="500" /><br>

<sub>source:[https://commons.wikimedia.org](https://en.wikipedia.org/wiki/Component_diagram)</sub>
{% endcall %}
</div>

<div id="extras">
</div>
