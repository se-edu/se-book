<panel header="{{ icon_Q }} `printTotalScore` method">
<question>

Implement the `printTotalScore` method in the code below to produce the given output. Its behavior:
* `values` is an array of strings, each string representing an integer e.g., `["5", "-1"]`
* The method prints the total of the numbers represented by the strings in the array<br>
  `["5", "-1"]` {{ icon_output_right }} `4`


```java
public class Main {

    public static void printTotalScore(String[] values){
        // TODO: add your code here
    }

    public static void main(String[] args) {
        printTotalScore(new String[]{});
        printTotalScore(new String[]{"0", "124", "-15"});
    }
}
```
{{ icon_output }}
```
0
109
```

<div slot="hint">

:bulb: You can use the [`Integer.parseInt()`](https://www.tutorialspoint.com/java/number_parseint.htm) method to convert a `String` to the equivalent `int` value.

Partial solution:
```java
public static void printTotalScore(String[] values){
    int total = 0;
    for (String value: values){
        // convert the value to an int and add to the total
    }
    System.out.println(total);
}
```

</div>
</question>
</panel>
