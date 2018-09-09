<div id="title">

#### Interfaces

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain interfaces</span>

<div id="body">

**An _interface_ is a behavior specification** i.e. a collection of <tooltip content="Just the method signature without any implementation">method specifications</tooltip>. If a class <tooltip content="implements all methods specified in an interface">implements the interface</tooltip>, it means the class is able to support the behaviors specified by the said interface.  

>There are a number of situations in software engineering when it is important for disparate groups of programmers to agree to a "contract" that spells out how their software interacts. Each group should be able to write their code without any knowledge of how the other group's code is written. Generally speaking, interfaces are such contracts. <sub>--[Oracle Docs on Java]({{ java_tutorial }}/java/IandI/createinterface.html)<sub>

<tip-box>

{{ icon_example }} Suppose `SalariedStaff` is an interface that contains two methods `setSalary(int)` and `getSalary()`. `AcademicStaff` can declare itself as _implementing_ the `SalariedStaff` interface, which means the `AcademicStaff` class must implement all the methods specified by the `SalariedStaff` interface i.e., `setSalary(int)` and `getSalary()`. 

</tip-box>

**A class implementing an interface results in an _is-a_ relationship**, just like in class inheritance.

<tip-box>

{{ icon_example }} In the example above, `AcademicStaff` _is a_ `SalariedStaff`.  An `AcademicStaff` object can be used anywhere a `SalariedStaff` object is expected e.g. `SalariedStaff ss = new AcademicStaff()`. 

</tip-box>


</div>

<div id="extras">
</div>