<div id="title">

#### Substitutability

</div>

<span id="prereqs"><panel src="../../../oop/inheritance/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Paradigms → Object Oriented Programming → Inheritance → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain substitutability</span>

<div id="body">

**Every instance of a subclass is an instance of the superclass, but not vice-versa.** As a result, inheritance allows _substitutability_ : the ability to substitute a child class object where a parent class object is expected.

<tip-box> 

<img src="{{baseUrl}}/oop/inheritance/substitutability/images/staff.png" height="80" />
<p/>

{{ icon_example }} an `Academic` is an instance of a `Staff`, but a `Staff` is not necessarily an instance of an `Academic`.  i.e. wherever an object of the superclass is expected, it can be substituted by an object of any of its subclasses. 

The following code is valid because an `AcademicStaff` object is substitutable as a `Staff` object.

```java
Staff staff = new AcademicStaff (); // OK
```

But the following code is not valid %%&nbsp;because `staff` is declared as a `Staff` type and therefore its value may or may not be of  type `AcademicStaff`, which is the type expected by variable `academicStaff`.%%

```java
Staff staff;
...
AcademicStaff academicStaff = staff; // Not OK
```
</tip-box>

</div>

<div id="extras">
</div>