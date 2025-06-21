{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can pull changes from a repo</span>

<span id="title">`pull`, `fetch`: Downloading data from other repos</span>

<div id="body">

Here's a scenario you can try in order to learn how to <trigger trigger="click" for="modal:githubPull-rcsPulling">pull</trigger> commits from another repo to yours.

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:githubPull-rcsPulling">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-pulling"/>
</modal>

**1. Clone a repo** (e.g., the repo used in <trigger for="modal:clone-repository" trigger="click">[Git & GitHub → Clone]</trigger>) to be used for this activity.

**2. Delete the last few commits to simulate cloning the repo a few commits ago.**

<modal large header="**Clone Repository**" id="modal:clone-repository">
  <include src="../clone/embed.md" boilerplate />
</modal>

{{ show_git_tabs('_1') }}

Now, your local repo state is exactly how it would be if you had cloned the repo 2 commits ago, as if somebody has added two more commits to the remote repo since you cloned it.

**3. Pull** from the remote repo: To get those missing commits to your local repo (i.e. to sync your local repo with upstream repo) you can do a pull.

{{ show_git_tabs('_2') }}
<p/>

{{ icon_info }} **You can also do a `fetch` instead of a `pull`** in which case the new commits will be downloaded to your repo but the working directory will remain at the current commit. To move the current state to the latest commit that was downloaded, you need to do a `merge`. A `pull` is a shortcut that does both those steps in one go.

<box>

<div id="section-working-with-multiple-remotes">

##### Working with multiple remotes

**When you clone a repo, Git automatically adds a _remote_ repo named `origin`** to your repo configuration. As you know, you can pull commits from that repo. Furthermore, <trigger trigger="click" for="modal:gitPull-rcsMultipleRepos">a Git repo can work with remote repos other than the one it was cloned from</trigger>.

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:gitPull-rcsMultipleRepos">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-working-with-multiple-repos"/>
</modal>




</div>

</box>

</div>
<div id="extras">
</div>
