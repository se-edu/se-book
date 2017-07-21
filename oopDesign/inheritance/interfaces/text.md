<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Inheritance :arrow_right:</div>

<div id="title">

#### Interfaces :two:

</div>

<div id="body">

In OO, an _interface_ is a behavior specification.

<dynamic-panel src="../../../uml/classDiagrams/interfaces/topicPanel.md" header="UML: Class Diagrams: Interface" is-open></dynamic-panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/interfaces/images/staff.png" height="250" />
<p/>

</tip-box>

If a class implements all operations specified in an interface, it is said that the class ‘implements’ the interface. Another term for this is _interface inheritance_. E.g. `AcademicStaff` _implements_ the `SalariedStaff` interface.

Similar to the class inheritance, a class implementing an interface too results in an _is-a_ relationship. E.g. `AcademicStaff` _is a_ `SalariedStaff`.

Java allows multiple inheritance among interfaces. It also allows a class to implement multiple interfaces. The design given below is allowed in Java.

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/interfaces/images/studentStaff.png" height="250" />
<p/>

</tip-box>

</div>

<div id="extras">
<div>

</div>
