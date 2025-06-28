{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.show.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
It is also useful to be able to **see what is in a specific commit**.

{% endcall %}

**When you examine a commit, normally what you see is the 'changes since the previous commit'.** This should not be interpreted as Git commits contain only the changes. As you recall, a Git commit contains a full snapshot of the working directory. However, tools used to examine commits show only the changes, as that is the more informative part.

**To address a specific commit, you can use its SHA** (e.g., `e60deaeb2964bf2ebc907b7416efc890c9d4914b`). In fact, just the first few characters of the SHA is enough to uniquely address a commit (e.g., `e60deae`).<br>
**Naturally, a commit can be addressed using any ref pointing to it** e.g., `HEAD`, `master`<br>
**Another related technique is to use the `<ref>~n` notation** (e.g., `HEAD~1`) to address the commit that is `n` commits prior i.e., "start with the commit pointed by `<ref>` and go back `n` commits".

{{ show_commit('C3', desc=show_ref('master') + ' ' + show_head(), msg='This commit can be addressed as `HEAD` or `master`') }}
{{ show_commit('C2', msg='Can be addressed as `HEAD~1` or `master~1`') }}
{{ show_commit('C1', msg='Can be addressed as `HEAD~2` or `master~2`', edge='') }}
<p/>

**Git uses the {{ show_git_term("diff") }} format to show file changes in a commit.** The diff format was originally developed for Unix, later extended with headers and metadata to show changes between file versions and commits. Here is an example diff showing the changes to a file.

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
 ```

Here is the explanation of the above diff:

| **Part of Diff**                            | **Explanation** |
|---------------------------------------------|-----------------|
| `diff --git a/fruits.txt b/fruits.txt`{.diff}      | Compares the file `fruits.txt` between two versions: the old (`a/`) and new (`b/`). |
| `index 7d0a594..f84d1c9 100644`{.diff}            | Shows the SHA of the file before and after the change, and the file mode (`100` means a regular file, `644` are file permission indicators). |
| `--- a/fruits.txt`{.diff}<br>`+++ b/fruits.txt`{.diff} | Marks the old version of the file (`a/fruits.txt`) and the new version of the file (`b/fruits.txt`).                             |
| `@@ -1,6 +1,6 @@`{.diff}                            | This "hunk header" shows that lines 1-6 (i.e., starting at line `1`, showing `6` lines) in the old file were compared with lines 1–6 in the new file. |
| `-apples`{.diff}<br>`+apples, apricots`{.diff}  | Removed line `apples` and added line `apples, apricots`. |
| ` bananas`{.diff}<br>`cherries`{.diff}<br>`dragon fruits`{.diff} | Unchanged lines, shown for context.|
| `-elderberries`{.diff}                             | Removed line: `elderberries`.|
| ` figs`{.diff}                                     | Unchanged line, shown for context.|
| `@@ -20,2 +20,3 @@`{.diff} | This "hunk header" shows that lines 20-21 in the old file were compared with lines 20–22 in the new file. |
|&nbsp;&nbsp;`oranges`{.diff}<br>`+pears`{.diff}<br>&nbsp;&nbsp;`raisins`{.diff} | Unchanged line.<br>Added line `pears`.<br>Unchanged line.|

Points to note:

* **A cluster of change is called a {{ show_git_term("hunk") }}**. Each hunk is introduced by a hunk header, like `@@ -1,6 +1,6 @@`{.diff}. A diff of a file can contain multiple hunks. The above example has two hunks.
* `+`{.diff} indicates a line being added.<br>
  `-`{.diff} indicates a line being deleted.
* **Editing a line is seen as deleting the original line and adding the new line**.

{% call show_hands_on_practical('View specific commits')  %}

**View contents of specific commits** in a repo (e.g., the `things` repo):

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
 to view the one two commits prior to the latest commit, you can use `git show HEAD~2` etc.

{% endset %}
{% set sourcetree %}

Click on the commit. The remaining panels (indicated in the image below) will be populated with the details of the commit.

<pic src="images/sourcetreeViewCommitInfo.png" width="700" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

{% endcall %}
</div>
<div id="extras">
</div>
