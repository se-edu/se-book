<panel header="{{ icon_Q }} Greeter">
<question>

Write a Java program that takes several command line arguments that describe a person or a family | and prints out a greeting. The parameters can be one of two formats.

arguments format | explanation | expected output
-----------------|-------------|----------------
`NAME GENDER`| Indicates a single person. `GENDER` can be `M` or `F` | `Smith M` {{ icon_output_right }} `Dear Mr. Smith`<br> `Lee F` {{ icon_output_right }}  `Dear Mdm. Lee`
`NAME MULTIPLE_GENDERS` |Indicates a family. | `Tan M M F` {{ icon_output_right }} `Dear Tan family`

Follow the sample output given below.

{{ icon_terminal }} `java Greeter Smith M` {{ icon_output_right }} `Dear Mr. Smith`

{{ icon_terminal }} `java Greeter Lee F` {{ icon_output_right }} `Dear Mdm. Lee`

{{ icon_terminal }} `java Greeter Tan M M F` {{ icon_output_right }} `Dear Tan family`

You can assume that the input is always in the correct format %%i.e., no need to handle invalid input cases%%.

<div slot="hint">

Partial solution:
```java
public class Greeter {
    public static void main(String[] args) {
        String first = args[0];
        String second = args[1];
        if (args.length == 2) {
            if (second.equals("M")) {
                // ...
            }
        } else {
            // ...
        }
    }
}
```


</div>
</question>
</panel>
