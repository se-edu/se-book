{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

For basic usage, you can use the following two commands:

* `git stash`: Stash staged and unstaged changes
* `git stash pop`: Reapplies the latest stashed changes and removes it from the stash list.

{% call show_resources() %}
* **A more detailed explanation of stashing:** https://www.atlassian.com/git/tutorials/saving-changes/git-stash

* **A video explanation:**

  @[youtube](DeU6opFU_zw)
{% endcall %}