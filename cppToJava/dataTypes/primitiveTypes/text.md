<div id="title">

#### Primitive Data Types

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use primitive data types</span>

<div id="body">

Here are the primitive data types in Java:
* **`byte`**: an integer in the range -128 to 127 (inclusive).
* **`short`**: an integer in the range -32,768 to 32,767 (inclusive).
* **`int`**: an integer in the range -2<sup>31</sup> to 2<sup>31</sup>-1.
* **`long`**: An integer in the range -2<sup>63</sup> to 2<sup>63</sup>-1.
* **`float`**: a single-precision 32-bit IEEE 754 floating point. This data type should never be used for precise values, such as currency. For that, you will need to use the [java.math.BigDecimal]({{ java_api }}/java/math/BigDecimal.html) class instead.
* **`double`**: a double-precision 64-bit IEEE 754 floating point. For decimal values, this data type is generally the default choice. This data type should never be used for precise values, such as currency.
* **`boolean`**: has only two possible values: `true` and `false`.
* **`char`**: The char data type is a single 16-bit Unicode character. It has a minimum value of `'\u0000'` (or `0`) and a maximum value of `'\uffff'` (or `65,535` inclusive).


**`String`** (a peek)

{{ different }} Java has a built-in type called `String` to represent strings. While `String` is not a primitive type, they are used as often, if not more. `String` values are demarcated by enclosing in a pair of double quotes. You can use the plus operator to concatenate strings.
E.g.,
```java
String name = "John Doe";
System.out.println("Hello " + name + "!");
```

String is not a primitive type. You’ll learn more about strings in a later section.


</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
</div>
