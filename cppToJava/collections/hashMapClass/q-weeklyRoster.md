<panel header="{{ icon_Q }} Weekly roster">
<question>

The class given below keeps track of how many people signup to attend an event on each day of the week. Add the missing methods so that it produces the output given.

:bulb: Use an `HashMap` to store the number of entries for each day.

```java
public class Main {
    private static HashMap<String, Integer> roster = new HashMap<>();

    //TODO: add your methods here

    public static void main(String[] args) {
        addToRoster("Monday"); // i.e., one person signed up for Monday
        addToRoster("Wednesday"); // i.e., one person signed up for Wednesday
        addToRoster("Wednesday"); // i.e., another person signed up for Wednesday
        addToRoster("Friday");
        addToRoster("Monday");
        printRoster();
    }

}
```
{{ icon_output }}
```
Monday => 2
Friday => 1
Wednesday => 2
```

<div slot="hint">

Partial solution:
```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    private static HashMap<String, Integer> roster = new HashMap<>();

    private static void addToRoster(String day) {
        if (roster.containsKey(day)){
            Integer newValue = Integer.valueOf(roster.get(day).intValue() + 1);
            roster.put(day, newValue);
        } else {
            roster.put(day, Integer.valueOf(1));
        }
    }

    // ...
}
```

</div>
</question>
</panel>
