<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret advanced sequence diagrams</span>

<span id="title">Sequence diagrams - advanced</span>

<div id="body">

{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../uml/sequenceDiagrams/parallelPaths/unit-inElsewhere-asFlat.md#main" boilerplate  header="UML: Sequence Diagrams: Parallel Paths" {{ panel_state }} />
<panel type="seamless" src="../../../uml/sequenceDiagrams/referenceFrames/unit-inElsewhere-asFlat.md#main" boilerplate  header="UML: Sequence Diagrams: Reference Frames" {{ panel_state }} />
{% endmacro %}

<div class="print-only">
{{ print_sensitive_panels() }}
</div>
<div class="non-printable">
{{ print_sensitive_panels("expanded") }}
</div>


</div>

<div id="extras">
</div>
