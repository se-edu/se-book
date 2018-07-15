<div id="title">

#### Interface Segregation Principle

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain interface segregation principle</span>

<div id="body">

<tip-box type="definition">

<include src="../../common/definitions.md#def-interface-segregation-principle" />

</tip-box>

<tip-box>

{{ icon_example }} The `Payroll` class should not depend on the `AdminStaff` class because it does not use the `arrangeMeeting()` method. Instead, it should depend on the `SalariedStaff` interface.

```java
public class Payroll {
    //...    
    private void adjustSalaries(AdminStaff adminStaff){ //violates ISP
        //...
    }

}
```

```java
public class Payroll {
    //...    
    private void adjustSalaries(SalariedStaff staff){ //does not violate ISP
        //...
    }
}
```

<img src="{{baseUrl}}/principles/interfaceSegregationPrinciple/images/payroll.png" height="200" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>