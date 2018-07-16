<span id="prereqs"><panel src="../../revisionControl/forkingWorkflow/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Revision Control → Forking Workflow%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can follow Forking Workflow</span>

<div id="title">

#### Forking Workflow

</div>

<div id="body">

{{ icon_info }} This activity is best done as a team. If you are learning this alone, you can simulate a team by using two different browsers to log into GitHub using two different accounts.   

1. **One member: set up the team org and the team repo.**
   * **[Create a GitHub organization](https://help.github.com/articles/creating-a-new-organization-from-scratch/)** for your team. The org name is up to you. We'll refer to this organization as _team org_ from now on. 
   * **[Add a team ](https://help.github.com/enterprise/2.10/admin/guides/user-management/creating-teams/)** called `developers` to your team org. 
   * **[Add your team members](https://help.github.com/enterprise/2.0/admin/guides/user-management/adding-or-inviting-people-to-teams/)** to the `developers` team.
   * **Fork [se-edu/samplerepo-workflow-practice](https://github.com/se-edu/samplerepo-workflow-practice) to your team org**. We'll refer to this as the _team repo_.
   * **[Add the forked repo](https://help.github.com/articles/managing-team-access-to-an-organization-repository/) to the `developers` team.** Give write access.
   
2. **Each team member: create PRs via own fork** 
   * **Fork that repo** from your team org to your own GitHub account.
   * **Create a PR** to add a file `yourName.md` %%&nbsp;(e.g. `jonhDoe.md`)&nbsp;%% containing a brief resume of yourself %%&nbsp;(branch → commit → push → create PR)%%
   
3. **For each PR: review, update, and merge.** 
   * A team member (not the PR author): Review the PR by adding comments (can be just dummy comments).
   * PR author: Update the PR by pushing more commits to it, to simulate updating the PR based on review comments.
   * Another team member: Merge the PR using the GitHub interface.
   * All members: [Sync your local repo (and your fork) with upstream repo](https://help.github.com/articles/syncing-a-fork/). In this case, your _upstream repo_ is the repo in your team org.
   
4. **Create conflicting PRs.**
   * Each team member: Create a PR to add yourself under the `Team Members` section in the `README.md`.
   * One member: in the `master` branch, remove John Doe and Jane Doe from the `README.md`, commit, and push to the main repo.
   
5. **Merge conflicting PRs one at a time.** Before merging a PR, you’ll have to resolve conflicts. Steps:
   * [Optional] A member can inform the PR author (by posting a comment) that there is a conflict in the PR.
   * PR author: Pull the `master` branch from the repo in your team org. Merge the pulled `master` branch to your PR branch. Resolve the merge conflict that crops up during the merge. Push the updated PR branch to your fork.
   * Another member or the PR author: When GitHub does not indicate a conflict anymore, you can go ahead and merge the PR.

</div>

<div id="extras">
</div>