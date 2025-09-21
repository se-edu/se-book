{% from "common/macros.njk" import trail, bold_number, button_green, button_light, callout, dropdown, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can follow Forking Workflow</span>
<span id="title">Forking Workflow</span>

<div id="body">

<pic src="{{baseUrl}}/gitAndGithub/forkingWorkflow/images/diagram.png" height="330" />
<p/>

**In the {{ show_git_term("forking workflow") }}, the official code lives in a designated 'main' repo, while each developer works in their _own fork_ (hence, the name) and submits pull requests from _separate branches_ back to the main repo.**

To illustrate how the workflow goes, let’s assume Jean wants to fix a bug in the code. Here are the steps:

* Jean creates a separate branch in her local repo and fixes the bug in that branch.<br>
   {{ icon_important_big_red }} Common mistake: Doing the proposed changes in the `master` branch -- if Jean does that, she will not be able to have more than one PR open at any time because any changes to the `master` branch will be reflected in all open PRs.{{  numbers_abcd }}
* Jean pushes the branch to her fork.
* Jean creates a pull request from that branch in her fork to the main repo.
* Other members review Jean’s pull request.
* If reviewers suggested any changes, Jean updates the PR accordingly.
* When reviewers are satisfied with the PR, one of the members (usually the team lead or a designated 'maintainer' of the main repo) merges the PR, which brings Jean’s code to the main repo.
* Other members, realizing there is new code in the upstream repo, sync their forks with the new upstream repo (i.e., the main repo). This is done by pulling the new code to their own local repo and pushing the updated code to their own fork. If there are unmerged branches in the local repo, they can be updated too e.g., by merging the new `master` branch to each of them.<br>
   {{ icon_important_big_red }} Possible mistake: Creating another 'reverse' PR from the team repo to the team member's fork to sync the member's fork with the merged code. PRs are meant to go from downstream repos to upstream repos, not in the other direction.

**One main benefit of this workflow is that it does not require most contributors to have write permissions to the main repository.** Only those who are merging PRs need write permissions.
The main drawback of this workflow is the extra overhead of sending everything through forks.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Practice the forking workflow")  %}

{{ icon_info }} This practical is best done as a team.

{{ hp_number("Preparation") }} **One member: set up the team org and the team repo.**
* [**Create a GitHub organization**](https://help.github.com/articles/creating-a-new-organization-from-scratch/) for your team, if you don't have one already.  The org name is up to you. We'll refer to this organization as _team org_ from now on.{texts="['0.1)', '0.2)', '0.3)', '0.4)', '0.5)']"}

* [**Add a team**](https://help.github.com/enterprise/2.10/admin/guides/user-management/creating-teams/) called `developers` to your team org.

* [**Add team members**](https://help.github.com/enterprise/2.0/admin/guides/user-management/adding-or-inviting-people-to-teams/) to the `developers` team.

* **Fork** [se-edu/samplerepo-workflow-practice](https://github.com/se-edu/samplerepo-workflow-practice) to your team org. We'll refer to this as the _team repo_.

* **[Add the forked repo](https://help.github.com/articles/managing-team-access-to-an-organization-repository/) to the `developers` team.** Give write access.


{{ hp_number("1") }} **Each team member: create PRs via own fork.**

* **Fork that repo** from your team org to your own GitHub account.{texts="['1.1)', '1.2)', '1.3)', '1.4)', '1.5)']"}

* **Create a branch** named `add-{your name}-info` (e.g. `add-johnTan-info`) in the local repo.

* **Add a file** `yourName.md` into the `members` directory (e.g., `members/johnTan.md`) containing some info about you into that branch.

* **Push that branch to your fork**.

* **Create a PR** from that branch to the `master` branch of the team repo.


{{ hp_number("2") }} **For each PR: review, update, and merge.**

* **[A team member (not the PR author)] Review the PR** by adding comments (can be just dummy comments).{texts="['2.1)', '2.2)', '2.3)', '2.4)', '2.5)']"}

* **[PR author] Update the PR** by pushing more commits to it, to simulate updating the PR based on review comments.

* **[Another team member] Approve and merge** the PR using the GitHub interface.

* **[All members]** [**Sync your local repo (and your fork)** with upstream repo](https://help.github.com/articles/syncing-a-fork/). In this case, your _upstream repo_ is the repo in your team org.
   * The basic mechanism for this has two steps (which you can do using Git CLI or any Git GUI):<br>
     (1) First, pull from the upstream repo -- this will update your clone with the latest code from the upstream repo.<br>
     If there are any unmerged branches in your local repo, you can update them too e.g., you can merge the new `master` branch to each of them.<br>
     (2) Then, push the updated branches to your fork. This will also update any PRs from your fork to the upstream repo.
   * Some alternatives mechanisms to achieve the same can be found in [this GitHub help page](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).<br>
     If you are new to Git, we recommend that you use the above two-step mechanism instead, so that you get a better view of what's actually happening behind the scene.


{{ hp_number("3") }} **Create conflicting PRs.**

* **[One member]: Update README:** In the `master` branch, remove John Doe and Jane Doe from the `README.md`, commit, and push to the main repo.{texts="['3.1)', '3.2)', '3.3)', '3.4)', '3.5)']"}

* **[Each team member] Create a PR** to add yourself under the `Team Members` section in the `README.md`. Use a new branch for the PR e.g., `add-johnTan-name`.

{{ hp_number("4") }} **Merge conflicting PRs** one at a time. Before merging a PR, you’ll have to resolve conflicts.

* [Optional] A member can inform the PR author (by posting a comment) that there is a conflict in the PR.{texts="['4.1)', '4.2)', '4.3)', '4.4)', '4.5)']"}

* **[PR author] Resolve the conflict locally**:
   1. Pull the `master` branch from the repo in your team org.
   1. Merge the pulled `master` branch to your PR branch.
   1. Resolve the merge conflict that crops up during the merge.
   1. Push the updated PR branch to your fork.

* **[Another member or the PR author]: Merge the de-conflicted PR**: When GitHub does not indicate a conflict anymore, you can go ahead and merge the PR.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>

<div id="extras">

<include src="resourcesPanel.md" boilerplate/>

</div>
