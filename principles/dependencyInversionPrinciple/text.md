<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Principles :arrow_right: </div>

<div id="title">

#### Dependency Inversion Principle :four:

</div>

<div id="body">

<tip-box type="primary">

<include src="../../common/definitions.md#def-dependency-inversion-principle" />

</tip-box>

<tip-box>

Example:

In design (a), the higher level class `Payroll` depends on the lower level class `Employee`, a violation of DIP. In design (b), both `Payroll` and `Employee` depends on the `Payee` interface (note that inheritance is a dependency). Design (b) is more flexible (and less coupled) because now the `Payroll` class need not change when the `Employee` class changes. Here, `Payee` is the abstraction and is owned by the `Payroll` class.

<img src="{{baseUrl}}/principles/dependencyInversionPrinciple/images/payroll.png" height="130" />
<p/>

</tip-box>

</div>

</div>
