<span id="title">`branch`: Doing multiple parallel changes</span>

<span id="outcomes">{{ icon_outcome }} Can use Git branching</span>

<div id="body">

**Git supports branching**, which allows you to do multiple parallel changes to the content of a repository.

**A Git branch is simply a _named label_ pointing to a commit. The `HEAD` label indicates which branch you are on.** Git creates a branch named `master` by default. When you add a commit, it goes into the branch you are currently on, and the branch label (together with the `HEAD` label) moves to the new commit.

Given below is an illustration of how branch labels move as branches evolve.

<pic src="images/branchesAsLabels1.png" width="650"/>

1. There is only one branch (i.e., `master`) and there is only one commit on it.
1. A new commit has been added. The `master` and the `HEAD` labels have moved to the new commit.
1. A new branch `fix1` has been added. The repo has switched to the new branch too (hence, the `HEAD` label is attached to the `fix1` branch).
1. A new commit (`c`) has been added. The current branch label `fix1` moves to the new commit, together with the `HEAD` label.
1. The repo has switched back to the `master` branch.

<pic src="images/branchesAsLabels2.png" width="600"/>

6. A new commit (`d`) has been added. The `master` label has moved to that commit.
1. The repo has switched back to the `fix1` branch and added a new commit (`e`) to it.
1. The repo has switched to the `master` branch and the `fix1` branch has been merged into the `master` branch, creating a _merge commit_ `f`. The repo is currently on the `master` branch.



Follow the steps below to learn how to work with branches. You can use any repo you have on your computer (e.g. a clone of the [samplerepo-things](https://github.com/se-edu/samplerepo-things)) for this.

**0. Observe that you are normally in the branch called `master`.**

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_0.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_0.md" />
  </tab>
</tabs>

**1. Start a branch named `feature1` and switch to the new branch.**

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  </tab>
</tabs>

**2. Create some commits in the new branch.** %%Just commit as per normal. Commits you add while on a certain branch will become part of that branch.%%<br>
Note how the `master` label and the `HEAD` label moves to the new commit (The `HEAD` label of the local repo is represented as :fas-dot-circle: in SourceTree).

**3. Switch to the `master` branch.** Note how the changes you did in the `feature1` branch are no longer in the working directory.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  </tab>
</tabs>

**4. Add a commit to the master branch.** Let’s imagine it’s a bug fix.<br>
To keep things simple for the time being, this commit should ==not involve the same content that you changed in the `feature1` branch==. To be on the safe side, this commit can change an entirely different file.

<pic src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_4.png" height="100" />
<p/>

**5. Switch back to the `feature1` branch** %%(similar to step 3)%%.

**6. Merge the `master` branch to the `feature1` branch**, giving an end-result like the following. Also note how Git has created a _merge commit_.

<pic src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" />
<p/>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_3.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_3.md" />
  </tab>
</tabs>

The objective of that merge was to _sync_ the `feature1` branch with the `master` branch. Observe how the changes you did in the `master` branch (i.e. the imaginary bug fix) is now available even when you are in the `feature1` branch.

<box type="info" seamless>

Instead of merging `master` to `feature1`, an alternative is to [_rebase_](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) the `feature1` branch. However, rebasing is an advanced feature that requires modifying past commits. If you modify past commits that have been pushed to a remote repository, you'll have to [_force-push_](https://www.datree.io/resources/git-push-force) the modified commit to the remote repo in order to update the commits in it.
</box>

**7. Add another commit to the `feature1` branch.**

**8. Switch to the `master` branch and add one more commit.**

**9. Merge `feature1` to the master branch**, giving and end-result like this:

<pic src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_6.png" height="150" />
<p/>

<tabs>
  <tab header="SourceTree">

Right-click on the `feature1` branch and choose `Merge...`.

  </tab>
  <tab header="CLI">

```
git merge feature1
```

  </tab>
</tabs>

**10. Create a new branch called `add-countries`, switch to it, and add some commits to it** %%(similar to steps 1-2 above)%%. You should have something like this now:

<pic src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchBeforeMerging.png" height="80" />
<p/>

<box type="wrong" seamless>

**Avoid this common rookie mistake!**{.text-danger}

==Always remember to switch back to the `master` branch before creating a new branch.== If not, your new branch will be created on top of the current branch.
</box>

**11. Go back to the `master` branch and merge the `add-countries` branch onto the `master` branch** %%(similar to steps 8-9 above)%%. While you might expect to see something like the following,

<pic src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchNoFastForward.png" height="100" />
<p/>

... you are likely to see something like this instead:

<pic src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchAfterMerging.png" height="80" />
<p/>

That is because **Git does a ==_fast forward_ merge== if possible**. Seeing that the `master` branch has not changed since you started the `add-countries` branch, Git has decided it is simpler to just put the commits of the `add-countries` branch in front of the `master` branch, without going into the trouble of creating an extra merge commit.

**It is possible to force Git to create a merge commit even if fast forwarding is possible.**

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_4.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_4.md" />
  </tab>
</tabs>

<box>

<div id="pushing-a-branch">

##### Pushing a branch to a remote repo

Here's how to push a branch to a remote repo:

<tabs>
  <tab header="SourceTree">

Here's how to push a branch named `add-intro` to your own fork of a repo named `samplerepo-pr-practice`:

<pic src="images/pushBranchToFork.png" height="300" />
<p/>

  </tab>
  <tab header="CLI">

Normally: `git push {remote repository} {branch}`. Examples:<br>
* `git push origin master` pushes the `master` branch to the repo named `origin` (i.e., the repo you cloned from)
* `git push upstream-repo add-intro` pushes the `add-intro` branch to the repo named `upstream-repo`

**If pushing a branch you created locally to the remote for the _first time_**, add the `-u` flag to get the local branch to track the new upstream branch:<br/>
e.g., `git push -u origin add-intro`


{{ icon_resource }} See [git-scm.com/docs/git-push](https://git-scm.com/docs/git-push) for details of the `push` command.

  </tab>
</tabs>
<p/>
</div>

</box>

</div>

<div id="extras">
</div>
