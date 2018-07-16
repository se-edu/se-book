<div id="title">

#### Forking Flow

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain forking workflow</span>

<div id="body">

<img src="{{baseUrl}}/revisionControl/forkingWorkflow/images/diagram.png" height="330" />
<p/>

**In the _forking workflow_, the 'official' version of the software is kept in a remote repo designated as the 'main repo'. All team members fork the main repo create pull requests from their fork to the main repo.**

To illustrate how the workflow goes, let’s assume Jean wants to fix a bug in the code. Here are the steps:

1. Jean creates a separate branch in her local repo and fixes the bug in that branch.
2. Jean pushes the branch to her fork.
3. Jean creates a pull request from that branch in her fork to the main repo.
4. Other members review Jean’s pull request.
5. If reviewers suggested any changes, Jean updates the PR accordingly.
6. When reviewers are satisfied with the PR, one of the members (usually the team lead or a designated 'maintainer' of the main repo) merges the PR, which brings Jean’s code to the main repo.
7. Other members, realizing there is new code in the upstream repo, sync their forks with the new upstream repo (i.e. the main repo). This is done by pulling the new code to their own local repo and pushing the updated code to their own fork.

</div>

<div id="extras">
  <include src="resources.md" />
</div>