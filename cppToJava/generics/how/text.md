<div id="title">

#### How to use Generics

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java Generics</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

A generic class is defined with the following format:

```java
class name<T1, T2, ..., Tn> { /* ... */ }
```

The type parameter section, delimited by angle brackets (`<>`), follows the class name. It specifies the type parameters (also called type variables) `T1`, `T2`, ..., and `Tn`.
To update the `Box` class to use generics, you create a generic type declaration by changing the code `public class Box` to `public class Box<T>`. This introduces the type variable, `T`, that can be used anywhere inside the class.
With this change, the Box class becomes:

```java
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) {
        this.t = t;
    }

    public T get() {
        return t;
    }
}
```

As you can see, all occurrences of Object are replaced by `T`. A type variable can be any non-primitive type you specify: any class type, any interface type, any array type, or even another type variable.
This same technique can be applied to create generic interfaces.

By convention, type parameter names are single, uppercase letters. This stands in sharp contrast to the variable naming conventions that you already know about, and with good reason: Without this convention, it would be difficult to tell the difference between a type variable and an ordinary class or interface name.
The most commonly used type parameter names are:
* `E` - Element (used extensively by the Java Collections Framework)
* `K` - Key
* `N` - Number
* `T` - Type
* `V` - Value
S,U,V etc. - 2nd, 3rd, 4th types

To reference the generic Box class from within your code, you must perform a generic type invocation, which replaces `T` with some concrete value, such as `Integer`:

```java
Box<Integer> integerBox;
```

You can think of a generic type invocation as being similar to an ordinary method invocation, but instead of passing an argument to a method, you are passing a type argument — Integer in this case — to the Box class itself.

Like any other variable declaration, this code does not actually create a new Box object. It simply declares that integerBox will hold a reference to a "Box of Integer", which is how `Box<Integer>` is read.

To instantiate this class, use the new keyword, as usual, but place `<>` (an empty pair of angle brackets, also called the _diamond operator_) between the class name and the parenthesis:

```java
integerBox = new Box<>();

Box<String> stringBox = new Box<>();
```

As mentioned previously, a generic class can have multiple type parameters. For example, the generic OrderedPair class, which implements the generic Pair interface:

```java
public interface Pair<K, V> {
    public K getKey();
    public V getValue();
}
```
```java
public class OrderedPair<K, V> implements Pair<K, V> {

    private K key;
    private V value;

    public OrderedPair(K key, V value) {
	this.key = key;
	this.value = value;
    }

    public K getKey()	{ return key; }
    public V getValue() { return value; }
}
```

The following statements create two instantiations of the OrderedPair class:
```java
Pair<String, Integer> p1 = new OrderedPair<>("Even", 8);
Pair<String, String>  p2 = new OrderedPair<>("hello", "world");
```

The code, `new OrderedPair<String, Integer>`, instantiates `K` as a `String` and `V` as an `Integer`. Therefore, the parameter types of OrderedPair's constructor are `String` and Integer, respectively.



</blockquote>

</div>

<div id="extras">
</div>