<div id="title">

#### Casting

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java casting</span>

<div id="body">

**==_Casting_== is the action of converting from one type to another**. You can use the `(newType)` syntax to cast a value to a new type.

**When you cast a primitive value to another type, there may be a loss of precision.**

<box>

{{ icon_example }} The code below cast a `double` value to an `int` value and cast it back to a `double`. Note the loss of precision.

```java
double d = 5.3;
System.out.println("Before casting to an int: " + d);
int i = (int)d; // cast d to an int
System.out.println("After casting to an int: " + i);
d = (double)i; // cast i back to a double
System.out.println("After casting back a double: " + d);
```
{{ icon_output }}
```
Before casting to an int: 5.3
After casting to an int: 5
After casting back a double: 5.0
```

</box>

**==_Downcasting_== is when you cast an object reference from a superclass to a subclass.**

<box>

{{ icon_example }} Assume the following class hierarchy:

```java
class Animal{
    void speak(){
        System.out.println("I'm an animal");
    }
}

class Cat extends Animal{
    @Override
    void speak() {
        System.out.println("I'm a Cat");
    }
}

class DomesticCat extends Cat{
    @Override
    void speak() {
        System.out.println("I'm a DomesticCat");
    }
}
```

The `foo` method below downcasts an `Animal` object to its subclasses.

```java
public static void foo(Animal a){
    a.speak();
    Cat c = (Cat)a; // downcast a to a Cat
    c.speak();
    DomesticCat dc = (DomesticCat)a; // downcast a to a DomesticCat
    dc.speak();
}
```

</box>

**==_Upcasting_== is when you cast an object reference from a subclass to a superclass.** However, upcasting is done automatically by the compiler even if you do not specify it explicitly.

<box>

{{ icon_example }} This example upcasts a `Cat` object to its superclass `Animal`:

```java
Cat c = new Cat();
Animal a1 = (Animal)c; //upcasting c to the Animal class
Animal a2 = c; //upcasting is implicit

```

</box>

Note that due to polymorphism, the behavior of the object will reflect the actual type of the object irrespective of the type of the variable holding a reference to it.

<box>

{{ icon_example }} The call to the `speak()` method in the code below always executes the `speak()` method of the `DomesticCat` class because the actual type of the object remains `DomesticCat` although the reference to it is being downcast/upcast to various other types.
```java
Animal a = new DomesticCat(); //implicit upcast
a.speak();
Cat c = (Cat)a; //downcast
c.speak();
DomesticCat dc = (DomesticCat)a; //downcast
dc.speak();
```
{{ icon_output }}
```
I'm a DomesticCat
I'm a DomesticCat
I'm a DomesticCat
```

</box>

**Casting to an incompatible type can result in a `ClassCastException` at runtime.**

<box>

{{ icon_example }} This code will cause a `ClassCastException`:

```java
Object o = new Animal();
Integer x = (Integer)o;
```
{{ icon_output }}
```
Exception in thread "main" java.lang.ClassCastException: misc.casting.Animal cannot be cast to java.lang.Integer
	at misc.casting.CastingExamples.main(CastingExamples.java:14)
```
</box>

You can use the `instanceof` operator to check if a cast is safe to perform.

<box>

{{ icon_example }} This code checks if the object `a` is an instance of the `Cat` class before casting it to a `Cat`.

```java
Cat c;
if (a instanceof Cat){
    c = (Cat)a;
}
```
</box>

</div>

<div id="extras">
</div>