<panel header="{{ icon_Q }} print area with abstract `Shape`">
<question>

The `Main` class below keeps a list of `Circle` and `Rectangle` objects and prints the area (as an `int` value) of each shape when requested.

```java
public class Main {
    private static Shape[] shapes = new Shape[100];
    private static int shapeCount = 0;

    public static void addShape(Shape s){
        shapes[shapeCount] = s;
        shapeCount++;
    }

    public static void printAreas(){
        for (int i = 0; i < shapeCount; i++){
            shapes[i].print();
        }
    }

    public static void main(String[] args) {
        addShape(new Circle(5));
        addShape(new Rectangle(3, 4));
        addShape(new Circle(10));
        addShape(new Rectangle(4, 4));
        printAreas();
    }
}
```
{{ icon_output }}
```
Circle of area 78
Rectangle of area 12
Circle of area 314
Rectangle of area 16
```
`Circle` class and `Rectangle` class is given below:
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

    @Override
    public void print() {
        System.out.println("Circle of area " + area());
    }
}
```
```java
public class Rectangle extends Shape {
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

    @Override
    public void print() {
        System.out.println("Rectangle of area " + area());
    }
}
```

Add the missing `Shape` class ==as an abstract class with two abstract methods==.


<panel type="seamless" header="Partial solution">

```java
public abstract class Shape {

    public abstract int area();
    // ...
}
```
</panel>

</question>
</panel>
