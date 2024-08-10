{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can work with remote branches</span>

<span id="title">Working with remote branches</span>

<div id="body">

**Git branches in a local repo can be _linked_ to a branch in a remote repo** so the local branch can 'track' the corresponding remote branch, and revision history contained in the local and the remote branch pair can be synchronized as desired.

<div id="pushing-a-new-branch">

****[A] Pushing a new branch to a remote repo****

Let's see how you can push a branch that you created in your local repo to the remote repo. Note that this branch does not exist in the remote repo yet.

Given below is how to push a branch named `add-intro` to your own fork named `samplerepo-pr-practice`.

We assume that your local repo already has the remote added to it with the name `origin`. If that is not the case, you should first <trigger trigger="click" for="modal:remoteRepos-addRemoteForNormalPushing">configure your local repo to be able to communicate with the target remote repo</trigger>.

<modal large header="Git & GitHub → Pull →" id="modal:remoteRepos-addRemoteForNormalPushing">
  <include src="../pull/text.md#section-working-with-multiple-remotes"/>
</modal>

{{ show_git_tabs('_1') }}

</div>
<div id="pulling-a-new-branch">

****[B] Pulling a remote branch for the first time****

Here, let's see how to fetch a new branch (i.e., it does not exist in your local repo yet) from a remote repo.

{{ show_git_tabs('_2') }}
</div>
<div id="syncing-branches">

****[C] Syncing branches****

In this section we assume that you have a local branch that is already tracking a remote branch (e.g., as a result of doing [A] or [B] above).

**[C1] To push new changes in the local branch to the corresponding remote branch:**

{{ show_git_tabs('_3') }}

<box type="info" seamless>

**If you push but the remote branch has new commits that you don't have locally**, Git will abort the push and will ask you to pull first.
</box>

**[C2] To pull new changes from a remote branch to the corresponding local branch:**

{{ show_git_tabs('_4') }}

<box type="info" seamless>

**If you pull but your local branch has new commits the remote branch doesn't have**, Git will automatically perform a merge between the local branch and the remote branch.
</box>
<div>
</div>
<div id="extras">
</div>
