<div id="title">

#### Polymorphism

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use polymorphism in Java</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

Consider the `Bicycle` class below:

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

    public void printDescription() {
        System.out.println("Bike is in gear " + gear + " and travelling at a speed of " + speed + ".");
    }

}
```

To demonstrate _polymorphic_ features in the Java language, let's extend the `Bicycle` class with a `MountainBike` and a `RoadBike` class. For `MountainBike`, let's add a field for `suspension`, which is a `String` value that indicates if the bike has a front shock absorber, `Front`. Or, the bike has a front and back shock absorber, `Dual`.

Here is the updated class:

```java
public class MountainBike extends Bicycle {
    private String suspension;

    public MountainBike(int startSpeed, int startGear, String suspensionType){
        super(startSpeed, startGear);
        this.setSuspension(suspensionType);
    }

    public String getSuspension(){
      return this.suspension;
    }

    public void setSuspension(String suspensionType) {
        this.suspension = suspensionType;
    }

    public void printDescription() {
        super.printDescription();
        System.out.println("The " + "MountainBike has a" + getSuspension() + " suspension.");
    }
}
```

Note the overridden `printDescription` method. In addition to the information provided before, additional data about the suspension is included to the output.

Next, let's create the `RoadBike` class. Because road or racing bikes have skinny tires, add an attribute to track the tire width. Here is the `RoadBike` class:

```java
public class RoadBike extends Bicycle{
    // In millimeters (mm)
    private int tireWidth;

    public RoadBike(int startSpeed, int startGear, int newTireWidth){
        super(startSpeed, startGear);
        this.setTireWidth(newTireWidth);
    }

    public int getTireWidth(){
      return this.tireWidth;
    }

    public void setTireWidth(int newTireWidth){
        this.tireWidth = newTireWidth;
    }

    public void printDescription(){
        super.printDescription();
        System.out.println("The RoadBike" + " has " + getTireWidth() + " MM tires.");
    }
}
```

Note that once again, the `printDescription` method has been overridden. This time, information about the tire width is displayed.

To summarize, there are three classes: `Bicycle`, `MountainBike`, and `RoadBike`. The two subclasses override the `printDescription` method and print unique information.

Here is a test program that creates three Bicycle variables. Each variable is assigned to one of the three bicycle classes. Each variable is then printed.

```java
public class TestBikes {
    public static void main(String[] args) {
        Bicycle bike01, bike02, bike03;

        bike01 = new Bicycle(10, 1);
        bike02 = new MountainBike(10, 5, "Dual");
        bike03 = new RoadBike(20, 8, 23);

        bike01.printDescription();
        bike02.printDescription();
        bike03.printDescription();
    }
}
```
{{ icon_output }}
```
Bike is in gear 1 and travelling at a speed of 10.
Bike is in gear 5 and travelling at a speed of 10.
The MountainBike has aDual suspension.
Bike is in gear 8 and travelling at a speed of 20.
The RoadBike has 23 MM tires.
```

The Java virtual machine (JVM) calls the appropriate method for the object that is referred to in each variable. It does not call the method that is defined by the variable's type. This behavior is referred to as _virtual method invocation_ and demonstrates an aspect of the important polymorphism features in the Java language.


</blockquote>

</div>

<div id="extras">
</div>