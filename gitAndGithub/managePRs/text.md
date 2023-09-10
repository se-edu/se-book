<span id="title">Merging PRs</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can review and merge PRs on GitHub</span>

{% macro dropdown(text) %}<span class="btn btn-light border">{{ text }} :octicon-triangle-down:</span>{% endmacro %}
{% macro button_green(text) %}<span class="btn btn-success ps-1 pe-1 pb-0 pt-0">{{ text }}</span>{% endmacro %}
{% macro button_light(text) %}<span class="btn btn-light ps-1 pe-1 pb-0 pt-0 border">{{ text }}</span>{% endmacro %}

<div id="body">

Let's look at the steps involved in merging a PR, assuming the PR has been reviewed, refined, and approved for merging already.

Preparation: If you would like to try merging a PR yourself, you can create a dummy PR in the following manner.
1. Fork any repo (e.g., [samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice)).
1. Clone in to your computer.
1. Create a new branch e.g., (`feature1`) and add some commits to it.
1. Push the new branch to the fork.
1. Create a PR from that branch to the `master` branch in your fork. Yes, it is possible to create a PR within the same repo.

**1. Locate the PR** to be merged in your repo's GitHub page.

**2. Click on the <span class="tab">:far-comments: Conversation</span> tab** and scroll to the bottom. You'll see a panel containing the PR status summary.<br>
<pic eager src="{{baseUrl}}/gitAndGithub/managePRs/images/mergePr.png" width="800" />

**3. If the PR is not merge-able in the current state**, the {{ button_light("Merge pull request :octicon-triangle-down:") }} will not be green. Here are the possible reasons and remedies:

* **Problem: The PR code is out-of-date**, indicated by the message **%%This branch is out-of-date with the base branch%%**. That means the repo's `master` branch has been updated since the PR code was last updated.
  * If the PR author has allowed you to update the PR and you have sufficient permissions, GitHub will allow you to update the PR simply by clicking the {{ button_light("Update branch") }} on the right side of the 'out-of-date' error message.
    If that option is not available, post a message in the PR requesting the PR author to update the PR.
* **Problem: There are merge conflicts**, indicated by the message **%%This branch has conflicts that must be resolved%%**. That means the repo's `master` branch has been updated since the PR code was last updated, in a way that the PR code conflicts with the current `master` branch. Those <trigger trigger="click" for="modal:managePRs-mergeConflics">conflicts must be resolved</trigger>  before the PR can be merged.
  * If the conflicts are simple, GitHub might allow you to resolve them using the Web interface.
  * If that option is not available, post a message in the PR requesting the PR author to update the PR.

<modal large header="Tools → Git & GitHub → Merge Conflicts" id="modal:managePRs-mergeConflics">
  <include src="../mergeConflicts/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

**3. Merge the PR** by clicking on the {{ button_green("Merge pull request :octicon-triangle-down:") }} button, followed by the `Confirm merge` button. You should see a `Pull request successfully merged and closed` message after the PR is merged.<br>

* You can choose between three merging options by clicking on the down-arrow in the {{ button_green("Merge pull request :octicon-triangle-down:") }} button. If you are new to Git and GitHub, the `Create merge commit` options are recommended.

**Next, sync your local repos (and forks).** Merging a PR simply merges the code in the upstream remote repository in which it was merged. The PR author (and other members of the repo) needs to pull the merged code from the upstream repo to their local repos and push the new code to their respective forks to sync the fork with the upstream repo.

</div>

<div id="extras">
</div>
