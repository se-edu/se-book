<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: </div>

<div id="title">

#### Substitutability :three:

</div>

<div id="body">

When implementing inheritance, we should take care to preserve substitutability: i.e. the ability of sub-class objects to be substituted where a super class object is expected. In other words, we should follow the Liskov Substitution Principle. In concrete terms it means a subclass must honor the contract set by the super class.

A classic example of violating substitutability is given below.

<tip-box>

Example:

<img src="{{baseUrl}}/oopImplementation/substitutability/images/rectangleSquare.png" height="120" />
<p/>

```java
class Rectangle {
    Rectangle(int height, int width){
        …
    }
}
class Square extends Rectangle {
    Square(int height, int width){
        super(height, width);
        if (height != width) {
            //error
       }
    }
}
```

Explanation: The `super` class constructor can take any integers for height and width. This contract is violated by `Square` class because it does not accept a height that is different from the width. This means code that is written to work with `Rectangle` class might fail in unexpected ways when it is given `Square` objects instead of `Rectangle` objects. That is, `Square` class is not substitutable for the `Rectangle` class.

</tip-box>

</div>

<div id="extras">
<div>

</div>
