{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.syncingBranches.lessons.cherryPick.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

...


<box type="info" seamless>

Instead of merging `master` to `feature1`, an alternative is to [_rebase_](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) the `feature1` branch. However, rebasing is an advanced feature that requires modifying past commits. If you modify past commits that have been pushed to a remote repository, you'll have to [_force-push_](https://www.datree.io/resources/git-push-force) the modified commit to the remote repo in order to update the commits in it.
</box>

</div>

<div id="extras">
</div>
