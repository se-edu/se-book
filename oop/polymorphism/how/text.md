<div id="title">

#### How

</div>

<span id="prereqs"><panel src="../../../oop/inheritance/substitutability/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Object Oriented Programming → Inheritance → Substitutability%%" />
<panel src="../../../oop/inheritance/dynamicAndStaticBinding/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Object Oriented Programming → Inheritance → Dynamic and Static Binding%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain how substitutability operation overriding, and dynamic binding relates to polymorphism</span>

<div id="body">

**Three concepts combine to achieve polymorphism: _substitutability, operation overriding, and dynamic binding_.**

* **Substitutability:** Because of substitutability, you can write code that expects object of a parent class and yet use that code with objects of child classes. That is how polymorphism is able to _treat objects of different types as one type_.
* **Overriding:** To get polymorphic behavior from an operation, the operation in the superclass needs to be overridden in each of the subclasses. That is how overriding allows objects of different sub classes to _display different behaviors in response to the same method call_.
* **Dynamic binding**: Calls to overridden methods are bound to the implementation of the actual object's class dynamically during the runtime. That is how the polymorphic code can call the method of the parent class and yet execute the implementation of the child class.

##### <big>Implementing polymorphism</big>

**We can use inheritance to achieve polymorphism**.

<tip-box>

{{ icon_example }} Continuing with the example given in [<trigger trigger="click" for="modal:oopImpl-polymorphism">{{ icon_prereq }} OOP → Polymorphism → Introduction </trigger>], given below is the minimum code for `Staff`, `Admin`, and `Academic` classes that achieves the desired polymorphism.

<modal large title="" id="modal:oopImpl-polymorphism">
  <include src="../what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

```java
class Staff {
    String name;
    double salary;

    void adjustSalary(int percent) {
        // do nothing
    }
}

//------------------------------------------

class Admin extends Staff {

    @Override
    void adjustSalary(int percent) {
        salary = salary * percent;
    }
}

//------------------------------------------

class Academic extends Staff {

    @Override
    void adjustSalary(int percent) {
        salary = salary * percent * 2;
    }
}

//------------------------------------------

class Payroll {
    ArrayList< Staff > staff;
    // ...

    void adjustSalary(int byPercent) {
        for (Staff s: staff) {
            s.adjustSalary(byPercent);
        }
    }
}
```

</tip-box>

</div>

<div id="extras">
  <include src="resources.md" />
  <include src="exercises.md" />
</div>