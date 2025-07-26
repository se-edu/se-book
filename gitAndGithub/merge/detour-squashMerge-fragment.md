{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

To do a squash merge, you can use the `--squash` switch. It will prepare the squashed merge commit but will stop short of actually finalising the commit.

```bash
git merge --squash feature-1
```
{% call show_output() %}
```bash
Squash commit -- not updating HEAD
Automatic merge went well; stopped before committing as requested
```
{% endcall %}

 At that point, you can go ahead and make the commit yourself, th the commit message you want.
 