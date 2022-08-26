<panel header="{{ icon_Q }} Find basic coding standard violations">

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

In what ways do the code violate the coding standard you are expected to follow?

<panel header=":fas-lightbulb: Some hints ..." minimized>

Here are three:
* `descriptionPrefix` is a constant and should be named `DESCRIPTION_PREFIX`
* method name `printingDescription()` should be named as `printDescription()`
* boolean variable `important` should be named to sound boolean e.g., `isImportant`

There are many more.

</div>

</panel>
