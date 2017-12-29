<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Interfaces :two:

</div>

<div id="body">

**An _interface_ is a behavior specification** i.e. a collection of <tooltip content="Just the method signature without any implementation">method specifications</tooltip>. If a class <tooltip content="implements all methods specified in an interface">implements the interface</tooltip>, it means the class is able to support the behaviors specified by the said interface.  

>There are a number of situations in software engineering when it is important for disparate groups of programmers to agree to a "contract" that spells out how their software interacts. Each group should be able to write their code without any knowledge of how the other group's code is written. Generally speaking, interfaces are such contracts. <sub>--[Oracle Docs on Java](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)<sub>

<dynamic-panel src="../../../uml/classDiagrams/interfaces/what/full.md" header=":mortar_board: UML → Class Diagrams → Interface" />
<p/>

<tip-box>

:package: `SalariedStaff` is an interface that contains two methods `setSalary(int)` and `getSalary()`. `AcademicStaff` implements the `SalariedStaff` interface. %%&nbsp;That means an `AcademicStaff` object is able to support the behaviors `setSalary(int)` and `getSalary()`. That's why the same two methods also appear under the methods implemented by the `AcademicStaff` class (in blue)%%

<img src="{{baseUrl}}/oopDesign/inheritance/interfaces/images/staff.png" height="250" />
<p/>

</tip-box>

**A class implementing an interface results in an _is-a_ relationship**, just like in class inheritance.

<tip-box>

:package: In the example above, `AcademicStaff` _is a_ `SalariedStaff`.  An `AcademicStaff` object can be used anywhere a `SalariedStaff` object is expected e.g. `SalariedStaff ss = new AcademicStaff()`. 

%%&nbsp;Similarly, `AdminStaff` _is a_ `SalariedStaff` too.%%

</tip-box>


</div>

<div id="extras">
</div>

</div>
