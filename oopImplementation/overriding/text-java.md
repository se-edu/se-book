<tip-box> 

:package: A simple example where the `Report#print()` method is overridden by `EvaluationReport#print()` method: 

```java

class Report{

    void print(){
        System.out.println("Printing report");
    }

}

class EvaluationReport extends Report{

    @Override  // this annotation is optional
    void print(){
        System.out.println("Printing evaluation report");
    }

}

class ReportMain{

    public static void main(String[] args){
        Report report = new Report();
        report.print(); // prints "Printing report"

        EvaluationReport evaluationReport = new EvaluationReport();
        evaluationReport.print(); // prints "Printing evaluation report"
    }
}
```
</tip-box>

:paperclip: Resources: 
* [Java - Overriding](https://www.tutorialspoint.com/java/java_overriding.htm) -- a tutorial by tutorialspoint.com


