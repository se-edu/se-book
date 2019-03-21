<panel header="{{ icon_Q }} TaskManager Level 2 - **Use Inheritance**">
<div id="body">

<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel1.md#main" header="{{ icon_prereq }} TM-L1" minimized />

%%This exercise continues from the `TaskManager Level1` exercise quoted above.%%

<div id="main">

Enhance your TaskManager program in the following ways.

**A. Add support for two types of tasks:**
  * ToDo : a task to do someday
  * Deadline: a task to be done by a specific deadline

Both types keeps an internal flag to indicate if the task is done. The flag is initially set to `false`.

Here is an example output: {{ icon_output }}

<box>
<div class="text-monospace">

Welcome to TaskManager-Level2!
<br>Your task? `todo submit report`
<br>Tasks in the list: 1
<br>Your task? `deadline write report /by this Friday 4pm`
<br>Tasks in the list: 2
<br>Your task? `todo read textbook`
<br>Tasks in the list: 3
<br>Your task? `deadline return textbook /by Sunday`
<br>Tasks in the list: 4
<br>Your task? `print`
<br>Tasks:
<br>[1] description: submit report
<br>&nbsp;&nbsp;&nbsp;&nbsp;is done? No
<br>[2] description: write report
<br>&nbsp;&nbsp;&nbsp;&nbsp;is done? No
<br>do by:  this Friday 4pm
<br>[3] description: read textbook
<br>&nbsp;&nbsp;&nbsp;&nbsp;is done? No
<br>[4] description: return textbook
<br>&nbsp;&nbsp;&nbsp;&nbsp;is done? No
<br>&nbsp;&nbsp;&nbsp;&nbsp;do by:  Sunday
<br>Your task? `exit`
<br>Bye!
</div>
</box>

Changes to the behavior:
* ~~**`add`** `task description`: adds the `task description` to the task list~~
* **`todo`** `task description`: adds to the task list a todo task with the given `task description`
* **`deadline`** `task description /by deadline description`: adds to the task list a deadline task with the given `task description` and with the `deadline description`

Suggestion:
* Make the `Todo` class inherit from `Task` class, and make `Deadline` task inherit from `Todo` class.
* Use polymorphism to store both types of tasks in an array of `Task` type and use one loop to print both types of tasks.

**B. Add support for <trigger trigger="click" for="modal:taskManagerLevel2-testingClis">semi-automated regression testing using input/output redirection</trigger>**.

<modal large title="Textbook »" id="modal:taskManagerLevel2-testingClis">
  <include src="../../../testing/testAutomation/testingTextUis/unit-inElsewhere-asFlat.md" boilerplate />
</modal>

<panel type="seamless" header="Partial solution">

```java
import java.util.Scanner;

public class Main {
    static Scanner in = new Scanner(System.in);
    static Task[] tasks = new Task[100];
    static int taskCount = 0;

    public static void main(String[] args) {
        printWelcome();
        String line;

        boolean isExit = false;
        while (!isExit) {
            line = getInput();
            String command = line.split(" ")[0];
            switch (command) {
                case "exit":
                case "":
                    isExit = true;
                    break;
                case "todo":
                    addTodo(line);
                    break;
                case "deadline":
                    addDeadline(line);
                    break;
                case "print":
                    printTasks();
                    break;
                default:
                    printError();
            }
        }
        exit();

    }

    private static void addTodo(String line) {
        tasks[taskCount] = new Todo(line.substring("todo".length()).trim());
        taskCount++;
        System.out.println("Tasks in the list: " + taskCount);
    }

  // ...

    private static void printTasks() {
        System.out.println("Tasks:");
        for (int i = 0; i < taskCount; i++) {
            System.out.println("[" + (i + 1) + "] " + tasks[i]);
        }
    }
}
```
</panel>

</div>

</div>
</panel>
