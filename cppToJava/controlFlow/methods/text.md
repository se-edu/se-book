<div id="title">

#### Methods

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use methods</span>

<div id="body">

##### Defining methods

<div class="indented">

Here’s an example of adding more methods to a class:
```java
public class NewLine {

    public static void newLine() {
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println("First line.");
        newLine();
        System.out.println("Second line.");
    }
}
```
{{ icon_output }}
```
First line.

Second line.
```

By convention, method names should be named in the _camelCase_ format.
Similar to the main method, the newLine method is `public`, which means they can be invoked from other classes, `static` and `void`.

{{ similar }} A method can specify parameters. The `printTwice` method below specify a parameter of String type. The main method passes the argument `"Don't make me say this twice!"` to that parameter.

```java
public class PrintTwice {

    public static void printTwice(String s) {
        System.out.println(s);
        System.out.println(s);
    }

    public static void main(String[] args) {
        String sentence = “Polly likes crackers”
        printTwice(sentence);

    }
}

```

The value you provide as an argument must have the same type as the parameter. Sometimes Java can convert an argument from one type to another automatically. For example, if the method requires a `double`, you can invoke it with an `int` argument and Java will automatically convert the argument to the equivalent value of type double.

Parameters and other variables declared inside a method only exist inside their own methods. Inside `main`, there is no such thing as `s`. If you try to use it there, you’ll get a compiler error. Similarly, inside `printTwice` there is no such thing as `sentence`. That variable belongs to `main`.
Because variables only exist inside the methods where they are defined, they are often called local variables.

</div>

##### `return` statements

<div class="indented">

{{ similar }} The `return` statement allows you to terminate a method before you reach the end of it:

```java
public static void printLogarithm(double x) {
    if (x <= 0.0) {
        System.out.println("Error: x must be positive.");
        return;
    }
    double result = Math.log(x);
    System.out.println("The log of x is " + result);
}
```

{{ similar }} It can be used to return a value from a method too:

```java
public class AreaCalculator{

    public static double calculateArea(double radius) {
        double result = 3.14 * radius * radius;
        return result;
    }

    public static void main(String[] args) {
        double area = calculateArea(12.5);
        System.out.println(area);
    }
}
```

</div>

##### Overloading

<div class="indented">

{{ similar }} If two methods do the same thing, it is natural to give them the same name. Having more than one method with the same name is called overloading, and it is legal in Java as long as each version takes different parameters.

```java
public static double calculateArea
        (double radius) {
    ...
}

public static double calculateArea
        (double height, double width) {
    ...
}
```

</div>

##### Recursion

<div class="indented">

{{ similar }} Method can be recursive. Here is an example:

```java
public static void nLines(int n) {
    if (n > 0) {
        System.out.println();
        nLines(n - 1);
    }
}
```
</div>


</div>

<div id="extras">
</div>