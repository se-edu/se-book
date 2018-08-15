<panel header="{{ icon_Q }} Grade Helper">
<question>

Write a Java program that takes a letter grade e.g., `A+` as a command line argument and prints the CAP value for that grade.

:bulb: Use a `switch` statement in your code.

<div id="capConversion">

A+  | A  | A- | B+ | B  | B- | C | Else
----|----|----|----|----|----|----|-----
5.0 |5.0 |4.5 |4.0 |3.5 |3.0 |2.5 |0
</div>

Follow the sample output given below.

{{ icon_terminal }} `java GradeHelper B` {{ icon_output_right }} `CAP for grade B is 3.5`

You can assume that the input is always in the correct format %%i.e., no need to handle invalid input cases%%.

<div slot="hint">

Partial solution:
```java
public class GradeHelper {
    public static void main(String[] args) {
        String grade = args[0];
        double cutoff = 0;
        switch (grade) {
        case "A+":
            // ...
        }
        System.out.println("CAP for grade " + grade + " is " + cutoff);
    }
}
```

</div>
</question>
</panel>
