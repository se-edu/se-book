<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of inheritance</span>

<div id="body">

**The OOP concept _Inheritance_ allows you to define a new class based on an existing class.** 

<tip-box>

{{ icon_example }} For example, you can use inheritance to define an `EvaluationReport` class based on an existing `Report` class so that the `EvaluationReport` class does not have to duplicate code that is already implemented in the `Report` class. The `EvaluationReport` can inherit the `wordCount` attribute and the `print()` method from the _base class_ `Report`.

</tip-box>

* Other names for Base class: _Parent_ class, _Super_ class
* Other names for Derived class: _Child_ class, _Sub_ class, _Extended_ class

**A super class is said to be _more general_ than the sub class.** Conversely, a sub class is said to be more _specialized_ than the super class.

**Applying inheritance on a group of similar classes can result in the common parts among classes being extracted into more general classes.** 

<tip-box>

{{ icon_example }} `Man` and `Woman` behaves the same way for certain things. However, the two classes cannot be simply replaced with a more general class `Person` because of the need to distinguish between `Man` and `Woman` for certain other things. A solution is to add the `Person` class as a super class (to contain the code common to men and woment) and let `Man` and `Woman` inherit from `Person` class.

</tip-box>

**Inheritance implies the derived class can be considered as a _sub-type_ of the base class (and the base class is a _super-type_ of the derived class), resulting in an _is a_ relationship.**  

<tip-box type="info">

Inheritance does not necessarily mean a sub-type relationship exists. However, the two often go hand-in-hand. For simplicity, at this point let us assume inheritance implies a sub-type relationship.

</tip-box>

<tip-box>

{{ icon_example }} To continue the previous example,
* `Woman` _is a_ `Person` 
* `Man` _is a_ `Person`

</tip-box>

**Inheritance relationships through a chain of classes can result in inheritance _hierarchies_ (aka inheritance _trees_).**


<tip-box>

{{ icon_example }} Two inheritance hierarchies/trees are given below. Note that `Parrot` _is a_ `Bird` as well as it _is an_ `Animal`. Note that the triangle points to the parent class. 

<img src="{{baseUrl}}/oop/inheritance/what/images/inheritanceTreesExamples.png" width="500" />
<p/>

</tip-box>

**_Multiple Inheritance_ is when a class inherits _directly_ from multiple classes.** Multiple inheritance among classes is allowed in some languages (e.g., Python, C++) but not in other languages (e.g., Java, C#).

<tip-box>

{{ icon_example }} The `Honey` class inherits from the `Food` class _and_ the `Medicine` class %%because honey can be consumed as a food as well as a medicine (in some oriental medicine practices)%%.


</tip-box>

##### <big>Implementing inheritance</big>
<div class="alt-java">

To learn how to implement inheritance in Java, you can follow [[Oracle’s Java Tutorials: Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)]

<panel type="seamless" header="{{ icon_video }} A very beginner-friendly video about implementing Java inheritance.">

@[youtube](9JpNY-XAseg)

</panel><p/>

:bulb: Java requires all classes to have a parent class. If you do not specify a parent class, Java automatically assigns the `Object` class as the parent class.
</div>
<div class="alt-python">


* [Python Programming Basics: OOP: Inheritance](https://nus-te3201.github.io/website/programming/toc/oop.html#inheritance)

:bulb: Python automatically assigns the `object` class as the parent class.
</div>

</div>

<div id="extras">
 <include src="exercises.md" />
</div>