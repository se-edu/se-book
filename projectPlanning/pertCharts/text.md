{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">PERT charts</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain PERT charts</span>

<div id="body">

**A {{ show_term("PERT (Program Evaluation Review Technique) chart") }} uses a graphical technique to show the order/sequence of tasks.** It is based on the simple idea of drawing a directed graph in which:

* Nodes or vertices capture the effort estimations of tasks, and
* Arrows depict the precedence between tasks

{% call show_example() %}
A PERT chart for a simple software project:

<pic eager class="tbg" src="{{baseUrl}}/projectPlanning/pertCharts/images/pert.svg" width="647" /><br>
<small>%%Each box is a task with its estimated time in days. An arrow from one task to another means the first must finish before the second can start.%%</small>
{% endcall %}

A PERT chart can help determine the following important information:

* The order of tasks. %%In the example above, `Final Testing` cannot begin until all coding of individual subsystems has been completed.%%
* Which tasks can be done concurrently. %%In the example above, the various subsystem designs can start independently once the `High level design` is completed.%%
* The shortest possible completion time. %%In the example above, there is a path (indicated by the shaded boxes) from start to end that determines the shortest possible completion time.%%

In addition, a PERT chart shows the {{ show_term("Critical Path") }} of the project.

<box type="definition" seamless>

**Critical Path** is the path in which any delay can directly affect the project duration. It is important to ensure tasks on the critical path are completed on time.
</box>

{% call show_example() %}

In the PERT chart given above, the shaded path is the critical path, which adds up to six days. Accordingly, the project cannot be completed in less than six days. If task `B.3` (which is not in the critical path) takes one day instead of the given 0.5, the project can still finish in six days. But if task `B.2` (which is in the critical path) takes 1.5 days instead of the given 1, the whole project will now take 6.5 days.
{% endcall %}

</div>

<div id="extras">
</div>
