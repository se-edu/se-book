<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain dependency inversion principle (DIP)</span>

<span id="title">Dependency inversion principle</span>

<div id="body">

<box type="definition" seamless>
<include src="../../common/definitions.md#def-dependency-inversion-principle" trim />
</box>

<box>

{{ icon_example }} Example:

<pic src="{{baseUrl}}/principles/dependencyInversionPrinciple/images/payrollEmployee.png" height="130" />
<p/>

In design (a), the higher level class `Payroll` depends on the lower level class `Employee`, which is a violation of DIP. In design (b), both `Payroll` and `Employee` depend on the `Payee` interface (note that inheritance is a dependency).

Design (b) is more flexible (and less coupled) because now the `Payroll` class need not change when the `Employee` class changes.

</box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
