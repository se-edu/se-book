<div id="title">

#### What are Generics?

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Java Generics</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

In a nutshell, generics enable types (classes and interfaces) to be parameters when defining classes, interfaces and methods. Much like the more familiar formal parameters used in method declarations, type parameters provide a way for you to re-use the same code with different inputs. The difference is that the inputs to formal parameters are values, while the inputs to type parameters are types.

A generic type is a generic class or interface that is parameterized over types. Consider the following `Box` class.

```java
public class Box {
    private Object object;

    public void set(Object object) { this.object = object; }
    public Object get() { return object; }
}
```

Since its methods accept or return an `Object`, you are free to pass in whatever you want, provided that it is not one of the primitive types. There is no way to verify, at compile time, how the class is used. One part of the code may place an `Integer` in the box and expect to get `Integers` out of it, while another part of the code may mistakenly pass in a `String`, resulting in a runtime error.

A _generic_ `Box` class allows you to define what type of elements will be put in the `Box`. For example, you can instantiate a `Box` object to keep `Integer` elements so that any attempt to put a non-`Integer` object in that `Box` object will result in a compile error.


</blockquote>

</div>

<div id="extras">
</div>