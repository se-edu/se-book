<span id="title">Wrapper Classes for primitive types</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use wrapper classes for primitive</span>

<div id="body">

Primitive values (like `int`, `double`, and `char`) do not provide methods.

<box>

{{ icon_example }} For example, you can’t call `equals` on an `int`:

```java
int i = 5;
System.out.println(i.equals(5));  // compiler error
```
</box>

But **for each primitive type, there is a corresponding class in the Java library, called a _wrapper class_**, as given in the table below. They are in the `java.lang` package i.e., no need to import.

Primitive type | Wrapper class
---------------|-------------
`byte`         | `Byte`
`short`        | `Short`
`int`          | `Integer`
`long`         | `Long`
`float`        | `Float`
`double`       | `Double`
`char`         | `Character`
`boolean`      | `Boolean`

<box>

{{ icon_example }}

```java{highlight-lines="1"}
Double d = new Double(2.5);
int i = d.intValue();
System.out.println(d);
System.out.println(i);
```
{{ icon_output }}
```
2.5
2
```

</box>

Each wrapper class defines constants `MIN_VALUE` and `MAX_VALUE`.

<box>

{{ icon_example }} Accessing max and min values for integers:

```java
System.out.println(Integer.MIN_VALUE + " : " + Integer.MAX_VALUE);
```
{{ icon_output_right }} `-2147483648 : 2147483647`

</box>


**Wrapper classes provide methods for <tooltip content="In this context, parse means something like “read and translate”">_parsing_</tooltip> strings to other types** e.g., `Integer.parseInt` converts a string to (you guessed it) an integer. The other wrapper classes provide similar methods, like `Double.parseDouble` and `Boolean.parseBoolean`.

{{ icon_example }} `Integer.parseInt("1234")` {{ icon_output_right }} `1234`

Wrapper classes also provide `toString`, which returns a string representation of a value.

{{ icon_example }} `Integer.toString(1234)` {{ icon_output_right }} `"1234"`


</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
