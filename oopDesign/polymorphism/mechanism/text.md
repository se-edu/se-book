<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Polymorphism :arrow_right:</div>

<div id="title">

#### Mechanism :three:

</div>

<div id="body">

There are three issues that are at the center of how polymorphism is achieved: _substitutability, operation overriding, and dynamic binding_.

* Substitutability: Because of substitutability, we can write code that expects object of a parent class and yet use that code with objects of child classes. That is how polymorphism is able to _treat objects of different types as one type_.
* Overriding: To get polymorphic behavior from an operation, the operation in the superclass needs to be overridden in each of the subclasses. That is how overriding allows objects of different sub classes to _display different behaviors in response to the same method call_.
* Dynamic binding: Overridden methods are bound to the method implementation dynamically during the runtime. That is how the code can call the method of the parent class and yet execute the implementation of the child class.

</div>

<div id="extras">
<div>

</div>
