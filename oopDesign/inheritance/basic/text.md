<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Inheritance :arrow_right:</div>

<div id="title">

#### Basic :one:

</div>

<div id="body">

Sometimes, it helps to be able to define a new class based on another class. For example, to be able to define an `EvaluationReport` class based on a `Report` class so that the `EvaluationReport` class does not have to duplicate code that is already implemented in the `Report` class. This can be achieved using the object-oriented concept of _inheritance_.

<dynamic-panel src="../../../uml/classDiagrams/classInheritance/topicPanel.md" header="UML: Class Diagrams: Inheritance" is-open></dynamic-panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/basic/images/report.png" height="120" />
<p/>

</tip-box>

In the example above, The `EvaluationReport` inherits the wordCount attribute and the print() method from the base class `Report`.

* Other names for Base class: _Parent class, Super class_
* Other names for Derived class: _Extended class, Child class, Sub class_

Applying inheritance concept on a group of similar classes can result in the common parts among classes being extracted into more general classes. In the example below, `Man` and `Woman` behaves the same way for the ‘owes money’ association. However, the two classes cannot be simply replaced with a more general class `Person` because of the need to distinguish between `Man` and `Woman` for the ‘marriage’ association. A solution is to add the `Person` class as a super class and let `Man` and `Woman` inherit from `Person`.

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/basic/images/manWoman.png" height="250" />
<p/>

</tip-box>

Inheritance implies the derived class can be considered as a _sub-type_ of the base class (and the base class is a _super-type_ of the derived class), resulting in an ‘is a’ relationship ; for example, in the class diagrams of a _Snakes and Ladders_ board game given below:

* SnakeHeadSquare _is a_ Square.
* SnakeTailSquare _is a_ Square.


<tip-box type="info">

Inheritance does not necessarily mean a sub-type relationship exists. However, the two often go hand-in-hand. For simplicity, at this point let us assume inheritance implies a sub-type relationship.

</tip-box>

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/basic/images/boardSquare.png" height="250" />
<p/>

</tip-box>

{explain inheritance hierarchies}

In the example below, the `TA` class inherits from `Staff` as well as `Student`. Such multiple inheritance is allowed among C++ classes but not among Java classes.

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/inheritance/basic/images/studentStaff.png" height="200" />
<p/>

</tip-box>

</div>

<div id="extras">
<div>

</div>
