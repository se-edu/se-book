<span id="title">Sequence diagrams - basic</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw basic sequence diagrams</span>

<div id="body">

**Sequence diagrams model the interactions between various entities in a system, in a specific scenario.** Modelling such scenarios is useful, for example, to verify the design of the internal interactions is able to provide the expected outcomes.

<box>

Some examples where a sequence diagram can be used:

{{ icon_example }} To model how components of a system interact with each other to respond to a user action.

{{ icon_example }} To model how objects inside a component interact with each other to respond to a method call it received from another component.
</box>

%%<small>{{ icon_info }} Contents related to UML diagrams in the panels given below belong to a different chapter (i.e., the chapter dedicated to UML); they have been embedded here for convenience.</small>%%

{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../uml/sequenceDiagrams/introduction/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Introduction" alt="{{ icon_prereq }} UML/SequenceDiagrams" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/basic/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Basic Notation" alt="{{ icon_prereq }} UML/SD/Basic" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/loops/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Loops" alt="{{ icon_prereq }} UML/SD/Loops" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/objectCreation/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Object Creation" alt="{{ icon_prereq }} UML/SD/Creation" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/minimalNotation/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Sequence Diagrams → Minimal Notation" alt="{{ icon_prereq }} UML/SD/Minimal" {{ panel_state }} />
{% endmacro %}

<div class="print-only">
{{ print_sensitive_panels() }}
</div>
<div class="non-printable">
{{ print_sensitive_panels("expanded") }}
</div>



</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>
