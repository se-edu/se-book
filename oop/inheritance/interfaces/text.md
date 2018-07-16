<div id="title">

#### Interfaces

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain interfaces</span>

<div id="body">

**An _interface_ is a behavior specification** i.e. a collection of <tooltip content="Just the method signature without any implementation">method specifications</tooltip>. If a class <tooltip content="implements all methods specified in an interface">implements the interface</tooltip>, it means the class is able to support the behaviors specified by the said interface.  

>There are a number of situations in software engineering when it is important for disparate groups of programmers to agree to a "contract" that spells out how their software interacts. Each group should be able to write their code without any knowledge of how the other group's code is written. Generally speaking, interfaces are such contracts. <sub>--[Oracle Docs on Java](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)<sub>

<tip-box>

{{ icon_example }} Suppose `SalariedStaff` is an interface that contains two methods `setSalary(int)` and `getSalary()`. `AcademicStaff` can declare itself as _implementing_ the `SalariedStaff` interface, which means the `AcademicStaff` class must implement all the methods specified by the `SalariedStaff` interface i.e., `setSalary(int)` and `getSalary()`. 

</tip-box>

**A class implementing an interface results in an _is-a_ relationship**, just like in class inheritance.

<tip-box>

{{ icon_example }} In the example above, `AcademicStaff` _is a_ `SalariedStaff`.  An `AcademicStaff` object can be used anywhere a `SalariedStaff` object is expected e.g. `SalariedStaff ss = new AcademicStaff()`. 

</tip-box>

##### <big>Implementing interfaces</big>

**Java allows multiple inheritance among interfaces. A Java class can _implement_ multiple interfaces** (and inherit from one class). 

<tip-box>

{{ icon_example }} The design below is allowed by Java. %%In case you are not familiar with UML notation used: solid lines indicate normal inheritance; dashed lines indicate interface inheritance; the triangle points to pare parent.%%

<img src="{{baseUrl}}/oop/inheritance/interfaces/images/studentStaff.png" height="250" />
<p/>

1. `Staff` interface inherits (note the solid lines) the interfaces `TaxPayer` and `Citizen`.
2. `TA` class implements both `Student` interface and the `Staff` interface. 
3. Because of point 1 above, `TA` class has to implement all methods in the interfaces `TaxPayer` and `Citizen`.
4. Because of points 1,2,3, a `TA` _is a_ `Staff`, _is a_ `TaxPayer` and _is a_ `Citizen`. 

</tip-box>

**Java uses the `interface` keyword to declare interfaces and `implements` keyword to indicate that a class implements a given interface.** Inheritance among interfaces uses the `extends` keyword, just like inheritance among classes.

<tip-box> 

{{ icon_example }} The code for the example design given in the previous example:

```java
interface TaxPayer {
    void payTax();
}

interface Citizen {
    void vote();
}

interface Staff extends Citizen, TaxPayer{
    void work();
}

interface Student {
    void learn();
}

class TA implements Student, Staff{

    @Override
    public void payTax() {
        //...
    }

    @Override
    public void vote() {
        //...
    }

    @Override
    public void work() {
        //...
    }

    @Override
    public void learn() {
        //...
    }
}
```

</tip-box>


</div>

<div id="extras">
  <include src="resources.md" />
</div>