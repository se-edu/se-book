<panel header="{{ icon_Q }} `filterEmails` method">
<question>

Implement the following two methods in the code below to produce the given output.
* **`filterEmailsfilterEmails(String[] items): String[]`**
  * `items` is an array of strings each of which may be an email address or some other random string
  * Returns a `String[]` containing email addresses that were in `items`. Any string containing `@` is considered as an email.<br>
  `["aaa@bbb", "xyz"]` {{ icon_output_right }} `["aaa@bbb"]`
* **`printItems(String[] items)`**
  * Prints `items` in the standard array format. e.g., `["aaa", "bbb"]` {{ icon_output_right }} `[aaa, bbb]`


```java
import java.util.Arrays;

public class Main {
    public static String[] filterEmails(String[] items){
        // TODO: add your code here
    }

    public static void printItems(String[] items){
        // TODO: add your code here
    }

    public static void main(String[] args) {
        printItems(filterEmails(new String[]{}));
        printItems(filterEmails(new String[]{"abc"}));
        printItems(filterEmails(new String[]{"adam@example.com", "aab", "john@example.com", "some@"}));
        printItems(filterEmails(new String[]{"xyz", "@bee.com", "aab"}));
    }
}
```
{{ icon_output }}
```
[]
[]
[adam@example.com, john@example.com, some@]
[@bee.com]

```

<div slot="hint">

* **`filterEmailsfilterEmails(String[] items): String[]`**
  1. create a new array (say `emails`) of the same size as `items`
  1. go through the elements in the `items` and add to `emails` if the element contains `@` (you can use the `contains` method of the `String` class here)
  1. Use `Arrays.copyOf` method to return the filled part of `emails`.
* **`printItems(String[] items)`**
  * :bulb: You can use the `Arrays.toString()` method for this.

<panel type="seamless" header="Partial solution">

```java
public static String[] filterEmails(String[] items){
    String[] results = new String[items.length];
    int matchCount = 0;
    for(String item: items){
        if (item.contains("@")){
           //...
        }
    }
    return Arrays.copyOf(results, matchCount);
}

public static void printItems(String[] items){
    System.out.println(Arrays.toString(items));
}
```
</panel>

</div>
</question>
</panel>
