<span id="title">Project Duke</span>

<div id="body">
<div id="intro">

<pic add-class="float-right border m-2 p-1 bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Duke_%28Java_mascot%29_waving.svg/226px-Duke_%28Java_mascot%29_waving.svg.png" width="60">

<small><small>**Duke**, the Java Mascot<br>[[credit: Wikipedia](https://en.wikipedia.org/wiki/File:Duke_(Java_mascot)_waving.svg)]</small></small>
</pic>

# Project Duke

<div class="lead">

**Project Duke is a small software project designed to take you through the steps of building a small software _incrementally_**, while applying many Java and SE techniques along the way.
</div>

**The project aims to build a product named Duke, a Personal Assistant Chatbot that helps a person to keep track of various things.** %%The name _Duke_ was chosen as a placeholder name, in honor of the [Duke, the Java Mascot](https://www.oracle.com/java/duke.html).%% You may give it any other name you wish.

Here is a sample interaction with Duke:
```
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
     1.[T][✓] read book
     2.[D][✗] return book (by: June 6th)
     3.[E][✗] project meeting (at: Aug 6th 2-4pm)
     4.[T][✓] join sports club
    ____________________________________________________________

todo borrow book
    ____________________________________________________________
     Got it. I've added this task: 
       [T][✗] borrow book
     Now you have 5 tasks in the list.
    ____________________________________________________________


deadline return book /by Sunday
    ____________________________________________________________
     Got it. I've added this task: 
       [D][✗] return book (by: Sunday)
     Now you have 6 tasks in the list.
    ____________________________________________________________

done 2
    ____________________________________________________________
     Nice! I've marked this task as done: 
       [D][✓] return book (by: June 6th)
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

The project consists of the following:
* **Base Features**: A series of features, meant to be added to Duke in the given order, although some can be skipped. These have been named `Duke 1` to `Duke 10` to indicate how the features make the product progressively "level up".
* **Extensions:**
  * **Category A**: These are internal/feature enhancements meant to help you practice a specific Java or an SE technique.  
  * **Category B**: These are enhancements related to task tracking.
  * **Category C**: These are enhancements, not specifically related to task tracking.
  * **Category D**: Each of these adds the ability to track another type of entities.

</div><hr>
<div id="level1">

### Duke 1. Greet, Echo, Exit

In this initial _skeletal_ version of Duke, it simply starts by greeting the user, echos whatever commands enters by the user, and exits when the user types `bye`.

Example:
```
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

</div><hr>
<div id="level2">

### Duke 2. Add, List

Add the ability to store whatever text entered by the user and display them back to the user when requested.

Example:
```
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
* If you wish, you may use a fixed size array (e.g., `String[100]`) to store the items.
</div><hr>
<div id="level3">

### Duke 3. Mark as Done

Add the ability to mark tasks as _done_.

```
list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[✓] read book
     2.[✗] return book
     3.[✗] buy bread
    ____________________________________________________________

done 2
    ____________________________________________________________
     Nice! I've marked this task as done: 
       [✓] return book
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Classes" var-name="Extension: A-Classes" />

</div><hr>
<div id="level4">

### Duke 4. ToDos, Events, Deadlines

Add support for tracking three types of tasks:
1. ToDos: tasks without any date/time attached to it %%e.g., visit new theme park%%
2. Deadlines: tasks that need to be done before a specific date/time %%e.g., _submit report by 11/10/2019 5pm_%%
3. Events: tasks that start at a specific time and ends at a specific time %%e.g., _team project meeting on 2/10/2019 2-4pm_%%

Example:
```
todo borrow book
    ____________________________________________________________
     Got it. I've added this task: 
       [T][✗] borrow book
     Now you have 5 tasks in the list.
    ____________________________________________________________

list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[T][✓] read book
     2.[D][✗] return book (by: June 6th)
     3.[E][✗] project meeting (at: Aug 6th 2-4pm)
     4.[T][✓] join sports club
     5.[T][✗] borrow book
    ____________________________________________________________

deadline return book /by Sunday
    ____________________________________________________________
     Got it. I've added this task: 
       [D][✗] return book (by: Sunday)
     Now you have 6 tasks in the list.
    ____________________________________________________________

event project meeting /at Mon 2-4pm
    ____________________________________________________________
     Got it. I've added this task: 
       [E][✗] project meeting (at: Mon 2-4pm)
     Now you have 7 tasks in the list.
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Inheritance" var-name="Extension: A-Inheritance" />
</div><hr>
<div id="level5">

### Duke 5. Incorrect Inputs

Teach Duke to deal with all sorts of incorrect inputs.
Example:
```
todo
    ____________________________________________________________
     ☹ OOPS!!! The description of a todo cannot be empty.
    ____________________________________________________________

blah
    ____________________________________________________________
     ☹ OOPS!!! I'm sorry, but I don't know what that means :-(
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Exceptions" var-name="Extension: A-Exceptions" />
</div><hr>
<div id="level6">

### Duke 6. Delete

Add support for deleting tasks from the list.
Example:
```
list
    ____________________________________________________________
     Here are the tasks in your list:
     1.[T][✓] read book
     2.[D][✓] return book (by: June 6th)
     3.[E][✗] project meeting (at: Aug 6th 2-4pm)
     4.[T][✓] join sports club
     5.[T][✗] borrow book
    ____________________________________________________________

delete 3
    ____________________________________________________________
     Noted. I've removed this task: 
       [T][✓] join sports club
     Now you have 4 tasks in the list.
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Collections" var-name="Extension: A-Collections" />
</div><hr>
<div id="level7">

### Duke 7. Persistence

Save the tasks in the hard disk automatically whenever the task list changes. Automatically load the data from the hard disk whe duke starts up. You may hard-code the file name and location %%e.g., `[project_root]/data/duke.txt`%%

</div><hr>
<div id="level8">

### Duke 8. Dates and Times

Teach Duke to understand dates and times. For example, if the command is `deadline return book /by 2/12/2019 1800`, Duke understands `2/12/2019 1800` as _2nd of December 2019, 6pm_, instead of storing it simply as a String.
</div><hr>
<div id="level9">

### Duke 9. Find

Give users a way to find a task by searching for a keyword.
Example:
```
find book
    ____________________________________________________________
     Here are the matching tasks in your list:
     1.[T][✓] read book
     2.[D][✓] return book (by: June 6th)
    ____________________________________________________________
```

</div><hr>
<div id="level10">

### Duke 10. GUI

Add a GUI to Duke.

<include boilerplate src="dukeNestedFragment.md" var-target="A-JavaFx" var-name="Extension: A-JavaFx" />

</div>

<include src="extensions.mbdf" />


</div>