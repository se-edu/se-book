<div id="title">

#### Inheritance (Basics)

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use basic inheritance</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<div class="indented">

{{ similar }} **A class that is derived from another class is called a _subclass_** (also a _derived_ class, _extended_ class, or _child_ class). The class from which the subclass is derived is called a _superclass_ (also a _base_ class or a _parent_ class).

{{ similar }} **A subclass inherits all the members** (fields, methods, and nested classes) from its superclass. Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass.

{{ different }} **Every class has one and only one direct superclass (_single inheritance_)**, except the `Object` class, which has no superclass, . In the absence of any other explicit superclass, every class is implicitly a subclass of `Object`. Classes can be derived from classes that are derived from classes that are derived from classes, and so on, and ultimately derived from the topmost class, `Object`. Such a class is said to be _descended_ from all the classes in the _inheritance chain_ stretching back to `Object`. Java does not support _multiple inheritance_ among classes.

{{ different }} **The `java.lang.Object` class defines and implements behavior common to all classes**—including the ones that you write. In the Java platform, many classes derive directly from `Object`, other classes derive from some of those classes, and so on, forming a hierarchy of classes.

**The keyword `extends` indicates one class inheriting from another.**

<box>

{{ icon_example }} Here is the sample code for a possible implementation of a `Bicycle` class and a `MountainBike` class that is a subclass of the `Bicycle`:

```java
public class Bicycle {

    public int gear;
    public int speed;

    public Bicycle(int startSpeed, int startGear) {
        gear = startGear;
        speed = startSpeed;
    }

    public void setGear(int newValue) {
        gear = newValue;
    }

    public void applyBrake(int decrement) {
        speed -= decrement;
    }

    public void speedUp(int increment) {
        speed += increment;
    }

}
```

```java
public class MountainBike extends Bicycle {

    // the MountainBike subclass adds one field
    public int seatHeight;

    // the MountainBike subclass has one constructor
    public MountainBike(int startHeight, int startSpeed, int startGear) {
        super(startSpeed, startGear);
        seatHeight = startHeight;
    }

    // the MountainBike subclass adds one method
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }
}
```
</box>

**A subclass inherits all the fields and methods of the superclass.** In the example above, `MountainBike` inherits all the fields and methods of `Bicycle` and adds the field `seatHeight` and a method to set it.

##### Accessing Superclass Members

**If your method overrides one of its superclass's methods, you can invoke the overridden method through the use of the keyword `super`.** You can also use `super` to refer to a <tooltip content="when both the superclass and the subclass use the same variable name, the superclass variables is said to be _hidden/shadowed_ by the subclass variable">hidden field</tooltip> (although hiding fields is discouraged).

<box>

{{ icon_example }} Consider this class, `Superclass` and a subclass, called `Subclass`, that overrides `printMethod()`:

```java
public class Superclass {

    public void printMethod() {
        System.out.println("Printed in Superclass.");
    }
}
```
```java
public class Subclass extends Superclass {

    // overrides printMethod in Superclass
    public void printMethod() {
        super.printMethod();
        System.out.println("Printed in Subclass");
    }
    public static void main(String[] args) {
        Subclass s = new Subclass();
        s.printMethod();
    }
}
```
{{ icon_output }}
```
Printed in Superclass.
Printed in Subclass
```

Within `Subclass`, the simple name `printMethod()` refers to the one declared in `Subclass`, which overrides the one in `Superclass`. So, to refer to `printMethod()` inherited from `Superclass`, `Subclass` must use a qualified name, using `super` as shown. Compiling and executing `Subclass` prints the following:

</box>

##### Subclass Constructors

**A subclass constructor can invoke the superclass constructor.** Invocation of a superclass constructor must be the first line in the subclass constructor.
The syntax for calling a superclass constructor is `super()` %%(which invokes the no-argument constructor of the superclass)%% or `super(parameter list)` %%(to invoke the superclass constructor with a matching parameter list)%%.

<box>

{{ icon_example }} The following example illustrates how to use the `super` keyword to invoke a superclass's constructor. Recall from the `Bicycle` example that `MountainBike` is a subclass of `Bicycle`. Here is the `MountainBike` (subclass) constructor that calls the superclass constructor and then adds initialization code of its own:

```java
public MountainBike(int startHeight, int startSpeed, int startGear) {
    super(startSpeed, startGear);
    seatHeight = startHeight;
}
```
</box>

Note: If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. If the superclass does not have a no-argument constructor, you will get a compile-time error. `Object` does have such a constructor, so if `Object` is the only superclass, there is no problem.

##### Access Modifiers (simplified)

**Access level modifiers determine whether other classes can use a particular field or invoke a particular method.** Given below is a simplified version of Java access modifiers, ==assuming you have not yet started placing your classes in different packages== i.e., all classes are places in the root level. A full explanation of access modifiers is given in a later topic.

There are two levels of access control:

1. **At the class level**:
   * **`public`**: the class is visible to all other classes
   * **no modifier**: same as `public`<br><br>

2. **At the member level**:
   * **`public`** : the class is visible to all other classes
   * **no modifier**: same as `public`
   * **`protected`**: same as `public`
   * **`private`**: the member can only be accessed in its own class

</div>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>