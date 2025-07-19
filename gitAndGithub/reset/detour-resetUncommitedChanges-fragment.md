{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="preview">

**At times, you might need to get rid of uncommitted changes** so that you have a fresh start to the next commit.
</div>

**To get rid of uncommitted changes, you can reset the repo to the last commit (i.e., `HEAD`)**:

{% set cli %} <!-- ------ start: Git Tabs --------------->

The command `git reset` (without specifying a commit) defaults to `git reset HEAD`.
* `git reset`: moves any staged changes to working directory (i.e., unstage).
* `git reset --hard`: get rid of any staged and unstaged changes.

{% endset %}
{% set sourcetree %}

<pic src="images/sourcetreeResetCurrentChanges.png" width="400" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
