<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Principles :arrow_right: Coupling :arrow_right:</div>

<div id="title">

#### Why we care :one:

</div>

<div id="body">

Highly coupled (also referred to as tightly coupled or strongly coupled) systems display the following disadvantages:

*	A change in one module usually forces changes in other modules coupled to it (i.e. a ripple effect).
*	Integration is harder because multiple components coupled with each other have to be integrated at the same time.
*	Testing and reuse of the module is harder due to its dependence on other modules.

In the case of high-coupling (i.e. relatively high dependency), a change in one component may require changes in other coupled components. Therefore, we should strive to achieve a low-coupled design.

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

</panel>

</div>

</div>
