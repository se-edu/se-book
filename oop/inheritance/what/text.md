<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of inheritance</span>

<div id="body">

**The OOP concept _Inheritance_ allows you to define a new class based on an existing class.**

<box>

{{ icon_example }} For example, you can use inheritance to define an `EvaluationReport` class based on an existing `Report` class so that the `EvaluationReport` class does not have to duplicate data/behaviors that are already implemented in the `Report` class. The `EvaluationReport` can inherit the `wordCount` attribute and the `print()` method from the _base class_ `Report`.

</box>

* Other names for Base class: _Parent_ class, _Superclass_
* Other names for Derived class: _Child_ class, _Subclass_, _Extended_ class

**A superclass is said to be _more general_ than the subclass.** Conversely, a subclass is said to be more _specialized_ than the superclass.

**Applying inheritance on a group of similar classes can result in the common parts among classes being extracted into more general classes.**

<box>

{{ icon_example }} `Man` and `Woman` behave the same way for certain things. However, the two classes cannot be simply replaced with a more general class `Person` because of the need to distinguish between `Man` and `Woman` for certain other things. A solution is to add the `Person` class as a superclass (to contain the code common to men and women) and let `Man` and `Woman` inherit from `Person` class.

</box>

**Inheritance implies the derived class can be considered as a _sub-type_ of the base class (and the base class is a _super-type_ of the derived class), resulting in an _is a_ relationship.**

%%{{ icon_info }} Inheritance does not necessarily mean a sub-type relationship exists. However, the two often go hand-in-hand. For simplicity, at this point let us assume inheritance implies a sub-type relationship.%%

<box>

{{ icon_example }} To continue the previous example,
* `Woman` _is a_ `Person`
* `Man` _is a_ `Person`

</box>

**Inheritance relationships through a chain of classes can result in inheritance _hierarchies_ (aka inheritance _trees_).**


<box>

{{ icon_example }} Two inheritance hierarchies/trees are given below. %%Note that the triangle points to the parent class.%% Observe how the `Parrot` _is a_ `Bird` as well as it _is an_ `Animal`.

<pic src="{{baseUrl}}/oop/inheritance/what/images/inheritanceTreesExamples.png" width="500" />
<p/>

</box>

**_Multiple Inheritance_ is when a class inherits _directly_ from multiple classes.** Multiple inheritance among classes is allowed in some languages (e.g., Python, C++) but not in other languages (e.g., Java, C#).

<box>

{{ icon_example }} The `Honey` class inherits from the `Food` class _and_ the `Medicine` class %%because honey can be consumed as a food as well as a medicine (in some oriental medicine practices)%%. Similarly, a `Car` is a `Vehicle`, an `Asset` and a `Liability`.

<pic src="{{baseUrl}}/oop/inheritance/what/images/multipleInheritanceExamples.png" width="440" />

</box>


</div>

<div id="extras">
 <include src="exercises.md" />
</div>
