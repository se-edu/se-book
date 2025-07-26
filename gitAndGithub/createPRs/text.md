<span id="title">Creating PRs</span>

<span id="outcomes">{{ icon_outcome }} Can create PRs on GitHub</span>

{% macro dropdown(text) %}<span class="btn btn-light border">{{ text }} :octicon-triangle-down:</span>{% endmacro %}
{% macro button_green(text) %}<span class="btn btn-success ps-1 pe-1 pb-0 pt-0">{{ text }}</span>{% endmacro %}
{% macro button_light(text) %}<span class="btn btn-light ps-1 pe-1 pb-0 pt-0 border">{{ text }}</span>{% endmacro %}

<div id="body">

**A ==_pull request_== (PR for short) is a mechanism for contributing code to a remote repo** i.e., "I'm _requesting_ you to _pull_ my proposed changes to your repo". It's feature provided by RCS platforms such as GitHub. For this to work, the two repos must have a shared history. The most common case is sending PRs from a fork to its <tooltip content="_upstream_ repo is a repo you forked from">upstream</tooltip> repo.

Suppose you want to propose some changes to a GitHub repo (e.g., [samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice)) as a pull request (PR).

<box type="tip" seamless>

[samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice) is an unmonitored repo you can use to practice working with PRs. Feel free to send PRs to it.
</box>

Given below is a scenario you can try in order to learn how to create PRs:

**1. Fork** the repo onto your GitHub account.

**2. Clone** it onto your computer.

**3. Commit** your changes e.g., add a new file with some contents and commit it.
* **Option A - Commit changes to the `master` branch**
* **Option B - Commit to a new branch** e.g., create a branch named `add-intro` (remember to switch to the `master` branch before creating a new branch) and add your commit to it.

**4. Push** the branch you updated (i.e., `master` branch or the new branch) to your fork, as explained <trigger trigger="click" for="modal:createPr-pushBranch">here</trigger>.

<modal large header="Git & GitHub → Remote Branches →" id="modal:createPr-pushBranch">
  <include src="../remoteBranches/text.md#body"/>
</modal>

**5. Initiate the PR creation:**

1. Go to your fork.
1. Click on the <span class="tab">%%:octicon-git-pull-request:%% Pull requests</span> tab followed by the {{ button_green("New pull request") }} **button**. This will bring you to the `Compare changes` page.
1. Set the appropriate target repo and the branch that should receive your PR, using the `base repository` and `base` dropdowns. e.g.,<br>
   {{ dropdown("base repository: **se-edu/samplerepo-pr-practice**") }} {{ dropdown("base: **master**") }}<br>

   <box type="info" seamless>

   Normally, the default value shown in the dropdown is what you want but in case your fork has <popover content="e.g., the repo you forked from is also a fork of a another repo, which means both of those are considered upstream repos of your fork">multiple upstream repos</popover>, the default may not be what you want.

   </box>
1. Indicate which repo:branch contains your proposed code, using the `head repository` and `compare` dropdowns. e.g.,<br>
  {{ dropdown("head repository: **myrepo/samplerepo-pr-practice**") }} {{ dropdown("compare: **master**") }}<br>

**6. Verify the proposed code**: Verify that the diff view in the page shows the exact change you intend to propose. If it doesn't, <tooltip content="commit the new code and push to the branch">update the branch</tooltip> as necessary.

**7. Submit the PR:**

<span id="submit-the-pr">

1. Click the {{ button_green("Create pull request") }} button.

1. Fill in the PR name and description e.g.,<br>
   Name: `Add an introduction to the README.md`<br>
   Description:
   ```{.no-line-numbers}
   Add some paragraph to the README.md to explain ...
   Also add a heading ...
   ```
1. If you want to indicate that the PR you are about to create is 'still work in progress, not yet ready', click on the dropdown arrow in the {{ button_green(" Create pull request :octicon-triangle-down:") }} button and choose `Create draft pull request` option.
1. Click the {{ button_green(" Create pull request :octicon-triangle-down:") }} button to create the PR.<br>
1. Go to the receiving repo to verify that your PR appears there in the `Pull requests` tab.
</span>


**The next step of the PR lifecycle is the PR _review_.** The members of the repo that received your PR can now review your proposed changes.
* If they like the changes, they can _merge_ the changes to their repo, which also closes the PR automatically.
* If they don't like it at all, they can simply close the PR too i.e., they reject your proposed change.
* In most cases, they will add comments to the PR to suggest further changes. When that happens, GitHub will notify you.

**You can update the PR along the way too.** Suppose PR reviewers suggested a certain improvement to your proposed code. To update your PR as per the suggestion, you can simply modify the code in your local repo, commit the updated code to the same branch as before, and push to your fork as you did earlier. The PR will auto-update accordingly.

**Sending PRs using the `master` branch is less common** than sending PRs using separate branches. For example, suppose you wanted to propose two bug fixes that are not related to each other. In that case, it is more appropriate to send two separate PRs so that each fix can be reviewed, refined, and merged independently. But if you send PRs using the `master` branch only, both fixes (and any other change you do in the `master` branch) will appear in the PRs you create from it.

**To create another PR** while the current PR is still under review, create a new branch (remember to ==switch back to the `master` branch first==), add your new proposed change in that branch, and create a new PR following the steps given above.

**It is possible to create PRs within the same repo** e.g., you can create a PR from branch `feature-x` to the `master` branch, within the same repo. Doing so will allow the code to be reviewed by other developers (using PR review mechanism) before it is merged.

**Problem: merge conflicts** in ongoing PRs, indicated by the message **%%This branch has conflicts that must be resolved%%**. That means the upstream repo's `master` branch has been updated in a way that the PR code conflicts with that `master` branch. Here is the standard way to fix this problem:
1. Pull the `master` branch from the upstream repo to your local repo.
   ```{.no-line-numbers}
   git checkout master
   git pull upstream master
   ```
1. In the local repo, attempt to merge the `master` branch (that you updated in the previous step) onto the PR branch, in order to bring over the new code in the `master` branch to your PR branch.
   ```{.no-line-numbers}
   git checkout pr-branch  # assuming pr-branch is the name of branch in the PR
   git merge master
   ```
1. The merge you are attempting will run into a merge conflict, due to the aforementioned conflicting code in the `master` branch.
   Resolve the conflict manually (this topic is covered <trigger trigger="click" for="modal:createPr-mergeConflicts">elsewhere</trigger>), and complete the merge.
1. Push the PR branch to your fork. As the updated code in that branch no longer is conflicting with the `master` branch, the merge conflict alert in the PR will go away automatically.

<modal large header="Git & GitHub → Dealing with merge conflicts →" id="modal:createPr-mergeConflicts">
<include src="../mergeConflicts/text.md"/>
</modal>

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
