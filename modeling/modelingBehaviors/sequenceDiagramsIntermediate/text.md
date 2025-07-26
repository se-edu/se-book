<span id="title">Sequence diagrams - intermediate</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw intermediate-level sequence diagrams</span>

<div id="body">

{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../uml/sequenceDiagrams/objectDeletion/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Object Deletion" alt="{{ icon_prereq }} UML/SD/Deletion" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/selfInvocation/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Self-Invocation" alt="{{ icon_prereq }} UML/SD/Self-Invocation" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/alternativePaths/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Alternative Paths" alt="{{ icon_prereq }} UML/SD/Alternative" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/optionalPaths/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Optional Paths" alt="{{ icon_prereq }} UML/SD/Optional" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/staticMethods/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Calls to Static Methods" alt="{{ icon_prereq }} UML/SD/Optional" {{ panel_state }} />
{% endmacro %}

{{ print_sensitive_panels("expanded") }}


</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate />
</div>
