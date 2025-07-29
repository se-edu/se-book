{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

Here is an example list of bash commands to add two commits while observing the list of commits

```bash
$ echo "figs" >> fruits.txt  # add another line to fruits.txt
$ git add fruits.txt  # stage the updated file
$ git commit -m "Insert figs into fruits.txt"  # commit the changes
$ git log  # check commits list

$ echo "a file for colours" >> colours.txt  # add a colours.txt file
$ echo "a file for shapes" >> shapes.txt  # add a shapes.txt file
$ git add colours.txt shapes.txt  # stage both files in one go
$ git commit -m "Add colours.txt, shapes.txt"  # commit the changes
$ git log  # check commits list
```

The output of the final `git log` should be something like this:
```bash{highlight-lines="5,11,17"}
commit 18300... (HEAD -> master)
Author: ... <...@...>
Date:   ...

    Add colours.txt, shapes.txt

commit 2beda...
Author: ... <...@...>
Date:   ...

    Insert figs into fruits.txt

commit d5f91...
Author: ... <...@...>
Date:   ...

    Add fruits.txt
```

{% call show_protip("Staging multiple files in one go") %}
Here are several ways of staging multiple files simultaneously.

**Specify multiple files:**
```bash
git add f1.txt f2.txt data/lists/f3.tt
```

**Add using a [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)):**
```bash
git add *.txt  # adds all .txt files in the current directory
```

**Add all files in the current directory and subdirectories:**
```bash
git add .
```

**Add all changes in a specific directory and subdirectories:**
```bash
git add path/to/directory
```

**Add all changes in the entire repository:**
```bash
git add -A
```
{% endcall %}