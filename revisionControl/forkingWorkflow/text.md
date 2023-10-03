<span id="title">Forking flow</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain forking workflow</span>

<div id="body">

<pic eager src="{{baseUrl}}/revisionControl/forkingWorkflow/images/diagram.png" height="330" />
<p/>

**In the _forking workflow_, the 'official' version of the software is kept in a remote repo designated as the 'main repo'. All team members fork the main repo and create pull requests from their fork to the main repo.**

To illustrate how the workflow goes, let’s assume Jean wants to fix a bug in the code. Here are the steps:

1. Jean creates a separate branch in her local repo and fixes the bug in that branch.<br>
   {{ icon_important_big_red }} Common mistake: Doing the proposed changes in the `master` branch -- if Jean does that, she will not be able to have more than one PR open at any time because any changes to the `master` branch will be reflected in all open PRs.
2. Jean pushes the branch to her fork.
3. Jean creates a pull request from that branch in her fork to the main repo.
4. Other members review Jean’s pull request.
5. If reviewers suggested any changes, Jean updates the PR accordingly.
6. When reviewers are satisfied with the PR, one of the members (usually the team lead or a designated 'maintainer' of the main repo) merges the PR, which brings Jean’s code to the main repo.
7. Other members, realizing there is new code in the upstream repo, sync their forks with the new upstream repo (i.e. the main repo). This is done by pulling the new code to their own local repo and pushing the updated code to their own fork. If there are unmerged branches in the local repo, they can be updated too e.g., by merging the new `master` branch to each of them.<br>
   {{ icon_important_big_red }} Possible mistake: Creating another 'reverse' PR from the team repo to the team member's fork to sync the member's fork with the merged code. PRs are meant to go from downstream repos to upstream repos, not in the other direction.

One main benefit of this workflow is that it does not require most contributors to have write permissions to the main repository. Only those who are merging PRs need write permissions.
The main drawback of this workflow is the extra overhead of sending everything through forks.

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
