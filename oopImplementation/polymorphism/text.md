<div id="title">

#### Implementing Polymorphism

</div>

<span id="prereqs"><dynamic-panel src="../../oopDesign/polymorphism/introduction/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} OOP → Polymorphism → Introduction%%" />
<dynamic-panel src="../../oopDesign/inheritance/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} OOP → Inheritance → What%%" />
<dynamic-panel src="../overriding/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → OOP → Overriding%%" /></span>

<span id="outcomes">{{glyphicon_flag}} Can implement polymorphism</span>

<div id="body">

**We can use inheritance to achieve polymorphism**.

<tip-box>

{{ icon_example }} Continuing with the example given in [<trigger trigger="click" for="modal:oopImpl-polymorphism">{{ icon_prereq }} OOP → Polymorphism → Introduction </trigger>], given below is the minimum code for `Staff`, `Admin`, and `Academic` classes that achieves the desired polymorphism.

<modal title="" id="modal:oopImpl-polymorphism">
  <include src="../../oopDesign/polymorphism/introduction/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<img src="{{baseUrl}}/oopImplementation/polymorphism/images/polymorphicPayroll.png" height="200" />
<p/>

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
</div>