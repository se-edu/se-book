<div id="title">

#### The `Arrays` class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the Arrays class</span>

<div id="body">

**[`java.util.Arrays`]({{ java_api }}/java/util/Arrays.html) provides methods for working with arrays.** One of them, `toString`, returns a string representation of an array. It also provides a `copyOf` that copies an array.

<box>

{{ icon_example }} Using `Arrays.copyOf` and `Arrays.toString`:

```java
int[] a = new int[]{1,2,3,4};

int[] b = Arrays.copyOf(a, 3); // copy first three elements
System.out.println(Arrays.toString(b));

int[] c = Arrays.copyOf(a, a.length); // copy all elements
System.out.println(Arrays.toString(c));
```
{{ icon_output }}
```
[1, 2, 3]
[1, 2, 3, 4]
```
</box>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>