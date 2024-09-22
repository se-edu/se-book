<span id="prereqs"><panel src="../../revisionControl/forkingWorkflow/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Revision Control → Forking Workflow%%" popup-url="{{ baseUrl }}/revisionControl/forkingWorkflow" /></span>

<span id="outcomes">{{ icon_outcome }} Can follow Forking Workflow</span>

<span id="title">Forking workflow</span>

<div id="body">

You can follow the steps in the simulation of a forking workflow given below to learn how to follow such a workflow.

{{ icon_info }} This activity is best done as a team.

**Step 1. One member: set up the team org and the team repo.**
* [**Create a GitHub organization**](https://help.github.com/articles/creating-a-new-organization-from-scratch/) for your team, if you don't have one already.  The org name is up to you. We'll refer to this organization as _team org_ from now on.{texts="['1.1)', '1.2)', '1.3)', '1.4)', '1.5)']"}

* [**Add a team**](https://help.github.com/enterprise/2.10/admin/guides/user-management/creating-teams/) called `developers` to your team org.

* [**Add team members**](https://help.github.com/enterprise/2.0/admin/guides/user-management/adding-or-inviting-people-to-teams/) to the `developers` team.

* **Fork** [se-edu/samplerepo-workflow-practice](https://github.com/se-edu/samplerepo-workflow-practice) to your team org. We'll refer to this as the _team repo_.

* **[Add the forked repo](https://help.github.com/articles/managing-team-access-to-an-organization-repository/) to the `developers` team.** Give write access.


**Step 2. Each team member: create PRs via own fork.**

* **Fork that repo** from your team org to your own GitHub account.{texts="['2.1)', '2.2)', '2.3)', '2.4)', '2.5)']"}

* **Create a branch** named `add-{your name}-info` (e.g. `add-johnTan-info`) in the local repo.

* **Add a file** `yourName.md` into the `members` directory (e.g., `members/johnTan.md`) containing some info about you into that branch.

* **Push that branch to your fork**.

* **Create a PR** from that branch to the `master` branch of the team repo.


**Step 3. For each PR: review, update, and merge.**

* **[A team member (not the PR author)] Review the PR** by adding comments (can be just dummy comments).{texts="['3.1)', '3.2)', '3.3)', '3.4)', '3.5)']"}

* **[PR author] Update the PR** by pushing more commits to it, to simulate updating the PR based on review comments.

* **[Another team member] Approve and merge** the PR using the GitHub interface.

* **[All members]** [**Sync your local repo (and your fork)** with upstream repo](https://help.github.com/articles/syncing-a-fork/). In this case, your _upstream repo_ is the repo in your team org.
   * The basic mechanism for this has two steps (which you can do using Git CLI or any Git GUI):<br>
     (1) First, pull from the upstream repo -- this will update your clone with the latest code from the upstream repo.<br>
     If there are any unmerged branches in your local repo, you can update them too e.g., you can merge the new `master` branch to each of them.<br>
     (2) Then, push the updated branches to your fork. This will also update any PRs from your fork to the upstream repo.
   * Some alternatives mechanisms to achieve the same can be found in [this GitHub help page](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).<br>
     If you are new to Git, we recommend that you use the above two-step mechanism instead, so that you get a better view of what's actually happening behind the scene.


**Step 4. Create conflicting PRs.**

* **[One member]: Update README:** In the `master` branch, remove John Doe and Jane Doe from the `README.md`, commit, and push to the main repo.{texts="['4.1)', '4.2)', '4.3)', '4.4)', '4.5)']"}

* **[Each team member] Create a PR** to add yourself under the `Team Members` section in the `README.md`. Use a new branch for the PR e.g., `add-johnTan-name`.

**Step 5. Merge conflicting PRs** one at a time. Before merging a PR, you’ll have to resolve conflicts.

* [Optional] A member can inform the PR author (by posting a comment) that there is a conflict in the PR.{texts="['5.1)', '5.2)', '5.3)', '5.4)', '5.5)']"}

* **[PR author] Resolve the conflict locally**:
   1. Pull the `master` branch from the repo in your team org.
   1. Merge the pulled `master` branch to your PR branch.
   1. Resolve the merge conflict that crops up during the merge.
   1. Push the updated PR branch to your fork.

* **[Another member or the PR author]: Merge the de-conflicted PR**: When GitHub does not indicate a conflict anymore, you can go ahead and merge the PR.

</div>

<div id="extras">
</div>
