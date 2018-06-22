<div id="title">

#### Mechanism

</div>

<span id="prereqs"><dynamic-panel src="../../../oopImplementation/polymorphism/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Object Oriented Programming → Polymorphism%%" />
<dynamic-panel src="../../../oopDesign/inheritance/substitutability/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Object Oriented Programming → Inheritance → Substitutability%%" />
<dynamic-panel src="../../../oopDesign/inheritance/dynamicAndStaticBinding/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Object Oriented Programming → Inheritance → Dynamic and Static Binding%%" /></span>

<span id="outcomes">{{glyphicon_flag}} Can explain how substitutability operation overriding, and dynamic binding relates to polymorphism</span>

<div id="body">

**Three concepts combine to achieve polymorphism: _substitutability, operation overriding, and dynamic binding_.**

* **Substitutability:** Because of substitutability, you can write code that expects object of a parent class and yet use that code with objects of child classes. That is how polymorphism is able to _treat objects of different types as one type_.
* **Overriding:** To get polymorphic behavior from an operation, the operation in the superclass needs to be overridden in each of the subclasses. That is how overriding allows objects of different sub classes to _display different behaviors in response to the same method call_.
* **Dynamic binding**: Calls to overridden methods are bound to the implementation of the actual object's class dynamically during the runtime. That is how the polymorphic code can call the method of the parent class and yet execute the implementation of the child class.

</div>

<div id="extras">

<include src="exercises.md" />

</div>