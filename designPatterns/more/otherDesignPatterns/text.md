{% from "common/macros.njk" import show_term with context %}
<span id="title">Other design patterns</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can recognize some of the GoF design patterns</span>

<div id="body">

**The most famous source of design patterns is the ["Gang of Four" (GoF) book](https://en.wikipedia.org/wiki/Design_Patterns) which contains 23 design patterns divided into three categories**:

* **{{ show_term("Creational") }}**: About object creation. They separate the operation of an application from how its objects are created.
    * Abstract Factory, Builder, Factory Method, Prototype, Singleton
* **{{ show_term("Structural") }}**: About the composition of objects into larger structures while catering for future extension in structure.
    * Adapter, Bridge, Composite, Decorator, Façade, Flyweight, Proxy
* **{{ show_term("Behavioral") }}**: Defining how objects interact and how responsibility is distributed among them.
    * Chain of Responsibility, Command, Interpreter, Template Method, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor

</div>

<div id="extras">
</div>
