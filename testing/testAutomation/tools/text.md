<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Testing :arrow_right: Test Automation :arrow_right:</div>

<div id="title">

#### Test Automation Tools :two:

</div>

<div id="body">

JUnit is a tool for automated testing of Java programs. Similar tools are available for other languages.

Below is the code of an automated test for Payroll class, written using JUnit libraries.

```java
public class PayrollTestJUnit {

    @Test
    public void testTotalSalary(){
        Payroll p = new Payroll();

        //test case 1
        p.setEmployees(new String[]{"E001", "E002"});
        assertEquals(p.totalSalary(), 6400);

        //test case 2
        p.setEmployees(new String[]{"E001"});
        assertEquals(p.totalSalary(), 2300);

        //more tests...
    }
}
```

Most modern IDEs come packaged with integrated support for testing tools. The figure below shows the JUnit output when running some JUnit tests using the Eclipse IDE.

<img src="{{baseUrl}}/testing/testAutomation/tools/images/junit.png" height="190" />
<p/>

</div>

</div>
