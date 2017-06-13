<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Polymorphism: Basics

<div id="main">

To retain the multiple types while still allowing some parts of the system to treat them as one type, _inheritance_ can be used.

<tip-box>

Example:

<img src="{{baseUrl}}/oop/polymorphism/basics/images/staff.png" height="200" />
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


<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

  <panel header=":package: Resources" expandable type="seamless">
    <include src="resources.md" />
  </panel>

</panel>

</div>
</div>
