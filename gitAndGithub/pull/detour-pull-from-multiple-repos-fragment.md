{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

{% call show_detour('Pulling from multiple remotes') %}

**You can pull from any number of repos**, provided the repos involved have a shared history.
1. <trigger trigger="click" for="modal:pull-addMultipleRemotes">Add the GitHub repo URL as a remote</trigger> while giving a suitable name (e.g., `upstream`, `central`, `production`, `backup` ...), if you haven't done so already.
1. Pull from the target repo -- remember to select the correct target repo when you do.

<modal large header="Git & GitHub → Linking Remote Repose →" id="modal:pull-addMultipleRemotes">
  <include src="../setRemote/text.md#body"/>
</modal>

{% set cli %} <!-- ------ start: Git Tabs --------------->
 e.g., `git pull backup master`

{% endset %}
{% set sourcetree %}

<pic eager src="images/sourcetreePulldialog.png" width="470" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}

