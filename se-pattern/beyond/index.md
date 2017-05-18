### The origin of patterns

The notion of capturing design ideas as "patterns" is usually attributed to Christopher Alexander. He is a building architect noted for his theories about design. His book Timeless way of building talks about “design patterns” for constructing buildings.

Here is a sample pattern from that book:

> When a room has a window with a view, the window becomes a focal point: people are attracted to the window and want to look through it. The furniture in the room creates a second focal point: everyone is attracted toward whatever point the furniture aims them at (usually the center of the room or a TV). This makes people feel uncomfortable. They want to look out the window, and toward the other focus at the same time. If you rearrange the furniture, so that its focal point becomes the window, then everyone will suddenly notice that the room is much more “comfortable”

Apparently, patterns and anti-patterns are found in the field of building architecture. This is because they are general concepts applicable to any domain, not just software design. In software engineering, there are many general types of patterns: Analysis patterns, Design patterns, Testing patterns, Architectural patterns, Project management patterns, and so on.

In fact, the abstraction occurrence pattern is more of an analysis pattern than a design pattern, while MVC is more of an architectural pattern.

New patterns can be created too. If a common problem needs to be solved frequently that leads to a non-obvious and better solution, it can be formulated as a pattern so that it can be reused by others. However, don’t reinvent the wheel; the pattern might already exist.

The more patterns one acquires, the more ‘experienced’ he/she is. Exposing oneself to a multitude of patterns (at least the context and problem) is a must. Some patterns are domain- specific (e.g. patterns for distributed applications), some are created in-house (e.g. patterns the company/project) and some can be self-created (e.g. from past experience). However, most are common, and well known. As an example, GoF book contains 23 design patterns:

* **Creational**: About object creation. They separate the operation of an application from how its objects are created.
    * Abstract Factory, Builder, Factory Method, Prototype, Singleton
* **Structural**: About the composition of objects into larger structures while catering for future extension in structure.
    * Adapter, Bridge, Composite, Decorator, Façade, Flyweight, Proxy
* **Behavioral**: Defining how objects interact and how responsibility is distributed among them.
    * Chain of Responsibility, Command, Interpreter, Template Method, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor               
    
When using patterns, be careful not to overuse them. Do not throw patterns at a problem at every opportunity. Patterns come with overhead such as adding more classes or increasing the levels of abstraction. Use them only when they are needed. Before applying a pattern, make sure that:
* there is substantial improvement in the design, not just superficial.
* the associated tradeoffs are carefully considered. There are times when a design pattern is not appropriate (or an overkill).
