{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_protip, show_ref, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can examine the changes in a commit.</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.show.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
It is useful to be able to **see what changes were included in a specific commit**.

{% endcall %}

**When you examine a commit, normally what you see is the 'changes made since the previous commit'.** This does not mean that a Git commit contains only the changes made since the previous commit. As you recall, a Git commit contains a full snapshot of the working directory. However, tools used to examine commits typically show only the changes, as that is the more informative part.

**Git shows changes included in a commit by _dynamically calculating_ the difference** between the snapshots stored in the target commit and the parent commit. This is because Git commits store snapshots of the working directory, not changes themselves.

**To address a specific commit, you can use its SHA** (e.g., `e60deaeb2964bf2ebc907b7416efc890c9d4914b`). In fact, just the first few characters of the SHA is enough to uniquely address a commit (e.g., `e60deae`), provided the partial SHA is long enough to uniquely identify the commit (i.e., only one commit has that partial SHA).<br>
**Naturally, a commit can be addressed using any ref pointing to it** too (e.g., `HEAD`, `master`).<br>
**Another related technique is to use the `<ref>~<n>` notation** (e.g., `HEAD~1`) to address the commit that is `n` commits prior to the commit pointed by `<ref>` i.e., "start with the commit pointed by `<ref>` and go back `n` commits".<br>
A related alternative notation is `HEAD~`, `HEAD~~`, `HEAD~~~`, ... to mean `HEAD~1`, `HEAD~2`, `HEAD~3` etc.

{{ show_commit('C3', desc=show_ref('master') + ' ' + show_head(), msg='This commit can be addressed as `HEAD` or `master`') }}
{{ show_commit('C2', msg='Can be addressed as `HEAD~1` or `master~1` or `HEAD~` or `master~`') }}
{{ show_commit('C1', msg='Can be addressed as `HEAD~2` or `master~2`', edge='') }}
<p/>

**Git uses the {{ show_git_term("diff") }} format to show file changes in a commit.** The diff format was originally developed for Unix. It was later extended with headers and metadata to show changes between file versions and commits. Here is an example diff showing the changes to a file.

```diff{.no-line-numbers}
diff --git a/fruits.txt b/fruits.txt
index 7d0a594..f84d1c9 100644
--- a/fruits.txt
+++ b/fruits.txt
@@ -1,6 +1,6 @@
-apples
+apples, apricots
 bananas
 cherries
 dragon fruits
-elderberries
 figs
@@ -20,2 +20,3 @@
 oranges
+pears
 raisins
diff --git a/colours.txt b/colours.txt
new file mode 100644
index 0000000..55c8449
--- /dev/null
+++ b/colours.txt
@@ -0,0 +1 @@
+a file for colours
 ```
 A Git diff can consist of multiple {{ show_git_term("file diffs") }}, one for each changed file. Each file diff can contain one or more {{ show_git_term("hunk") }} i.e., a localised group of changes within the file — including lines added, removed, or left unchanged (included for context).

<div class="non-printable">

Given below is how the above diff is divided into its components:
<div class="border border-info p-2">
All changes in the commit:

<div class="border border-info p-2">

File diff for `fruits.txt`:
```diff{.no-line-numbers}
diff --git a/fruits.txt b/fruits.txt
index 7d0a594..f84d1c9 100644
--- a/fruits.txt
+++ b/fruits.txt
```
<div class="border border-info p-2">

Hunk 1:
```diff{.no-line-numbers}
@@ -1,6 +1,6 @@
-apples
+apples, apricots
 bananas
 cherries
 dragon fruits
-elderberries
 figs
 ```
</div>
<div class="border border-info p-2">

Hunk 2:
```diff{.no-line-numbers}
@@ -20,2 +20,3 @@
 oranges
+pears
 raisins
 ```
</div>
</div>
<div class="border border-info p-2">

File diff for `colours.txt`:
```diff{.no-line-numbers}
diff --git a/colours.txt b/colours.txt
new file mode 100644
index 0000000..55c8449
--- /dev/null
+++ b/colours.txt
```
<div class="border border-info p-2">

Hunk 1:
```diff{.no-line-numbers}
@@ -0,0 +1 @@
+a file for colours
 ```
</div>
</div>
</div>
<p/>

Here is an explanation of the diff:

| **Part of Diff**                            | **Explanation** |
|---------------------------------------------|-----------------|
| `diff --git a/fruits.txt b/fruits.txt`{.diff}      | The diff header, indicating that it is comparing the file `fruits.txt` between two versions: the old (`a/`) and new (`b/`). |
| `index 7d0a594..f84d1c9 100644`{.diff}            | Shows the <popover content="just like Git uses a SHA to identify a commit, it uses SHA values to identify binary objects such as files">SHA of the _file_ (not the commit)</popover> before and after the change, and the file mode (`100` means a regular file, `644` are file permission indicators). |
| `--- a/fruits.txt`{.diff}<br>`+++ b/fruits.txt`{.diff} | Marks the old version of the file (`a/fruits.txt`) and the new version of the file (`b/fruits.txt`). |
| `@@ -1,6 +1,6 @@`{.diff}                            | This {{ show_git_term("hunk header") }} shows that lines 1-6 (i.e., starting at line `1`, showing `6` lines) in the old file were compared with lines 1–6 in the new file. |
| `-apples`{.diff}<br>`+apples, apricots`{.diff}  | Removed line `apples` and added line `apples, apricots`. |
| ` bananas`{.diff}<br>`cherries`{.diff}<br>`dragon fruits`{.diff} | Unchanged lines, shown for context.|
| `-elderberries`{.diff}                             | Removed line: `elderberries`.|
| ` figs`{.diff}                                     | Unchanged line, shown for context.|
| `@@ -20,2 +20,3 @@`{.diff} | Hunk header showing that lines 20-21 in the old file were compared with lines 20–22 in the new file. |
|&nbsp;&nbsp;`oranges`{.diff}<br>`+pears`{.diff}<br>&nbsp;&nbsp;`raisins`{.diff} | Unchanged line.<br>Added line: `pears`.<br>Unchanged line.|
| `diff --git a/colours.txt b/colours.txt`{.diff} | The usual diff header, indicates that Git is comparing two versions of the file `colours.txt`{.diff}: one before and one after the change. |
| `new file mode 100644`{.diff} | This is a new file being added. `100644`{.diff} means it’s a normal, non-executable file with standard read/write permissions. |
| `index 0000000..55c8449`{.diff} | The usual SHA hashes for the two versions of the file. ==`0000000`{.diff} indicates the file did not exist before.== |
| `--- /dev/null`{.diff}<br>`+++ b/colours.txt`{.diff} | Refers to the "old" version of the file (==`/dev/null`{.diff} means it didn’t exist before)==, and the new version. |
| `@@ -0,0 +1 @@`{.diff} | Hunk header, saying: “0 lines in the old file were replaced with 1 line in the new file, starting at line 1.” |
| `+a file for colours`{.diff} | Added line|

Points to note:

* `+`{.diff} indicates a line being added.<br>
  `-`{.diff} indicates a line being deleted.
* Editing a line is seen as deleting the original line and adding the new line.
</div>

{% call show_hands_on_practical('View specific commits')  %} <!-- ================ -->

{{ hp_number(hop_target) }}**View contents of specific commits** in a repo.

{{ hp_number(hop_preparation) }} You can use any repo that has commits e.g., the `things` repo.

{% set cli %}
{{ hp_number ('1') }} **Locate the commits to view**, using the revision graph.

```bash{.no-line-numbers}
git log --oneline --decorate
```
{% call show_output() %}
```bash{.no-line-numbers}
 e60deae (HEAD -> master, origin/master) Update fruits list
 f761ea6 Add colours.txt, shapes.txt
 2bedace Add figs to fruits.txt
 d5f91de Add fruits.txt
 ```
{% endcall %}

{{ hp_number ('2') }} **Use the `git show` command to view specific commits**.

```bash{.no-line-numbers}
git show  # shows the latest commit
```
{% call show_output() %}
```diff{.no-line-numbers}
commit e60deaeb2964bf2ebc907b7416efc890c9d4914b (HEAD -> master, origin/master)
Author: damithc <...@...>
Date:   Sat Jun ...

    Update fruits list

diff --git a/fruits.txt b/fruits.txt
index 7d0a594..6d502c3 100644
--- a/fruits.txt
+++ b/fruits.txt
@@ -1,6 +1,6 @@
-apples
+apples, apricots
 bananas
+blueberries
 cherries
 dragon fruits
-elderberries
 figs
 ```
{% endcall %}

To view the parent commit of the latest commit, you can use any of these commands:
 ```bash{.no-line-numbers}
 git show HEAD~1
 git show master~1
 git show e60deae  # first few characters of the SHA
 git show e60deae.....  # run git log to find the full SHA and specify the full SHA
 ```
To view the commit that is two commits before the latest commit, you can use `git show HEAD~2` etc.

{% endset %}
{% set sourcetree %}

Click on the commit. The remaining panels (indicated in the image below) will be populated with the details of the commit.

<pic src="images/sourcetreeViewCommitInfo.png" width="700" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
{% endcall %} <!-- end: HOP -->

<include src="../common/aliases-fragment.md" />

</div>

<div id="extras">
</div>
