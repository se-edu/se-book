<div id="title">

#### The `String` Class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the String class</span>

<div id="body">

String is a built-in Java class that you <trigger trigger="click" for="modal:stringClass-javaLang">can use without importing</trigger>. Given below are some useful String methods:

<modal id="modal:stringClass-javaLang" title=":bulb: `java.lang` classes can be used without importing" placement="top">

 Any class in the [`java.lang`]({{ java_api }}/java/lang/package-summary.html) package can be used without importing.
</modal>


##### Find characters of a string
<div class="indented">

Strings provide a method named `charAt`, which extracts a character. It returns a `char`, a primitive type that stores an individual character (as opposed to strings of them).

```java
String fruit = "banana";
char letter = fruit.charAt(0);
```

The argument 0 means that we want the letter at position 0. Like array indexes, string indexes start at 0, so the character assigned to `letter` is `'b'`.

You can convert a string to an array of characters using the `toCharArray` method.

```java
char[] fruitChars = fruit.toCharArray()
```
</div>

##### Change a string to upper/lower case
<div class="indented">

Strings provide methods, `toUpperCase` and `toLowerCase`, that convert from uppercase to lowercase and back.

<box>

{{ icon_example }} After these statements run, `upperName` refers to the string `"ALAN TURING"` but `name` still refers to `"Alan Turing"`.

```java
String name = "Alan Turing";
String upperName = name.toUpperCase();
System.out.println(name);
System.out.println(upperName);
```
{{ icon_output }}
```
Alan Turing
ALAN TURING
```
</box>

Note that **a string method cannot change the string object on which the method is invoked, because strings are <tooltip content="once created, cannot be modified">_immutable_</tooltip>**. For example, when you invoke `toUpperCase` on a string `"abc"`, you get a new string object `"ABC"` as the return value rather than the string `"abc"` being changed to `"ABC"`. As a result, for such string methods that _seemingly_ modify the string but _actually_ return a new string instead e.g., `toLowerCase`, ==invoking the method has no effect if you don’t assign the return value to a variable==.
```java
String s = "Ada";
s.toUpperCase(); // no effect
s = s.toUpperCase(); // the correct way
```

</div>

##### Replacing parts of a string
<div class="indented">

Another useful method is `replace`, which finds and replaces instances of one string within another.

<box>

{{ icon_example }} This example replaces `"Computer Science"` with `"CS"`.

```java
String text = "Computer Science is fun!";
text = text.replace("Computer Science", "CS");
System.out.println(text);
```
{{ icon_output }}
```
CS is fun!
```
</box>

</div>

##### Accessing substrings
<div class="indented">

The `substring` method returns a new string that copies letters from an existing string, starting at the given index.
* `"banana".substring(0)` {{ icon_output_right }} `"banana"`
* `"banana".substring(2)` {{ icon_output_right }} `"nana"`
* `"banana".substring(6)` {{ icon_output_right }} `""`

If it’s invoked with two arguments, they are treated as a start and end index:
* `"banana".substring(0, 3)` {{ icon_output_right }} `"ban"`
* `"banana".substring(2, 5)` {{ icon_output_right }} `"nan"`
* `"banana".substring(6, 6)` {{ icon_output_right }} `""`

</div>

##### Searching within strings
<div class="indented">

The `indexOf` method searches for a single character (or a substring) in a string and returns the index of the first occurrence. The method returns `-1` if there are no occurrences.

* `"banana".indexOf('a')` {{ icon_output_right }} `1`
* `"banana".indexOf('a', 2)` {{ icon_output_right }} `3` %%searches for `'a'`, starting from position 2%%
* `"banana".indexOf('x')` {{ icon_output_right }} `-1`
* `"banana".indexOf("nan")` {{ icon_output_right }} `2` %%searches for the substring `"nan"`%%

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
The right way to compare strings is with the `equals` method.

<box>

{{ icon_example }} This example invokes `equals` on `name1` and passes `name2` as an argument. The `equals` method returns `true` if the strings contain the same characters; otherwise it returns `false`.


```java
if (name1.equals(name2)) {
    System.out.println("The names are the same.");
}
```
</box>


If the strings differ, we can use `compareTo` to see which comes first in alphabetical order. The return value from `compareTo` is the difference between the first characters in the strings that differ. If the strings are equal, their difference is zero. If the first string (the one on which the method is invoked) comes first in the alphabet, the difference is negative. Otherwise, the difference is positive.

<box>

{{ icon_example }} In this example, `compareTo` returns positive 8, because the second letter of "Ada" comes before the second letter of "Alan" by 8 letters.

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
</box>

Both `equals` and `compareTo` are case-sensitive. The uppercase letters come before the lowercase letters, so `"Ada"` comes before `"ada"`. To check if two strings are similar irrespective of the differences in case, you can use the `equalsIgnoreCase` method.

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
</div>

##### Printing special characters (line breaks, tabs, ...)
<div class="indented">

You can embed a special character %%e.g., line break, tab, backspace, etc.%% in a string using an _escape sequence_.

Escape sequence | meaning
----------------|--------
`\n`     | newline character
`\t`     | tab character
`\b`     | backspace character
`\f`     | form feed character
`\r`     | carriage return character
`\"`     | " (double quote) character
`\'`     | ' (single quote) character
`\\`     | \ (back slash) character
`\uDDDD` |character from the Unicode character set, by specifying the Unicode as four hex digits in the place of `DDDD`

<box>

{{ icon_example }} An example of using escape sequences to printing some special characters.

```java
System.out.println("First line\nSecond \"line\"");
```
{{ icon_output }}
```
First line
Second "line"
```
</box>

:bulb: As the behavior of the `\n` depends on the platform, the recommended way to print a line break is using the `System.lineSeparator()` as it works the same in all platforms.

<box>

{{ icon_example }} Using `System.lineSeparator()` to print a line break.

```java
System.out.println("First line" + System.lineSeparator() + "Second line");
```
{{ icon_output }}
```
First line
Second line
```
</box>

</div>

##### String formatting
<div class="indented">

Sometimes programs need to create strings that are formatted a certain way. `String.format` takes a format specifier followed by a sequence of values and returns a new string formatted as specified.

<box>

{{ icon_example }} The following method returns a time string in 12-hour format. The format specifier `\%02d` means “two digit integer padded with zeros”, so `timeString(19, 5)` returns the string `"07:05 PM"`.

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
    return String.format("%02d:%02d %s", hour, minute, ampm); // returns "07:05 PM"
}
```
</box>

</div>


</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
  <include src="exercisesPanel.md" boilerplate />
</div>