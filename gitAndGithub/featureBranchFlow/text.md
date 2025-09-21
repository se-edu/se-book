{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="title">Feature Branch Workflow</span>
<span id="outcomes">{{ icon_outcome }} Can explain feature branch flow</span>

<div id="body">

**{{ show_git_term("Feature branch workflow") }} is similar to the forking workflow except there are no forks.** Everyone is pushing/pulling from the same remote repo. The phrase _feature branch_ is used because each new feature (or bug fix, or any other modification) is done in a separate branch and merged to the `master` branch when ready. Pull requests can still be created within the central repository, from the feature branch to the main branch.

As this workflow require all team members to have write access to the repository,
  * it is better to _protect_ the main branch using some mechanism, to reduce the risk of accidental undesirable changes to it.
  * it is not suitable for situations where the code contributors are not 'trusted' enough to be given write permission.

<pic eager src="{{baseUrl}}/gitAndGithub/featureBranchFlow/images/diagram.png" height="330" />
<p/>

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
