<span id="title">Project Duke</span>

<div id="body">
<div id="intro">


# Project Duke

<div class="lead">

<pic add-class="float-left border mr-2 mt-2 p1 bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Duke_%28Java_mascot%29_waving.svg/226px-Duke_%28Java_mascot%29_waving.svg.png" width="60">

<small><small>**Duke**, the Java Mascot<br>[[credit: Wikipedia](https://en.wikipedia.org/wiki/File:Duke_(Java_mascot)_waving.svg)]</small></small>
</pic>

**Project Duke is a educational software project designed to take you through the steps of building a small software _incrementally_**, while applying as many Java and SE techniques as possible along the way.
</div>

**The project aims to build a product named _Duke_, a Personal Assistant Chatbot that helps a person to keep track of various things.** %%The name _Duke_ was chosen as a placeholder name, in honor of [Duke, the Java Mascot](https://www.oracle.com/java/duke.html).%%

Here is a sample interaction with Duke:
```{.no-line-numbers}
    ____________________________________________________________
      ____        _        
     |  _ \ _   _| | _____ 
     | | | | | | | |/ / _ \
     | |_| | |_| |   <  __/
     |____/ \__,_|_|\_\___|

     Hello! I'm Duke
     What can I do for you?
    ____________________________________________________________

list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[T][X] read book
     2.[D][ ] return book (by: June 6th)
     3.[E][ ] project meeting (at: Aug 6th 2-4pm)
     4.[T][X] join sports club
    ____________________________________________________________

todo borrow book
    ____________________________________________________________
     Got it. I've added this task: 
       [T][ ] borrow book
     Now you have 5 tasks in the list.
    ____________________________________________________________


deadline return book /by Sunday
    ____________________________________________________________
     Got it. I've added this task: 
       [D][ ] return book (by: Sunday)
     Now you have 6 tasks in the list.
    ____________________________________________________________

mark 2
    ____________________________________________________________
     Nice! I've marked this task as done: 
       [D][X] return book (by: June 6th)
    ____________________________________________________________

blah
    ____________________________________________________________
     ☹ OOPS!!! I'm sorry, but I don't know what that means :-(
    ____________________________________________________________

bye
    ____________________________________________________________
     Bye. Hope to see you again soon!
    ____________________________________________________________

```

{{ icon_tip }} **You are ==encouraged to give your chatbot another name (and a different personality if you wish)==**, to differentiate yours from others'. In the case of the latter, please do not use slang/words that some others in the class might not know.

<div id="increments_summary">

The project consists of the following _increments_:
* **Levels**: A series of features, meant to be added to Duke in the given order, although some can be skipped. These have been named `Level 1` to `Level 10` to indicate how each makes the product progressively "level up".
* **Extensions:**
  * <big><span class="badge badge-pill badge-primary">Category A</span></big> These are internal/feature enhancements meant to help you practice a specific Java or an SE technique.  
  * <big><span class="badge badge-pill badge-info">Category B</span></big> These are enhancements related to task tracking.
  * <big><span class="badge badge-pill badge-success">Category C</span></big> These are enhancements, not specifically related to task tracking.
  * <big><span class="badge badge-pill badge-danger">Category D</span></big> Each of these adds the ability to track another type of entities.
</div>
</div>

## <div class="text-white bg-dark p-1">Levels</div>
<div id="Level-0">

<include boilerplate src="level_thumb.md" var-text=":fas-grin-hearts:" inline />

### Level 0. Greet

Implement an initial _skeletal_ version of the Duke that simply greets the user and exits.
<br>
Example:
```{.no-line-numbers}
____________________________________________________________
 Hello! I'm Duke
 What can I do for you?
____________________________________________________________
 Bye. Hope to see you again soon!
____________________________________________________________
```
* The indentation and horizontal lines are optional.
</div><hr><!-- ================================================================================================ -->
<div id="Level-1">

<include boilerplate src="level_thumb.md" var-text=":fas-comments:" inline />

### Level 1. Greet, Echo, Exit

Implement a _skeletal_ version of Duke that starts by greeting the user, simply echos commands entered by the user, and exits when the user types `bye`.
<br>
Example:
```{.no-line-numbers}
    ____________________________________________________________
     Hello! I'm Duke
     What can I do for you?
    ____________________________________________________________

list
    ____________________________________________________________
     list
    ____________________________________________________________

blah
    ____________________________________________________________
     blah
    ____________________________________________________________

bye
    ____________________________________________________________
     Bye. Hope to see you again soon!
    ____________________________________________________________

```
* The indentation and horizontal lines are optional.

<box type="tip">

**You are strongly encouraged to customize the chatbot** name, command/display formats, and even the personality of the chatbot to make your chatbot unique.
</box>

</div><hr><!-- ================================================================================================ -->
<div id="Level-2">

<include boilerplate src="level_thumb.md" var-text=":fas-list:" inline />

### Level 2. Add, List

Add the ability to store whatever text entered by the user and display them back to the user when requested.

Example:
```{.no-line-numbers}
    ____________________________________________________________
     Hello! I'm Duke
     What can I do for you?
    ____________________________________________________________

read book
    ____________________________________________________________
     added: read book
    ____________________________________________________________

return book
    ____________________________________________________________
     added: return book
    ____________________________________________________________

list
    ____________________________________________________________
     1. read book
     2. return book
    ____________________________________________________________
bye
    ____________________________________________________________
     Bye. Hope to see you again soon!
    ____________________________________________________________

```

* There is no need to save the data to the hard disk.
* Assume there will be no more than 100 tasks. If you wish, you may use a fixed size array (e.g., `String[100]`) to store the items.
</div><hr><!-- ================================================================================================ -->
<div id="Level-3">

<include boilerplate src="level_thumb.md" var-text=":fas-check:" inline />

### Level 3. Mark as Done

Add the ability to mark tasks as _done_. Optionally, add the ability to change the status back to _not done_.<br><br>

```{.no-line-numbers}
list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[X] read book
     2.[ ] return book
     3.[ ] buy bread
    ____________________________________________________________

mark 2
    ____________________________________________________________
     Nice! I've marked this task as done: 
       [X] return book
    ____________________________________________________________

unmark 2
    ____________________________________________________________
     OK, I've marked this task as not done yet:
       [ ] return book
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Classes" var-name="Extension: `A-Classes`" />

</div><hr><!-- ================================================================================================ -->
<div id="Level-4">

<include boilerplate src="level_thumb.md" var-text=":fas-business-time:" inline />

### Level 4. ToDos, Events, Deadlines

Add support for tracking three types of tasks:
<br>
<br>

1. **ToDos**: tasks without any date/time attached to it %%e.g., _visit new theme park_%%
2. **Deadlines**: tasks that need to be done before a specific date/time %%e.g., _submit report by 11/10/2019 5pm_%%
3. **Events**: tasks that start at a specific time and ends at a specific time %%e.g., _team project meeting on 2/10/2019 2-4pm_%%

Example:
```{.no-line-numbers}
todo borrow book
    ____________________________________________________________
     Got it. I've added this task: 
       [T][ ] borrow book
     Now you have 5 tasks in the list.
    ____________________________________________________________

list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[T][X] read book
     2.[D][ ] return book (by: June 6th)
     3.[E][ ] project meeting (at: Aug 6th 2-4pm)
     4.[T][X] join sports club
     5.[T][ ] borrow book
    ____________________________________________________________

deadline return book /by Sunday
    ____________________________________________________________
     Got it. I've added this task: 
       [D][ ] return book (by: Sunday)
     Now you have 6 tasks in the list.
    ____________________________________________________________

event project meeting /at Mon 2-4pm
    ____________________________________________________________
     Got it. I've added this task: 
       [E][ ] project meeting (at: Mon 2-4pm)
     Now you have 7 tasks in the list.
    ____________________________________________________________
```

At this point, dates/times can be treated as strings; there is no need to convert them to actual dates/times.

Example:
```{.no-line-numbers}

deadline do homework /by no idea :-p
    ____________________________________________________________
     Got it. I've added this task: 
       [D][ ] do homework (by: no idea :-p)
     Now you have 6 tasks in the list.
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Inheritance" var-name="Extension: `A-Inheritance`" />
</div><hr><!-- ================================================================================================ -->
<div id="Level-5">

<include boilerplate src="level_thumb.md" var-text=":fas-exclamation-triangle:" inline />

### Level 5. Handle Errors

Teach Duke to deal with errors such as incorrect inputs entered by the user.
<br>
<br>

Example:
```{.no-line-numbers}
todo
    ____________________________________________________________
     ☹ OOPS!!! The description of a todo cannot be empty.
    ____________________________________________________________

blah
    ____________________________________________________________
     ☹ OOPS!!! I'm sorry, but I don't know what that means :-(
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Exceptions" var-name="Extension: `A-Exceptions`" />

* **Minimal**: handle at least the two types of errors shown in the example above.
* **Stretch goal**: handle all possible errors in the current version. As you evolve Duke, continue to handle errors related to the new features added. 

</div><hr><!-- ================================================================================================ -->
<div id="Level-6">

<include boilerplate src="level_thumb.md" var-text=":fas-trash-alt:" inline />

### Level 6. Delete

Add support for deleting tasks from the list.
<br>
<br>

Example:
```{.no-line-numbers}
list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[T][X] read book
     2.[D][X] return book (by: June 6th)
     3.[E][ ] project meeting (at: Aug 6th 2-4pm)
     4.[T][X] join sports club
     5.[T][ ] borrow book
    ____________________________________________________________

delete 3
    ____________________________________________________________
     Noted. I've removed this task: 
       [E][ ] project meeting (at: Aug 6th 2-4pm)
     Now you have 4 tasks in the list.
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Collections" var-name="Extension: `A-Collections`" />
</div><hr><!-- ================================================================================================ -->
<div id="Level-7">

<include boilerplate src="level_thumb.md" var-text=":fas-save:" inline />

### Level 7. Save

Save the tasks in the hard disk automatically whenever the task list changes. Load the data from the hard disk when Duke starts up. You may hard-code the file name and location %%e.g., `[project_root]/data/duke.txt`%%

The format of the file is up to you. Example:
```{.no-line-numbers}
T | 1 | read book
D | 0 | return book | June 6th
E | 0 | project meeting | Aug 6th 2-4pm
T | 1 | join sports club
```

**{{ icon_tip }} If you use file paths in your code,**
* remember to use relative paths rather than absolute paths such as `C:\data`. If not, your app can cause unpredictable results when used in another computer.
* remember to [specify file paths in an OS-independent way](https://www.sghill.net/how-do-i-make-cross-platform-file-paths-in-java.html). If not, your app might not work when used on a different OS.

{{ icon_important_big_red }} Your code must <tooltip content="i.e., if the file is missing, your code must creat it">handle</tooltip> the case where the data file doesn't exist at the start. Reason: when someone else takes your Duke and runs it for the first time, the required file might not exist in their computer. Similarly, if you expect the data file to be in as specific folder (e.g., `./data/`), you must also handle the folder-does-not-exist-yet case.

</div><hr><!-- ================================================================================================ -->
<div id="Level-8">

<include boilerplate src="level_thumb.md" var-text=":fas-clock:" inline />

### Level 8. Dates and Times

Teach Duke how to understand dates and times. For example, if the command is `deadline return book /by 2/12/2019 1800`, Duke should understand `2/12/2019 1800` as _2nd of December 2019, 6pm_, instead of treating it as just a String.

* **Minimal**: Store deadline dates as a `java.time.LocalDate` in your task objects. Accept dates in a format such as `yyyy-mm-dd` format (e.g., `2019-10-15`)  and print in a different format such as `MMM dd yyyy` e.g., (`Oct 15 2019`).
* **Stretch goal**: Use dates and times in more meaningful ways. e.g., add a command to print deadlines/events occurring on a specific date. 

<panel header="Using dates/times in Java" minimized >

A code snippet using the `LocalDate` class to deal with dates/times (you may use other approaches too):
```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class Main {
    public static void main(String[] args) {
        //create dates from strings
        LocalDate d1 = LocalDate.parse("2019-12-01");
        LocalDate d2 = LocalDate.parse("2019-12-02");
        LocalDate d3 = LocalDate.parse("2019-12-02");
        
        //compare dates
        System.out.println(d1.isBefore(d2)); // -> true
        System.out.println(d1.isAfter(d2)); // -> false
        System.out.println(d2.equals(d3)); // -> true
        
        //work with dates
        System.out.println(d1.getDayOfWeek()); // -> SUNDAY
        System.out.println(d1.getMonth()); // -> DECEMBER
        System.out.println(d1.plus(1, ChronoUnit.YEARS));  // -> 2020-12-01
        
        // get today's date and print it in a specific format
        LocalDate d4 = LocalDate.now();
        System.out.println(d4); // -> 2019-10-15
        System.out.println(d4.format(DateTimeFormatter.ofPattern("MMM d yyyy"))); // -> Oct 15 2019
    }
}
```

* [A tutorial from https://www.baeldung.com/](https://www.baeldung.com/java-8-date-time-intro)
</panel>

</div><hr><!-- ================================================================================================ -->
<div id="Level-9">

<include boilerplate src="level_thumb.md" var-text=":fas-search:" inline />

### Level 9. Find

Give users a way to find a task by searching for a keyword.
<br>
<br>

Example:
```{.no-line-numbers}
find book
    ____________________________________________________________
     Here are the matching tasks in your list:
     1.[T][X] read book
     2.[D][X] return book (by: June 6th)
    ____________________________________________________________
```

</div><hr><!-- ================================================================================================ -->
<div id="Level-10">

<include boilerplate src="level_thumb.md" var-text=":fas-window-maximize:" inline />

### Level 10. GUI

Add a GUI to Duke. Use the JavaFX technology to implement the GUI.

<br>
<br>

Refer to the [_JavaFX tutorial_ @SE-EDU/guides](https://se-education.org/guides/tutorials/javaFx.html) to learn how to get started with JavaFX.

<box type="warning" seamless>

**There are two non-trivial steps** to take here:

1. learning JavaFX basics
1. creating a GUi for Duke

You are <span class="text-danger">cautioned against trying to do both in one go</span>. Instead, complete the JavaFX tutorial as a separate project before adding a GUI to Duke.

</box>

</div>

<p/>

<include src="extensions.mbdf" />


</div>