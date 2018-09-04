<panel header="{{ icon_Q }} parse rectangle descriptor">
<question>

The `Main` class below parses a string descriptor of a rectangle of the format `"WIDTHxHEIGHT"` %%e.g., `"3x4"`%% and prints the area of the rectangle.

```java
public class Main {

    public static void printArea(String descriptor){
        //TODO: modify the code below
        System.out.println(descriptor + "=" + calculateArea(descriptor));
    }

    private static int calculateArea(String descriptor) {
        //TODO: modify the code below
        String[] dimensions = descriptor.split("x");
        return Integer.parseInt(dimensions[0]) * Integer.parseInt(dimensions[1]);
    }

    public static void main(String[] args) {
        printArea("3x4");
        printArea("5x5");
    }
}
```
{{ icon_output }}
```
3x4=12
5x5=25
```
1. Update the code of `printArea` to print an error message if `WIDTH` and/or `HEIGHT` are not numbers %%e.g., `"Ax4"`%%<br>
  :bulb: `calculateArea` will throw the unchecked exception `NumberFormatException` if the code tries to parse a non-number to an integer.

1. Update the code of `printArea` to print an error message if the descriptor is missing `WIDTH` and/or `HEIGHT` %%e.g., `"x4"`%%<br>
  :bulb: `calculateArea` will throw the unchecked exception `IndexOutOfBoundsException` if one or both dimensions are missing.

1. Update the code of `calculateArea` to throw the checked exception `IllegalShapeException` if there are more than 2 dimensions %%e.g., `"5x4x3"`%% and update the `printArea` to print an error message for those cases. Here is the code for the `IllegalShapeException.java`

<div class="indented-level2">

```java
public class IllegalShapeException extends Exception {
  //no other code needed
}
```
</div>

Here is the expected behavior after you have done the above changes:

```java
public class Main {

    //...

    public static void main(String[] args) {
        printArea("3x4");
        printArea("3xy");
        printArea("3x");
        printArea("3");
        printArea("3x4x5");
    }
}
```
{{ icon_output }}
```
3x4=12
WIDTH or HEIGHT is not a number: 3xy
WIDTH or HEIGHT is missing: 3x
WIDTH or HEIGHT is missing: 3
Too many dimensions: 3x4x5
```

<panel type="seamless" header="Partial solution">

```java
public class Main {

    public static void printArea(String descriptor){
        try {
            System.out.println(descriptor + "=" + calculateArea(descriptor));
        } catch (NumberFormatException e) {
            System.out.println("WIDTH or HEIGHT is not a number: " + descriptor);
        } // add more catch blocks here
    }

    private static int calculateArea(String descriptor) throws IllegalShapeException {
        String[] dimensions = descriptor.split("x");

        //throw IllegalShapeException here if dimensions.length > 2

        return Integer.parseInt(dimensions[0]) * Integer.parseInt(dimensions[1]);
    }


}
```
</panel>

</question>
</panel>
