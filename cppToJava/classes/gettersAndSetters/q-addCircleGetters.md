<panel header="{{ icon_Q }} add getters/setters to the `Circle` class">
<question>

Consider the `Circle` class below:
```java
public class Circle {
    private int x;
    private int y;
    private double radius;

    public Circle(){
        this(0, 0, 0);
    }

    public Circle(int x, int y, double radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    public int getArea(){
        double area = Math.PI * Math.pow(radius, 2);
        return (int)area;
    }

}
```
Update it as follows so that code given below produces the given output.
* Add getter/setter methods for all three attributes
* Update the setters and constructors such that if the radius supplied is negative, the code automatically set the radius to 0 instead.

```java
public class Main {
    public static void main(String[] args) {
        Circle c = new Circle(1,2, 5);

        c.setX(4);
        c.setY(5);
        c.setRadius(6);
        System.out.println("x      : " + c.getX());
        System.out.println("y      : " + c.getY());
        System.out.println("radius : " + c.getRadius());
        System.out.println("area   : " + c.getArea());

        c.setRadius(-5);
        System.out.println("radius : " + c.getRadius());
        c = new Circle(1, 1, -4);
        System.out.println("radius : " + c.getRadius());

    }
}
```
{{ icon_output }}
```
x      : 4
y      : 5
radius : 6.0
area   : 113
radius : 0.0
radius : 0.0
```

<div slot="hint">

Partial solution:
```java
public Circle(int x, int y, double radius){
    setX(x);
    setY(y);
    setRadius(radius);
}

public void setRadius(double radius) {
    this.radius = Math.max(radius, 0);
}
```

</div>
</question>
</panel>
