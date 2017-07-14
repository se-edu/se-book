<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Revision Control :arrow_right: </div>

<div id="title">

#### Forking Flow :three:

</div>

<div id="body">

<img src="{{baseUrl}}/revisionControl/forkingWorkflow/images/diagram.png" height="330" />
<p/>

The ‘official’ version of the software is kept in a remote repo designated as the ‘main repo’. All team members fork the main repo and clone it to their local computer.

To illustrate how the workflow goes, let’s assume Jean wants to fix a bug in the code. Here are the steps:

1. Jean creates a separate branch in her local repo and fix the bug in that branch.
2. Jean pushes the branch to her fork.
3. Jean creates a pull request from that branch in her fork to the main repo.
4. Other members review Jean’s pull request.
5. If reviewers suggested any changes, Jean updates the PR accordingly.
6. When reviewers are satisfied with the PR, one of the members (usually the team lead or a designated ‘maintainer’ of the main repo) merge the PR, which brings Jean’s code to the main repo.
7. Other members, realizing there is new code in the upstream repo, syncs their forks with the new upstream repo (i.e. the main repo). This is done by pulling the new code to their own local repo and pushing the updated code to their own fork.
8. Ravi clones Adam’s remote repo to his computer. As a result, Ravi now has a local repo with Adam’s code in it.

</div>

</div>
