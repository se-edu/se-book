<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Associations: Multiplicity

<div id="main">

A class diagram can also indicate the _multiplicity_ of an association. Multiplicity is the number of objects of a class that participate in the association.

Commonly used multiplicities:
*	0..1 : optional, can be linked to 0 or 1 objects
*	1 : compulsory, must be linked to one object at all times.
*	* : can be linked to 0 or more objects.
*	n..m : the number of linked objects must be n to m inclusive

<tip-box>

In the diagram below, an Admin object administers (in charge of) any number of students but a Student object must always be under the charge of exactly one Admin object

<img src="{{baseUrl}}/uml/classDiagrams/associations/multiplicity/images/adminStudent.png" height="100" />
<p/>

Example:
*	Each Student must be supervised by a Professor.
*	Students have matriculation numbers.  A Professor cannot supervise more than 5 students.
*	Admin staff handles Professors as well.

<img src="{{baseUrl}}/uml/classDiagrams/associations/multiplicity/images/adminProfessorStudent.png" height="70" />
<p/>

</tip-box>

<img src="{{baseUrl}}/uml/classDiagrams/associations/multiplicity/images/association.png" height="120" />
<p/>

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
