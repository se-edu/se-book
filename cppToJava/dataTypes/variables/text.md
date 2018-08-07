<div id="title">

#### Variables

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use variables</span>

<div id="body">

{{ similar }} Java is a _statically-typed_ language in that variables have a fixed type. Here are some examples of declaring variables and assigning values to them.

```java
int x;
x = 5;
int hour = 11;
boolean isCorrect = true;
char capitalC = 'C';
byte b = 100;
short s = 10000;
int i = 100000;
```

You can use any name starting with a letter, underscore, or $ as a variable name but you cannot use Java [keywords](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html) as variables names.
You can display the value of a variable using `System.out.print` or `System.out.println` (the latter goes to the next line after printing). To output multiple values on the same line, it’s common to use several print statements followed by println at the end.

```java
int hour = 11;
int mintue = 59;
System.out.print("The current time is ");
System.out.print(hour);
System.out.print(":");
System.out.print(minute);
System.out.println("."); //use println here to complete the line
System.out.println("done");

```
{{ icon_output }}

```
The current time is 11:59.
done
```

Use the keyword `final` to indicate that the variable value, once assigned, should not be allowed to change later i.e., act like a ‘constant’. By convention, names for constants are all uppercase, with the underscore character (`_`) between words.

```java
final double CM_PER_INCH = 2.54;
```

</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
</div>