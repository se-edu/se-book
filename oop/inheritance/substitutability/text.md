<span id="title">Substitutability</span>

<span id="prereqs"><panel src="../../../oop/inheritance/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Paradigms → Object Oriented Programming → Inheritance → What%%" popup-url="{{ baseUrl }}/oop/inheritance/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain substitutability</span>

<div id="body">

**Every instance of a subclass is an instance of the superclass, but not vice versa.** As a result, inheritance allows _substitutability_: the ability to substitute a child class object where a parent class object is expected.

<box>

<puml>
@startuml
skinparam classAttributeIconSize 0
skinparam roundCorner 0
skinparam backgroundcolor transparent
skinparam shadowing false
hide circle
Staff <|-- AcademicStaff
Staff <|-- AdminStaff
hide Staff methods
hide Staff fields
hide AcademicStaff methods
hide AcademicStaff fields
hide AdminStaff methods
hide AdminStaff fields
@enduml
</puml>

{{ icon_example }} An `AcademicStaff` is an instance of a `Staff`, but a `Staff` is not necessarily an instance of an `AcademicStaff`. i.e., wherever an object of the superclass is expected, it can be substituted by an object of any of its subclasses.

The following code is valid because an `AcademicStaff` object is substitutable as a `Staff` object.

```java
Staff staff = new AcademicStaff(); // OK
```

But the following code is not valid %%because `staff` is declared as a `Staff` type and therefore its value may or may not be of  type `AcademicStaff`, which is the type expected by variable `academicStaff`.%%

```java
Staff staff;
...
AcademicStaff academicStaff = staff; // Not OK
```
</box>

</div>

<div id="extras">
</div>
