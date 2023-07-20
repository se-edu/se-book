<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can decide when to apply a given refactoring</span>

<span id="title">When</span>

<div id="body">

**One way to identify refactoring opportunities is by _code smells_.**

> A _code smell_ is a surface indication that usually corresponds to a deeper problem in the system.
> First, a smell is by definition something that's quick to spot. Second, smells don't always indicate a problem.<br>
> --adapted from [https://martinfowler.com/bliki/CodeSmell.html](https://martinfowler.com/bliki/CodeSmell.html)

An example (from the same source as above) is the code smell _data class_ i.e., a class with all data and no behavior. When you encounter the such a class, you can explore if refactoring it to move the corresponding behavior into that class is appropriate. Some more examples:
* [Long Method](https://refactoring.guru/smells/long-method)
* [Large Class](https://refactoring.guru/smells/large-class)
* [Primitive Obsession](https://refactoring.guru/smells/primitive-obsession)
* [Temporary Field](https://refactoring.guru/smells/temporary-field)
* [Shotgun Surgery](https://refactoring.guru/smells/shotgun-surgery)

**Periodic refactoring is a good way to pay off the _technical debt_** a code base has accumulated.

> Software systems are prone to the build up of **cruft** - deficiencies in internal quality that make it harder than it would ideally be to modify and extend the system further.Technical Debt is a metaphor, coined by Ward Cunningham, that frames how to think about dealing with this cruft, thinking of it like a financial debt. The extra effort that it takes to add new features is the interest paid on the debt.<br>
> --[https://martinfowler.com/bliki/TechnicalDebt.html](https://martinfowler.com/bliki/TechnicalDebt.html)

While it is important to refactor frequently so as to avoid the accumulation of ‘messy’ code (aka technical debt), an important question is how much refactoring is _too much_ refactoring? **It is too much refactoring when the benefits no longer justify the cost.** The costs and the benefits depend on the context. That is why some refactorings are ‘opposites’ of each other (e.g. [_extract method_](https://refactoring.com/catalog/extractMethod.html) vs [_inline method_](https://refactoring.com/catalog/inlineMethod.html)).

</div>

<div id="extras">

<include src="resourcesPanel.md" boilerplate/><include src="exercisesPanel.md" boilerplate/>
</div>
