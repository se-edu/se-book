{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

{% call show_detour('Staging a file deletion') %}

When you delete a tracked file from your working directory, Git doesn’t automatically assume you want that change to be part of your next commit. **To tell Git you intend to record a file deletion in the repository’s history, you need to stage the deletion explicitly.**

When you stage a deleted file, **you’re adding the _removal_ of the file to the staging area**, just like you’d stage a modified or newly created file. After staging, the next commit will reflect that the file was removed from the project.


{% set cli %} <!-- ------ start: Git Tabs --------------->
**To delete a file and stage the deletion in one go**, you can use the `git rm <file-name>` command. It removes the file from the working directory and stages the deletion at the same time.

```bash{.no-line-numbers highlight-lines="1['rm']"}
git rm data/list.txt
```

**If you’ve already deleted the file manually** (for example, using `rm` or deleting it in your file explorer), you can still stage the deletion using the `git add <file-name>` command. Even though the file no longer exists, git add records its deletion into the staging area.

```bash{.no-line-numbers highlight-lines="1['add']"}
git add data/list.txt
```
{% endset %}
{% set sourcetree %}
Staging a file deletion is done similar to staging other changes.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}
