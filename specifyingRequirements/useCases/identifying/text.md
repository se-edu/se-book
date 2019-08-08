<span id="title">Identifying</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use use cases to list functional requirements of a simple system</span>

<div id="body">

A use case is an interaction between a system and its _actors_.

**Actors in Use Cases**

<box type="definition">
<include src="../../../common/definitions.md#def-actor" />
</box>

<box>

{{ icon_example }} Some example actors for a Learning Management System
<div class="text-monospace">

* Actors: Guest, Student, Staff, Admin, <tooltip content="an exam management system">ExamSys</tooltip>, <tooltip content="a library management system">LibSys</tooltip>.
</div>
</box>

**A use case can involve multiple actors.**

<box>
<div class="text-monospace">

* Software System: LearnSys
* Use case: UC01 conduct survey
* Actors: ==Staff, Student==
</div>
</box>

**An actor can be involved in many use cases.**

<box>
<div class="text-monospace">

* Software System: LearnSys
* Actor: Staff
* Use cases: ==UC01 conduct survey, UC02 Set Up Course Schedule, UC03 Email Class, ...==
</div>
</box>

**A single person/system can play many roles.**

<box>
<div class="text-monospace">

* Software System: LearnSys
* Person: ==a student==
* Actors (or Roles): Student, Guest, Tutor
</div>
</box>

**Many persons/systems can play a single role.**

<box>
<div class="text-monospace">

* Software System: LearnSys
* Actor(or role) : Student
* Persons that can play this role : ==undergraduate student, graduate student, a staff member doing a part-time course, exchange student==
</div>
</box>

<!-- TODO: {some guidance on identifying actors and use cases} -->

**Use cases can be specified at _various levels of detail_.**

<box>

{{ icon_example }} Consider the three use cases given below. Clearly, (a) is at a higher level than (b) and (b) is at a higher level than (c).
<div class="text-monospace">

* System: LearnSys
* Use cases:<br>
  a. Conduct a survey<br>
  b. Take the survey<br>
  c. Answer survey question
</div>
</box>


{{ icon_tip }} While modeling user-system interactions,
* Start with high level use cases and progressively work toward lower level use cases.
* Be mindful at which level of details you are working on and not to mix use cases of different levels.


</div>

<div id="extras">

<include src="exercises.md" />

</div>