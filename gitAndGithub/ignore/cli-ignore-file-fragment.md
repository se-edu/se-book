{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

Create a file named `.gitignore` in the working directory root and add the text `temp.txt` into it.

```bash{.no-line-numbers}
echo "temp.txt" >> .gitignore
```
{% call show_output() %}
```{heading=".gitignore"}
temp.txt
```
{% endcall %} <!-- show_output -->


Observe how `temp.txt` is no longer detected as 'untracked' by running the `git status` command (but now it will detect the `.gitignore` file as 'untracked'.

Update the `.gitignore` file as follows:

```{heading=".gitignore" highlight-lines="2"}
temp.txt
*.tmp
```

Observe how `.tmp` files are no longer detected as 'untracked' by running the `git status` command.
