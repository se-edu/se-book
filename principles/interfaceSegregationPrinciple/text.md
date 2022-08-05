<span id="title">Interface segregation principle</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain interface segregation principle</span>

<div id="body">

<box type="definition" seamless>
<include src="../../common/definitions.md#def-interface-segregation-principle" inline />
</box>

<box>

{{ icon_example }} The `Payroll` class should not depend on the `AdminStaff` class because it does not use the `arrangeMeeting()` method. Instead, it should depend on the `SalariedStaff` interface.

```java{highlight-lines="2"}
public class Payroll {
    // violates ISP
    private void adjustSalaries(AdminStaff adminStaff) {
        // ...
    }

}
```

```java{highlight-lines="2"}
public class Payroll {
    // does not violate ISP
    private void adjustSalaries(SalariedStaff staff) {
        // ...
    }
}
```

<img src="{{baseUrl}}/principles/interfaceSegregationPrinciple/images/payroll.png" height="200" />
<p/>

</box>

</div>

<div id="extras">
</div>
