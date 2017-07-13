<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Testing :arrow_right: Test Automation :arrow_right:</div>

<div id="title">

#### Test Automation Using Test Drivers :two:

</div>

<div id="body">

Automated testing requires test drivers. A test driver is a module written specifically for ‘driving’ the _SUT (Software Under Test)_ for the purpose of testing i.e. invoking the SUT with test inputs and verifying the behavior is as expected. In the code example given below, `PayrollTest` is a test driver for the `Payroll` class that ‘drives’ the `PayRoll` class by sending it test inputs and printing out the output. However, it does not verify if the output is as expected.

```java
public class PayrollTestDriver {
    public static void main(String[] args) {
        //test setup
        Payroll p = new Payroll();

        //test case 1
        p.setEmployees(new String[]{"E001", "E002"});
        print("Test 1 output " + p.totalSalary());

        //test case 2
        p.setEmployees(new String[]{"E001"});
        print("Test 2 output " + p.totalSalary());

        //more tests
        System.out.println("Testing completed");
    }
    ...
}
```

The `PayrollTest` class below not only drives the SUT Payroll class using test inputs, it also automatically verifies that output for each test input in as expected.

```java
public class PayrollTestAtd {
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

</div>

</div>
