<panel header="{{ icon_Q }} Compare names">
<question>

Write a Java program that takes two command line parameters and prints `true` or `false` to indicate if the two parameters have the same value. Follow the sample output given below.

```java
class Main {
  public static void main(String[] args) {
      // add your code here
  }
}
```
{{ icon_terminal }} `java Main adam eve` {{ icon_output }}
```
Words given: adam, eve
They are the same: false
```
{{ icon_terminal }} `java Main eve eve` {{ icon_output }}
```
Words given: eve, eve
They are the same: true
```

<div slot="hint">

* The two command line parameters can be accessed inside the `main` method using `args[0]` and `args[1]`.
* For this case, you can use `==` to compare the two parameters, although comparing `String` objects using `==` doesn't always work (you'll learn a better method later).
* When using multiple operators in the same expression, you might need to use parentheses to specify operator precedence. e.g., `"foo" + x == y` vs  `"foo" + (x == y)`

</div>
</question>
</panel>
