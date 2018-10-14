<panel header="{{ icon_Q }} TaskManager Level 5 - **Store data in a file**">
<div id="body">

<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel1.md#main" header="{{ icon_prereq }} TM-L1" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel2.md#main" header="{{ icon_prereq }} TM-L2" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel3.md#main" header="{{ icon_prereq }} TM-L3" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel4.md#main" header="{{ icon_prereq }} TM-L4" minimized />

%%This exercise continues from the `TaskManager Level 1-4` exercises quoted above.%%

<div id="main">


**Enhance the TaskManager to store tasks in a text file** between runs:
1. The text file can follow a format of your choice. For example, each line can represent one task. The attributes can be separated using a suitable delimiter.<br>Here is an example format:
   ```
   T | 1 | read book
   D | 0 | return book | June 6th
   T | 1 | join sports club
   ```
   * In the above example `|` is used as a delimiter, `T` → Todo, `D` → Deadline, `1` → task done, `0` → task not done.
   * :bulb: If you use `|` as the delimiter, use `split("\\|")` to split the line into its parts. `split("|")` will not work %%because `|` has a special meaning when used in this context%%.
1. Load all tasks in the text file to the memory (i.e., convert to `Task` objects) at the start up of TaskManager. You can assume the data are in a predetermined file %%e.g., `data/tasks.txt`%%.
1. Save all tasks to the text file every time there is a change to the data. %%Alternatively, you can introduce a new command to save tasks to the text file.%%

<panel type="seamless" header="Partial solution">

Here's an example method for loading data from the text file. Use this method at the start of your main method to load the tasks from the text file.
```java
    private static List<Task> getTasksFromFile() {
        List<Task> loadedTasks = new ArrayList<>();
        try {
            List<String> lines = getLines("data/tasks.txt");
            for (String line : lines) {
                if (line.trim().isEmpty()) { //ignore empty lines
                    continue;
                }
                loadedTasks.add(createTask(line)); //convert the line to a task and add to the list
            }
        } catch (FileNotFoundException e) {
            printError("problem encountered while loading data: " + e.getMessage());
        }
        return loadedTasks;
    }
```

</panel>

</div>

</div>
</panel>
