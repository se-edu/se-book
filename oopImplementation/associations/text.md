<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Associations :one:

</div>

<div id="body">

<p/>

**We use instance level variables to implement associations.** 

**A normal instance-level variable gives us a `0..1` multiplicity** (also called _optional associations_) because a variable can hold a reference to a single object or `null`.

<tip-box>

<img src="{{baseUrl}}/oopImplementation/associations/images/logicMinefield.png" height="40" />
<p/>

```java
class Logic {
    Minefield minefield;
    ...
}
```

```java
class Minefield {
    ...
}
```

</tip-box>


**A variable can be used to implement a `1` multiplicity too** (also called _compulsory associations_).

<tip-box>

<img src="{{baseUrl}}/oopImplementation/associations/images/logicConfigGenerator.png" height="40" />
<p/>

```java
class Logic {
    ConfigGenerator cg = new ConfigGenerator();
    ...
}
```

</tip-box>

**Bi-directional associations require matching variables in both classes.**

<tip-box>

<img src="{{baseUrl}}/oopImplementation/associations/images/fooBar.png" height="40" />
<p/>

```java
class Foo {
    Bar bar;
    ...
}
```

```java
class Bar {
    Foo foo;
    ...
}
```
</tip-box>

**To implement other multiplicities, choose a suitable data structure** such as Arrays, ArrayLists, HashMaps, Sets, etc.

<tip-box>

```java
class Minefield {
    Cell[][] cell;
    ...
}
```

</tip-box>

</div>

<div id="extras">
 <include src="exercises.md"/>
</div>

</div>
