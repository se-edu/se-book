<div id="title">

#### Enums

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java enumerations</span>

<div id="body">

**You can define an enum type by using the `enum` keyword.** Because they are constants, the names of an enum type's fields are in uppercase letters e.g., `FLAG_SUCCESS`.

<box>

{{ icon_example }} Defining an enumeration to represent days of a week (code to be put in the `Day.java` file):

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY
}
```
Some examples of using the `Day` enumeration defined above:
```java
Day today = Day.MONDAY;
Day[] holidays = new Day[]{Day.SATURDAY, Day.SUNDAY};

switch (today) {
case SATURDAY:
case SUNDAY:
    System.out.println("It's the weekend");
    break;
default:
    System.out.println("It's a week day");
}
```

</box>

Note that while enumerations are usually a simple set of fixed values, **Java enumerations can have behaviors too**, as explained in [this tutorial from {{ oracle }}]({{ java_tutorial }}/java/javaOO/enum.html)

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>