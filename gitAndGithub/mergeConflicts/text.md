{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.branchingLocally.lessons.mergeConflicts.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

**Merge conflicts happen when you try to combine two incompatible versions** (e.g., merging a branch to another but each branch changed the same part of the code in a different way).

Here are the steps to simulate a merge conflict and use it to learn how to resolve merge conflicts.

**0. Create an empty repo or clone an existing repo**, to be used for this activity.

**1. Start a branch named `fix1` in the repo. Create a commit** that adds a line with some text to one of the files.

**2. Switch back to `master` branch. Create a commit with a conflicting change** i.e. it adds a line with some different text in the exact location the previous line was added.

<pic eager src="{{baseUrl}}/gitAndGithub/mergeConflicts/images/sourcetree_1.png" height="350" />
<p/>

**3. Try to merge the `fix1` branch onto the `master` branch.** Git will pause mid-way during the merge and report a merge conflict. If you open the conflicted file, you will see something like this:

```txt {highlight-lines="4,6,8"}
COLORS
------
blue
<<<<<< HEAD
black
=======
green
>>>>>> fix1
red
white
```

**4. Observe how the conflicted part is marked** between a line starting with `<<<<<< ` and a line starting with `>>>>>>`, separated by another line starting with `=======`.

Highlighted below is the conflicting part that is coming from the `master` branch:

```txt {start-from=3 highlight-lines="5"}
blue
<<<<<< HEAD
black
=======
green
>>>>>> fix1
red
```

This is the conflicting part that is coming from the `fix1` branch:

```txt {start-from=3 highlight-lines="7"}
blue
<<<<<< HEAD
black
=======
green
>>>>>> fix1
red
```

**5. Resolve the conflict by editing the file**. Let us assume you want to keep both lines in the merged version. You can modify the file to be like this:

```txt {highlight-lines="4-5"}
COLORS
------
blue
black
green
red
white
```

**6. Stage the changes, and commit.** You have now successfully resolved the merge conflict.

</div>

<div id="extras">
</div>
