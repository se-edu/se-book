<span id="title">The `Scanner` class</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the Scanner class</span>

<div id="body">

**`Scanner` is a class that provides methods for inputting words, numbers, and other data.** `Scanner` provides a method called `nextLine` that reads a line of input from the keyboard and returns a String. The following example reads two lines and repeats them back to the user:

```java{highlight-lines="1,7,10"}
import java.util.Scanner;

public class Echo {

    public static void main(String[] args) {
        String line;
        Scanner in = new Scanner(System.in);

        System.out.print("Type something: ");
        line = in.nextLine();
        System.out.println("You said: " + line);

        System.out.print("Type something else: ");
        line = in.nextLine();
        System.out.println("You also said: " + line);
    }
}
```

`Scanner` class normally reads inputs as strings but it can read in a specific type of input too.

<box>

{{ icon_example }} The code below uses the `nextInt` method of the `Scanner` class to read an input as an integer.

```java{highlight-lines="5['nextInt()']"}

Scanner in = new Scanner(System.in);

System.out.print("What is your age? ");
int age = in.nextInt();
in.nextLine();  // read the new-line character that follows the integer
System.out.print("What is your name? ");
String name = in.nextLine();
System.out.printf("Hello %s, age %d\n", name, age);
```
{{ icon_tip }} Note the [use of `printf` method for formatting the output]({{ java_tutorial }}/java/data/numberformat.html).

</box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>