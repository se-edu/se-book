<panel header="{{ icon_Q }} TaskManager Level 6 - **Make the codoe more OOP**">
<div id="body">

<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel1.md#main" header="{{ icon_prereq }} TM-L1" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel2.md#main" header="{{ icon_prereq }} TM-L2" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel3.md#main" header="{{ icon_prereq }} TM-L3" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel4.md#main" header="{{ icon_prereq }} TM-L4" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel5.md#main" header="{{ icon_prereq }} TM-L5" minimized />

%%This exercise continues from the `TaskManager Level 1-5` exercises quoted above.%%

<div id="main">


**Refactor the TaskManager to have classes such as the below** so that your code is more Object-Oriented:

1. A `Parser` class containing methods that deals with parsing the user command to extract meaningful details from it. Some example methods:
   * `public static getCommandWord(String fullCommand)`: Returns a the _command word_ %%i.e., the first word%% of the given `fullCommand`<br>
     e.g., `Parser.getCommandWord("todo read book")` {{ icon_output_right }} `"todo"`
   * `public static createTodo(String fullCommand)`: Returns a `Todo` object to match the `fullCommand`. Assumption: the `fullCommand` is for creating a Todo object.<br>
     e.g., `Parser.createTodo("todo read book")` {{ icon_output_right }} a `Todo` object containing the description `"read book"`

1. A `Storage` class that will help to load Tasks from the hard disk and save tasks to the hard disk. Some example usage:
   ```java
   Storage storage = new Storage("data/tasks.txt");
   List<Task> tasks = storage.load();
   ...
   storage.save(tasks);
   ```

1. A `Ui` class that will be responsible for interacting with the user. Ideally, only this class should interact with the user. Some example usage:
   ```java
   ui = new Ui();
   ...
   ui.showWelcomeMessage();
   ...
   String fullCommand = ui.readUserCommand();
   ```
   Note: The `Scanner` object should be inside the `Ui` class.

1. A `TaskList` class that is responsible for keeping the in-memory task list. Most likely this class will use an `ArrayList` inside it. Some example usage:
   ```java
   private TaskList tasks = new TaskList(storage.load());
   ...
   t = Parser.createTodo(fullCommand);
   tasks.addTask(t);
   ...
   String taskListDescription = tasks.getDescription();
   ui.showToUser(taskListDescription);
   ```


1. Tweak the main class (you can name it `TaskManager`) class so that the `main` method can be simplified as follows:
   ```java
   public static void main(String[] args) {
       new TaskManager("data/tasks.txt").run();
   }
   ```
   Note: As a result of the above, you will have to convert most of the static methods in the `TaskManager` class to non-static methods, which is more OO.


<panel type="seamless" header="Partial solution">

```java
public class TaskManager {

    private Storage storage;
    private TaskList tasks;
    private Ui ui;

    public TaskManager(String filePath) {
        ui = new Ui();
        storage = new Storage(filePath);
        try {
            tasks = new TaskList(storage.load());
        } catch (TaskManagerException e) {
            ui.showToUser("Problem reading file. Starting with an empty task list");
            tasks = new TaskList();
        }
    }

    public void run() {
        ui.printWelcome();

        boolean isExit = false;
        while (!isExit) {
            try {
                String fullCommand = ui.readUserCommand();
                String commandWord = Parser.getCommandWord(fullCommand);
                switch (commandWord) {
                    case "exit":
                    case "":
                    // ...
                }
            } catch (TaskManagerException e) {
                ui.printError(e.getMessage());
            }
        }
        exit();
    }

    // ...

    public static void main(String[] args) {
        new TaskManager("data/tasks.txt").run();
    }
}
```

```java
import java.util.Scanner;

public class Ui {

    private Scanner in;

    public Ui() {
        in = new Scanner(System.in);
    }

    public String readUserCommand() {
        System.out.print("Your task? ");
        return in.nextLine().trim();
    }

    // ...
}
```

</panel>
</div>

</div>
</panel>
