<div id="title">

#### Class-Level Members

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use class-level members</span>

<div id="body">

The content below is an extract from {{ oracle }}, with slight adaptations.

<div class="indented">

When a number of objects are created from the same class blueprint, they each have their own distinct copies of instance variables. In the case of a `Bicycle` class, the instance variables are gear, and speed. Each Bicycle object has its own values for these variables, stored in different memory locations.

**Sometimes, you want to have variables that are common to all objects. This is accomplished with the `static` modifier.** Fields that have the `static` modifier in their declaration are called _static fields_ or _class variables_. They are associated with the class, rather than with any object. Every instance of the class shares a class variable, which is in one fixed location in memory. Any object can change the value of a class variable, but class variables can also be manipulated without creating an instance of the class.

<box>

{{ icon_example }} Suppose you want to create a number of Bicycle objects and assign each a serial number, beginning with 1 for the first object. This ID number is unique to each object and is therefore an instance variable. At the same time, you need a field to keep track of how many `Bicycle` objects have been created so that you know what ID to assign to the next one. Such a field is not related to any individual object, but to the class as a whole. For this you need a class variable, numberOfBicycles, as follows:

```java
public class Bicycle {

    private int gear;
    private int speed;

    // an instance variable for the object ID
    private int id;

    // a class variable for the number of Bicycle objects instantiated
    private static int numberOfBicycles = 0;
        ...
}
```
</box>


**_Class variables_ are referenced by the class name itself**, as in `Bicycle.numberOfBicycles` This makes it clear that they are class variables.

The Java programming language supports static methods as well as static variables. Static methods, which have the `static` modifier in their declarations, should be invoked with the class name, without the need for creating an instance of the class, as in `ClassName.methodName(args)`

**The `static` modifier, in combination with the `final` modifier, is also used to define constants.** The final modifier indicates that the value of this field cannot change.For example, the following variable declaration defines a constant named PI, whose value is an approximation of pi (the ratio of the circumference of a circle to its diameter):
`static final double PI = 3.141592653589793;`

<box>

{{ icon_example }} Here is an example with class-level variables and class-level methods:

```java
public class Bicycle {

    private int gear;
    private int speed;

    private int id;

    private static int numberOfBicycles = 0;


    public Bicycle(int startSpeed, int startGear) {
        gear = startGear;
        speed = startSpeed;

        numberOfBicycles++;
        id = numberOfBicycles;
    }

    public int getID() {
        return id;
    }

    public static int getNumberOfBicycles() {
        return numberOfBicycles;
    }

    public int getGear(){
        return gear;
    }

    public void setGear(int newValue) {
        gear = newValue;
    }

    public int getSpeed() {
        return speed;
    }

    // ...

}
```
</box>

</div>

<tip-box>

:bulb: Explanation of **`System.out.println(...)`**:

* `out` is a class-level public attribute of the `System` class.
* `println` is a instance level method of the `out` object.

</tip-box>



</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>