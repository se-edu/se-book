<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Inheritance: Interfaces

<div id="main">

In OO, an _interface_ is a behavior specification.

<panel header="UML: Class Diagrams: Interface">
  <include src="../../../uml/classDiagrams/interfaces/topicPanel.md" />
</panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oop/inheritance/interfaces/images/staff.png" height="250" />
<p/>

</tip-box>

If a class implements all operations specified in an interface, it is said that the class ‘implements’ the interface. Another term for this is _interface inheritance_. E.g. `AcademicStaff` _implements_ the `SalariedStaff` interface.

Similar to the class inheritance, a class implementing an interface too results in an _is-a_ relationship. E.g. `AcademicStaff` _is a_ `SalariedStaff`.

Java allows multiple inheritance among interfaces. It also allows a class to implement multiple interfaces. The design given below is allowed in Java.

<tip-box>

Example:

<img src="{{baseUrl}}/oop/inheritance/interfaces/images/studentStaff.png" height="250" />
<p/>

</tip-box>

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
