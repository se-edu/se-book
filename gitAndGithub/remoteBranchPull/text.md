{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can pull branches from a remote repo to a local repo.</span>
<span id="title">{{ trail.remoteBranches.lessons.remoteBranchPull.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Branches in a remote can be replicated in the local repo**, and maintained in sync with each other.
{% endcall %}

Sometimes we need to create a local copy of a branch from a remote repository, make further changes to it, and keep it synchronised with the remote branch. Let's explore how to handle this in a few common use cases:

****Use case 1:**** **Working with branches that already existed in the remote repo when you cloned it to your computer.**
<div class="indented-level1">

**When you clone a repository,**

1. **Git checks out the default branch.** You can start working on this branch immediately. This branch is tracking the default branch in the remote, which means you can easily synchronise changes in this branch with the remote by pulling and pushing.
1. **Git also _fetches_ all the other branches from the remote.** These other branches are not immediately available as local branches, but they are visible as remote-tracking branches.<br>
   **You can think of remote-tracking branches as read-only references** to the state of those branches in the remote repository at the time of cloning. They allow you to see what work has been done on those branches without yet making local copies of them.<br>
   **To work on one of these branches, you can create a new local branch based on the remote-tracking branch.** Once you do this, your local branch will usually be configured to track the corresponding branch on the remote, so you can easily synchronise your work later.

</div>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Work with a branch that existed in the remote")  %}

{{ hp_number(hop_preparation) }} **Use the same [samplerepo-company](https://github.com/se-edu/samplerepo-company) repo** you used in {{ show_lesson_link(trail.remoteBranches.lessons.remoteBranchPush) }}. Fork and clone it if you haven't done that already.

{{ hp_number("1") }} **Verify that the remote-tracking branch `origin/track-sales` exists in the local repo, but there is no local copy of it.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the `git branch -a` command to list all local and tracking branches.

```bash{.no-line-numbers}
git branch -a
```
{% call show_output() %}
```bash{.no-line-numbers}
* hiring
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/hiring
  remotes/origin/master
  remotes/origin/track-sales
```
<box type="tip" seamless>

The `*` in the output above indicates the currently active branch.
</box>

Note how there is no `track-sales` in the list of branches (i.e., no local branch named `track-sales`), but there is a `remotes/origin/track-sales` (i.e., the remote-tracking branch)
{% endcall %}

{% endset %}
{% set sourcetree %}
Observe how the branch `track-sales` appear under `REMOTES` → `origin` but not under `BRANCHES`.

<pic src="images/sourcetreeCheckRemoteTrackingBranch.png" width="200" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number("2") }} **Create a local copy of the remote branch `origin/track-sales`**.

{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the `git switch -c <branch> <remote-branch>` command for this e.g.,

```bash{.no-line-numbers}
git switch -c track-sales origin/track-sales
```
{% endset %}
{% set sourcetree %}
Locate the `track-sales` remote-tracking branch (look under `REMOTES` → `origin`), right-click, and choose `Checkout...`.<br>
<pic src="images/sourcetreeRightClickToCheckout.png" width="500" />

In the next dialog, choose as follows:<br>
<pic src="images/sourcetreeBranchCheckoutDialog.png" width="500" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

The above command/action does several things:
1. Creates a new branch `track-sales`.
1. Sets the new branch to track the remote branch `origin/track-sales`, which means the local branch ref `track-sales` will also move to where the `origin/track-sales` is.
1. Switch to the newly-created branch i.e., makes it the current branch.
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number("3") }} **Add a commit to the `track-sales` branch and push to the remote**, to verify that the local branch is tracking the remote branch.

<box type="tip" seamless>

Commands to perform this step in one shot:

```bash
echo "5 reams of paper" >> sales.txt
git commit -am "Update sales.txt"
git push origin track-sales
```

</box>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


****Use case 2:**** **Working with branches that were added to the remote repository after you cloned it** %%e.g., a branch someone else pushed to the remote after you cloned%%.

<div class="indented-level1">

**Simply fetch to update your local repository with information about the new branch.** After that, you can create a local copy of it and work with it just as you did in Use Case 1.

<box type="tip" seamless>

Fetching was covered in {{ show_lesson_link(trail.workingWithRemotes.lessons.pull) }}.
</box>
</div>


</div>

<div id="extras">
</div>
