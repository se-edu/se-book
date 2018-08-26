<panel header="{{ icon_Q }} override the `toString` method">
<question>

Suppose you have the following classes `Task`, `Todo`, `Deadline`:

```java
public class Task {
    protected String description;

    public Task(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
```
```java
public class Todo extends Task {
    protected boolean isDone;

    public Todo(String description) {
        super(description);
        isDone = false;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public boolean isDone() {
        return isDone;
    }
}
```
```java
public class Deadline extends Todo {

    protected String by;

    public Deadline(String description, String by) {
        super(description);
        this.by = by;
    }

    public void setBy(String by) {
        this.by = by;
    }

    public String getBy() {
        return by;
    }
}
```

Override the `toString` method of the three classes to produce the following behavior.


```java
public class Main {
    public static void main(String[] args) {
        // create a todo task and print it
        Todo t = new Todo("Read a good book");
        System.out.println(t);

        // change todo fields and print again
        t.setDone(true);
        System.out.println(t);

        // create a deadline task and print it
        Deadline d = new Deadline("Read textbook", "Nov 16");
        System.out.println(d);

        // change deadline details and print again
        d.setDone(true);
        d.setBy("Postponed to Nov 18th");
        System.out.println(d);
    }
}
```
{{ icon_output }}
```
description: Read a good book
is done? No
description: Read a good book
is done? Yes
description: Read textbook
is done? No
do by: Nov 16
description: Read textbook
is done? Yes
do by: Postponed to Nov 18th
```

:bulb: You can use the `super.toString` from the subclass to invoke the behavior of the method you are overriding. This is useful here because the overriding method is simply _adding onto_ the behavior of the overridden method.


<div slot="hint">

`toString()` method of `Task` class and `Todo` class are given below. You can follow a similar approach for the `Deadline` class.
```java
public class Task {
    // ...

    @Override
    public String toString() {
        return "description: " + description;
    }
}
```
```java
public class Todo extends Task {
    // ...

    @Override
    public String toString() {
        String status = null;
        if (isDone){
            status = "Yes";
        } else {
            status = "No";
        }
        return super.toString() + System.lineSeparator() + "is done? " + status;
    }
}
```

</div>
</question>
</panel>
