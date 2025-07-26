{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can compare different points of history</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.diff.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git can tell you **the net effect of changes between two points of history**.
{% endcall %}

**Git's {{ show_git_term("diff") }} feature can show you what changed between two points** in the revision history. Given below are some use cases.

**++Usage 1: Examining changes in the working directory++**<br>
Example use case: To verify the next commit will include exactly what you intend it to include.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Examining staged and unstaged changes")  %}

{{ hp_number("Preparation") }} **For this, you can use the `things` repo** you created earlier. If you don't have it, you can clone a copy of a similar repo given [here](https://github.com/se-edu/samplerepo-things2).

{{ hp_number("1") }} **Do some changes to the working directory. Stage some (but not all) changes.** For example, you can run the following commands.

```bash
echo -e "blue\nred\ngreen" >> colours.txt
git add .  # a shortcut to stage all changes
echo "no shapes added yet" >> shapes.txt
```
{{ hp_number("2") }} **Examine the staged and unstaged changes.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

**The `git diff` command shows unstaged changes** in the working directory (tracked files only). The output of the `diff` command, is a diff view (introduced in [this lesson](../show/index.html)).

```bash{.no-line-numbers}
git diff
```
{% call show_output() %}
```diff{.no-line-numbers}
diff --git a/shapes.txt b/shapes.txt
index 5c2644b..949c676 100644
--- a/shapes.txt
+++ b/shapes.txt
@@ -1 +1,2 @@
a file for shapes
+no shapes added yet!
```
{% endcall %}

**The `git diff --staged` command shows the staged changes** (same as `git diff --cached`).

```bash{.no-line-numbers}
git diff --staged
```

{% endset %}
{% set sourcetree %}

Select the two commits: Click on one commit, and <kbd>Ctrl</kbd>-Click (or <kbd>Cmd</kbd>-Click) on the second commit. The changes between the two selected commits will appear in the other panels, as shown below:

<pic src="images/sourcetreeStagedAndUnstaged.png" width="600" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**++Usage 2: Comparing two commits at different points of the revision graph++**<br>
Example use case: Suppose you’re trying to improve the performance of a piece of software by experimenting with different code tweaks. You commit after each change (as you should). After several commits, you now want to review the overall effect of all those changes on the code.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Comparing two commits")  %}

**Compare two commits** in a repo (e.g., the `things` repo).

{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the `git diff <commit1> <commit2>` command for this.

* You may use any valid way to refer to commits %%(e.g., SHA, tag, HEAD~n etc.)%%.
* You may also use the `..` notation to specify the commit range too %%e.g., `0023cdd..fcd6199`, `HEAD~2..HEAD`%%

```bash{.no-line-numbers}
git diff v0.9 HEAD
```
{% call show_output() %}
```diff{.no-line-numbers}
diff --git a/colours.txt b/colours.txt
new file mode 100644
index 0000000..55c8449
--- /dev/null
+++ b/colours.txt
@@ -0,0 +1 @@
+a file for colours
# rest of the diff ...
```
{% endcall %}

**Swap the commit order** in the command and see what happens.
```bash{.no-line-numbers}
git diff HEAD v0.9
```
{% call show_output() %}
```diff{.no-line-numbers}
diff --git a/colours.txt b/colours.txt
deleted file mode 100644
index 55c8449..0000000
--- a/colours.txt
+++ /dev/null
@@ -1 +0,0 @@
-a file for colours
# rest of the diff ...
```
As you can see, the `diff` is _directional_ i.e., `dif <commit1> <commit2>` shows what changes you need to do to go from the `<commit1>` to `<commit2>`. If you swap `<commit1>` and `<commit2>`, the output will change accordingly e.g., lines previously shown as 'added' will now be shown as 'deleted'.
{% endcall %}

{% endset %}
{% set sourcetree %}

Select the two commits: Click on one commit, and <kbd>Ctrl</kbd>-Click (or <kbd>Cmd</kbd>-Click) on the second commit. The changes between the two selected commits will appear in the other panels, as shown below:

<pic src="images/sourcetreeCompareCommits.png" width="500" />

The same method can be used to compare the current state of the working directory (which might have uncommitted changes) to a point in the history.

<pic eager src="images/sourcetreeDiffCommitAndWorkingDir.png" width="500" />
<p/>

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


**++Usage 3: Examining changes to a specific file++**<br>
Example use case: Similar to other use cases but when you are interested in a specific file only.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Examining changes to a specific file")  %}

Examine the changes done to a file between two different points in the version history (including the working directory).

{% set cli %} <!-- ------ start: Git Tabs --------------->

Add the `-- path/to/file` to a previous diff command to narrow the output to a specific file. Some examples:

```bash{.no-line-numbers}
git diff -- fruits.txt               # unstaged changes to fruits.txt
git diff --staged -- src/main.java   # staged changes to src/main.java
git diff HEAD~2..HEAD -- fruits.txt  # changes to fruits.txt between commits
```
{% endset %}
{% set sourcetree %}

Sourcetree UI shows changes to one file at a time by default; just click on the file to view changes to that file. To view changes to multiple files, <kbd>Ctrl</kbd>-Click (or <kbd>Cmd</kbd>-Click) on multiple files to select them.

<pic src="images/sourcetreeStagedAndUnstaged.png" width="600" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


</div>

<div id="extras">
</div>
