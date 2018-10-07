<div id="title">

#### Packages

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java packages</span>

<div id="body">

**You can organize your _types_ (i.e., classes, interfaces, enumerations, etc.) into _packages_** for easier management (among [other benefits](https://www.tutorialspoint.com/Advantages-of-using-packages-in-Java)).

**To create a package, you put a package statement at the very top of every source file in that package.** The package statement must be the first line in the source file and there can be no more than one package statement in each source file.

<box>

{{ icon_example }} The `Formatter` class below (in `Formatter.java` file) is in the package `seedu.tojava.util`:

```java
package seedu.tojava.util;

public class Formatter {
    public static final String PREFIX = ">>";

    public static String format(String s){
        return PREFIX + s;
    }
}
```

</box>

**Package names are written in all lower case** (not camelCase), using the dot as a separate. Companies use their reversed Internet domain name to begin their package names. Packages in the Java language itself begin with `java`. or `javax`.

<box>

{{ icon_example }} For example, `com.foobar.doohickey.util` can be the name of a package created by a company with a domain name `foobar.com`

</box>

**To use a public <tooltip content="types contained in the package">package member</tooltip> from outside its package, you must do one of the following:**

1. **Use the <tooltip content="type name prefixed by the package name e.g., `java.io.IOException`">fully qualified name</tooltip>** to refer to the member
1. **Import** the package or the specific package member

<box>

{{ icon_example }} The `Main` class below has two import statements:

* `import seedu.tojava.util.StringParser`: imports the class `StringParser` in the `seedu.tojava.util` package
* `import seedu.tojava.frontend.*`: imports all the classes in the `seedu.tojava.frontend` package

```java
package seedu.tojava;

import seedu.tojava.util.StringParser;
import seedu.tojava.frontend.*;

public class Main {

    public static void main(String[] args) {

        // Using the fully qualified name to access the Processor class
        String status = seedu.tojava.logic.Processor.getStatus();

        // Using the StringParser previously imported
        StringParser sp = new StringParser();

        // Using classes from the tojava.frontend package
        Ui ui = new Ui();
        Message m = new Message();

    }
}
```

Note how the class can still use the `Processor` without importing it first, by using its fully qualified name `seedu.tojava.logic.Processor`

</box>

**Importing a package does not import its sub-packages**, as packages do not behave as hierarchies despite appearances.

<box>

{{ icon_example }} `import seedu.tojava.frontend.*` does not import the classes in the sub-package `seedu.tojava.frontend.widget`.

</box>

**If you do not use a package statement, your type doesn't have a package** -- a practice not recommended (except for small code examples) as it is not possible for a type in a package to import a type that is not in a package.

**Optionally, a _static import_ can be used to import static members of a type** so that the imported members can be used without specifying the type name.

<box>

{{ icon_example }} The class below uses static imports to import the constant `PREFIX` and the method `format()` from the `seedu.tojava.util.Formatter` class.

```java
import static seedu.tojava.util.Formatter.PREFIX;
import static seedu.tojava.util.Formatter.format;

public class Main {

    public static void main(String[] args) {

        String formatted = format("Hello");
        boolean isFormatted = formatted.startsWith(PREFIX);
        System.out.println(formatted);
    }
}
```

<panel type="seamless" header="`Foramtter` class">

```java
package seedu.tojava.util;

public class Formatter {
    public static final String PREFIX = ">>";

    public static String format(String s){
        return PREFIX + s;
    }
}
```
</panel>

Note how the class can use `PREFIX` and `format` (instead of `Formatter.PREFIX` and `Formatter.format()`).

</box>

**The package of a type should match the folder path of the source file.** Similarly, the compiler will put the `.class` files in a folder structure that matches the package names.

<box>

{{ icon_example }} If the `seedu.tojava.Main` class in defined in the file `Main.java`,
* the file should be in the location `<source folder>/seedu/tojava/`
* when it is compiled, the `Main.class` file will be in the location `<compiler output folder>/seedu/tojava/`

</box>

**When using the commandline to compile/run Java, you should take the package into account.**

<box>

{{ icon_example }} If the `seedu.tojava.Main` class in defined in the file `Main.java`,
* when compiling from the `<source folder>`, the command is:<br>
  `javac seedu/tojava/Main.java`
* when running it from the `<compiler output folder>`, the command is:<br>
  `java seedu.tojava.Main`

</box>

</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
  <include src="exercisesPanel.md" boilerplate />
</div>