<div id="title">

#### Branching

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use branching</span>

<div id="body">

##### `if-else` statements

<div class="indented">

{{ similar }} Java supports the usual forms of `if` statements:

```java
if (x > 0) {
    System.out.println("x is positive");
}
```
```java
if (x % 2 == 0) {
    System.out.println("x is even");
} else {
    System.out.println("x is odd");
}
```
```java
if (x > 0) {
    System.out.println("x is positive");
} else if (x < 0) {
    System.out.println("x is negative");
} else {
    System.out.println("x is zero");
}
```
```java
if (x == 0) {
    System.out.println("x is zero");
} else {
    if (x > 0) {
        System.out.println("x is positive");
    } else {
        System.out.println("x is negative");
    }
}
```
The braces are optional (but recommended) for branches that have only one statement.
So we _could have_ written the previous example this way ({{ bad }}):
```java
if (x % 2 == 0)
    System.out.println("x is even");
else
    System.out.println("x is odd");
```

</div>

##### `switch` statements

<div class="indented">

The `switch` statement can have a number of possible execution paths. A `switch` works with the `byte`, `short`, `char`, and `int` primitive data types. It also works with enums, `String`.

Here is an example %%(adapted from {{ oracle }})%%:

```java
public class SwitchDemo {
    public static void main(String[] args) {

        int month = 8;
        String monthString;
        switch (month) {
        case 1:  monthString = "January";
            break;
        case 2:  monthString = "February";
            break;
        case 3:  monthString = "March";
            break;
        case 4:  monthString = "April";
            break;
        case 5:  monthString = "May";
            break;
        case 6:  monthString = "June";
            break;
        case 7:  monthString = "July";
            break;
        case 8:  monthString = "August";
            break;
        case 9:  monthString = "September";
            break;
        case 10: monthString = "October";
            break;
        case 11: monthString = "November";
            break;
        case 12: monthString = "December";
            break;
        default: monthString = "Invalid month";
            break;
        }
        System.out.println(monthString);
    }
}
```

{{ icon_output_right }} `August`

</div>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
  <include src="resourcesPanel.md" boilerplate />
</div>