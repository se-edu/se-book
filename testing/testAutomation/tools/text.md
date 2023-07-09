<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain test automation tools</span>

<span id="title">Test automation tools</span>

<div id="body">

**JUnit is a tool for automated testing of Java programs.** Similar tools are available for other languages and for automating different types of testing.

<box>

{{ icon_example }} This is an automated test for a `Payroll` class, written using JUnit libraries.

```java{start-from=16}
    // other test methods

    @Test
    public void testTotalSalary() {
        Payroll p = new Payroll();

        // test case 1
        p.setEmployees(new String[]{"E001", "E002"});
        assertEquals(6400, p.totalSalary());

        // test case 2
        p.setEmployees(new String[]{"E001"});
        assertEquals(2300, p.totalSalary());

        // more tests...
    }
```
</box>

Most modern IDEs have integrated support for testing tools. The figure below shows the JUnit output when running some JUnit tests using the Eclipse IDE.

<pic src="{{baseUrl}}/testing/testAutomation/tools/images/junit.png" height="190" />
<p/>

</div>

<div id="extras">
</div>
