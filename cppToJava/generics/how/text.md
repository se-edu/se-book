<div id="title">

#### How to use Generics

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java Generics</span>

<div id="body">

This section includes extract from the {{ oracle }}, with some adaptations.

**The definition of a generic class includes a _type parameter section_, delimited by angle brackets (`<>`).** It specifies the _type parameters_ (also called _type variables_) `T1`, `T2`, ..., and `Tn`. A generic class is defined with the following format:

```java
class name<T1, T2, ..., Tn> { /* ... */ }
```

<box>

{{ icon_example }} Here is a generic `Box` class. The class declaration `Box<T>` introduces the type variable, `T`, which is also used inside the class to refer to the same type.

<div class="row">
  <div class="col-sm-6">

Using `Object` as the type:
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

  </div>
  <div class="col-sm-6">

A generic `Box` using type parameter `T`:
```java
public class Box<T> {
    private T x;

    public void set(T x) {
        this.x = x;
    }

    public T get() {
        return x;
    }
}
```

  </div>
</div>


As you can see, all occurrences of `Object` are replaced by `T`.
</box>

**To reference the generic `Box` class from within your code, you must perform a generic type invocation, which replaces `T` with some concrete value**, such as `Integer`. It is similar to an ordinary method invocation, but instead of passing an argument to a method, you are passing a type argument enclosed within angle brackets — e.g., `<Integer>` or `<String, Integer>` — to the generic class itself. Note that in some cases you can omit the type parameter i.e., `<>` if the type parameter can be inferred from the context.

<box>

{{ icon_example }} Using the generic `Box` class to store `Integer` objects:

```java
Box<Integer> integerBox;
integerBox = new Box<>(); // type parameter omitted as it can be inferred
integerBox.set(Integer.valueOf(4));
Integer i = integerBox.get(); // returns an Integer
```
* `Box<Integer> integerBox;` simply declares that `integerBox` will hold a reference to a "Box of Integer", which is how `Box<Integer>` is read.
* `integerBox = new Box<>();` instantiates a `Box<Integer>` class. Note the `<>` (an empty pair of angle brackets, also called the _diamond operator_) between the class name and the parenthesis.

</box>

**The compiler is able to check for type errors when using generic code.**

<box>

{{ icon_example }} The code below will fail because it creates a `Box<String>` and then tries to pass `Double` objects into it.

```java
Box<String> stringBox = new Box<>();
stringBox.set(Double.valueOf(5.0)); //compile error!
```
</box>

**A generic class can have multiple type parameters.**

<box>

{{ icon_example }} The generic `OrderedPair` class, which implements the generic Pair interface:

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

The following statements create two instantiations of the `OrderedPair` class:
```java
Pair<String, Integer> p1 = new OrderedPair<>("Even", 8);
Pair<String, String>  p2 = new OrderedPair<>("hello", "world");
```

The code, `new OrderedPair<String, Integer>`, instantiates `K` as a `String` and `V` as an `Integer`. Therefore, the parameter types of `OrderedPair`'s constructor are `String` and `Integer`, respectively.
</box>

**A type variable can be any non-primitive type you specify**: any class type, any interface type, any array type, or even another type variable.

**By convention, type parameter names are single, uppercase letters.** The most commonly used type parameter names are:
* `E` - Element (used extensively by the Java Collections Framework)
* `K` - Key
* `N` - Number
* `T` - Type
* `V` - Value
* `S`, `U`, `V` etc. - 2nd, 3rd, 4th types

</div>

<div id="extras">
</div>