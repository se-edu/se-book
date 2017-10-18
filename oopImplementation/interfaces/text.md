<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Interfaces :one:

</div>

<div id="body">


**Java allows multiple inheritance among interfaces. A Java class can _implement_ multiple interfaces** (and inherit from one class). 

<tip-box>

:package: The design below is allowed by Java.

<img src="{{baseUrl}}/oopDesign/inheritance/interfaces/images/studentStaff.png" height="250" />
<p/>

1. `Staff` interface inherits (note the solid lines) the interfaces `TaxPayer` and `Citizen`.
2. `TA` class implements both `Student` interface and the `Staff` interface. 
3. Because of point 1 above, `TA` class has to implement all methods in the interfaces `TaxPayer` and `Citizen`.
4. Because of points 1,2,3, a `TA` _is a_ `Staff`, _is a_ `TaxPayer` and _is a_ `Citizen`. 

</tip-box>

**Java uses the `interface` keyword to declare interfaces and `implements` keyword to indicate that a class implements a given interface.** Inheritance among interfaces uses the `extends` keyword, just like inheritance among classes.

<tip-box> 

:package: The code for the example design given in the previous example:

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

</div>
