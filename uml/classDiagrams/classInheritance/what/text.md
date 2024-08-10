<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret class inheritance in class diagrams</span>

<span id="title">Inheritance</span>

<div id="body">

You can use a triangle and a solid line (not to be confused with an arrow) to indicate class inheritance.

Notation:

<pic eager src="{{baseUrl}}/uml/classDiagrams/classInheritance/what/images/notation.png" height="120" />
<p/>

<box>

{{ icon_example }} Examples: The `Car` class _inherits_ from the `Vehicle` class. The `Cat` and `Dog` classes _inherit_ from the `Pet` class.

<pic eager src="{{baseUrl}}/uml/classDiagrams/classInheritance/what/images/examples.png" height="120" />
<p/>

</box>

**It does not matter whether the triangle is filled or empty.**

<div class="alt-java">
<box>

{{ icon_example }} Here's an example that combines inheritance with generics:

```java
class Foo<T> {
}

class Bar<T> extends Foo<T> {
}

class Goo extends Foo<String> {
}
```

<puml src="images/cd-inheritance-and-generics.puml" />

</box>
</div>

</div>

<div id="extras">
</div>
