<span id="title">Multiplicity</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain what is the multiplicity of an association</span>

<div id="body">

<pic src="{{baseUrl}}/uml/classDiagrams/associations/multiplicity/images/notation.png" height="120" />
<p/>

Commonly used multiplicities:
* `0..1` : _optional_, can be linked to 0 or 1 objects.
* `1` : _compulsory_, must be linked to one object at all times.
* `*` : can be linked to 0 or more objects.
* `n..m` : the number of linked objects must be within `n` to `m` inclusive.

<box>

{{ icon_example }} In the diagram below, an `Admin` object administers (is in charge of) any number of students but a `Student` object must always be under the charge of exactly one `Admin` object.

<pic src="{{baseUrl}}/uml/classDiagrams/associations/multiplicity/images/adminStudent.png" width="300" />

</box>
<box>

{{ icon_example }} In the diagram below,
* Each student must be supervised by exactly one professor. i.e. There cannot be a student who doesn't have a supervisor or has multiple supervisors.
* A professor cannot supervise more than 5 students but can have no students to supervise.
* An admin can handle any number of professors and any number of students, including none.
* A professor/student can be handled by any number of admins, including none.

<pic src="{{baseUrl}}/uml/classDiagrams/associations/multiplicity/images/adminProfessorStudent.png" height="70" />

</box>


</div>

<div id="extras">
  <include src="exercises.md" />
</div>
