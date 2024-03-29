<span id="title">Polymorphism</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use polymorphism in Java</span>

<div id="body">

**Java is a _strongly-typed_ language which means the code works with only the object types that it targets.**

<box>

{{ icon_example }} The following code `PetShelter` keeps a list of `Cat` objects and make them `speak`. The code will not work with any other type, for example, `Dog` objects.

```java
public class PetShelter {
    private static Cat[] cats = new Cat[]{
            new Cat("Mittens"),
            new Cat("Snowball")};

    public static void main(String[] args) {
        for (Cat c: cats){
            System.out.println(c.speak());
        }
    }
}
```
{{ icon_output }}
```
Mittens: Meow
Snowball: Meow
```
<panel type="seamless" header="%%The `Cat` class%%">

```java
public class Cat {
    private String name;

    public Cat(String name) {
        this.name = name;
    }

    public String speak() {
        return name + ": Meow";
    }
}
```
</panel>
</box>

This **strong-typing can lead to unnecessary verbosity** caused by repetitive similar code that do similar things with different object types.

<box>

{{ icon_example }} If the `PetShelter` is to keep both cats and dogs, you'll need two arrays and two loops:

```java
public class PetShelter {
    private static Cat[] cats = new Cat[]{
            new Cat("Mittens"),
            new Cat("Snowball")};
    private static Dog[] dogs = new Dog[]{
            new Dog("Spot")};

    public static void main(String[] args) {
        for (Cat c: cats){
            System.out.println(c.speak());
        }
        for(Dog d: dogs){
            System.out.println(d.speak());
        }
    }
}
```
{{ icon_output }}
```
Mittens: Meow
Snowball: Meow
Spot: Woof
```

<panel type="seamless" header="%%The `Dog` class%%">

```java
public class Dog {
    private String name;

    public Dog(String name) {
        this.name = name;
    }

    public String speak() {
        return name + ": Woof";
    }
}
```
</panel>
</box>

A better way is to **take advantage of polymorphism to write code that targets a superclass so that it works with any subclass objects.**

<box>

{{ icon_example }} The `PetShelter2` uses one data structure to keep both types of animals and one loop to make them speak. The code targets the `Animal` superclass (assuming `Cat` and `Dog` inherits from the `Animal` class) instead of repeating the code for each animal type.

```java
public class PetShelter2 {
    private static Animal[] animals = new Animal[]{
            new Cat("Mittens"),
            new Cat("Snowball"),
            new Dog("Spot")};

    public static void main(String[] args) {
        for (Animal a: animals){
            System.out.println(a.speak());
        }
    }
}
```
{{ icon_output }}
```
Mittens: Meow
Snowball: Meow
Spot: Woof
```

<panel type="seamless" header="%%The `Animal`, `Cat`, and `Dog` classes%%">

```java
public class Animal {

    protected String name;

    public Animal(String name){
        this.name = name;
    }
    public String speak(){
        return name;
    }
}
```
```java
public class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public String speak() {
        return name + ": Meow";
    }
}
```
```java
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public String speak() {
        return name + ": Woof";
    }
}
```
</panel>

%%Explanation: Because Java supports polymorphism, you can store both `Cat` and `Dog` objects in an array of `Animal` objects. Similarly, you can call the `speak` method on any `Animal` object (as done in the loop) and yet get different behavior from `Cat` objects and `Dog` objects.%%

{{ icon_tip }} Suggestion: try to add an `Animal` object (e.g., `new Animal("Unnamed")`) to the `animals` array and see what happens.
</box>

**Polymorphic code is better** in several ways:
* It is **shorter**.
* It is **simpler**.
* It is more **flexible** (in the above example, the `main` method will work even if we add more animal types).

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
<include src="exercisesPanel.md" boilerplate />
</div>
