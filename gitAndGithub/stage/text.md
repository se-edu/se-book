{% from "common/macros.njk" import show_git_tabs, show_hands_on_practical, show_lesson_overview with context %}

<span id="outcomes">{{ icon_outcome }} Can commit using Git</span>
<span id="title">Staging files for a commit</span>

<div id="body">

{% call show_lesson_overview() %}

Git does not save snapshots of a folder automatically. It needs to be told when to take a snapshot and what to include in the snapshot. **The first step to saving a snapshot is to specify what to include in it, also called _staging_.**
{% endcall %}

**Git considers new files that you add to the working folder as 'untracked'** i.e., Git is aware of them, but they are not yet under Git's control. The same applies to files that existed in the working folder at the time you initialised the repo.

**We can 'add' (also called _staging_) untracked files to tell Git that we want them to be 'tracked' by Git** (i.e., to be under Git's control), as shown in the following hands-on practical.

{% call show_hands_on_practical("Adding untracked files") %}

First, let us add a file (e.g., `fruits.txt`) to the `things` folder.

<box type="tip" seamless>

Here is an easy way to do that with a single terminal command.

```bash {.no-line-numbers }
$ echo "apples\nbananas\ncherries\n" > fruits.txt
```
{{ icon_output }} %%(creates the following file)%%

```txt {heading="things/fruits.txt"}
apples
bananas
cherries
```

</box>

{{ show_git_tabs('_1') }}

{% endcall %}

**Adding/staging a new file results in two things:**

1. **The file is puts under Git's control** i.e., the file is now 'tracked', no longer 'untracked'.
2. **The current version of the file will be included in the next snapshot** of the folder.<br>
   Consequently, **a copy of the current version of the file is put in the _staging area_, also called the _index_.** (a space that exists inside the `.git` folder).

**If you modify a staged file, it goes into the 'modified' state** i.e., the file contains modifications that are not present in the version that is in the staging area, waiting to be included in the next snapshot. If you wish to include these new changes in the next snapshot, you need to add/stage the file again, which will overwrite the copy of the file that was previously in the staging area.

{% call show_hands_on_practical("Re-staging 'modified' files") %}

First, let us add another line to `fruits.txt`.

<box type="tip" seamless>

Here is a way to do that with a single terminal command.

```bash {.no-line-numbers }
$ echo "dragon fruit" >> fruits.txt
```
{{ icon_output }} %%(appends texts to the file as follows)%%

```txt {heading="things/fruits.txt" highlight-lines="4"}
apples
bananas
cherries
dragon fruits
```

</box>

{{ show_git_tabs('_2') }}

{% endcall %}

To stage the latest version, 'add' again.
Git doesn't track folders.
git diff can show unstaged changes (use q to exit)
and git diff --cached to see what you’ve staged so far

</div>

<div id="extras">
</div>
