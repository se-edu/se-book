{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}


{{ hp_number('1') }} **First, use a simple `git log`** to view the list of commits.

```bash{.no-line-numbers}
git log
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1[:22],1['HEAD']@pink,1['master']@#e6fff2,7,13"}
commit f761ea63738a... (HEAD -> master)
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

{{ show_commit('C3', desc=show_ref('master') + show_head(), msg='Add colours.txt, shapes.txt') }}
{{ show_commit('C2', msg='Add figs to fruits.txt') }}
{{ show_commit('C1', edge='', msg='Add fruits.txt') }}
<p/>

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
