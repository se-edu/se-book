<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Testing :arrow_right: Dependency Injection :arrow_right:</div>

<div id="title">

#### How :three:

</div>

<div id="body">

Given next is a sample testing scenario that tests the `totalSalary` of the `Payroll` class. The production version of the `totalSalary` method collaborates with the `SalaryManager` object to calculate the return value. During testing, the `SalaryManager` object is substituted with a `SalaryManagerStub` object which responds with hard-coded return values.

```java
public class PayrollTestDriver {
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
        //more tests
        System.out.println("Testing completed");
    }
}
```

```java
class Payroll {
    private SalaryManager manager = new SalaryManager();
    private String[] employees;

    void setEmployees(String[] employees) {
        this.employees = employees;
    }

    /*the operation below is used to substitute the actual SalaryManager
    with a stub used for testing */
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
```

```java
class SalaryManager {
    double getSalaryForEmployee(String empID){
        //code to access employee’s salary history
        //code to calculate total salary paid and return it
    }
}
```

```java
class SalaryManagerStub extends SalaryManager {
    /* this method returns hard coded values used for testing */
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

</div>

</div>
