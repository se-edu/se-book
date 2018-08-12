<div id="title">

#### The `String` Class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the String class</span>

<div id="body">

String is a built-in Java class that you can use without importing

<box>

:bulb: Any class in the [`java.lang`](https://docs.oracle.com/javase/9/docs/api/java/lang/package-summary.html) package can be used without importing.
</box>

Given below are some useful String methods:

##### Find the character at a specific location
<div class="indented">

Strings provide a method named charAt, which extracts a character. It returns a char, a primitive type that stores an individual character (as opposed to strings of them).

```java
String fruit = "banana";
char letter = fruit.charAt(0);
```

The argument 0 means that we want the letter at position 0. Like array indexes, string indexes start at 0, so the character assigned to letter is `b`.

You can convert a string to an array of characters using the toCharArray method.

```java
char[] fruitChars = fruit.toCharArray()
```
</div>

##### Change a string to upper/lower case
<div class="indented">

Strings provide methods, toUpperCase and toLowerCase, that convert from uppercase to lowercase and back. These methods are often a source of confusion, because it sounds like they modify strings. But neither these methods nor any others can change a string, because strings are immutable.
When you invoke toUpperCase on a string, you get a new string object as a return value. For example:

```java
String name = "Alan Turing";
String upperName = name.toUpperCase();
```
After these statements run, upperName refers to the string "ALAN TURING". But name still refers to "Alan Turing".
Another useful method is replace, which finds and replaces instances of one string within another. This example replaces "Computer Science" with "CS":

```java
String text = "Computer Science is fun!";
text = text.replace("Computer Science", "CS");
```

This example demonstrates a common way to work with string methods. It invokes `text.replace`, which returns a reference to a new string, `"CS is fun!"`. Then it assigns the new string to text, replacing the old string. This assignment is important; if you don’t save the return value, invoking `text.replace` has no effect.
</div>

##### Accessing substrings
<div class="indented">

The substring method returns a new string that copies letters from an existing string, starting at the given index.
* `fruit.substring(0)` {{ icon_output_right }} `"banana"`
* `fruit.substring(2)` {{ icon_output_right }} `"nana"`
* `fruit.substring(6)` {{ icon_output_right }} `""`

The first example returns a copy of the entire string. The second example returns all but the first two characters. As the last example shows, substring returns the empty string if the argument is the length of the string.

If it’s invoked with two arguments, they are treated as a start and end index:
* `fruit.substring(0, 3)` {{ icon_output_right }} `"ban"`
* `fruit.substring(2, 5)` {{ icon_output_right }} `"nan"`
* `fruit.substring(6, 6)` {{ icon_output_right }} `""`

</div>

##### Searching within strings
<div class="indented">

The `indexOf` method searches for a character in a string.

```java
String fruit = "banana";
int index = fruit.indexOf('a');
```
This example finds the index of 'a' in the string. But the letter appears three times, so it’s not obvious what indexOf should do. According to the documentation, it returns the index of the first appearance.

To find subsequent appearances, you can use another version of indexOf, which takes a second argument that indicates where in the string to start looking.

```java
int index = fruit.indexOf('a', 2);
```
This code starts at index 2 (the first 'n') and finds the next 'a', which is at index 3. If the letter happens to appear at the starting index, the starting index is the answer. So `fruit.indexOf('a', 5)` returns `5`.

If the character does not appear in the string, `indexOf` returns `-1`. Since indexes cannot be negative, this value indicates the character was not found.
You can also use indexOf to search for a substring, not just a single character. For example, the expression `fruit.indexOf("nan")` returns `2`.
</div>

##### Comparing Strings
<div class="indented">

To compare two strings, it may be tempting to use the == and != operators.

```java
String name1 = "Alan Turing";
String name2 = "Ada Lovelace";
if (name1 == name2) {                 // wrong!
    System.out.println("The names are the same.");
}
```

This code compiles and runs, and most of the time it gets the answer right. But it is not correct, and sometimes it gets the answer wrong. The problem is that the `==` operator checks whether the two variables refer to the same object (by comparing the references). If you give it two different strings that contain the same letters, it yields false.
The right way to compare strings is with the equals method, like this:

```java
if (name1.equals(name2)) {
    System.out.println("The names are the same.");
}
```
This example invokes `equals` on `name1` and passes `name2` as an argument. The `equals` method returns `true` if the strings contain the same characters; otherwise it returns `false`.

To check if two strings are similar irrespective of the differences in case, you can use the `equalsIgnoreCase` method.

```java
String s1 = "Apple";
String s2 = "apple";
System.out.println(s1.equals(s2)); //false
System.out.println(s1.equalsIgnoreCase(s2)); //true
```

Some more comparison-related `String` methods:
* `contains`: checks if one string is a sub-string of the other e.g., `Snapple` and `app`
* `startsWith`: checks if one string has the other as a substring at the _beginning_ e.g., `Apple` and `App`
* `endsWith`: checks if one string has the other as a substring at the _end_ e.g., `Crab` and `ab`

If the strings differ, we can use `compareTo` to see which comes first in alphabetical order:

```java
int diff = name1.compareTo(name2);
if (diff == 0) {
    System.out.println("The names are the same.");
} else if (diff < 0) {
    System.out.println("name1 comes before name2.");
} else if (diff > 0) {
    System.out.println("name2 comes before name1.");
}
```
The return value from compareTo is the difference between the first characters in the strings that differ. If the strings are equal, their difference is zero. If the first string (the one on which the method is invoked) comes first in the alphabet, the difference is negative. Otherwise, the difference is positive.

In the preceding code, compareTo returns positive 8, because the second letter of "Ada" comes before the second letter of "Alan" by 8 letters.
Both equals and compareTo are case-sensitive. The uppercase letters come before the lowercase letters, so "Ada" comes before "ada".


</div>

##### String formatting
<div class="indented">

Sometimes programs need to create strings that are formatted a certain way, but not display them immediately, or ever. For example, the following method returns a time string in 12-hour format:

```java
public static String timeString(int hour, int minute) {
    String ampm;
    if (hour < 12) {
        ampm = "AM";
        if (hour == 0) {
            hour = 12;  // midnight
        }
    } else {
        ampm = "PM";
        hour = hour - 12;
    }
    return String.format("%02d:%02d %s", hour, minute, ampm);
}
```
`String.format` takes the same arguments as `System.out.printf`: a format specifier followed by a sequence of values. The main difference is that `System.out.printf` displays the result on the screen; `String.format` creates a new string, but does not display anything.
In this example, the format specifier `\%02d` means “two digit integer padded with zeros”, so `timeString(19, 5)` returns the string `"07:05 PM"`.

</div>


</div>

<div id="extras">
</div>