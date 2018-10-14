<panel header="{{ icon_Q }} TaskManager Level 1 - **Create a CLI**">
<div id="body">
<div id="main">

This is a good time to put together some of the topics you have learned so far to create something useful. In this exercise you will write a small `TaskManager` program that can store a list of tasks.
* It is a <tooltip content="Command Line Interface i.e., no Graphical User Interface">CLI</tooltip> program.
* In this version, the task list is not saved to the disk %%i.e., the task list does not persist between multiple runs of the program%%

Here is an example output: {{ icon_output }}
```
Welcome to TaskManager-Level1!
Your task? add submit report
Tasks in the list: 1
Your task? add return library book
Tasks in the list: 2
Your task? add remind boss about meeting
Tasks in the list: 3
Your task? xyz
Unknown command! please try again
Your task? print
[1] submit report
[2] return library book
[3] remind boss about meeting
Your task? add set up meeting with boss
Tasks in the list: 4
Your task? print
[1] submit report
[2] return library book
[3] remind boss about meeting
[4] set up meeting with boss
Your task? exit
Bye!
```

Summary of behavior:
* Task Manager prompts for user input with the message `Your task? `
* **`add`** `task description`: adds the `task description` to the task list
* **`print`**: prints the tasks added so far
* **`exit`** or empty input: terminates the program

If you are new to programming, we recommend you to build the program in small steps, as follows:

1. Write a program that reads any user input, prints it back to the user, and exits.
1. Update the program to do the above in a loop until user types `exit`.
1. Add greetings printed at the start and the end.
1. If the first word is not `add` or `exit`, print an error message. Suggestion: use a `switch` statement to choose between multiple actions.
1. Create a `Task` class to represent tasks and add an `Task[]` to store tasks.
1. If the first word of the user input is `add`, add the whole line (no need to omit the first word) to the task list.
1. Update the code in the previous step to omit the word `add` from the task description.
1. Add support for the `print` command.
1. Add support for terminating if the user input is empty
1. and so on ...

<div slot="hint">

<panel type="seamless" header="Partial solution">

```java
import java.util.Scanner;

public class Main {
    static Scanner in = new Scanner(System.in);
    static Task[] tasks = new Task[100];
    static int count = 0;  // to keep track of number of tasks in the list

    public static void main(String[] args) {
        printWelcome();
        String line;
        boolean isExit = false;
        while (!isExit) {
            line = getInput();
            String command = line.split(" ")[0]; //extract the first word of the user input
            switch (command) {
                case "exit":
                case "": // exit if user input is empty
                    isExit = true;
                    break;
                case "add":
                    // todo: add code here
                default:
                    printError();
            }
        }
        exit();

    }

    private static void printWelcome() {
        System.out.println("Welcome to TaskManager-Level1!");
    }

    private static void printTasks() {
        for (int i = 0; i < count; i++) {
            System.out.println("[" + (i + 1) + "] " + tasks[i].getDescription());
        }
    }

    // todo: add missing methods
}

```
</panel>

</div>
</div>
</div>
</panel>
