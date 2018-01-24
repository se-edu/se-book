<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Substitutability :two:

</div>

<div id="body">

**Every instance of a subclass is an instance of the superclass, but not vice-versa.** As a result, inheritance allows _substitutability_ : the ability to substitute a child class object where a parent class object is expected.

<tip-box> 

<img src="{{baseUrl}}/oopDesign/inheritance/substitutability/images/staff.png" height="80" />
<p/>

:package: an `Academic` is an instance of a `Staff`, but a `Staff` is not necessarily an instance of an `Academic`.  i.e. wherever an object of the superclass is expected, it can be substituted by an object of any of its subclasses. 

The following code is valid because an `AcademicStaff` object is substitutable as a `Staff` object.

```java
Staff staff = new AcademicStaff (); // OK
```

But the following code is not valid %%&nbsp;because `staff` is declared as a `Staff` type and therefore its value may or may not be of  type `AcademicStaff`, which is the type expected by variable `academicStaff`.%%

```
Staff staff;
...
AcademicStaff academicStaff = staff; // Not OK
```
</tip-box>

</div>

<div id="extras">
</div>

</div>
