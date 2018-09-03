<panel header="{{ icon_Q }} print shape area">
<question>

The `Main` class below keeps a list of `Circle` and `Rectangle` objects and prints the area (as an `int` value) of each shape when requested.

Add the missing variables/methods to the code below so that it produces the output given.

```java
public class Main {
    //TODO add your methods here

    public static void main(String[] args) {
        addShape(new Circle(5));
        addShape(new Rectangle(3, 4));
        addShape(new Circle(10));
        printAreas();
        addShape(new Rectangle(4, 4));
        printAreas();
    }
}
```
{{ icon_output }}
```
78
12
314
78
12
314
16
```
`Circle` class and `Rectangle` class is given below but you'll need to add a parent class `Shape`:
```java
public class Circle {

    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    public int area() {
        return (int)(Math.PI * radius * radius);
    }
}
```
```java
public class Rectangle {
    private int height;
    private int width;

    public Rectangle(int height, int width){
        this.height = height;
        this.width = width;
    }

    public int area() {
        return height * width;
    }
}
```

:bulb: You may use an array of size 100 to store the shapes.


<panel type="seamless" header="Partial solution">

```java
public class Main {
    private static Shape[] shapes = new Shape[100];
    private static int shapeCount = 0;

    public static void addShape(Shape s){
        shapes[shapeCount] = s;
        shapeCount++;
    }

    // ...

}
```
</panel>

</question>
</panel>
