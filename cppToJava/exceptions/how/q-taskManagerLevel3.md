<panel header="{{ icon_Q }} TaskManager Level 3">
<question>
<div id="body">

<panel header="%%{{ icon_prereq }} TaskManager Level2 (for reference)%%">
  <include src="../../inheritance/polymorphism/q-taskManagerLevel2.md#body" />
</panel>

This exercise continues from the `TaskManager Level2` exercise quoted above.

Enhance the TaskManager to print an error message if a command is missing parts. Use exceptions so that error detection and printing of error message happen at different places of code and the error information is passed between the two places using an Exception object.

Here is an example output: {{ icon_output }}

<box>
<div class="text-monospace">

Welcome to TaskManager-Level3!
<br>Your task? todo
<br>==Error: Empty description for TODO==
<br>Your task? todo read book
<br>Tasks in the list: 1
<br>Your task? print
<br>Tasks:
<br>[1] description: read book
<br>    is done? No
<br>Your task?
</div>
</box>

Suggested approach:
* Create a `TaskManagerException` class that inherits the `Exception` class. Override the constructor that takes a `String` parameter so that you can specify the error information when you create a `TaskManagerException` object.
* Throw a new `TaskManagerException` object when you detect some necessary information is missing in the command.
* Catch that exception somewhere else and print the message inside the exception object.


<panel type="seamless" header="Partial solution">

```java
public class TaskManagerException extends Exception{
    public TaskManagerException(String message) {
        super(message);
    }
}
```
```java
    public static void main(String[] args) {
        // ...
        while (!isExit) {
            try {
                line = getInput();
                String command = line.split(" ")[0];
                switch (command) {
                    case "todo":
                        addTodo(line);
                        break;
                    // ...
                }
            } catch (TaskManagerException e) {
                printError(e.getMessage());
            }
        }
        // ...

    }

    private static void addTodo(String line) throws TaskManagerException {
        String description = line.substring("todo".length()).trim();
        if (description.isEmpty()){
            throw new TaskManagerException("Empty description for TODO");
        }
        // ...
    }
```
</panel>

</div>
</question>
</panel>
