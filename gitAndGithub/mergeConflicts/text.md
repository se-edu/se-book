{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can resolve merge conflicts.</span>
<span id="title">{{ trail.branchingLocally.lessons.mergeConflicts.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When merging branches, you need to **guide Git on how to resolve conflicting changes** in different branches.
{% endcall %}

**A {{ show_git_term("merge conflict") }} happens when Git can't automatically combine changes from two branches** because the same parts of a file were modified differently in each branch. When this happens, **Git pauses the merge and marks the conflicting sections in the affected files so you can resolve them yourself.** Once you've reviewed and fixed the conflicts, you can tell Git they're resolved and complete the merge.

More generally, a conflict occurs when Git cannot automatically reconcile different changes made to the same part of a file -- branch merge conflicts is just one example.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Resolve merge conflict")  %}

In this hands-on practical, we simulate a merge conflict and use it to learn how to resolve merge conflicts. You can use any repo with at least one commit in the `master` branch for this.

{{ hp_number("1") }} **Start a branch named `fix1` in the repo. Create a commit** that adds a line with some text to one of the files.

{{ hp_number("2") }} **Switch back to `master` branch. Create a commit with a conflicting change** i.e. it adds a line with some different text in the exact location the previous line was added.

<pic eager src="{{baseUrl}}/gitAndGithub/mergeConflicts/images/sourcetree_1.png" height="350" />
<p/>

{{ hp_number("3") }} **Try to merge the `fix1` branch onto the `master` branch.** Git will pause mid-way during the merge and report a merge conflict. If you open the conflicted file, you will see something like this:

``` {highlight-lines="4,6,8"}
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

{{ hp_number("4") }} **Observe how the conflicted part is marked** between a line starting with `<<<<<< ` and a line starting with `>>>>>>`, separated by another line starting with `=======`.

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

{{ hp_number("5") }} **Resolve the conflict by editing the file**. Let us assume you want to keep both lines in the merged version. You can modify the file to be like this:

```txt {highlight-lines="4-5"}
COLORS
------
blue
black
green
red
white
```

{{ hp_number("6") }} **Stage the changes, and commit.** You have now successfully resolved the merge conflict.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>

<div id="extras">

{{ show_exercise('conflict-mediator') }}
</div>
