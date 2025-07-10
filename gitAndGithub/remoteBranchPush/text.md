{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can push a local branch to a remote, and keep it updated.</span>
<span id="title">{{ trail.remoteBranches.lessons.remoteBranchPush.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Local branches can be replicated in a remote**.
{% endcall %}

**Pushing a copy of a local branches to the corresponding remote repo makes those branches available remotely.**

In a previous lesson, we saw how to push the default branch to a remote repository and have Git set up tracking between the local and remote branches using a remote-tracking reference. **Pushing any other local branch to a remote works the same way as pushing the default branch — you simply specify the target branch instead of the default branch.** Pushing any new commits in any local branch to a corresponding remote branch is done similarly as well.

//Illustration

//HANDS-ON

</div>

<div id="extras">
</div>
