<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Basic :two:

</div>

<div id="body">

**We can use inheritance to achieve polymorphism**.

<tip-box>

:package: Given below is the minimum code for `Staff`, `Admin`, and `Academic` classes.

<img src="{{baseUrl}}/oopDesign/polymorphism/basic/images/polymorphicPayroll.png" height="200" />
<p/>



```
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
<div>

</div>
