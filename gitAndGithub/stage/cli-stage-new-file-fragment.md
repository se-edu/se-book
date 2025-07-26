{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

{{ hp_number(2.1) }} **Check the status of the folder** using the `git status` command.

<div class="indented-level1">

```bash{.no-line-numbers}
git status
```
{% call show_output() %}

```{.no-line-numbers}
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  fruits.txt
nothing added to commit but untracked files present (use "git add" to track)
```
{% endcall %}
</div>

{{ hp_number(2.2) }} **Use the `add` command** to stage the file.
<div class="indented-level1">

```bash{.no-line-numbers}
git add fruits.txt
```

<box type="tip" seamless>

You can replace the `add` with `stage` (e.g., `git stage fruits.txt`) and the result is the same (they are synonyms).
</box>
</div>

{{ hp_number(2.3) }} **Check the status again.** You can see the file is no longer 'untracked'.
<div class="indented-level1">

```bash{.no-line-numbers}
git status
```
{% call show_output()  %}

```{.no-line-numbers}
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

      new file:   fruits.txt

```
{% endcall %}

{{ icon_info }} As before, don't worry if you don't understand the content of the output (we'll unpack it in a later lesson). The point to note is that the file is no longer listed as 'untracked'.
</div>
