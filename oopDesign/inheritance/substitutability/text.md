<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Inheritance :arrow_right:</div>

<div id="title">

#### Substitutability :two:

</div>

<div id="body">

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/substitutability/images/staff.png" height="50" />
<p/>

</tip-box>

Every instance of a subclass is an instance of the superclass, but not vice-versa. For example, an `Academic` is an instance of a `Staff`, but a `Staff` is not necessarily an instance of an `Academic`. As a result, inheritance allows _substitutability_. i.e. wherever an object of the superclass is expected, it can be substituted by an object of any of its subclasses. For example, the following code is valid because an `AcademicStaff` object is substitutable as a `Staff` object.

```
Staff staff = new AcademicStaff (); // OK
```

But the following code is not because `staff` is declared as a `Staff` type (see above) and therefore its value may or may not be of  type `AcademicStaff`, which is the type expected by variable `academicStaff`.

```
AcademicStaff academicStaff = staff; // Not OK
```

{link up with Liskov Substitution Principle}

</div>

</div>
