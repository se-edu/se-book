<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Implementing Overriding :one:

</div>

<div id="body">

**To override a method inherited from an ancestor class, simply re-implement the method in the target class.** 

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



</div>

<div id="extras">

<include src="resources.md" />
<include src="exercises.md" />

</div>

</div>
