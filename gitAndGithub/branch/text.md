{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.branchingLocally.lessons.branch.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

**Git supports branching**, which allows you to do multiple parallel changes to the content of a repository.

First, let us learn how the repo looks like as you perform branching operations.

**A Git branch is simply a _named label_ pointing to a commit** which moves forward automatically as you add more commits to that branch. **The `HEAD` label indicates which branch you are on.**

Git creates a branch named `master` (or `main`) by default. When you add a commit, it goes into the branch you are currently on, and the branch label (together with the `HEAD` label) moves to the new commit.

Given below is an illustration of how branch labels move as branches evolve. Refer to the text below it for explanations of each stage.

<annotate src="{{ baseUrl }}/gitAndGithub/branch/images/branchesAsLabels1.png" height="500">
<a-point x="2%" y="27%" label="[1]" opacity="0"/>
<a-point x="2%" y="47%" label="[2]" opacity="0"/>
<a-point x="35%" y="25%" label="[3]" opacity="0"/>
<a-point x="65%" y="10%" label="[4]" opacity="0"/>
<a-point x="85%" y="10%" label="[5]" opacity="0"/>
</annotate>
<p/>

1. There is only one branch (i.e., `master`) and there is only one commit on it. The `HEAD` label is pointing to the `master` branch (as we are currently on that branch).
   <box type="info" seamless>

   To learn a bit more about how labels such as `master` and `HEAD` work, you can refer to [this article](https://blog.git-init.com/what-is-head-in-git/).
   </box>
1. A new commit has been added. The `master` and the `HEAD` labels have moved to the new commit.
1. A new branch `fix1` has been added. The repo has switched to the new branch too (hence, the `HEAD` label is attached to the `fix1` branch).
1. A new commit (`c`) has been added. The current branch label `fix1` moves to the new commit, together with the `HEAD` label.
1. The repo has switched back to the `master` branch. Hence, the `HEAD` has moved back to `master` branch's <tooltip content="latest commit of that branch">tip</tooltip>.<br>
   At this point, the repo's working directory reflects the code at commit `b` (not `c`).

<annotate src="{{ baseUrl }}/gitAndGithub/branch/images/branchesAsLabels2.png" width="600">
<a-point x="15%" y="10%" label="[6]" opacity="0"/>
<a-point x="50%" y="5%" label="[7]" opacity="0"/>
<a-point x="90%" y="40%" label="[8]" opacity="0"/>
</annotate>

6. A new commit (`d`) has been added. The `master` and the `HEAD` labels have moved to that commit.
1. The repo has switched back to the `fix1` branch and added a new commit (`e`) to it.
1. The repo has switched to the `master` branch and the `fix1` branch has been merged into the `master` branch, creating a _merge commit_ `f`. The repo is currently on the `master` branch.


Now that you have some idea how the repo will look like when branches are being used, let's follow the steps below to learn how to perform branching operations using Git. You can use any repo you have on your computer (e.g. a clone of the [samplerepo-things](https://github.com/se-edu/samplerepo-things)) for this.

<box type="warning" seamless>

Note that how the revision graph appears (colors, positioning, orientation etc.) in your Git GUI varies based on the GUI you use, and might not match the exact diagrams given above.
</box>

**0. Observe that you are normally in the branch called `master`.**

{{ show_git_tabs('_0') }}

**1. Start a branch named `feature1` and switch to the new branch.**

{{ show_git_tabs('_1') }}

**2. Create some commits in the new branch.** %%Just commit as per normal. Commits you add while on a certain branch will become part of that branch.%%<br>
Note how the `master` label and the `HEAD` label moves to the new commit (The `HEAD` label of the local repo is represented as :fas-dot-circle: in Sourcetree, as illustrated in the screenshot below).

<pic eager src="images/sourcetree_HEAD_dot.png" />

**3. Switch to the `master` branch.** Note how the changes you did in the `feature1` branch are no longer in the working directory.

{{ show_git_tabs('_2') }}

**4. Add a commit to the master branch.** Let’s imagine it’s a bug fix.<br>
To keep things simple for the time being, this commit should ==not involve the same content that you changed in the `feature1` branch==. To be on the safe side, you can change an entirely different file in this commit.

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_4.png" height="100" />
<p/>

**5. Switch back to the `feature1` branch** %%(similar to step 3)%%.

**6. Merge the `master` branch to the `feature1` branch**, giving an end-result like the following. Also note how Git has created a _merge commit_.

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" />
<p/>

{{ show_git_tabs('_3') }}

The objective of that merge was to _sync_ the `feature1` branch with the `master` branch. Observe how the changes you did in the `master` branch (i.e. the imaginary bug fix) is now available even when you are in the `feature1` branch.

<box>

****To undo a merge****,

1. Ensure you are in the <popover content="If you merged branch `foo` onto branch `bar`, branch `bar` is the _receiving branch_">branch that received the merge</popover>.
1. Do a hard reset (similar to how you delete a commit) of that branch to the commit that would be the tip of that branch had you not done the offending merge.


----{.dotted}

{{ icon_example }} In the example below, you merged `master` to `feature1`.

<annotate src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" >
<a-point x="4%" y="47%" color="yellow" size="18" opacity="0.4" content="Do a hard reset to this commit"/>
</annotate>

If you want to undo that merge,

1. Ensure you are in the `feature1` branch (because that's the branch that _received_ the merge).
1. Reset the `feature1` branch to the commit highlighted (in yellow) in the screenshot above (because that was the tip of the `feature1` branch before you merged the `master` branch to it.

</box>

<box type="info" seamless>

Instead of merging `master` to `feature1`, an alternative is to [_rebase_](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) the `feature1` branch. However, rebasing is an advanced feature that requires modifying past commits. If you modify past commits that have been pushed to a remote repository, you'll have to [_force-push_](https://www.datree.io/resources/git-push-force) the modified commit to the remote repo in order to update the commits in it.
</box>

**7. Add another commit to the `feature1` branch.**

**8. Switch to the `master` branch and add one more commit.**

**9. Merge `feature1` to the master branch**, giving and end-result like this:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_6.png" height="150" />
<p/>

{{ show_git_tabs('_3b') }}

**10. Create a new branch called `add-countries`, switch to it, and add some commits to it** %%(similar to steps 1-2 above)%%. You should have something like this now:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchBeforeMerging.png" height="80" />
<p/>

<box type="wrong" seamless>

**Avoid this rookie mistake!**{.text-danger}

==Always remember to switch back to the `master` branch before creating a new branch.== If not, your new branch will be created on top of the current branch.
</box>

**11. Go back to the `master` branch and merge the `add-countries` branch onto the `master` branch** %%(similar to steps 8-9 above)%%. While you might expect to see something like the following,

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchNoFastForward.png" height="100" />
<p/>

... you are likely to see something like this instead:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchAfterMerging.png" height="80" />
<p/>

That is because **Git does a _fast forward_ merge if possible**. Seeing that the `master` branch has not changed since you started the `add-countries` branch, Git has decided it is simpler to just put the commits of the `add-countries` branch in front of the `master` branch, without going into the trouble of creating an extra merge commit.

**It is possible to force Git to create a merge commit even if fast forwarding is possible.**

{{ show_git_tabs('_4') }}

</div>

<div id="extras">
</div>
