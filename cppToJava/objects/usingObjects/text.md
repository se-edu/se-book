<div id="title">

#### Using Java Objects

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use in-built Java objects</span>

<div id="body">

Java is an "object-oriented" language, which means that it uses objects to represent data and provide methods related to them. Object types are called _classes_ e.g., you can use `String` objects in Java and those objects belong to the `String` class.

##### importing

<div class="indented">

Java comes with many inbuilt classes which are organized into _packages_. Here are some examples:

package | Some example classes in the package
----------|----------------
`java.lang` | `String`, `Math`, `System`

**Before using a class in your code, you need to `import` the class.** `import` statements appear at the top of the code.

<box>

{{ icon_example }} This example imports the `java.awt.Point` (i.e., the `Point` class in the `java.awt` package) class -- which can be used to represent <trigger for="pop:usingObjects-coordinates">the coordinates of a location in a Cartesian plane</trigger>  -- and use it in the `main` method.

<popover id="pop:usingObjects-coordinates" title="Coordinates of a location in a Cartesian plane" placement="top">
  <div slot="content">

In mathematical notation, points are often written in parentheses with a comma separating the coordinates. For example, `(0,0)` indicates the origin, and `(x,y)` indicates the point `x` units to the right and `y` units up from the origin.
  </div>
</popover>

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
</box>

:bulb: You might wonder why we can use the `System` class without importing it. `System` belongs to **the `java.lang` package, which is imported automatically**.

</div>

##### `new` operator

<div class="indented">

**To create a new object, you have to use the `new` operator**

<box>

{{ icon_example }} This line shows how to create a new `Point` object using the `new` operator:

```java
Point spot = new Point(3, 4);
```
</box>

</div>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>