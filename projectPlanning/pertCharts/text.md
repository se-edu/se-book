<div id="title">

#### PERT Charts

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain PERT charts</span>

<div id="body">

**PERT (Program Evaluation Review Technique) chart uses a graphical technique to show the order/sequence of tasks.** It is based on a simple idea of drawing a directed graph in which:

* Node or vertex captures the effort estimation of a task, and
* Arrow depicts the precedence between tasks

<tip-box>

{{ icon_example }} an example PERT chart for a simple software project

<img src="{{baseUrl}}/projectPlanning/pertCharts/images/pert.jpg" height="320" /><br>
`md` = man days

</tip-box>

A PERT chart can help determine the following important information:

* The order of tasks. %%&nbsp;In the example above, `Final Testing` cannot begin until all coding of individual subsystems have been completed.%%
* Which tasks can be done concurrently. %%&nbsp;In the example above, the various subsystem designs can start independently once the `High level design` is completed.%%
* The shortest possible completion time. %%&nbsp;In the example above, there is a path (indicated by the shaded boxes) from start to end that determines the shortest possible completion time.%%
* The Critical Path. %%&nbsp;In the example above, the shortest possible path is also the critical path%%.
 
<tip-box type="definition"> 

**Critical path** is the path in which any delay can directly affect the project duration. It is important to ensure tasks on the critical path are completed on time.

</tip-box>

</div>

<div id="extras">
</div>