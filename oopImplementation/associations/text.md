<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right:</div>

<div id="title">

#### Associations :one:

</div>

<div id="body">

<dynamic-panel src="../../oop/associations/basics/topicPanel.md" header="OOP: Associations: Basics" is-open></dynamic-panel>
<dynamic-panel src="../../oop/associations/multiplicity/topicPanel.md" header="OOP: Associations: Multiplicity" is-open></dynamic-panel>
<dynamic-panel src="../../oop/associations/navigability/topicPanel.md" header="OOP: Associations: Navigability" is-open></dynamic-panel>

<p/>

We use instance level variables to implement associations.

<tip-box>

Example:

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

A normal instance-level variable gives us a 0..1 multiplicity (also called _optional associations_) because a variable can hold a reference to a single object or null.

<img src="{{baseUrl}}/oopImplementation/associations/images/logicConfigGenerator.png" height="40" />
<p/>

```java
class Logic {
    ConfigGenerator cg;
    ...
}
```

A variable can be used to implement a 1-multiplicity too (also called _compulsory associations_).

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

Bi-directional associations require matching variables in both classes.

To implement other multiplicities, choose a suitable data structure such as Arrays, ArrayLists, HashMaps, Sets, etc.

```java
class Minefield {
    Cell[][] cell;
    ...
}
```

</tip-box>

</div>

</div>
