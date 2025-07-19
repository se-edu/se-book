{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}


**You can push to any number of repos**, as long as the target repos and your repo have a shared history.
1. <trigger trigger="click" for="modal:push-addRemoteForNormalPushing">Add the GitHub repo URL as a remote</trigger> while giving a suitable name (e.g., `upstream`, `central`, `production`, `backup` ...), if you haven't done so already.
1. Push to the target repo -- remember to select the correct target repo when you do.

<modal large header="Git & GitHub → Push →" id="modal:push-addRemoteForNormalPushing">
  <include src="../setRemote/text.md#body"/>
</modal>

{% set cli %} <!-- ------ start: Git Tabs --------------->
 e.g., `git push backup master`
{% endset %}
{% set sourcetree %}
<pic eager src="{{baseUrl}}/gitAndGithub/push/images/sourcetreePushDialog.png" width="470" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

