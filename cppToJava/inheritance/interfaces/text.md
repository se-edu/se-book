<div id="title">

#### Interfaces

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use interfaces in Java</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<div class="indented">

In the Java programming language, **an _interface_ is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types.** Method bodies exist only for default methods and static methods. Interfaces cannot be instantiated—they can only be implemented by classes or extended by other interfaces.
Defining an interface is similar to creating a new class:

```java
public interface OperateCar {

   // constant declarations, if any

   // method signatures
   int turn(Direction direction, double radius, double startSpeed, double endSpeed);
   int changeLanes(Direction direction, double startSpeed, double endSpeed);
   int signalTurn(Direction direction, boolean signalOn);
   int getRadarFront(double distanceToCar, double speedOfCar);
   int getRadarRear(double distanceToCar, double speedOfCar);
         ......
   // more method signatures
}
```

Note that the method signatures have no braces and are terminated with a semicolon.

To use an interface, you write a class that implements the interface. When an instantiable class implements an interface, it provides a method body for each of the methods declared in the interface. For example,

```java
public class OperateBMW760i implements OperateCar {

    // the OperateCar method signatures, with implementation --
    // for example:
    int signalTurn(Direction direction, boolean signalOn) {
       // code to turn BMW's LEFT turn indicator lights on
       // code to turn BMW's LEFT turn indicator lights off
       // code to turn BMW's RIGHT turn indicator lights on
       // code to turn BMW's RIGHT turn indicator lights off
    }

    // other members, as needed -- for example, helper classes not
    // visible to clients of the interface
}
```

In the robotic car example above, it is the automobile manufacturers who will implement the interface. Chevrolet's implementation will be substantially different from that of Toyota, of course, but both manufacturers will adhere to the same interface. The guidance manufacturers, who are the clients of the interface, will build systems that use GPS data on a car's location, digital street maps, and traffic data to drive the car. In so doing, the guidance systems will invoke the interface methods: turn, change lanes, brake, accelerate, and so forth.

==//todo Mention that an interface can be used as a type, mention default methods, multiple inheritance==


</div>

</div>

<div id="extras">
</div>