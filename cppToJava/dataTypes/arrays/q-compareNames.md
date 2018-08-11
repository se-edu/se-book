<panel header="{{ icon_Q }} Compare names">
<question>

Write a Java program that takes two command line arguments and prints `true` or `false` to indicate if the two arguments have the same value. Follow the sample output given below.

```java
class WordComparator {
  public static void main(String[] args) {
      // add your code here
  }
}
```
{{ icon_terminal }} `java WordComparator adam eve` {{ icon_output }}
```
Words given: adam, eve
They are the same: false
```
{{ icon_terminal }} `java WordComparator eve eve` {{ icon_output }}
```
Words given: eve, eve
They are the same: true
```

:bulb: Use the following technique to compare two `Strings`(i.e., don't use `==`). %%Reason: to be covered in a later topic%%.
```java
String x = "foo";
boolean isSame = x.equals("bar") // false
isSame = x.equals("foo") // true
```

<div slot="hint">

* The two command line arguments can be accessed inside the `main` method using `args[0]` and `args[1]`.
* When using multiple operators in the same expression, you might need to use parentheses to specify operator precedence. e.g., `"foo" + x == y` vs  `"foo" + (x == y)`

<panel type="seamless" header="partial solution">

```java
class WordComparator {
  public static void main(String[] args) {
      String first = args[0];
      String second = args[1];
      System.out.println("Words given: " + first + ", " + second);
      // ...
  }
}

```
</panel>

</div>
</question>
</panel>
