<div id="title">

#### Abstract Classes and Methods

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use abstract classes and methods</span>

<div id="body">


**An _abstract method_ is a method that is declared without an implementation (without braces, and followed by a semicolon)**. Use an abstract method when you want to specify a method signature but not the implementation. If a class includes abstract methods, then the class itself must be declared abstract. Use the keyword `abstract` to indicate whether a class or a method is abstract.

<box>

{{ icon_example }} The `speak` method in this `Animal` class is `abstract`. Note how the method signature ends with a semicolon and there is no method body. This makes sense as the implementation of the speak method depends on the type of the animal and it is meaningless to provide a common implementation for all animal types.

```java
public abstract class Animal {

    protected String name;

    public Animal(String name){
        this.name = name;
    }
    public abstract String speak();
}
```
As one method of the class is `abstract`, the class itself is `abstract`.

</box>

**An _abstract class_ is a class that is declared `abstract`—it may or may not include abstract methods. Abstract classes can be used a reference type but cannot be instantiated.**

<box>

{{ icon_example }} This `Account` class has been declared as abstract although it does not have any abstract methods. Attempting to instantiate `Account` objects will result in a compile error.

```java
abstract class Account {

    int number;

    void close(){
        //...
    }
}
```
`Account a;` {{ icon_output_right }} {{ icon_tick_green }}<br> OK to use as a type
`a = new Account();` {{ icon_output_right }} {{ icon_x_red }} Compile error!

</box>

**When an abstract class is subclassed, the subclass should provides implementations for all of the abstract methods in its parent class or else the subclass must also be declared abstract.**

<box>

{{ icon_example }} The `Feline` class below inherits from the abstract class `Animal` but it does not provide an implementation for the abstract method `speak`. As a result, the `Feline` class needs to be abstract too.

```java
public abstract class Feline extends Animal {
    public Feline(String name) {
        super(name);
    }

}
```
The `DomesticCat` class inherits the abstract `Feline` class and provides the implementation for the abstract method `speak`. As a result, it need not be declared abstract.
```java
public class DomesticCat extends Feline {
    public DomesticCat(String name) {
        super(name);
    }

    @Override
    public String speak() {
        return "Meow";
    }
}
```

`Animal a = new Feline("Mittens");` {{ icon_output_right }} {{ icon_x_red }} Compile error! `Feline` is abstract.

`Animal a = new DomesticCat("Mittens");` {{ icon_output_right }} {{ icon_tick_green }} OK. `DomesticCat` can be instantiated and assigned to a variable of `Animal` type %%(the assignment is allowed by polymorphism)%%.

</box>

</div>

<div id="extras">
</div>