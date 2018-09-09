<div id="title">

#### Interfaces

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use interfaces in Java</span>

<div id="body">

The text given in this section borrows some explanations and code examples from the {{ oracle }}.

In Java, **an _interface_ is a reference type, similar to a class, mainly containing method signatures.** Defining an interface is similar to creating a new class except it uses the keyword `interface` in place of `class`.

<box>

{{ icon_example }} Here is an interface named `DrivableVehicle` that defines methods needed to drive a vehicle.

```java
public interface DrivableVehicle {
    void turn(Direction direction);
    void changeLanes(Direction direction);
    void signalTurn(Direction direction, boolean signalOn);
    // more method signatures
}
```
Note that the method signatures have no braces and are terminated with a semicolon.
</box>

**Interfaces cannot be instantiated—they can only be implemented by classes**. When an instantiable class implements an interface, indicated by the keyword `implements`, it provides a method body for each of the methods declared in the interface.

<box>

{{ icon_example }} Here is how a class `CarModelX` can implement the `DrivableVehicle` interface.


```java
public class CarModelX implements DrivableVehicle {

    @Override
    public void turn(Direction direction) {
       // implementation
    }

    // implementation of other methods
}
```

</box>

**An interface can be used as a type** e.g., `DrivableVechile dv = new CarModelX();`.


**Interfaces can inherit from other interfaces** using the `extends` keyword, similar to a class inheriting another.

<box>

{{ icon_example }} Here is an interface named `SelfDrivableVehicle` that inherits the `DrivableVehicle` interface.

```java
public interface SelfDrivableVehicle extends DrivableVehicle {
   void goToAutoPilotMode();
}
```
Note that the method signatures have no braces and are terminated with a semicolon.
</box>


Furthermore, **Java allows multiple inheritance among interfaces.** A Java interface can inherit multiple other interfaces. **A Java class can _implement_ multiple interfaces** (and inherit from one class).

<box>

{{ icon_example }} The design below is allowed by Java. %%In case you are not familiar with UML notation used: solid lines indicate normal inheritance; dashed lines indicate interface inheritance; the triangle points to the parent.%%

<img src="{{baseUrl}}/oop/inheritance/interfaces/images/studentStaff.png" height="250" />
<p/>

1. `Staff` interface inherits (note the solid lines) the interfaces `TaxPayer` and `Citizen`.
2. `TA` class implements both `Student` interface and the `Staff` interface.
3. Because of point 1 above, `TA` class has to implement all methods in the interfaces `TaxPayer` and `Citizen`.
4. Because of points 1,2,3, a `TA` _is a_ `Staff`, _is a_ `TaxPayer` and _is a_ `Citizen`.

</box>

**Interfaces can also contain <trigger trigger="click" for="modal:javaInterfaces-constants">constants</trigger> and static methods**.

<modal large title="%%Textbook »%%" id="modal:javaInterfaces-constants">
  <include src="../../misc/constants/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

{{ icon_example }} This example adds a constant `MAX_SPEED` and a static method `isSpeedAllowed` to the interface `DrivableVehicle`.

```java
public interface DrivableVehicle {

    int MAX_SPEED = 150;

    static boolean isSpeedAllowed(int speed){
        return speed <= MAX_SPEED;
    }

    void turn(Direction direction);
    void changeLanes(Direction direction);
    void signalTurn(Direction direction, boolean signalOn);
    // more method signatures
}
```

</box>

{{ icon_info }} Interfaces can contain [_default_ method implementations]({{ java_tutorial }}/java/IandI/defaultmethods.html) and _nested types_. They are not covered here.

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>