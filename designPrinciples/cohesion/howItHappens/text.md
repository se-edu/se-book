<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Principles :arrow_right: Cohesion :arrow_right:</div>

<div id="title">

#### How it happens :two:

</div>

<div id="body">

Cohesion can be present in many forms. For example,

*	Code related to a single concept is kept together, e.g. the Student component handles everything related to students.
*	Code that is invoked close together in time is kept together, e.g. all code related to initializing the system is kept together.
*	Code that manipulates the same data structure is kept together, e.g. the GameArchive component handles everything related to the storage and retrieval of game sessions.

The components in the following sequence diagram show low cohesion because user interactions are handled by many components. Its cohesion can be improved by moving all user interactions to the UI component.

<tip-box>

Example:

<img src="{{baseUrl}}/designPrinciples/cohesion/howItHappens/images/uiLogicStorage.png" height="220" />
<p/>

</tip-box>

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

</panel>

</div>

</div>
