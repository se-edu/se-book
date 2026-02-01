<panel header="{{ icon_Q }} Find coding standard violations">

Consider the code given below:
```java{.line-numbers}
import java.util.*;

public class Task {
    public static final String descriptionPrefix = "description: ";
    private String description;
    private boolean important;
    List<String> pastDescription = new ArrayList<>(); // a list of past descriptions

    public Task(String d) {
      this.description = d;
      if (!d.isEmpty())
          this.important = true;
    }

    public String getAsXML() { return "<task>"+description+"</task>"; }

    /**
     * Print the description as a string.
     */
    public void printingDescription(){ System.out.println(this); }

    @Override
    public String toString() { return descriptionPrefix + description; }
}
```

What are the coding standard violations in the above code (as per the Java coding standard used in the course)?<br>
For each violation, note down the line number, violation, and a possible correction.

<panel header=":fas-lightbulb: Some hints ..." minimized>

[line 4] `descriptionPrefix` is a constant, which should be named using the screaming snake case (e.g., `DESCRIPTION_PREFIX`)

There are more than 10 coding standard violations in this code.

</div>

</panel>
