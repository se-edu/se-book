<div id="title">

#### The `Object` Class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Obect class</span>

<div id="body">

##### The `toString` method
<div class="indented">

Suppose you defined a class called `Time`, to represent a moment in time. If you create a `Time` object and display it with println:

```java
public static void main(String[] args) {
    Time time = new Time(11, 59, 59.9);
    System.out.println(time);
}
```
The output will look something like: `Time@80cc7c0`

When Java displays the value of an object type, it displays the name of the type and the address of the object (in hexadecimal).

**Every object type has a method called `toString` that returns a string representation of the object.** By default it simply displays the type of the object and its address, but you can override this behavior by providing your own toString method.To display `Time` objects in a way that is more meaningful to users (e.g., to display the hour, minute, and second), you can override that method in the `Time` class. Reason: when you display an object using `print` or `println`, Java invokes the object’s `toString` method.

For example, here is a toString method for Time:

```java
@Override
public String toString() {
    return String.format("%02d:%02d:%04.1f\n",
        this.hour, this.minute, this.second);
}
```

:bulb: `@Override` is an optional annotation you can use to indicate that the method is overriding a method from the parent class.
</div>

##### The `equals` method
<div class="indented">

We have seen two ways to check whether values are equal: the `==` operator and the `equals` method. With objects you can use either one, but they are not the same.
* The `==` operator checks whether objects are identical; that is, whether they are the same object.
* The `equals` method checks whether they are equivalent; that is, whether they have the same value.

The definition of identity is always the same, so the `==` operator always does the same thing. But the definition of equivalence is different for different objects, so objects can define their own `equals` methods.
Consider the following variables:

```java
Time time1 = new Time(9, 30, 0.0);
Time time2 = time1;
Time time3 = new Time(9, 30, 0.0);
```

* The assignment operator copies references, so `time1` and `time2` refer to the same object. Because they are identical, `time1 == time2` is `true`.
* But `time1` and `time3` refer to different objects. Because they are not identical, `time1 == time3` is `false`.

By default, the `equals` method does the same thing as `==`. For `Time` objects, that’s probably not what we want. For example, `time1` and `time3` represent the same time of day, so we should consider them equivalent. We can overrid the `equals` method of the `Time` class (inherited from the `Object` class) to provide an `equals` method that implements this notion of equivalence:

```java
@Override
public boolean equals(Time that) {
    return this.hour == that.hour
        && this.minute == that.minute
        && this.second == that.second;
}
```

</div>


</div>

<div id="extras">
</div>