<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Open-Closed Principle :one:

</div>

<div id="body">

While it is possible to isolate the functionalities of a software system into modules, there is no way to remove interaction between modules. When modules interact with each other, coupling naturally increases. Consequently, it is harder to localize any changes to the software system. The Open-Close Principle aims to alleviate this problem. 

<tip-box type="definition"> 
  <include src="../../common/definitions.md#def-open-closed-principle"/>
</tip-box>

In object-oriented programming, OCP can be achieved in various ways. This often requires separating the _specification (i.e. interface)_ of a module from its _implementation_.

<tip-box>

:package: In the design given below, the behavior of the `CommandQueue` class can be altered by adding more concrete `Command` subclasses. For example, by including a `Delete` class alongside `List`, `Sort`, and `Reset`, the `CommandQueue` can now perform delete commands without modifying its code at all. That is, its behavior was extended without having to modify its code. Hence, it was open to extensions, but closed to modification.

<img src="{{baseUrl}}/principles/openClosedPrinciple/images/commandQueue.png" height="170" />
<p/>

</tip-box>

<tip-box>

:package: The behavior of a Java generic class can be altered by passing it a different class as a parameter. In the code below, the `ArrayList` class behaves as a container of `Students` in one instance and as a container of `Admin` objects in the other instance, without having to change its code. That is, the behavior of the `ArrayList` class is extended without modifying its code.

```java
ArrayList students = new ArrayList< Student >();
ArrayList admins = new ArrayList< Admin >();  	
```
</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
