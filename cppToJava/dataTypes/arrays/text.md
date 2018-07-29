<div id="title">

#### Arrays

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use arrays</span>

<div id="body">

Arrays are indicated using square brackets (`[]`). To create the array itself, you have to use the `new` operator. Here are some example array declarations:
```java
int[] counts;
double[] values;
counts = new int[4];
values = new double[size];
int[] scores = new int[4];
double[] prices = new double[size];
```

{{ similar }} The `[]` operator selects elements from an array. Array elements indices start from 0 %%i.e., the index of the first element is 0, not 1%%.
```java
int[] counts = new int[4];

System.out.println("The first element is " + counts[0]);

counts[0] = 7;
counts[1] = counts[0] * 2;
counts[2]++;
```

{{ different }} A Java array is aware of its size.
```java
int[] scores = new int[4];
System.out.println(scores.length)
```
{{ icon_output }}
```
4
```

{{ different }} A Java array prevents a programmer from indexing the array out of bounds. If the index is negative or not present in the array, the result is an error named `ArrayIndexOutOfBoundsException`.

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
</div>