<div id="title">

#### Constants

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java constants</span>

<div id="body">

Java does not directly support constants. The convention is to use a `static` `final` variable where a constant is needed. The `static` modifier causes the variable to be available without instantiating an object. The `final` modifier causes the variable to be unchangeable. Java constants are normally declared in ALL CAPS separated by underscores.

<box>

{{ icon_example }} Here is an example of a constant named `MAX_BALANCE` which can be accessed as `Account.MAX_BALANCE`.

```java
public class Account{

  public static final double MAX_BALANCE = 1000000.0;

}
```

{{ icon_example }} [`Math.PI`]({{ java_api }}/java/lang/Math.html#PI) is an example constant that comes with Java.

</box>

</div>

<div id="extras">
</div>