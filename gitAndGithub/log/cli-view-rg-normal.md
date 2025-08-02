{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

{{ hp_number('1') }} **First, use a simple `git log`** to view the list of commits.

```bash{.no-line-numbers}
git log
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1[:22],1['HEAD']@pink,1['master']@#e6fff2,1['origin/master']@pink,7,13"}
commit f761ea63738a... (HEAD -> master, origin/master)
Author: ... <...@...>
Date:   Sat ...

    Add colours.txt, shapes.txt

commit 2bedace69990...
Author: ... <...@...>
Date:   Sat ...

    Add figs to fruits.txt

commit d5f91de5f0b5...
Author: ... <...@...>
Date:   Fri ...

    Add fruits.txt
```
Given below the visual representation of the same revision graph. As you can see, the `log` output shows the refs slightly differently, but it is not hard to see what they mean.

{{ show_commit('C3', desc=show_ref('master') + show_head() + show_ref('origin/master'), msg='Add colours.txt, shapes.txt') }}
{{ show_commit('C2', msg='Add figs to fruits.txt') }}
{{ show_commit('C1', edge='', msg='Add fruits.txt') }}
<p/>

{% endcall %}

{% call show_sidebar("Working with the 'less' pager") %}
**Some Git commands — such as `git log`— may show their output through a {{ show_git_term("pager") }}.** A pager is a program that lets you view long text one screen at a time, so you don’t miss anything that scrolls off the top. For example, the output of `git log` command will temporarily hide the current content of the terminal, and enter the pager view that shows output one screen at a time. When you exit the pager, the `git log` output will disappear from view, and the previous content of the terminal will reappear.

{% set a %} <!-- ------ start: transformation columns --------------->
```
command 1
output 1

git log

```
{% endset %}
{% set b %}

{% endset %}
{% set c %}
```
commit f761ea63738a...
Author: ... <...@...>
Date:   Sat ...

    Add colours.txt
```
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<!-- ------ end: transformation columns -------------------------------->

**By default, Git uses a pager called [less](https://en.wikipedia.org/wiki/Less_(Unix))**. Given below are some useful commands you can use inside the less pager.

| Command      | Description
|--------------|--------------
| `q`          | Quit `less` and return to the terminal
| `↓` or `j`   | Move down one line
| `↑` or `k`   | Move up one line
| `Space`      | Move down one screen
| `b`          | Move up one screen
| `G`          | Go to the end of the content
| `g`          | Go to the beginning of the content
| `/pattern`   | Search forward for *pattern* (e.g., `/fix`)
| `n`          | Repeat the last search (forward)
| `N`          | Repeat the last search (backward)
| `h`          | Show help screen with all `less` commands

**If you’d rather see the output directly**, without using a pager, you can add the `--no-pager` flag to the command e.g.,
```bash
git --no-pager log
```
It is possible to ask Git to not use less at all, use a different pager, or fine-tune how less is used. For example, **you can reduce Git's use of the pager** (recommended), using the following command:
```bash
git config --global core.pager "less -FRX"
```

Explanation:

* `-F` : Quit if the output fits on one screen (don’t show pager unnecessarily)
* `-R` : Show raw control characters (for coloured Git output)
* `-X` : Keep content visible after quitting the pager (so output stays on the terminal)

{% endcall %}

{{ hp_number('2') }} **Use the `--oneline` flag to get a more concise view.** Note how the commit SHA has been truncated to first seven characters (first seven characters of a commit SHA is enough for Git to identify a commit).

```bash{.no-line-numbers}
git log --oneline
```
{% call show_output() %}
```bash{.no-line-numbers}
f761ea6 (HEAD -> master, origin/master) Add colours.txt, shapes.txt
2bedace Add figs to fruits.txt
d5f91de Add fruits.txt
 ```
{% endcall %}

{{ hp_number('3') }} **The `--graph` flag makes the result closer to a graphical revision graph**. Note the `*` that indicates a node in a revision graph.

```bash{.no-line-numbers}
git log --oneline --graph
```
{% call show_output() %}
```bash{.no-line-numbers}
* f761ea6 (HEAD -> master, origin/master) Add colours.txt, shapes.txt
* 2bedace Add figs to fruits.txt
* d5f91de Add fruits.txt
```
{% endcall %}
{{ icon_info }} The `--graph` option is more useful when examining a more complicated revision graph consisting of multiple parallel branches.
