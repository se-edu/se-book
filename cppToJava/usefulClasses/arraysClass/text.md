<div id="title">

#### The `Arrays` class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the Arrays class</span>

<div id="body">

The Java library provides a utility class `java.util.Arrays` that provides methods for working with arrays. One of them, `toString`, returns a string representation of an array.

```java
int[] a = new int[]{1,2,3,4};
System.out.println(Arrays.toString(a));
```
{{ icon_output_right }} `[1, 2, 3, 4]`

It also provides a `copyOf` that copies an array.

```java
double[] b = Arrays.copyOf(a, 3);
You can also use a.length with Arrays.copyOf:
double[] b = Arrays.copyOf(a, a.length);
```

</div>

<div id="extras">
</div>