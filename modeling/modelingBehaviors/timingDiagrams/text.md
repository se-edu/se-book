{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Timing diagrams</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain timing diagrams</span>

<div id="body">

**A {{ show_term("timing diagram") }} focuses on timing constraints.**

{% call show_example() %}
A timing diagram showing how long each state may last:

<pic eager src="{{baseUrl}}/modeling/modelingBehaviors/timingDiagrams/images/diagram.png" height="280" />
<br>

<sub>Adapted from: _UML Distilled_ by Martin Fowler</sub>
{% endcall %}

</div>

<div id="extras">
</div>
