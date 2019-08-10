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

**The project aims to build a product named _Duke_, a Personal Assistant Chatbot that helps a person to keep track of various things.** %%The name _Duke_ was chosen as a placeholder name, in honor of [Duke, the Java Mascot](https://www.oracle.com/java/duke.html).%% **You may give it any other name or personality you wish.**

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
<div id="increments_summary">

The project consists of the following _increments_:
* **Levels**: A series of features, meant to be added to Duke in the given order, although some can be skipped. These have been named `Level 1` to `Level 10` to indicate how the features make the product progressively "level up".
* **Extensions:**
  * <big><span class="badge badge-pill badge-primary">Category A</span></big> These are internal/feature enhancements meant to help you practice a specific Java or an SE technique.  
  * <big><span class="badge badge-pill badge-info">Category B</span></big> These are enhancements related to task tracking.
  * <big><span class="badge badge-pill badge-success">Category C</span></big> These are enhancements, not specifically related to task tracking.
  * <big><span class="badge badge-pill badge-danger">Category D</span></big> Each of these adds the ability to track another type of entities.
</div>
</div>

## <div class="text-white bg-dark p-1">Levels</div>

<div id="level1">

<include boilerplate src="level_thumb.md" var-text=":fas-comments:" inline />

### Level 1. Greet, Echo, Exit

In this initial _skeletal_ version of Duke, it starts by greeting the user, simply  echos commands entered by the user, and exits when the user types `bye`.
<br>
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

</div><hr><!-- ================================================================================================ -->
<div id="level2">

<include boilerplate src="level_thumb.md" var-text=":fas-list:" inline />

### Level 2. Add, List

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
* Assume there will be no more than 100 tasks. If you wish, you may use a fixed size array (e.g., `String[100]`) to store the items.
</div><hr><!-- ================================================================================================ -->
<div id="level3">

<include boilerplate src="level_thumb.md" var-text=":fas-check:" inline />

### Level 3. Mark as Done

Add the ability to mark tasks as _done_.<br><br>

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

<include boilerplate src="dukeNestedFragment.md" var-target="A-Classes" var-name="Extension: `A-Classes`" />

</div><hr><!-- ================================================================================================ -->
<div id="level4">

<include boilerplate src="level_thumb.md" var-text=":fas-business-time:" inline />

### Level 4. ToDos, Events, Deadlines

Add support for tracking three types of tasks:
<br>
<br>

1. **ToDos**: tasks without any date/time attached to it %%e.g., _visit new theme park_%%
2. **Deadlines**: tasks that need to be done before a specific date/time %%e.g., _submit report by 11/10/2019 5pm_%%
3. **Events**: tasks that start at a specific time and ends at a specific time %%e.g., _team project meeting on 2/10/2019 2-4pm_%%

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

At this point, dates/times can be treated as strings; there is no need to convert them to actual dates/times.

Example:
```

deadline do homework /by no idea :-p
    ____________________________________________________________
     Got it. I've added this task: 
       [D][✗] do homework (by: no idea :-p)
     Now you have 6 tasks in the list.
    ____________________________________________________________
```

<include boilerplate src="dukeNestedFragment.md" var-target="A-Inheritance" var-name="Extension: `A-Inheritance`" />
</div><hr><!-- ================================================================================================ -->
<div id="level5">

<include boilerplate src="level_thumb.md" var-text=":fas-exclamation-triangle:" inline />

### Level 5. Handle Errors

Teach Duke to deal with errors such as incorrect inputs entered by the user.
<br>
<br>

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

<include boilerplate src="dukeNestedFragment.md" var-target="A-Exceptions" var-name="Extension: `A-Exceptions`" />

* **Minimal**: handle at least the two types of errors shown in the example above.
* **Stretch goal**: handle all possible errors in the current version. As you evolve Duke, continue to handle errors related to the new features added. 

</div><hr><!-- ================================================================================================ -->
<div id="level6">

<include boilerplate src="level_thumb.md" var-text=":fas-trash-alt:" inline />

### Level 6. Delete

Add support for deleting tasks from the list.
<br>
<br>

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

<include boilerplate src="dukeNestedFragment.md" var-target="A-Collections" var-name="Extension: `A-Collections`" />
</div><hr><!-- ================================================================================================ -->
<div id="level7">

<include boilerplate src="level_thumb.md" var-text=":fas-save:" inline />

### Level 7. Save

Save the tasks in the hard disk automatically whenever the task list changes. Load the data from the hard disk whe Duke starts up. You may hard-code the file name and location %%e.g., `[project_root]/data/duke.txt`%%

The format of the file is up to you. Example:
```
T | 1 | read book
D | 0 | return book | June 6th
E | 0 | project meeting | Aug 6th 2-4pm
T | 1 | join sports club
```

</div><hr><!-- ================================================================================================ -->
<div id="level8">

<include boilerplate src="level_thumb.md" var-text=":fas-clock:" inline />

### Level 8. Dates and Times

Teach Duke to understand dates and times. For example, if the command is `deadline return book /by 2/12/2019 1800`, Duke understands `2/12/2019 1800` as _2nd of December 2019, 6pm_, instead of storing it simply as a String.
</div><hr><!-- ================================================================================================ -->
<div id="level9">

<include boilerplate src="level_thumb.md" var-text=":fas-search:" inline />

### Level 9. Find

Give users a way to find a task by searching for a keyword.
<br>
<br>

Example:
```
find book
    ____________________________________________________________
     Here are the matching tasks in your list:
     1.[T][✓] read book
     2.[D][✓] return book (by: June 6th)
    ____________________________________________________________
```

</div><hr><!-- ================================================================================================ -->
<div id="level10">

<include boilerplate src="level_thumb.md" var-text=":fas-window-maximize:" inline />

### Level 10. GUI

Add a GUI to Duke.
<br>
<br>

<include boilerplate src="dukeNestedFragment.md" var-target="A-JavaFx" var-name="Extension: `A-JavaFx`" />

</div>

<p/>

<include src="extensions.mbdf" />


</div>