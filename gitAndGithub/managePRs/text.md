{% from "common/macros.njk" import trail, bold_number, button_green, button_light, callout, dropdown, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood, sub_numbers with context %}

<span id="title">Merging PRs</span>
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can review and merge PRs on GitHub</span>

<div id="body">

**A project member with sufficient access to the remote repo can merge a PR**, incorporating proposed changes into the main codebase. {{ show_git_term("Merging a PR") }} is similar to performing a Git merge in a local repo, except that it occurs in the remote repository.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Merge a PR")  %}
{{ hp_number("Preparation") }} If you would like to try merging a PR yourself, you can create a dummy PR in the following manner.
* Create a branch in a repo that you have forked and cloned (e.g., [samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice)). {{ numbers_roman }}
* Do some changes in the branch.
* Push the branch to the remote repo.
* Create a PR within your fork, from the new branch to the `master` branch.


{{ hp_number("1") }} **Locate the PR** to be merged in your repo's GitHub page.

{{ hp_number("2") }} **Click on the <span class="tab">:far-comments: Conversation</span> tab** and scroll to the bottom. You'll see a panel containing the PR status summary.<br>
<pic eager src="{{baseUrl}}/gitAndGithub/managePRs/images/mergePr.png" width="800" />

{{ hp_number("3") }} **If the PR is not merge-able in the current state**, the {{ button_light("Merge pull request :octicon-triangle-down:") }} will not be green. Here are the possible reasons and remedies:

* **Problem: The PR code is out-of-date**, indicated by the message **%%This branch is out-of-date with the base branch%%**. That means the repo's `master` branch has been updated since the PR code was last updated.
  * If the PR author has allowed you to update the PR and you have sufficient permissions, GitHub will allow you to update the PR simply by clicking the {{ button_light("Update branch") }} on the right side of the 'out-of-date' error message.
    If that option is not available, post a message in the PR requesting the PR author to update the PR.
* **Problem: There are merge conflicts**, indicated by the message **%%This branch has conflicts that must be resolved%%**. That means the repo's `master` branch has been updated since the PR code was last updated, in a way that the PR code conflicts with the current `master` branch. Those <trigger trigger="click" for="modal:managePRs-mergeConflics">conflicts must be resolved</trigger>  before the PR can be merged.
  * If the conflicts are simple, GitHub might allow you to resolve them using the Web interface.
  * If that option is not available, post a message in the PR requesting the PR author to update the PR.

<modal large header="Tools → Git & GitHub → Merge Conflicts" id="modal:managePRs-mergeConflics">
  <include src="../mergeConflicts/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

{{ hp_number("4") }} **Merge the PR** by clicking on the {{ button_green("Merge pull request :octicon-triangle-down:") }} button, followed by the `Confirm merge` button. You should see a `Pull request successfully merged and closed` message after the PR is merged.<br>

* You can choose between three merging options by clicking on the down-arrow in the {{ button_green("Merge pull request :octicon-triangle-down:") }} button. If you are new to Git and GitHub, the `Create merge commit` option is recommended.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**After a PR is merged, you need to sync other related repos.** Merging a PR simply merges the code in the upstream remote repository in which it was merged. The PR author (and other members of the repo) needs to pull the merged code from the upstream repo to their local repos and push the new code to their respective forks to sync the fork with the upstream repo.

</div>

<div id="extras">
</div>
