<panel header="{{ icon_Q }} TaskManager Level 4 - **Use `Collections`**">
<div id="body">

<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel1.md#main" header="{{ icon_prereq }} TM-L1" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel2.md#main" header="{{ icon_prereq }} TM-L2" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel3.md#main" header="{{ icon_prereq }} TM-L3" minimized />

%%This exercise continues from the `TaskManager Level 1-3` exercises quoted above.%%

<div id="main">


Enhance the TaskManager in the following ways:
1. Use a suitable Collection class to store tasks, instead of using an array.
2. Introduce a `done n` command to mark the task at index `n` as done.

Here is an example output: {{ icon_output }}

<box>
<div class="text-monospace">

Welcome to TaskManager-Level4!
<br>Your task? todo read book
<br>Tasks in the list: 1
<br>Your task? deadline return book /by Friday
<br>Tasks in the list: 2
<br>Your task? print
<br>Tasks:
<br>[1] description: read book
<br>    is done? No
<br>[2] description: return book
<br>    is done? No
<br>    do by:  Friday
<br>Your task? ==done 1==
<br>Tasks in the list: 2
<br>Your task? print
<br>Tasks:
<br>[1] description: read book
<br>    is done? ==Yes==
<br>[2] description: return book
<br>    is done? No
<br>    do by:  Friday
<br>Your task?
</div>
</box>

Suggestions:
* Move the `isDone` variable to the `Task` class and provide a `setDone(boolean)` method.

<panel type="seamless" header="Partial solution">

```java
public class Task {
    protected String description;
    protected boolean isDone;

    // ...

    public void setDone(boolean isDone){
        this.isDone = isDone;
    }
}
```

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    static Scanner in = new Scanner(System.in);
    static List<Task> tasks = new ArrayList<>();

    public static void main(String[] args) {
        // ...
    }

    private static void addTodo(String line) throws TaskManagerException {
        //...
        tasks.add(new Todo(description));
        //...
    }

    private static void markAsDone(String line) {
        int index = Integer.parseInt(line.substring("done".length()).trim());
        tasks.get(index - 1).setDone(true);
        System.out.println("Tasks in the list: " + tasks.size());
    }

    private static void printTasks() {
        // ...
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println("[" + (i + 1) + "] " + tasks.get(i));
        }
    }
}
```
</panel>

</div>

</div>
</panel>
