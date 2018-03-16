<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### What :one:

</div>

<div id="body">

**The OOP concept _Inheritance_ allows you to define a new class based on an existing class.** For example, you can use inheritance to define an `EvaluationReport` class based on an existing `Report` class so that the `EvaluationReport` class does not have to duplicate code that is already implemented in the `Report` class. 

<dynamic-panel src="../../../uml/classDiagrams/classInheritance/what/full.md#title-and-body" header=":mortar_board: UML → Class Diagrams → Inheritance" expanded/>

<p/>

<tip-box>

:package: Example: The `EvaluationReport` inherits the `wordCount` attribute and the `print()` method from the _base class_ `Report`.

<img src="{{baseUrl}}/oopDesign/inheritance/what/images/report.png" height="120" />
<p/>

</tip-box>

* Other names for Base class: _Parent_ class, _Super_ class
* Other names for Derived class: _Child_ class, _Sub_ class, _Extended_ class

**A super class is said to be _more general_ than the sub class.** Conversely, a sub class is said to be more _specialized_ than the super class.

**Applying inheritance on a group of similar classes can result in the common parts among classes being extracted into more general classes.** 

<tip-box>

:package: `Man` and `Woman` behaves the same way for the 'owes money' association. However, the two classes cannot be simply replaced with a more general class `Person` because of the need to distinguish between `Man` and `Woman` for the ‘marriage’ association. A solution is to add the `Person` class as a super class and let `Man` and `Woman` inherit from `Person`.

<img src="{{baseUrl}}/oopDesign/inheritance/what/images/manWoman.png" height="250" />
<p/>

</tip-box>

**Inheritance implies the derived class can be considered as a _sub-type_ of the base class (and the base class is a _super-type_ of the derived class), resulting in an _is a_ relationship.**  

<tip-box type="info">

Inheritance does not necessarily mean a sub-type relationship exists. However, the two often go hand-in-hand. For simplicity, at this point let us assume inheritance implies a sub-type relationship.

</tip-box>

<tip-box>

:package: In this class diagrams of a _Snakes and Ladders_ board game,
* `SnakeHeadSquare` _is a_ `Square` %%&nbsp;(a `SnakeHeadSquare` is a square in which the head of a snake appears)%%
* `SnakeTailSquare` _is a_ `Square`

<img src="{{baseUrl}}/oopDesign/inheritance/what/images/boardSquare.png" height="250" />
<p/>

</tip-box>

**Inheritance relationships through a chain of classes can result in inheritance _hierarchies_ (aka inheritance _trees_).**


<tip-box>

:package: Two inheritance hierarchies/trees are given below. Note that `Parrot` _is a_ `Bird` as well as it _is an_ `Animal`. 

<img src="{{baseUrl}}/oopDesign/inheritance/what/images/inheritanceTreesExamples.png" width="500" />
<p/>

</tip-box>

**_Multiple Inheritance_ is when a class inherits _directly_ from multiple classes.** Multiple inheritance is allowed among C++ classes but not among Java classes.

<tip-box>

:package: The `TA` class inherits from the `Staff` class _and_ the `Student`.

<img src="{{baseUrl}}/oopDesign/inheritance/what/images/studentStaff.png" height="200" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>

</div>
