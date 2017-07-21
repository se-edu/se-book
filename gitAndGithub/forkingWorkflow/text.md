<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github :arrow_right: </div>

<div id="title">

#### Forking Workflow :four:

</div>

<div id="body">

<dynamic-panel src="../../revisionControl/forkingWorkflow/embed.md" header="Revision Control: Forking Workflow" is-open></dynamic-panel>
<p/>

1. Create a GitHub organization for your team.
2. One member: create a repo in the org and put some files in it.
3. All team members fork the repo.
4. All create PRs but ensure each person changes a different file (to avoid conflicts).
5. Review and merge PRs. i.e. for each PR
  * A team member (not the PR author): Review the PR by adding comments (can be just dummy comments).
  * PR author: Update the PR by pushing more commits to it, to simulate updating the PR based on review comments.
  * Maintainer: Merge the PR using the GitHub interface.
  * All: Sync fork with upstream changes.
6. Create conflicting PRs.
  * All: Create PRs modifying the same part of the same file.
  * Maintainer: in the master branch, create a commit that modifies the same part of the same file. Push to the main repo.
7. Merge PRs one at a time. Before merging a PR, PR you’ll have to resolve conflicts. Steps:
  * Maintainer: informs the PR author (by posting a comment) that there is a conflict in the PR.
  * PR author: Pull the `master` branch. Merge `master` to your PR branch. Resolve the merge conflict that corps up during the merge.

</div>

<div id="extras">
<div>

</div>
