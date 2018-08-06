<div id="title">

#### Passing Objects

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can pass objects between methods</span>

<div id="body">

**You can pass objects as parameters in the usual way**. For example:

```java
public static void printPoint(Point p) {
    System.out.println("(" + p.x + ", " + p.y + ")");
}
```

This method takes a point as an argument and displays its attributes in parentheses. If you invoke `printPoint(spot)`, it displays `(3, 4)`.

**You can return an object as the return value too.** The `java.awt` package also provides a class called `Rectangle`. `Rectangle` objects are similar to points, but they have four attributes: `x`, `y`, `width`, and `height`. You can write methods that return objects. For example, `findCenter` takes a `Rectangle` as an argument and returns a `Point` with the coordinates of the center of the rectangle:
```java
public static Point findCenter(Rectangle box) {
    int x = box.x + box.width / 2;
    int y = box.y + box.height / 2;
    return new Point(x, y);
}
```

The return type of this method is `Point`. The last line creates a new Point object and returns a reference to it.

**`null` is a special value that means "no object"**. You can declare and initialize object variables this way:
`Point spot = null;`

If you try to use a null value, either by accessing an attribute or invoking a method, Java throws a `NullPointerException`.
```java
Point spot = null;
int x = spot.x;              // NullPointerException
spot.translate(50, 50);      // NullPointerException
```

On the other hand, it is legal to pass a `null` reference as an argument or receive one as a return value.

**It is possible to have multiple variables that refer to the same object.**
```java
Rectangle box1 = new Rectangle(0, 0, 100, 200);
Rectangle box2 = box1;
```
Notice how `box1` and `box2` are aliases for the same object, so any changes that affect one variable also affect the other. This example adds 50 to all four sides of the rectangle, so it moves the corner up and to the left by 50, and it increases the height and width by 100:
```java
System.out.println(box2.width);
box1.grow(50, 50);
System.out.println(box2.width);
```
The first line displays `100`, which is the width of the Rectangle referred to by `box2`. The second line invokes the grow method on `box1`, which stretches the Rectangle horizontally and vertically. When we make a change using box1, we see the change using `box2`. Thus, the value displayed by the third line is `200`, the width of the expanded rectangle.


</div>

<div id="extras">
</div>