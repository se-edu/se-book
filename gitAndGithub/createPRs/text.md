<div id="title">

#### Create PRs

</div>

<span id="prereqs"><panel src="../branch/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Branching%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can create PRs on GitHub</span>

<div id="body">

**1. Fork the [samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice) onto your GitHub account. Clone it onto your computer.**

**2. Create a branch named `add-intro` in your clone. Add a couple of commits** which adds/modifies an _Introduction_ section to the `README.md`. Example:

```md

# Introduction
Creating Pull Requsts (PRs) is needed when using RCS in a multi-person projects.
This repo can be used to practice creating PRs.

```

**3. Push the `add-intro` branch to your fork.**

<tabs>
  <tab header="SourceTree">
  
<img src="{{baseUrl}}/gitAndGithub/createPRs/images/pushBranchToFork.png" height="300" />
<p/>
    
  <hr></tab>
  <tab header="CLI">
  
```
git push origin add-intro
```
    
  <hr></tab>
</tabs>

**4. Create a Pull Request from the `add-intro` branch in your fork to the `master` branch of the same fork** (i.e. `your-user-name/samplerepo-pr-practice`, not `se-edu/samplerepo-pr-practice`), as described below.

4a. Go to the GitHub page of your fork (i.e. `https://github.com/{your_username}/samplerepo-pr-practice`), click on the `Pull Requests` tab, and then click on `New Pull Request` button.

<img src="{{baseUrl}}/gitAndGithub/createPRs/images/createPrButton.png" width="800" />
<p/>

4b. Select `base fork` and `head fork` as follows:

* `base fork`: your own fork (i.e. `{your user name}/samplerepo-pr-practice`, ==NOT `se-edu/samplerepo-pr-practice`==)
* `head fork`: your own fork.

<img src="{{baseUrl}}/gitAndGithub/createPRs/images/selectBase.png" width="800" />
<p/>

<tip-box type="info"> 

The _base fork_ is where changes should be applied. The _head fork_ contains the changes you would like to be applied.  

</tip-box>

4c. (1) Set the base branch to `master` and head branch to `add-intro`, (2) confirm the _diff_ contains the changes you propose to merge in this PR %%(i.e. confirm that you did not accidentally include extra commits in the branch)%%, and (3) click the `Create pull request` button.

<img src="{{baseUrl}}/gitAndGithub/createPRs/images/checkDiff.png" width="800" />
<p/>


4d. (1) Set PR name, (2) set PR description, and (3) Click the `Create pull request` button.

<img src="{{baseUrl}}/gitAndGithub/createPRs/images/setPrName.png" width="600" />
<p/>

<tip-box type="important"> 

A common newbie mistake when creating branch-based PRs is to mix commits of one PR with another. To learn how to avoid that mistake, you are encouraged to continue and create another PR as explained below.
  
</tip-box>

**5. In your local repo, create a new branch `add-summary`** off the `master` branch. 

<tip-box type="warning"> 

When creating the new branch, it is very important that you switch back to the `master` branch first. If not, the new branch will be created off the current branch `add-intro`. And that is how you end up having commits of the first PR in the second PR as well.

</tip-box>

**6. Add a commit in the `add-summary` branch** that adds a _Summary_ section to the `README.md`, in exactly the same place you added the _Introduction_ section earlier. 

<img src="{{baseUrl}}/gitAndGithub/createPRs/images/addSummaryBranch.png" width="400" />
<p/>

**7. Push the `add-summary` to your fork and create a new PR** similar to before.

<panel header="{{ icon_resource }} Resources" expanded>

* [GitHub's own documentation on creating a PR](https://help.github.com/articles/creating-a-pull-request/)

</panel>

</div>

<div id="extras">
</div>