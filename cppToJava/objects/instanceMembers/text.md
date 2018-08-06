<div id="title">

#### Instance Members

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use instance members of objects</span>

<div id="body">

Variables that belong to an object are usually called attributes, but you might also see them called "fields".

{{ different }} To access an attribute of an object, Java uses _dot notation_.

```java
Point spot = new Point(3, 4);
int sum = spot.x * spot.x + spot.y * spot.y;
System.out.println(spot.x + ", " + spot.y, ", " + sum);
```
{{ icon_output }}
```
3, 4, 25
```
The expression `spot.x` means "go to the object spot refers to, and get the value of the attribute `x`."


You can _mutate_ an object by assigning a different values to its attributes.

```java
Point spot = new Point(3, 4);
Spot.x = 5
System.out.println(spot.x + ", " + spot.y);
```

{{ different }} Java uses the dot notation to invoke methods on an object too. The example below invokes the `translate` method on a `Point` object so that it moves to a different location.

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

</div>

<div id="extras">
</div>