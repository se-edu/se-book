<div id="title">

#### Defining Classes

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can define Java classes</span>

<div id="body">

As you know,
* Defining a class creates a new object type with the same name.
* Every object belongs to some object type; that is, it is an instance of some class.
* A class definition is like a template for objects: it specifies what attributes the objects have and what methods can operate on them.
* The `new` operator instantiates objects, that is, it creates new instances of a class.
* The methods that operate on an object type are defined in the class for that object.

<box>

{{ icon_example }} Here's a class called `Time`, intended to represent a moment in time. It has three attributes and no methods.

```java
public class Time {
    private int hour;
    private int minute;
    private int second;
}
```
</box>

You can give a class any name you like. **The Java convention is to use <tooltip content="e.g., `MyHelloWord` rather than `myHelloWorld` or `myhelloword` or `my_hello_world`">PascalCase</tooltip> format for class names**.

The code should be in a file whose name matches the class %%e.g., the `Time` class should be in a file named `Time.java`%%.

When a class is `public` %%(e.g., the `Time` class in the above example)%% it can be used in other classes. But the <tooltip content="Attributes are also called **instance variables**, because each instance has its own variables.">instance variables</tooltip> that are `private` %%(e.g., the hour, `minute` and `second` attributes of the `Time` class)%% can only be accessed from inside the `Time` class.

##### Constructos
<div class="indented">

The syntax for <tooltip content="special methods that construct the object and initialize the instance variables">constructors</tooltip> is similar to that of other methods, except:
* The name of the constructor is the same as the name of the class.
* The keyword `static` is omitted.
* Do not return anything. A constructor returns the created object by default.

When you invoke `new`, Java creates the object and calls your constructor to initialize the instance variables. When the constructor is done, new returns a reference to the new object.

<box>

{{ icon_example }} Here is an example constructor for the `Time` class:

```java
public Time() {
    hour = 0;
    minute = 0;
    second = 0;
}
```

This constructor does not take any arguments. Each line initializes an instance variable to zero (which in this example means midnight).
Now you can create `Time` objects.

`Time time = new Time();`

</box>

Like other methods, constructors can be overloaded, which means you can provide multiple constructors with different parameters.

<box>

{{ icon_example }} You can add another constructor to the `Time` class to allow creating `Time` objects that are initialized to a specific time:

```java
public Time(int h, int m, int s) {
    hour = h;
    minute = m;
    second = s;
}
```
Here's how you can invoke the new constructor:
```java
Time justBeforeMidnight = new Time(11, 59, 59);
```
</box>

</div>

##### `this` keyword

<div class="indented">

**The `this` keyword is a reference variable in Java that refers to the current object.** You can use `this` the same way you use the name of any other object. For example, you can read and write the instance variables of `this`, and you can pass `this` as an argument to other methods. But you do not declare `this`, and you can’t make an assignment to it.

<box>

{{ icon_example }} In the following version of the constructor, the names and types of the parameters are the same as the instance variables (parameters don’t have to use the same names, but that’s a common style). As a result, the parameters **_shadow_** (or hide) the instance variables, so the keyword `this` is necessary to tell them apart.
```java
public Time(int hour, int minute, int second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
}
```
</box>


**`this` can be used to refer to a constructor of a class within the same class too.**

<box>

{{ icon_example }} In this example the constructor `Time()` uses the `this` keyword to call its own overloaded constructor `Time(int, int, int)`

```java
public Time() {
    this(0, 0, 0); // call the overloaded constructor
}

public Time(int hour, int minute, int second) {
    // ...
}

```

</box>

##### Instance methods

**You can add methods to a class which can then be used from the objects of that class.** These _instance_ methods do not have the `static` keyword in the method signature. Instance methods can access attributes of the class.

<box>

{{ icon_example }} Here's how you can add a method to the `Time` class to get the number of seconds passed till midnight.

```java
public int secondsSinceMidnight() {
    return hour*60*60 + minute*60 + second;
}
```

Here's how you can use that method.
```java
Time t = new Time(0, 2, 5);
System.out.println(t.secondsSinceMidnight() + " seconds since midnight!");
```

</box>

</div>


</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>