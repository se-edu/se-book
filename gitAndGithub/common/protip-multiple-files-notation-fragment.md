{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

{% call show_protip("Applying a Git command to multiple files in one go") %}
When a Git command expects a list of files or paths as a parameter (as the `git add` command does), there are several notations you can use to specify them. Given below are some of them, with example using the `git add` command:

**Specify multiple files, separated by spaces:**
```bash{highlight-lines="1['f1.txt'],1['f2.txt'],1['data/lists/f3.txt']"}
git add f1.txt f2.txt data/lists/f3.txt  # stages the specified three files
```

**Use a [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)):**
```bash{highlight-lines="1['*.txt']"}
git add *.txt  # stages all .txt files in the current directory
```

**Use `.` to indicate 'all in the current directory and subdirectories':**
```bash{highlight-lines="1['.']"}
git add .  # stages all files in current directory and its subdirectories
```

**Specific directory, to indicate 'this directory and its subdirectories':**
```bash{highlight-lines="1['path/to/dir']"}
git add path/to/dir  # stages all files in path/to/dir and its subdirectories
```
{% endcall %} <!-- end: show_protip -->
