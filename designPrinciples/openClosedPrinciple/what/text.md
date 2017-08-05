<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Principles &rarr; Open-Closed Principle &rarr;</div>

<div id="title">

#### What :one:

</div>

<div id="body">

While it is possible to isolate the functionalities of a software system into modules, there is no way to remove interaction between modules. When modules interact with each other, coupling naturally increases. Consequently, it is harder to localize any changes to the software system. In 1988, Bertrand Meyer proposed a guiding principle to alleviate this problem. The principle, known as the _open-closed principle_, states: “A module should be _open_ for extension but _closed_ for modification”. That is, modules should be written so that they can be extended, without requiring them to be modified. In other words, changing what the modules do without changing the source code of the modules.

In object-oriented programming, these two seemingly opposing requirements can be achieved in various ways. This often requires separating the _specification (interface)_ of a module from its _implementation_.

<tip-box>

Example:

<img src="{{baseUrl}}/designPrinciples/openClosedPrinciple/what/images/commandQueue.png" height="170" />
<p/>

The behavior of the `CommandQueue` class can be altered by adding more concrete `Command` subclasses. For example, by including a `Delete` class alongside `List`, `Sort`, and `Reset`, the `CommandQueue` can now perform delete commands without modifying its code at all. Indeed, its behavior was extended without having to open up and modify its code. Hence, it was open to extensions, but closed to modification.

</tip-box>

<tip-box>

The behavior of a Java generic class can be altered by passing it a different class as a parameter. In the code below, the `ArrayList` class behaves as a container of `Students` in one instance and as a container of `Admin` objects in the other instance, without having to change its code. That is, the behavior of the `ArrayList` class is extended without modifying its code.

```java
ArrayList students = new ArrayList< Student >();
ArrayList admins = new ArrayList< Admin >();  	
```

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
