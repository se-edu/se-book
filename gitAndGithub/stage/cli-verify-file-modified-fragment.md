{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

Use the `git status` command to check the status of the working directory.

```{.no-line-numbers}
$ git status
```
{% call show_output() %}

```{.no-line-numbers highlight-lines="7,12"}
On branch master

No commits yet

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file:   fruits.txt

Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified:   fruits.txt
```
{% endcall %}

Note how `fruits.txt` now appears twice, once as `new file: ...` (representing the  version of the file we staged earlier, which had only three lines) and once as `modified: ...` (representing the latest version of the file which now has a fourth line).
