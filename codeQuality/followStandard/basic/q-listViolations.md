<panel header="{{ icon_Q }} Find basic coding standard violations">
<question >

Consider the code given below:
```java
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

In what ways the code violate the _basic_ guidelines (i.e., those marked with one :star:) of the OSS-Generic Java Coding Standard given [here](https://oss-generic.github.io/process/codingStandards/CodingStandard-Java.html)?

<div slot="hint">

Here are three:
* `descriptionPrefix` is a constant and should be named `DESCRIPTION_PREFIX`
* method name `printingDescription()` should be named as `printDescription()`
* boolean variable `important` should be named to sound boolean e.g., `isImportant`

There are many more.

</div>

</question>
</panel>
