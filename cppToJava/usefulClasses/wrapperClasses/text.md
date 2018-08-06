<div id="title">

#### Wrapper Classes for Primitive Types

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use wrapper classes for primitive</span>

<div id="body">

Primitive values (like `int`s, `double`s, and `char`s) do not provide methods. For example, you can’t call `equals` on an int:

```java
int i = 5;
System.out.println(i.equals(5));  // compiler error
```
But **for each primitive type, there is a corresponding class in the Java library, called a _wrapper class_**. The wrapper class for `char` is called `Character`; for int it’s called Integer. Other wrapper classes include Boolean, Long, and Double. They are in the java.lang package, so you can use them without importing them.

Each wrapper class defines constants `MIN_VALUE` and `MAX_VALUE`. For example, `Integer.MIN_VALUE` is `-2147483648`, and `Integer.MAX_VALUE` is `2147483647`. Because these constants are available in wrapper classes, you don’t have to remember them, and you don’t have to include them in your programs.

**Wrapper classes provide methods for converting strings to other types.** For example, `Integer.parseInt` converts a string to (you guessed it) an integer:

```java
String str = "12345";
int num = Integer.parseInt(str);
```
In this context, parse means something like “read and translate”.

The other wrapper classes provide similar methods, like `Double.parseDouble` and `Boolean.parseBoolean`. They also provide `toString`, which returns a string representation of a value:

```java
int num = 12345;
String str = Integer.toString(num);
```
The result is the string "12345".

</div>

<div id="extras">
</div>