<panel type="dark" header="###  <small><small>{{ icon_important }} [Key Exercise] use `Rectangle` objects</small></small>" expanded >

Update the code below as described in code comments, to produce the given output.

```java{.no-line-numbers}
import java.awt.Rectangle;

public class Main {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(0, 0, 4, 6);
        System.out.println(r);

        int area;
        //TODO: add a line below to calculate the area using
        //  width and height properties of r
        //  and assign it to the variable area

        System.out.println("Area: " + area);

        //TODO: add a line here to set the size of r to
        //  8x10 (width x height)
        //Recommended: use the setSize(int width, int height)
        //  method of the Rectangle object

        System.out.println(r);
    }

}
```
{{ icon_output }}
```{.no-line-numbers}
java.awt.Rectangle[x=0,y=0,width=4,height=6]
Area: 24
java.awt.Rectangle[x=0,y=0,width=8,height=10]
```

<panel type="seamless" header="Hint">

* Area can be calculated as `r.width * r.height`
* Setting the size can be done as `r.setSize(8, 10)`

</panel>
</panel>
