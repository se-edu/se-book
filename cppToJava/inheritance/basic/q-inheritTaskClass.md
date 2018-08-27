<panel header="{{ icon_Q }} inherit the `Task` class">
<question>

Background: Suppose we are creating a software to manage various tasks a person has to do. Two types of such tasks are,
* _Todos_: i.e., things that needs to be done some day %%e.g., 'Read the book Lord of the Rings'%%
* _Deadlines_: i.e., things to be done by a specific date/time %%e.g., 'Read the text book by Nov 25th'%%

The `Task` class is given below:

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

1. Write a `Todo` class that inherits from the `Task` class.
   * It should have an additional `boolean` field `isDone` to indicate whether the todo is done or not done.
   * It should have a `isDone()` method to access the `isDone` field and a `setDone(boolean)` method to set the `isDone` field.
2. Write a `Deadline` class that inherits from the `Todo` class that you implemented in the previous step. It should have,
   * an additional `String` field `by` to store the details of when the task to be done e.g., `Jan 25th 5pm`
   * a `getBy()` method to access the value of the `by` field, and a corresponding `setBy(String)` method.
   * a constructor of the form `Deadline(String description, String by)`

The expected behavior of the two classes is as follows:

```java
public class Main {
    public static void main(String[] args) {
        // create a todo task and print details
        Todo t = new Todo("Read a good book");
        System.out.println(t.getDescription());
        System.out.println(t.isDone());

        // change todo fields and print again
        t.setDone(true);
        System.out.println(t.isDone());

        // create a deadline task and print details
        Deadline d = new Deadline("Read textbook", "Nov 16");
        System.out.println(d.getDescription());
        System.out.println(d.isDone());
        System.out.println(d.getBy());

        // change deadline details and print again
        d.setDone(true);
        d.setBy("Postponed to Nov 18th");
        System.out.println(d.isDone());
        System.out.println(d.getBy());
    }
}
```
{{ icon_output }}
```
Read a good book
false
true
Read textbook
false
Nov 16
true
Postponed to Nov 18th
```

<div slot="hint">

`Todo` class is given below. You can follow a similar approach for the `Deadline` class.

```java
public class Todo extends Task {
    protected boolean isDone;

    public Todo(String description) {
        super(description);
        isDone = false;
    }
}
```

</div>
</question>
</panel>
