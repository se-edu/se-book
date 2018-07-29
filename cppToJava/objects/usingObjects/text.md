<div id="title">

#### Using Java Objects

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use in-built Java objects</span>

<div id="body">

Java is an "object-oriented" language, which means that it uses objects to represent data and provide methods related to them. Object types are called _classes_ e.g., you can use `String` objects in Java and those objects belong to the `String` class.

##### packages

<div class="indented">

Java comes with many inbuilt classes which are organized into _packages_. Here are some examples:

package | Some example classes in the package
----------|----------------
`java.lang` | `String`, `Math`, `System`

Before using a class in your code, you need to `import` the class. `import` statements appear at the top of the code.

```java
import java.awt.Point;

public class Main{
    public static void main(String[] args) {
        Point spot = new Point(3, 4);
        int x = spot.x;
        System.out.println(x);
   }
}
```
Tip: You might wonder why we can use the System class without importing it. System belongs to the java.lang package, which is imported automatically.
For example, the `java.awt` package provides a class named `Point` intended to represent the coordinates of a location in a Cartesian plane.
Tooltip: In mathematical notation, points are often written in parentheses with a comma separating the coordinates. For example, (0,0) indicates the origin, and (x,y) indicates the point x units to the right and y units up from the origin.
Then, to create a new point object, you have to use the `new` operator:
```java
import java.awt.Point;

Point spot = new Point(3, 4);
```
</div>

</div>

<div id="extras">
</div>