<div id="title">

#### Identifying

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use use cases to list functional requirements of a simple system</span>

<div id="body">

A use case is an interaction between a system and its _actors_.

**Actors in Use Cases**

<tip-box type="definition">
<include src="../../../common/definitions.md#def-actor" />
</tip-box>

<tip-box>

{{ icon_example }} Some example actors for a Learning Management System

* Actors: Guest, Student, Staff, Admin, <tooltip content="an exam management system">ExamSys</tooltip>, <tooltip content="a library management system">LibSys</tooltip>.

</tip-box>

**A use case can involve multiple actors.**

<tip-box>

* Software System: LearnSys
* Use case: UC01 conduct survey
* Actors: ==Staff, Student==

</tip-box>

**An actor can be involved in many use cases.**

<tip-box>

* Software System: LearnSys
* Actor: Staff
* Use cases: ==UC01 conduct survey, UC02 Set Up Course Schedule, UC03 Email Class, ...==

</tip-box>

**A single person/system can play many roles.**

<tip-box>

* Software System: LearnSys
* Person: ==a student==
* Actors (or Roles): Student, Guest, Tutor

</tip-box>

**Many persons/systems can play a single role.**

<tip-box>

* Software System: LearnSys
* Actor(or role) : Student
* Persons that can play this role : ==undergraduate student, graduate student, a staff member doing a part-time course, exchange student==

</tip-box>

<!-- TODO: {some guidance on identifying actors and use cases} -->

**Use cases can be specified at _various levels of detail_.**

<tip-box>

{{ icon_example }} Consider the three use cases given below. Clearly, (a) is at a higher level than (b) and (b) is at a higher level than (c).

* System: LearnSys
* Use cases:<br>
  a. Conduct a survey<br>
  b. Take the survey<br>
  c. Answer survey question

</tip-box>


:bulb: While modeling user-system interactions,
* Start with high level use cases and progressively work toward lower level use cases.
* Be mindful at which level of details you are working on and not to mix use cases of different levels.


</div>

<div id="extras">

<include src="exercises.md" />

</div>