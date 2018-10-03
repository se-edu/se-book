<div id="title">

#### How

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Design Fundamentals → Cohesion →
What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can increase cohesion</span>

<div id="body">

**Cohesion can be present in many forms**. Some examples:
* Code related to a single concept is kept together, e.g. the `Student` component handles everything related to students.
* Code that is invoked close together in time is kept together, e.g. all code related to initializing the system is kept together.
* Code that manipulates the same data structure is kept together, e.g. the `GameArchive` component handles everything related to the storage and retrieval of game sessions.

<tip-box>

{{ icon_example }}  Suppose a Payroll application contains a class that deals with writing data to the database. If the class include some code to show an error dialog to the user if the database is unreachable, that class is not cohesive because it seems to be interacting with the user as well as the database.

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>