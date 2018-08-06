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

Let’s create a class to represent a moment in time:
```java
public class Time {
    private int hour;
    private int minute;
    private int second;
}
```
You can give a class any name you like. The Java convention is to use PascalCase format for class names e.g., `MyHelloWord` rather than `myHelloWorld` or `myhelloword` or `my_hello_world`.

The code should be in a file whose name matches the class e.g., `Time.java`

The `Time` class is `public`, which means that it can be used in other classes. But the <tooltip content="Attributes are also called **instance variables**, because each instance has its own variables.">instance variables</tooltip> are `private`, which means they can only be accessed from inside the `Time` class.

##### Constructos
<div class="indented">
Next, let’s define a <tooltip content="a special method that initializes the instance variables">constructor</tooltip>.

The syntax for constructors is similar to that of other methods, except:
* The name of the constructor is the same as the name of the class.
* Constructors have no return type (and no return value).
* The keyword `static` is omitted.
* Does not return anything. A constructor returns the created object by default.

Here is an example constructor for the Time class:
```java
public Time() {
    hour = 0;
    minute = 0;
    second = 0;
}
```

This constructor does not take any arguments. Each line initializes an instance variable to zero (which in this example means midnight).
Like void methods, constructors Now you can create `Time` objects.

`Time time = new Time();`

When you invoke `new`, Java creates the object and calls your constructor to initialize the instance variables. When the constructor is done, new returns a reference to the new object.

</div>

##### `this` keyword

<div class="indented">
Like other methods, constructors can be overloaded, which means you can provide multiple constructors with different parameters.

```java
public Time(int hour, int minute, int second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
}
```

All this constructor does is copy values from the parameters to the instance variables. In this example, the names and types of the parameters are the same as the instance variables (parameters don’t have to use the same names, but that’s a common style). As a result, the parameters **_shadow_** (or hide) the instance variables, so the keyword `this` is necessary to tell them apart.

The name `this` is a keyword that refers to the object we are creating. You can use `this` the same way you use the name of any other object. For example, you can read and write the instance variables of `this`, and you can pass `this` as an argument to other methods. But you do not declare `this`, and you can’t make an assignment to it.

Now you can use the above constructor to create Time objects that are initialized to a specific time:

```java
Time time = new Time(11, 59, 59);
```

</div>

==//todo mention Java docs==

</div>

<div id="extras">
</div>