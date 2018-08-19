<panel header="{{ icon_Q }} create `Rectangle` objects">
<question>

Update the code below to create a new `Rectangle` object as described in the code comments, to produce the given output.
* The `Rectangle` class is found in the `java.awt` package.
* The parameters you need to supply when creating new `Rectangle` objects are `(int x, int y, int width, int height)`.

```java
public class Main {
    public static void main(String[] args) {
        Rectangle r;

        // TODO create a Rectangle object that has the properties x=0, y=0, width=5, height=10
        // assign it to r

        System.out.println(r);
    }
}
```
{{ icon_output }}
```
java.awt.Rectangle[x=0,y=0,width=5,height=10]
```

<div slot="hint">

* Import the `java.awt.Rectangle` class
* This is how you create the required object `new Rectangle(0, 0, 5, 10)`

</div>
</question>
</panel>
