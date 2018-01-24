<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### How :three:

</div>

<div id="body">

**Polymorphism can be used to implement dependency injection**, as can be seen in the example given in <trigger trigger="click" for="modal:useDi-stub">[Quality Assurance → Testing → Unit Testing → Stubs]</trigger> where a stub is injected to replace a dependency.

<modal large title="" id="modal:useDi-stub">
  <include src="../../testingTypes/unitTesting/stubs/full.md"/>
</modal>

<tip-box> 

:package: Here is another example of using polymorphism to implement dependency injection:

Suppose we want to unit test the `Payroll#totalSalary()` given below. The method depends on the `SalaryManager` object to calculate the return value. Note how the `setSalaryManager(SalaryManager)` can be used to inject a `SalaryManager` object to replace the current `SalaryManager` object.

```java
class Payroll {
    private SalaryManager manager = new SalaryManager();
    private String[] employees;

    void setEmployees(String[] employees) {
        this.employees = employees;
    }

    void setSalaryManager(SalaryManager sm) {
       this. manager = sm;
    }

    double totalSalary() {
        double total = 0;
        for(int i = 0;i < employees.length; i++){
            total += manager.getSalaryForEmployee(employees[i]);
        }
        return total;
    }
}


class SalaryManager {
    double getSalaryForEmployee(String empID){
        //code to access employee’s salary history
        //code to calculate total salary paid and return it
    }
}
```

During testing, you can inject a `SalaryManagerStub` object to replace the `SalaryManager` object.

```java
class PayrollTest {
    public static void main(String[] args) {
        //test setup
        Payroll p = new Payroll();
        p.setSalaryManager(new SalaryManagerStub()); //dependency injection
        //test case 1
        p.setEmployees(new String[]{"E001", "E002"});
        assertEquals(2500.0, p.totalSalary());
        //test case 2
        p.setEmployees(new String[]{"E001"});
        assertEquals(1000.0, p.totalSalary());
        //more tests ...
    }
}


class SalaryManagerStub extends SalaryManager {
    /** Returns hard coded values used for testing */
    double getSalaryForEmployee(String empID) {
        if(empID.equals("E001")) {
            return 1000.0;
        } else if(empID.equals("E002")) {
            return 1500.0;
        } else {
            throw new Error("unknown id");
        }
    }
}
```
</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
