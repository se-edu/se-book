{% from "common/macros.njk" import show_term with context %}
<span id="title">Linear paths</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret linear paths in activity diagrams</span>

<div id="body">

An activity diagram (AD) captures an {{ show_term("activity") }} through the _actions_ and _control flows_ that make up the activity.
* An {{ show_term("action") }} is a single step in an activity. It is shown as a rectangle with ==rounded corners==.
* A {{ show_term("control flow") }} shows the flow of control from one action to the next. It is shown by drawing a line with an arrow-head to show the direction of the flow.

<pic eager src="{{baseUrl}}/uml/activityDiagrams/basicNotations/linearPaths/images/notation.png" height="180" />

Note the slight difference between the {{ show_term("start node") }} and the {{ show_term("end node") }} which represent the start and the end of the activity, respectively.

<box>

{{ icon_example }} This activity diagram shows the action sequence of the activity _a passenger rides the bus_:

<pic eager src="{{baseUrl}}/uml/activityDiagrams/basicNotations/linearPaths/images/example.png" width="450" />

</box>


</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
