<span id="title">Activity diagrams - basic</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use basic-level activity diagrams</span>

<div id="body">

**Software projects often involve _workflows_.** Workflows define the <tooltip content="a connected sequence of steps"></tooltip>flow in which a process or a set of tasks is executed.
Understanding such workflows is important for the success of the software project.

<box>

Some examples in which a certain workflow is relevant to software project:

{{ icon_example }} A software that automates the work of an insurance company needs to take into account the workflow of processing an insurance claim.

{{ icon_example }} The algorithm of a piece of code represents the workflow (i.e. the execution flow) of the code.
</box>

%%<small>{{ icon_info }} Contents related to UML diagrams in the panels given below belong to a different chapter (i.e., the chapter dedicated to UML); they have been embedded here for convenience.</small>%%

{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../uml/activityDiagrams/introduction/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Activity Diagrams → Introduction → What" alt="{{ icon_prereq }} UML/AD/Intro" {{ panel_state }} /><p/>
<panel type="seamless" src="../../../uml/activityDiagrams/basicNotations/linearPaths/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Activity Diagrams → Basic Notation → Linear Paths" alt="{{ icon_prereq }} UML/AD/LinearPaths" {{ panel_state }} />
<panel type="seamless" src="../../../uml/activityDiagrams/basicNotations/alternatePaths/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Activity Diagrams → Basic Notation → Alternate Paths" alt="{{ icon_prereq }} UML/AD/AlternatePaths" {{ panel_state }} />
<panel type="seamless" src="../../../uml/activityDiagrams/basicNotations/parallelPaths/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Activity Diagrams → Basic Notation → Parallel Paths" alt="{{ icon_prereq }} UML/AD/ParallelPaths" {{ panel_state }} />
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
