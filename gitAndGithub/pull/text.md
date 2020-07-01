<span id="prereqs"><panel src="../clone/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Clone%%" popup-url="{{ baseUrl }}/gitAndGithub/clone" /></span>

<span id="outcomes">{{ icon_outcome }} Can pull changes from a repo</span>

<span id="title">`pull`, `fetch`: Downloading data other repos</span>

<div id="body">

**Git has commands to _sync_ your repo with another repo:** As you know, you can clone a repo to get your own copy of a repository. Let's say some new commits were added to the <tooltip content="_upstream_ repo is a term used to refer to the repo you cloned from">upstream repo</tooltip> after you cloned it and you would like to copy over those new commits to your own clone i.e., sync your clone with the upstream repo. Git has `pull` and `fetch` commands for that.

Let's go through steps of getting commits from another repo to yours.

**1.Clone a repo** (e.g., the repo used in <trigger for="modal:clone-repository" trigger="click">[Git & GitHub → Clone]</trigger>) to be used for this activity.

**2. Delete the last few commits to simulate cloning the repo a few commits ago.**

<modal header="**Clone Repository**" id="modal:clone-repository">
  <include src="../clone/embed.md" boilerplate />
</modal>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  </tab>
</tabs>

Now, your local repo state is exactly how it would be if you had cloned the repo 2 commits ago, as if somebody has added two more commits to the remote repo since you cloned it.

**3. Pull** from the other repo: To get those missing commits to your local repo (i.e. to sync your local repo with upstream repo) you can do a pull.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  </tab>
</tabs>
<p/>

{{ icon_info }} **You can also do a `fetch` instead of a `pull`** in which case the new commits will be downloaded to your repo but the working directory will remain at the current commit. To move the current state to the latest commit that was downloaded, you need to do a `merge`. A `pull` is a shortcut that does both those steps in one go.

<box>

<div id="section-working-with-multiple-remotes">

##### Working with multiple remotes

**When you clone a repo, Git automatically adds a _remote_ repo named `origin`** to your repo configuration. As you know, you can pull commits from that repo.

**A Git repo can work with remote repos other than the one it was cloned from** as long as those repos has a shared history with your repo. For example, let's say a repo `repo1` was cloned as `repo2` which was then cloned as `repo3` Any of these repos can work with the other two because they have a shared history.

**To communicate with another remote repo, you can first add it as a _remote_ of your repo**. Here are the steps:

<tabs>
  <tab header="SourceTree">
<include src="sourcetree_3.md" />
  </tab>
  <tab header="CLI">
<include src="cli_3.md" />
  </tab>
</tabs>

</div>

</box>

</div>
<div id="extras">
</div>
