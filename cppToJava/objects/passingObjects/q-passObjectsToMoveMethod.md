<panel header="{{ icon_Q }} pass objects to `move` method">
<question>

Add a method `move(Point p, Rectangle r)` to the code below, to produce the given output. The behavior of the method is as follows:
* Returns a new `Point` object that has attributes `x` and `y` that match those of `r`
* Does not modify `p`
* Updates `r` so that its attributes `x` and `y` match those of `p`
* Returns `null` and does nothing if either `p` or `r` is null

```java
import java.awt.Point;
import java.awt.Rectangle;

public class Main {

    //TODO add your method here

    public static void main(String[] args) {
        Point p1 = new Point(0, 0);
        Rectangle r1 = new Rectangle(2, 3, 5, 6);
        System.out.println("arguments: " + p1 + ", " + r1);

        Point p2 = move(p1, r1);
        System.out.println("argument point after method call: " + p1);
        System.out.println("argument rectangle after method call: " + r1);
        System.out.println("returned point: " + p2);

        System.out.println(move(null, null));
    }
}
```
{{ icon_output }}
```
arguments: java.awt.Point[x=0,y=0], java.awt.Rectangle[x=2,y=3,width=5,height=6]
argument point after method call: java.awt.Point[x=0,y=0]
argument rectangle after method call: java.awt.Rectangle[x=0,y=0,width=5,height=6]
returned point: java.awt.Point[x=2,y=3]
null
```

<div slot="hint">

Partial solution:

```java
public static Point move(Point p, Rectangle r){
    if (p == null || r == null){
        // ...
    }
    Point newPoint = new Point(r.x, r.y);
    r.x = p.x;
    // ...
    return newPoint;
}
```

</div>
</question>
</panel>
