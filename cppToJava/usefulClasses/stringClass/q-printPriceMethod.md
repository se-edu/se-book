<panel header="{{ icon_Q }} `printPrice` method">
<question>

Implement the `printPrice` method in the code below to produce the given output. Its behavior:
* The parameter `item` is a string in the format `name--$price` i.e., a name and a price of an item separated using a `--` e.g., `banana--$3/50`
* It prints the `NAME: price` where the name is in upper case. The price does not have a `$` sign and has `.` in place of the `/`<br>
  e.g., `banana--$3/50` {{ icon_output_right }} `BANANA: 3.50`
* The `name` part of the input can have trailing/leading spaces which should be omitted from the output.<br>
  e.g., `  banana --$3/50` {{ icon_output_right }} `BANANA: 3.50`

:bulb: Do a Web search to find how to remove leading/trailing spaces. Suggested search terms `java string remove leading trailing spaces`

```java
public class Main {


    public static void printPrice(String item) {
        // TODO: add your code here

    }

    public static void main(String[] args) {
        printPrice("sandwich  --$4/50");
        printPrice("  soda --$10/00");
        printPrice("  fries --$0/50");
    }
}
```
{{ icon_output }}
```
SANDWICH: 4.50
SODA: 10.00
FRIES: 0.50
```

<div slot="hint">

Partial solution:
```java
public static void printPrice(String item) {
    int dividerPosition = item.indexOf("--");
    String itemName = item.substring(0, dividerPosition);
    //...
    System.out.println(itemName.trim().toUpperCase() + ...);

}
```

</div>
</question>
</panel>
