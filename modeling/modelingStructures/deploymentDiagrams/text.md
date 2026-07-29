{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Deployment diagrams</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain deployment diagrams</span>

<div id="body">

**A {{ show_term("deployment diagram") }} shows a system's physical layout, revealing which pieces of software run on which pieces of hardware.**

{% call show_example() %}
A deployment diagram showing which software runs on which hardware:

<pic eager src="{{baseUrl}}/modeling/modelingStructures/deploymentDiagrams/images/diagram.png" height="500" />
<p/>

<sub>source:[https://commons.wikimedia.org](https://en.wikipedia.org/wiki/Deployment_diagram)</sub>
{% endcall %}

</div>

<div id="extras">
</div>
