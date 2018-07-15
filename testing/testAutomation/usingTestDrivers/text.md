<div id="title">

#### Test Automation Using Test Drivers

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain test drivers</span>

<div id="body">

**A test driver is the code that ‘drives’ the <tooltip content="Software Under Test">SUT</tooltip> for the purpose of testing** i.e. invoking the SUT with test inputs and verifying the behavior is as expected. 

<tip-box> 

{{ icon_example }} `PayrollTest` ‘drives’ the `PayRoll` class by sending it test inputs and verifies if the output is as expected.

```java
public class PayrollTestDriver {
    public static void main(String[] args) throws Exception {

        //test setup
        Payroll p = new Payroll();

        //test case 1
        p.setEmployees(new String[]{"E001", "E002"});
        // automatically verify the response
        if (p.totalSalary() != 6400) {
            throw new Error("case 1 failed ");
        }

        //test case 2
        p.setEmployees(new String[]{"E001"});
        if (p.totalSalary() != 2300) {
            throw new Error("case 2 failed ");
        }

        //more tests...

        System.out.println("All tests passed");
    }
}
```
</tip-box>

</div>

<div id="extras">
</div>