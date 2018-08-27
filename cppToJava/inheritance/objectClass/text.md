<div id="title">

#### The `Object` Class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Object class</span>

<div id="body">

As you know, all Java objects inherit from the `Object` class. Let us look at some of the useful methods in the `Object` class that can be used by other classes.

##### The `toString` method
<div class="indented">

**Every class inherits a `toString` method from the `Object` class that is used by Java to get a string representation of the object** %%e.g., for printing%%. By default it simply returns the type of the object and its address (in hexadecimal).

<box>

{{ icon_example }} Suppose you defined a class called `Time`, to represent a moment in time. If you create a `Time` object and display it with println:
```java
class Time {
    int hours;
    int minutes;
    int seconds;

    Time(int hours, int minutes, int seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}
```
```java
 Time t = new Time(5, 20, 13);
 System.out.println(t);
```
{{ icon_output_right }} `Time@80cc7c0` %%(the address part can vary)%%

</box>

**You can override the `toString` method in your classes** to provide a more meaningful string representation of the objects of that class.

<box>

{{ icon_example }} Here's an example of overriding the `toString` method of the `Time` class:

```java
class Time{

   //...

   @Override
   public String toString() {
       return String.format("%02d:%02d:%02d\n", this.hours, this.minutes, this.seconds);
   }
}
```
```java
 Time t = new Time(5, 20, 13);
 System.out.println(t);
```
{{ icon_output_right }} `05:20:13`
</box>

:bulb: `@Override` is an optional annotation you can use to indicate that the method is overriding a method from the parent class.

</div>

##### The `equals` method
<div class="indented">

**There are two ways to check whether values are equal: the `==` operator and the `equals` method. With objects you can use either one, but they are not the same.**
* The `==` operator checks whether objects are identical; that is, whether they are the same object.
* The `equals` method checks whether they are equivalent; that is, whether they have the same value.

The definition of identity is always the same, so the `==` operator always does the same thing.

<box>

{{ icon_example }} Consider the following variables:

```java
Time time1 = new Time(9, 30, 0);
Time time2 = time1;
Time time3 = new Time(9, 30, 0);
```

* The assignment operator copies references, so `time1` and `time2` refer to the same object. Because they are identical, `time1 == time2` is `true`.
* But `time1` and `time3` refer to different objects. Because they are not identical, `time1 == time3` is `false`.

</box>

By default, the `equals` method inherited from the `Object` class does the same thing as `==`. **As the definition of equivalence is different for different classes, you can override the `equals` method to define your own criteria for equivalence** of objects of your class.

<box>

{{ icon_example }} Here's how you can override the `equals` method of the `Time` class to provide an `equals` method that considers two `Time` objects equivalent as long as they represent the same time of the day:

```java
public class Time {
    int hours;
    int minutes;
    int seconds;

    // ...

    @Override
    public boolean equals(Object o) {
        Time other = (Time) o;
        return this.hours == other.hours
                && this.minutes == other.minutes
                && this.seconds == other.seconds;
    }
}
```
```java
Time t1 = new Time(5, 20, 13);
Time t2 = new Time(5, 20, 13);
System.out.println(t1 == t2);
System.out.println(t1.equals(t2));
```
{{ icon_output }}
```
false
true
```

{{ icon_important_big_red }} Note that a proper `equals` method implementation is more complex than the example above. See the article [_How to Implement Java’s equals Method Correctly_ by Nicolai Parlog](https://www.sitepoint.com/implement-javas-equals-method-correctly/) for a detailed explanation before you implement your own `equals` method.
</box>

</div>


</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>