<div id="title">

#### Open-Closed Principle

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain open-closed principle (OCP)</span>

<div id="body">

**The Open-Close Principle aims to make a code entity easy to adapt and reuse without needing to modify the code entity itself.**

<tip-box type="definition"> 
  <include src="../../common/definitions.md#def-open-closed-principle"/>
</tip-box>

In object-oriented programming, OCP can be achieved in various ways. This often requires separating the _specification (i.e. interface)_ of a module from its _implementation_.

<tip-box>

{{ icon_example }} In the design given below, the behavior of the `CommandQueue` class can be altered by adding more concrete `Command` subclasses. For example, by including a `Delete` class alongside `List`, `Sort`, and `Reset`, the `CommandQueue` can now perform delete commands without modifying its code at all. That is, its behavior was extended without having to modify its code. Hence, it was open to extensions, but closed to modification.

<img src="{{baseUrl}}/principles/openClosedPrinciple/images/commandQueue.png" height="170" />
<p/>

</tip-box>

<tip-box>

{{ icon_example }} The behavior of a Java generic class can be altered by passing it a different class as a parameter. In the code below, the `ArrayList` class behaves as a container of `Students` in one instance and as a container of `Admin` objects in the other instance, without having to change its code. That is, the behavior of the `ArrayList` class is extended without modifying its code.

```java
ArrayList students = new ArrayList< Student >();
ArrayList admins = new ArrayList< Admin >();  	
```
</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>