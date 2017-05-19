<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Identifying use cases for a system

<div id="main">

A use case is an interaction between a system and its _actors_.

**Actors in Use Cases**

<tip-box type="primary">
<include src="../../../common/definitions.md#def-actor" />
</tip-box>

<tip-box>

* Software system: LearnSys (a fictitious
<popover effect="fade" placement="right" content="Learning Management System">
    LMS
</popover>
).
* Actors: Guest, Student, Staff, Admin, ExamSys (an exam management system), LibSys (a library management system).

</tip-box>

A use case can involve multiple actors.

<tip-box>

* Software System: LearnSys
* Use case: UC01 conduct survey
* Actors: ==Staff, Student==

</tip-box>

An actor can be involved in many use cases.

<tip-box>

* Software System: LearnSys
* Actor: Staff
* Use cases: ==UC01 conduct survey, UC02 Set Up Course Schedule, UC03 Email Class, ...==

</tip-box>

A single person/system can play many roles.

<tip-box>

* Software System: LearnSys
* Person: ==a student==
* Actors (or Roles): Student, Guest, Tutor

</tip-box>

Many persons/systems can play a single role.

<tip-box>

* Software System: LearnSys
* Actor(or role) : Student
* Persons that can play this role : ==undergraduate student, graduate student, a staff member doing a part-time course, exchange student==

</tip-box>

{some guidance on identifying actors and use cases}

Use cases can be specified at _various levels of detail_.

<tip-box>

* System: LearnSys
* Use case:
  1. Conduct a survey
  2. Take the survey
  3. Answer survey question

</tip-box>

Consider the three use cases given above for the LearnSys system. Clearly, (a) is at a higher level than (b) and (b) is at a higher level than (c).

<tip-box type="warning">

While modeling user-system interactions,

:bulb: Start with high level use cases and progressively work toward lower level use cases. <p/>
:bulb: Be mindful at which level of details you are working on and not to mix use cases of different levels.

</tip-box>



{some guidance on using diagrams vs other means}


<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

  <panel header=":package: Resources" expandable type="seamless">
    <include src="resources.md" />
  </panel>

</panel>

</div>

</div>
