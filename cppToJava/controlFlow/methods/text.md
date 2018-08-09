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
{{ icon_output }}
```
Polly likes crackers
Polly likes crackers
```
By convention, method names should be named in the <trigger trigger="click" for="modal:javaMethods_camelCase">_camelCase_</trigger> format.

<modal large title="Defintion: camelCase" id="modal:javaMethods_camelCase">
  <include src="../../../common/definitions.md#def-camel-case" />
</modal>

Similar to the `main` method, the `printTwice` method is `public` %%(i.e., it can be invoked from other classes)%% `static` and `void`.

##### Parameters

{{ similar }} **A method can specify _parameters_.** The `printTwice` method above specifies a parameter of `String` type. The `main` method passes the _argument_ `"Polly likes crackers"` to that parameter.

**The value provided as an argument must have the same type as the parameter.** Sometimes Java can convert an argument from one type to another automatically. For example, if the method requires a `double`, you can invoke it with an `int` argument `5` and Java will automatically convert the argument to the equivalent value of type double `5.0`.

**Because variables only exist inside the methods where they are defined, they are often called _local_ variables.** Parameters and other variables declared inside a method only exist inside their own methods. Inside `main`, there is no such thing as `s`. If you try to use it there, you’ll get a compiler error. Similarly, inside `printTwice` there is no such thing as `sentence`. That variable belongs to `main`.

</div>

##### `return` statements

<div class="indented">

{{ similar }} **The `return` statement allows you to terminate a method before you reach the end of it**:

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

{{ similar }} **It can be used to return a value from a method too**:

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

{{ similar }} **Java methods can be _overloaded_.** If two methods do the same thing, it is natural to give them the same name. Having more than one method with the same name is called overloading, and it is legal in Java as long as each version takes different parameters.

```java
public static double calculateArea(double radius) {
    //...
}

public static double calculateArea(double height, double width) {
    //...
}
```

</div>

##### Recursion

<div class="indented">

{{ similar }} **Methods can be _recursive_.** Here is an example in which the `nLines` method calls itself recursively:

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
  <include src="resourcesPanel.md" boilerplate />
  <include src="exercisesPanel.md" boilerplate />
</div>