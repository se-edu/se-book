<panel type="dark" header="###  <small><small>{{ icon_important }} [Key Exercise] print shape area</small></small>" expanded >

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
`Circle` class and `Rectangle` class is given below but you'll need to add a parent class `Shape`.
```java
public class Circle extends Shape {

    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    @Override
    public int area() {
        return (int)(Math.PI * radius * radius);
    }
}
```
```java
public class Rectangle extends Shape{
    private int height;
    private int width;

    public Rectangle(int height, int width){
        this.height = height;
        this.width = width;
    }

    @Override
    public int area() {
        return height * width;
    }
}
```

{{ icon_tip }} You may use an array of size 100 to store the shapes.<br>


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

<panel type="seamless" header="Hint">

**What should be in the `Shape` class?** Start with an empty class and add only what the child classes `Circle` and `Rectangle` need the parent class to have. In this case, it only needs an `area()` method for the child classes to override. The actual behavior of that method is not important (e.g., it can simply return `0`) as it will be overridden by the child classes.
</panel>

</panel>
