<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Principles &rarr; </div>

<div id="title">

#### Liskov Substitution Principle :three:

</div>

<div id="body">

<tip-box type="primary">

<include src="../../common/definitions.md#def-liskov-substitution-principle" />

</tip-box>

In other words, if a program module is using a super class, then the reference to the super class can be replaced with a sub class without affecting the functionality of the program module.

As we know, Java already allows substituting objects of sub classes where an object of the super class is expected. However, that does not mean that doing so will not break the functionality of the code. To follow LSP, we should be careful not to contradict the behavior specified by the super class.

<tip-box>

Example:

<img src="{{baseUrl}}/principles/liskovSubstitutionPrinciple/images/payroll.png" height="200" />
<p/>

Suppose the `Payroll` class depends on the `adjustMySalary(int percent)` method of the `Staff` class. Furthermore, the `Staff` class states that the `adjustMySalary` method will work for all positive percent values. Both `Admin` and `Academic` classes override the `adjustMySalary` method.  Now consider the following:

*	`Admin#adjustMySalary` method works for both negative and positive percent values.
*	`Academic#adjustMySalary` method works for percent values 1..100 only.

In the above scenario,

*	`Admin` class follows LSP because it fulfills `Payroll`’s expectation of `Staff` objects (i.e. it works for all positive values). Substituting `Admin` objects for Staff objects will not break the `Payroll` class functionality.
*	`Academic` class violates LSP because it will not work for percent values over 100 as expected by the `Payroll` class. Substituting `Academic` objects for `Staff` objects can potentially break the `Payroll` class functionality.

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
