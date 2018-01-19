<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Activity Diagrams :two:

</div>

<div id="body">

**Software projects often involve _workflows_.** Workflows define the flow or a connected sequence of steps in which a process or a set of tasks is executed.

<tip-box> 

:package: A software that automates the work of an insurance company needs to take into account the workflow of processing an insurance claim.

:package: The algorithm of a price of code represents the workflow (i.e. the execution flow) of the code.

</tip-box>

Understanding such workflows is important for the success of the software project. **A UML Activity diagram (AD) can model workflows.&nbsp;** %%_Flow charts_ is another type of diagrams that can model workflows. Activity diagrams is the UML equivalent of flow charts.%%


<tip-box> 

:package: An example activity diagram:

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Activity_conducting.svg"><br>
<sub>[[source:wikipeida](https://en.wikipedia.org/wiki/Activity_diagram)]</sub>

</tip-box>

The most basic activity diagram is simply a linear sequence of actions. An AD shows such a linear path using action nodes connected using directed edges, starting from a _start_ node, ending with an _end_ node. 

<panel src="../../../uml/activityDiagrams/basicNotations/linearPaths/full.md" header=":mortar_board: UML → Activity Diagrams → Basic Notations → Linear Paths" expanded />

Some workflows have alternate paths where only one of the alternate paths is taken based on some condition. ADs use _branch_ and _merge_ nodes to show such alternate paths.

<panel src="../../../uml/activityDiagrams/basicNotations/alternatePaths/full.md" header=":mortar_board: UML → Activity Diagrams → Basic Notations → Alternative Paths" expanded />

In some workflows, multiple paths happen in parallel. ADs use _fork_ and _join_ nodes to show such paths. 

<panel src="../../../uml/activityDiagrams/basicNotations/parallelPaths/full.md" header=":mortar_board: UML → Activity Diagrams → Basic Notations → Parallel Paths" expanded />

</div>

<div id="extras">
  <include src="exercises.md" />
</div>

</div>
