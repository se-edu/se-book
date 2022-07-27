<span id="title">Dealing with merge conflicts</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Git to resolve merge conflicts</span>

{% macro dropdown(text) %}<span class="btn btn-light border">{{ text }} :octicon-triangle-down:</span>{% endmacro %}
{% macro button_green(text) %}<span class="btn btn-success ps-1 pe-1 pb-0 pt-0">{{ text }}</span>{% endmacro %}
{% macro button_light(text) %}<span class="btn btn-light ps-1 pe-1 pb-0 pt-0 border">{{ text }}</span>{% endmacro %}

<div id="body">

**Merge conflicts happen when you try to combine two incompatible versions** (e.g., merging a branch to another but each branch changed the same part of the code in a different way).

Here are the steps to simulate a merge conflict and use it to learn how to resolve merge conflicts.

**0. Create an empty repo or clone an existing repo**, to be used for this activity.

**1. Start a branch named `fix1` in the repo. Create a commit** that adds a line with some text to one of the files.

**2. Switch back to `master` branch. Create a commit with a conflicting change** i.e. it adds a line with some different text in the exact location the previous line was added.

<img src="{{baseUrl}}/gitAndGithub/mergeConflicts/images/sourcetree_1.png" height="350" />
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

**6. Stage the changes, and commit.**

</div>

<div id="extras">
</div>
