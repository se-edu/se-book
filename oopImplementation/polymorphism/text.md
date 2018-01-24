<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Implementing Polymorphism :two:

</div>

<div id="body">

**We can use inheritance to achieve polymorphism**.

<tip-box>

:package: Continuing with the example given in [<trigger trigger="click" for="modal:oopImpl-polymorphism">:mortar_board: OOP → Polymorphism → Introduction </trigger>], given below is the minimum code for `Staff`, `Admin`, and `Academic` classes that achieves the desired polymorphism.

<modal title="" id="modal:oopImpl-polymorphism">
  <include src="../../oopDesign/polymorphism/introduction/full.md"/>
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

</div>
