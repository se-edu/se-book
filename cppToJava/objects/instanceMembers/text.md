<div id="title">

#### Instance Members

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use instance members of objects</span>

<div id="body">

**Variables that belong to an object are called _attributes_ (or _fields_).**

{{ different }} To access an attribute of an object, Java uses _dot notation_.

<box>

{{ icon_example }} The code below uses `spot.x` which means "go to the object spot refers to, and get the value of the attribute `x`."

```java
Point spot = new Point(3, 4);
int sum = spot.x * spot.x + spot.y * spot.y;
System.out.println(spot.x + ", " + spot.y + ", " + sum);
```
{{ icon_output }}
```
3, 4, 25
```

</box>

**You can <tooltip content="i.e., change/modify">_mutate_</tooltip> an object by assigning a different values to its attributes.**

<box>

{{ icon_example }} This example changes the x value of the `Point` object to `5`.

```java
Point spot = new Point(3, 4);
spot.x = 5;
System.out.println(spot.x + ", " + spot.y);
```
{{ icon_output }}
```
5, 4
```
</box>

{{ different }} **Java uses the dot notation to invoke methods on an object too.**

<box>

{{ icon_example }} This example invokes the `translate` method on a `Point` object so that it moves to a different location.

```java
Point spot = new Point(3, 4);
System.out.println(spot.x + ", " + spot.y);
spot.translate(5,5);
System.out.println(spot.x + ", " + spot.y);
```
{{ icon_output }}
```
3, 4
8, 9
```
</box>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>