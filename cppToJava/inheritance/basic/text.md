<div id="title">

#### Inheritance (Basics)

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use basic inheritance</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

{{ similar }} **A class that is derived from another class is called a _subclass_** (also a _derived_ class, _extended_ class, or _child_ class). The class from which the subclass is derived is called a _superclass_ (also a _base_ class or a _parent_ class).

{{ similar }} **A subclass inherits all the members** (fields, methods, and nested classes) from its superclass. Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass.

{{ different }} **Every class has one and only one direct superclass (_single inheritance_)**, except the `Object` class, which has no superclass, . In the absence of any other explicit superclass, every class is implicitly a subclass of `Object`. Classes can be derived from classes that are derived from classes that are derived from classes, and so on, and ultimately derived from the topmost class, `Object`. Such a class is said to be _descended_ from all the classes in the _inheritance chain_ stretching back to `Object`. Java does not support _multiple inheritance_ among classes.

{{ different }} **The `java.lang.Object` class defines and implements behavior common to all classes**—including the ones that you write. In the Java platform, many classes derive directly from `Object`, other classes derive from some of those classes, and so on, forming a hierarchy of classes.

Here is the sample code for a possible implementation of a Bicycle class that was presented in the Classes and Objects lesson:

```java
public class Bicycle {

    // the Bicycle class has two fields
    public int gear;
    public int speed;

    // the Bicycle class has one constructor
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

The keyword `extends` indicates one class inheriting from another.

A class declaration for a MountainBike class that is a subclass of Bicycle might look like this:

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

`MountainBike` inherits all the fields and methods of `Bicycle` and adds the field `seatHeight` and a method to set it. Except for the constructor, it is as if you had written a new `MountainBike` class entirely from scratch, with four fields and five methods. However, you didn't have to do all the work. This would be especially valuable if the methods in the `Bicycle` class were complex and had taken substantial time to debug.

##### Accessing Superclass Members

If your method overrides one of its superclass's methods, you can invoke the overridden method through the use of the keyword super. You can also use super to refer to a hidden field (although hiding fields is discouraged). Consider this class, Superclass:

```java
public class Superclass {

    public void printMethod() {
        System.out.println("Printed in Superclass.");
    }
}
```

Here is a subclass, called `Subclass`, that overrides `printMethod()`:

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

Within `Subclass`, the simple name `printMethod()` refers to the one declared in `Subclass`, which overrides the one in `Superclass`. So, to refer to `printMethod()` inherited from `Superclass`, `Subclass` must use a qualified name, using super as shown. Compiling and executing `Subclass` prints the following:
```
Printed in Superclass.
Printed in Subclass
```

##### Subclass Constructors

The following example illustrates how to use the `super` keyword to invoke a superclass's constructor. Recall from the `Bicycle` example that `MountainBike` is a subclass of `Bicycle`. Here is the `MountainBike` (subclass) constructor that calls the superclass constructor and then adds initialization code of its own:

```java
public MountainBike(int startHeight, int startSpeed, int startGear) {
    super(startSpeed, startGear);
    seatHeight = startHeight;
}
```

Invocation of a superclass constructor must be the first line in the subclass constructor.
The syntax for calling a superclass constructor is `super();` or `super(parameter list);`

With `super()`, the superclass no-argument constructor is called. With `super(parameter list)`, the superclass constructor with a matching parameter list is called.

Note: If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. If the super class does not have a no-argument constructor, you will get a compile-time error. Object does have such a constructor, so if Object is the only superclass, there is no problem.

If a subclass constructor invokes a constructor of its superclass, either explicitly or implicitly, you might think that there will be a whole chain of constructors called, all the way back to the constructor of `Object`. In fact, this is the case. It is called constructor chaining, and you need to be aware of it when there is a long line of class descent.

##### Access Modifiers

Access level modifiers determine whether other classes can use a particular field or invoke a particular method. There are two levels of access control:

* At the top level—`public`, or _package-private_ (no explicit modifier).
* At the member level—`public`, `private`, `protected`, or _package-private_ (no explicit modifier).

A class may be declared with the modifier `public`, in which case that class is visible to all classes everywhere. If a class has no modifier (the default, also known as _package-private_), it is visible only within its own package (packages are named groups of related classes — you will learn about them in a later lesson.)

At the member level, you can also use the `public` modifier or no modifier (_package-private_) just as with top-level classes, and with the same meaning. For members, there are two additional access modifiers: `private` and `protected`. The `private` modifier specifies that the member can only be accessed in its own class. The `protected` modifier specifies that the member can only be accessed within its own package (as with package-private) and, in addition, by a subclass of its class in another package.

The following table shows the access to members permitted by each modifier.

Modifier |	Class |	Package |	Subclass |	World
---------|-------|---------|----------|------
public	     | {{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_tick_green }}
protected	  | {{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_x_red }}
no modifier	| {{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_x_red }}      |	{{ icon_x_red }}
private	    | {{ icon_tick_green }} |	{{ icon_x_red }}      |	{{ icon_x_red }}      |	{{ icon_x_red }}

The first data column indicates whether the class itself has access to the member defined by the access level. As you can see, a class always has access to its own members. The second column indicates whether classes in the same package as the class (regardless of their parentage) have access to the member. The third column indicates whether subclasses of the class declared outside this package have access to the member. The fourth column indicates whether all classes have access to the member.

Access levels affect you in two ways. First, when you use classes that come from another source, such as the classes in the Java platform, access levels determine which members of those classes your own classes can use. Second, when you write a class, you need to decide what access level every member variable and every method in your class should have.

</blockquote>

</div>

<div id="extras">
</div>