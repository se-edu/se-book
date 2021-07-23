<panel type="dark" header="###  <small><small>{{ icon_important }} [Key Exercise] `getGradeCap` Method</small></small>" expanded >

Add the following method to the class given below.

* `public static double getGradeCap(String grade)`: Returns the CAP value of the given `grade`. The mapping from grades to CAP is given below.

<div class="indented">

<include src="../branching/q-gradeHelper.md#capConversion" />

</div>

==Do not change the code of the `main` method!==

```java
public class Main {

    // ADD YOUR CODE HERE

    public static void main(String[] args) {
        System.out.println("A+: " + getGradeCap("A+"));
        System.out.println("B : " + getGradeCap("B"));
    }
}
```
{{ icon_output }}
```
A+: 5.0
B : 3.5
```

<panel type="seamless" header="Hint">

Partial solution:
```java
    public static double getGradeCap(String grade) {
        double cap = 0;
        switch (grade) {
        case "A+":
        case "A":
            cap = 5.0;
            break;
        case "A-":
            cap = 4.5;
            break;
        case "B+":
            cap = 4.0;
            break;
        case "B":
            cap = 3.5;
            break;
        case "B-":
            cap = 3.0;
            break;
        default:
        }
        return cap;
    }
```

</panel>
</panel>
