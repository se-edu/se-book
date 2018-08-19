<panel header="{{ icon_Q }} define a `Circle` class">
<question>

Define a `Circle` class so that the code given below produces the given output. The nature of the class is a follows:
* Attributes(all `private`):
  * **`int x`, `int y`**: represents the location of the circle
  * **`double radius`**: the radius of the circle
* Constructors:
  * **`Circle()`**: initializes `x`, `y`, `radius` to 0
  * **`Circle(int x, int y, double radius)`**: initializes the attributes to the given values
* Methods:
  * **`getArea()`**: `int`<br>
    Returns the area of the circle as an `int` value (not `double`). Calculated as 2xPIx(radius)<sup>2</sup><br>
    :bulb: You can convert to `double` to an `int` using `(int)` e.g., `x = (int)2.25` gives `x` the value `2`.<br>
    :bulb: You can use `Math.PI` to get the value of Pi<br>
    :bulb: You can use `Math.pow()` to raise a number to a specific power e.g., `Math.pow(3, 2)` calculates 3<sup>2</sup>

```java
public class Main {
    public static void main(String[] args) {
        Circle c = new Circle();

        System.out.println(c.getArea());
        c = new Circle(1, 2, 5);
        System.out.println(c.getArea());

    }
}
```
{{ icon_output }}
```
0
78
```

<div slot="hint">

* Put the `Circle` class in a file called `Circle.java`

Partial solution:
```java
public class Circle {
    private int x;
    // ...

    public Circle(){
        this(0, 0, 0);
    }

    public Circle(int x, int y, double radius){
        this.x = x;
        // ...
    }

    public int getArea(){
        double area = Math.PI * Math.pow(radius, 2);
        return (int)area;
    }

}
```

</div>
</question>
</panel>
