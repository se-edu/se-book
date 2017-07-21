<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Polymorphism :arrow_right:</div>

<div id="title">

#### Basic :two:

</div>

<div id="body">

To retain the multiple types while still allowing some parts of the system to treat them as one type, _inheritance_ can be used.

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/polymorphism/basic/images/staff.png" height="200" />
<p/>

Given below is the minimum code for `Staff`, `Admin`, and `Academic` classes.

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
```

</tip-box>

</div>

<div id="extras">
<div>

</div>
