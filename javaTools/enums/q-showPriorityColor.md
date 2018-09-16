<panel header="{{ icon_Q }} show priority color">
<question>

Define an enumeration named `Priority`. Add the missing `describe` method to the code below so that it produces the output given.

```java
public class Main {

    // Add your method here

    public static void main(String[] args) {
        describe("Red", Priority.HIGH);
        describe("Orange", Priority.MEDIUM);
        describe("Blue", Priority.MEDIUM);
        describe("Green", Priority.LOW);
    }
}
```
{{ icon_output }}
```
Red indicates high priority
Orange indicates medium priority
Blue indicates medium priority
Green indicates low priority
```

<div slot="hint">

Use a `switch` statement to select between possible values for `Priority`.

```java
    public static void describe(String color, Priority p) {
        switch (p) {
            case LOW:
                System.out.println(color + " indicates low priority");
                break;
            // ...
        }
    }
```

Code for the enumeration is given below:

```java
public enum Priority {
    HIGH, MEDIUM, LOW
}
```

</div>
</question>
</panel>
