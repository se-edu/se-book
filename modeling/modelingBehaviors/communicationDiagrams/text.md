{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Communication diagrams</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain communication diagrams</span>

<div id="body">

**{{ show_term("Communication diagrams") }} are like sequence diagrams but emphasize the data links between the various participants in the interaction rather than the sequence of interactions.**

{% call show_example() %}
A communication diagram for an order-processing interaction:

<pic eager src="{{baseUrl}}/modeling/modelingBehaviors/communicationDiagrams/images/diagram.png" height="300" />
<br>

<sub>Adapted from: _UML Distilled_ by Martin Fowler</sub>
{% endcall %}

</div>

<div id="extras">
</div>
