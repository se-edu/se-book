<panel type="dark" header="###  <small><small>{{ icon_important }} [Key Exercise] add getMaxRadius to the `Circle` class</small></small>" expanded >

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
        setX(x);
        setY(y);
        setRadius(radius);
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = Math.max(radius, 0);
    }

    public int getArea(){
        double area = Math.PI * Math.pow(radius, 2);
        return (int)area;
    }
}
```
Update it as follows so that code given below produces the given output.
* Add a class-level `getMaxRadius` method that returns the maximum radius that has been used in all `Circle` objects created thus far.

```java{.no-line-numbers}
public class Main {
    public static void main(String[] args) {
        Circle c = new Circle();
        System.out.println("max radius used so far : " + Circle.getMaxRadius());
        c = new Circle(0, 0, 10);
        System.out.println("max radius used so far : " + Circle.getMaxRadius());
        c = new Circle(0, 0, -15);
        System.out.println("max radius used so far : " + Circle.getMaxRadius());
        c.setRadius(12);
        System.out.println("max radius used so far : " + Circle.getMaxRadius());
    }
}
```
{{ icon_output }}
```
max radius used so far : 0.0
max radius used so far : 10.0
max radius used so far : 10.0
max radius used so far : 12.0
```

<panel type="seamless" header="Hint">

You can use a `static` variable `maxRadius` to track the maximum value used for the `radius` attribute so far.

Partial solution:
```java
public void setRadius(double radius) {
    this.radius = Math.max(radius, 0);
    if (maxRadius < this.radius){
        // ...
    }
}
```

</panel>
</panel>
