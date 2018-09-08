<div id="title">

#### What are Generics?

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Java Generics</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with some adaptations.

<div class="indented">

**You can use polymorphism to write code that can work with multiple types, but that approach has some shortcomings.**

<box>

{{ icon_example }} Consider the following `Box` class. It can be used only for storing `Integer` objects.

```java
public class BoxForIntegers {
    private Integer x;

    public void set(Integer x) {
        this.x = x;
    }
    public Integer get() {
        return x;
    }
}
```
To store `String` objects, another similar class is needed, resulting in the duplication of the entire class. As you can see, if you need to store many different types of objects, you could end up writing many similar classes.
```java
public class BoxForString {
    private String x;

    public void set(String x) {
        this.x = x;
    }
    public String get() {
        return x;
    }
}
```
One solution for this problem is to use _polymorphism_ i.e., write the `Box` class to store `Object` objects.
```java
public class Box {
    private Object x;

    public void set(Object x) {
        this.x = x;
    }
    public Object get() {
        return x;
    }
}
```
The problem with this solution is, since its methods accept or return an `Object`, you are free to pass in whatever you want, provided that it is not one of the primitive types. There is no way to verify, at compile time, how the class is used. One part of the code may place an `Integer` in the box and expect to get `Integers` out of it, while another part of the code may mistakenly pass in a `String`, resulting in a runtime error.
</box>

**Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces and methods.** Much like the more familiar formal parameters used in method declarations, type parameters provide a way for you to re-use the same code with different inputs. The difference is that the inputs to formal parameters are values, while the inputs to type parameters are types.

<box>

{{ icon_example }} A _generic_ `Box` class allows you to define what type of elements will be put in the `Box`. For example, you can instantiate a `Box` object to keep `Integer` elements so that any attempt to put a non-`Integer` object in that `Box` object will result in a compile error.

</box>

</div>

</div>

<div id="extras">
</div>