<div id="title">

#### Enums

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java enumerations</span>

<div id="body">

>An enum type is a special data type that enables for a variable to be a set of predefined constants. The variable must be equal to one of the values that have been predefined for it. Common examples include compass directions (values of `NORTH`, `SOUTH`, `EAST`, and `WEST`) and the days of the week.
>
>Because they are constants, the names of an enum type's fields are in uppercase letters.
>In the Java programming language, you define an enum type by using the `enum` keyword. For example, you would specify a days-of-the-week enum type as:
>```java
>public enum Day {
>    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
>    THURSDAY, FRIDAY, SATURDAY
>}
>```
>
>You should use enum types any time you need to represent a fixed set of constants. That includes natural enum types such as the planets in our solar system and data sets where you know all possible values at compile time—for example, the choices on a menu, command line flags, and so on.
>{{ oracle }}


Note that while enumerations are usually a simple set of fixed values, Java enumerations can have behaviors too. To learn how to implement enumerations, read [this tutorial (from Oracle)](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)

</div>

<div id="extras">
</div>