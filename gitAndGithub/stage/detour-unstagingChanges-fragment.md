{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

 **You can {{ show_git_term("unstage") }} a staged file, which simply removes it from the staging area but keeps the changes in your working directory.** This is useful if you later realise that you don’t actually want to include a staged file in the next commit — perhaps you staged it by mistake, or you want to include that change in a later commit.

{% set cli %} <!-- ------ start: Git Tabs --------------->
* **To unstage a file you added or modified**, run `git restore --staged <file-name(s)>`. This command removes the file from the staging area, leaving your working directory untouched.
  ```bash{highlight-lines="1['restore --staged']"}
  git restore --staged plan.txt budget.txt data/list.txt
  ```
* **To unstage a file deletion** (staged using `git rm`), use the same command as above. It will unstage the deletion and restore the file in the staging area.<br>
  **If you also deleted the file from your working directory**, you may need to recover it separately with `git restore <file-name(s)>`
  ```bash{highlight-lines="1['restore']"}
  git restore data/list.txt data/plan.txt
  ```
{% endset %}
{% set sourcetree %}
To unstage a file, locate the file among the `staged files` section, click the `...` in front the file, and choose `Unstage file`:<br>
<pic src="images/sourcetreeUnstageFile.png"/>
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% call show_exercise('staging-intervention') %}
Unstage the following files: `adam.txt`, `josh.txt`, `mary.txt`.
Keep other files staged.
{% endcall %} <!-- show_exercise -->
