<div id="title">

#### Loops

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use loops</span>

<div id="body">

##### `while` loops

<div class="indented">

{{ similar }} Here is an example while loop:

```java
public static void countdown(int n) {
    while (n > 0) {
        System.out.println(n);
        n = n - 1;
    }
    System.out.println("Blastoff!");
}
```
</div>

##### `for` loops

<div class="indented">

{{ similar }} `for` loops have the form:
```
for (initializer; condition; update) {
    statement(s);
}
```
Here is an example:
```java
public static void printTable(int rows) {
    for (int i = 1; i <= rows; i = i + 1) {
        printRow(i, rows);
    }
}
```

</div>

##### `do-while` loops

<div class="indented">

The `while` and `for` statements are _pretest_ loops; that is, they test the condition first and at the beginning of each pass through the loop. Java also provides a _posttest_ loop: the `do-while` statement. This type of loop is useful when you need to run the body of the loop at least once.

Here is an example %%(from {{ oracle }})%%:
```java
class DoWhileDemo {
    public static void main(String[] args){
        int count = 1;
        do {
            System.out.println("Count is: " + count);
            count++;
        } while (count < 11);
    }
}
```

</div>

##### `break` and `continue`

<div class="indented">

{{ similar }} **A `break` statement exits the current loop**.

Here is an example %%(from {{ oracle }})%%:
```java
class Main {
    public static void main(String[] args) {
        int[] numbers = new int[] { 1, 2, 3, 0, 4, 5, 0 };
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == 0) {
                break;
            }
            System.out.print(numbers[i]);
        }
    }
}
```
{{ icon_output }}
```
123
```
<small>[[Try the above code on Repl.it](https://repl.it/@seedu/Demo-Break)]</small>

{{ similar }} **A `continue` statement skips the remainder of the current iteration** and moves to the next iteration of the loop.

Here is an example %%(from {{ oracle }})%%:
```java
public static void main(String[] args) {
    int[] numbers = new int[] { 1, 2, 3, 0, 4, 5, 0 };
    for (int i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            continue;
        }
        System.out.print(numbers[i]);
    }
}
```
{{ icon_output }}
```
12345
```
<small>[[Try the above code on Repl.it](https://repl.it/@seedu/Demo-Continue)]</small>

</div>

##### Enhanced `for` loops

<div class="indented">

Since traversing arrays is so common, Java provides an alternative for-loop syntax that makes the code more compact. For example, consider a for loop that displays the elements of an array on separate lines:

```java
for (int i = 0; i < values.length; i++) {
    int value = values[i];
    System.out.println(value);
}
```
We could rewrite the loop like this:
```java
for (int value : values) {
    System.out.println(value);
}
```
This statement is called an _enhanced `for` loop_. You can read it as, “for each value in values”.
Notice how the single line `for (int value : values)` replaces the first two lines of the standard `for` loop.

</div>

</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
  <include src="exercisesPanel.md" boilerplate />
</div>