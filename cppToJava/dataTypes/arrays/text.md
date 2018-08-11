<div id="title">

#### Arrays

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use arrays</span>

<div id="body">

Arrays are indicated using square brackets (`[]`). To create the array itself, you have to use the `new` operator. Here are some example array declarations:
```java
int[] counts;
counts = new int[4]; // create an int array of size 4

int size = 5;
double[] values;
values = new double[size]; //use a variable for the size

double[] prices = new double[size]; // declare and create at the same time
```
<blockquote>
Alternatively, you can use the shortcut syntax to create and initialize an array:

```java
int[] values = {1, 2, 3, 4, 5, 6};

int[] anArray = {
    100, 200, 300,
    400, 500, 600,
    700, 800, 900, 1000
};
```
{{ oracle }}
</blockquote>

{{ similar }} The `[]` operator selects elements from an array. Array elements <tooltip content="i.e., the index of the first element is 0, not 1">indices start from 0</tooltip>.
```java
int[] counts = new int[4];

System.out.println("The first element is " + counts[0]);

counts[0] = 7; // set the element at index 0 to be 7
counts[1] = counts[0] * 2;
counts[2]++; // increment value at index 2
```

{{ different }} A Java array is aware of its size. A Java array prevents a programmer from indexing the array out of bounds. If the index is negative or not present in the array, the result is an error named `ArrayIndexOutOfBoundsException`.
```java
int[] scores = new int[4];
System.out.println(scores.length) // prints 4
scores[5] = 0; // causes an exception
```
{{ icon_output }}
```
4
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5
	at Main.main(Main.java:6)
```


{{ similar }} It is also possible to create arrays of more than one dimension:
<blockquote>

```java
String[][] names = {
    {"Mr. ", "Mrs. ", "Ms. "},
    {"Smith", "Jones"}
};

System.out.println(names[0][0] + names[1][0]); // Mr. Smith
System.out.println(names[0][2] + names[1][1]); // Ms. Jones
```
{{ oracle }}
</blockquote>

##### Passing arguments to a program

{{ similar }} The `args` parameter of the `main` method is an array of Strings containing command line arguments supplied (if any) when running the program.
```java
public class Foo{
    public static void main(String[] args) {
        System.out.println(args[0]);
    }
}
```
You can run this program (after compiling it first) from the command line by typing:

{{ icon_terminal }} `java Foo abc`

{{ icon_output }}

`abc`

</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
  <include src="exercisesPanel.md" boilerplate />
</div>