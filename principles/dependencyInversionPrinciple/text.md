<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain dependency inversion principle (DIP)</span>

<div id="title">

#### Dependency Inversion Principle

</div>

<div id="body">

The _Dependency Inversion Principle_ states that,

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

<tip-box>

Example:

<img src="{{baseUrl}}/principles/dependencyInversionPrinciple/images/payrollEmployee.png" height="130" />
<p/>

In design (a), the higher level class `Payroll` depends on the lower level class `Employee`, a violation of DIP. In design (b), both `Payroll` and `Employee` depends on the Payee interface (note that inheritance is a dependency).

Design (b) is more flexible (and less coupled) because now the `Payroll` class need not change when the `Employee` class changes.

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>