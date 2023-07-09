<span id="title">PERT charts</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain PERT charts</span>

<div id="body">

**A PERT (Program Evaluation Review Technique) chart uses a graphical technique to show the order/sequence of tasks.** It is based on the simple idea of drawing a directed graph in which:

* Nodes or vertices capture the effort estimations of tasks, and
* Arrows depict the precedence between tasks

<box>

{{ icon_example }} An example PERT chart for a simple software project

<pic src="{{baseUrl}}/projectPlanning/pertCharts/images/pert.jpg" height="320" /><br>
`md` = man days

</box>

A PERT chart can help determine the following important information:

* The order of tasks. %%In the example above, `Final Testing` cannot begin until all coding of individual subsystems have been completed.%%
* Which tasks can be done concurrently. %%In the example above, the various subsystem designs can start independently once the `High level design` is completed.%%
* The shortest possible completion time. %%In the example above, there is a path (indicated by the shaded boxes) from start to end that determines the shortest possible completion time.%%
* The Critical Path. %%In the example above, the shortest possible path is also the critical path%%.

<box type="definition" seamless>

**Critical path** is the path in which any delay can directly affect the project duration. It is important to ensure tasks on the critical path are completed on time.
</box>

</div>

<div id="extras">
</div>
