<div id="title">

#### Passing Objects Around

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can pass objects between methods</span>

<div id="body">

**You can pass objects as parameters to a method in the usual way**.

<box>

{{ icon_example }} The `printPoint` method below takes a `Point` object as an argument and displays its attributes in `(x,y)` format.

```java
public static void printPoint(Point p) {
    System.out.println("(" + p.x + ", " + p.y + ")");
}

public static void main(String[] args) {
    Point spot = new Point(3, 4);
    printPoint(spot);
}
```
{{ icon_output }}
```
3, 4
```
</box>

**You can return an object from a method too.**

<box>

{{ icon_example }} The `java.awt` package also provides a class called `Rectangle`. `Rectangle` objects are similar to points, but they have four attributes: `x`, `y`, `width`, and `height`. The `findCenter` method below takes a `Rectangle` as an argument and returns a `Point` that corresponds to the center of the rectangle:

```java
public static Point findCenter(Rectangle box) {
    int x = box.x + box.width / 2;
    int y = box.y + box.height / 2;
    return new Point(x, y);
}
```
The return type of this method is `Point`. The last line creates a new `Point` object and returns a reference to it.
</box>

##### `null` and `NullPointerException`

<div class="indented">

**`null` is a special value that means "no object"**. You can assign null to a variable to indicate that the variable is 'empty' at the moment. However, if you try to use a null value, either by accessing an attribute or invoking a method, Java throws a `NullPointerException`.

<box>

{{ icon_example }} In this example, the variable `spot` is assigned a `null` value. As a result, trying to access `spot.x` attribute or invoke `spot.translate` method results in a `NullPointerException`.

```java
Point spot = null;
int x = spot.x;          // NullPointerException
spot.translate(50, 50);  // NullPointerException
```
</box>

On the other hand, it is legal return null from a method or to pass a `null` reference as an argument to a method.

<box>

{{ icon_example }} Returning `null` from a method.

```java
public static Point createCopy(Point p) {
    if (p == null) {
        return null; // return null if p is null
    }

    // create a new object with same x,y values
    return new Point(p.x, p.y);
}
```

{{ icon_example }} Passing `null` as the argument.

```java
Point result = createCopy(null);
System.out.println(result);
```
{{ icon_output }}
```
null
```

</box>
</div>

**It is possible to have multiple variables that refer to the same object.**

<box>

{{ icon_example }} Notice how `p1` and `p2` are aliases for the same object. When the object is changed using the variable `p1`, the changes are visible via `p2` as well (and vice versa), because they both point to the same `Point` object.

```java
Point p1 = new Point(0,0);
Point p2 = p1;
System.out.println("p1: " + p1.x + ", " + p1.y);
System.out.println("p2: " + p2.x + ", " + p2.y);
p1.x = 1;
p2.y = 2;
System.out.println("p1: " + p1.x + ", " + p1.y);
System.out.println("p2: " + p2.x + ", " + p2.y);
```
{{ icon_output }}
```
p1: 0, 0
p2: 0, 0
p1: 1, 2
p2: 1, 2
```
</box>

{{ different }} **Java does not have explicit pointers** (and other related things such as pointer de-referencing, pointer arithmetic). **When an object is passed into a method as an argument, the method gains access to the original object.** If the method changes the object it received, the changes are retained in the object even after the method is completed.

<box>

{{ icon_example }} Note how `p3` retains changes done to it by the method `swapCoordinates` even after the method call.

```java
public static void swapCoordinates(Point p){
    int temp = p.x;
    p.x = p.y;
    p.y = temp;
}

public static void main(String[] args) {
    Point p3 = new Point(2,3);
    System.out.println("p3: " + p3.x + ", " + p3.y);
    swapCoordinates(p3);
    System.out.println("p3: " + p3.x + ", " + p3.y);
}
```
{{ icon_ouput }}
```
p3: 2, 3
p3: 3, 2
```

</box>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>