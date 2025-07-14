{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Able to work in parallel Git branches, in the local repo.</span>
<span id="title">{{ trail.branchingLocally.lessons.branch.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**To work in parallel timelines, you can use Git _branches_.**
{% endcall %}

**Git {{ show_git_term("branches") }} let you develop multiple versions of your work in parallel — effectively creating {{ show_git_term("diverged") }} timelines of your repository’s history.** For example, one team member can create a new branch to experiment with a change, while the rest of the team continues working on another branch. Branches can have meaningful names, such as `master`, `release`, or `draft`.

**A Git branch is simply a ref (a named label) that points to a commit and automatically moves forward as you add new commits to that branch.** As you’ve seen before, the `HEAD` ref indicates which branch you’re currently working on, by pointing to corresponding branch ref.<br>
**When you add a commit, it goes into the branch you are currently on**, and the branch ref (together with the `HEAD` ref) moves to the new commit.

**Git creates a branch named `master` by default** (Git can be configured to use a different name e.g., `main`).

Given below is an illustration of how branch refs move as branches evolve. Refer to the text below it for explanations of each stage.

<annotate src="{{ baseUrl }}/gitAndGithub/branch/images/branchesAsLabels1.png" width="700">
<a-point x="2%" y="27%" label="[1]" opacity="0"/>
<a-point x="2%" y="47%" label="[2]" opacity="0"/>
<a-point x="35%" y="25%" label="[3]" opacity="0"/>
<a-point x="65%" y="10%" label="[4]" opacity="0"/>
<a-point x="85%" y="10%" label="[5]" opacity="0"/>
</annotate>
<p/>

* There is only one branch (i.e., `master`) and there is only one commit on it. The `HEAD` ref is pointing to the `master` branch (as we are currently on that branch). {texts="['[1]', '[2]', '[3]', '[4]', '[5]']"}
* A new commit has been added. The `master` and the `HEAD` refs have moved to the new commit.
* A new branch `fix1` has been added. The repo has switched to the new branch too (hence, the `HEAD` ref is attached to the `fix1` branch).
* A new commit (`c`) has been added. The current branch ref `fix1` moves to the new commit, together with the `HEAD` ref.
* The repo has switched back to the `master` branch. Hence, the `HEAD` has moved back to `master` branch's <tooltip content="latest commit of that branch">tip</tooltip>.<br>
   At this point, the repo's working directory reflects the code at commit `b` (not `c`).

<annotate src="{{ baseUrl }}/gitAndGithub/branch/images/branchesAsLabels2.png" width="400">
<a-point x="15%" y="10%" label="[6]" opacity="0"/>
<a-point x="50%" y="5%" label="[7]" opacity="0"/>
</annotate>

* A new commit (`d`) has been added. The `master` and the `HEAD` refs have moved to that commit. {texts="['[6]', '[7]']"}
* The repo has switched back to the `fix1` branch and added a new commit (`e`) to it.

<box type="warning" seamless>

Note that appearance of the revision graph (colors, positioning, orientation etc.) varies based on the Git client you use, and might not match the exact diagrams given above.
</box>
<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Work on parallel branches")  %}

{{ hp_number ('1') }} **Fork the [samplerepo-things](https://github.com/se-edu/samplerepo-things) repo, and clone it** onto your computer.

{{ hp_number ('2') }} **Observe that you are in the branch called `master`.**
{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
$ git status
```
{% call show_output() %}
```bash{.no-line-numbers}
on branch master
```
{% endcall %}

{% endset %}
{% set sourcetree %}
<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/onMasterBranch.png" height="120" />
<p/>
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Start a branch named `feature1` and switch to the new branch.**

{% set cli %} <!-- ------ start: Git Tabs --------------->
You can use the `branch` command to create a new branch and the `checkout` command to switch to a specific branch.

```bash{.no-line-numbers}
$ git branch feature1
$ git checkout feature1
```

One-step shortcut to create a branch and switch to it at the same time:

```bash{.no-line-numbers}
$ git checkout –b feature1
```
<box type="info" header="The new `switch` command" seamless>

Git recently introduced a [`switch` command](https://git-scm.com/docs/git-switch) that you can use instead of the `checkout` command given above.

To create a new branch and switch to it:
```bash{.no-line-numbers highlight-lines="2['switch']"}
$ git branch feature1
$ git switch feature1
```
One-step shortcut:

```bash{.no-line-numbers highlight-lines="1['switch –c']"}
$ git switch –c feature1
```
</box>
{% endset %}
{% set sourcetree %}
Click on the `Branch` button on the main menu. In the next dialog, enter the branch name and click `Create Branch`.

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetreeCreateBranch.png" height="150" />
<p/>

Note how the `feature1` is indicated as the current branch (reason: Sourcetree automatically switches to the new branch when you create a new branch, if the `Checkout New Branch` was selected in the previous dialog).

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetreeFeature1BranchActive.png" height="150" />
<p/>
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('4') }} **Create some commits in the new branch.** %%Just commit as per normal. Commits you add while on a certain branch will become part of that branch.%%<br>
Note how the `master` ref and the `HEAD` ref moves to the new commit.

{% set cli %} <!-- ------ start: Git Tabs --------------->
As before, you can use the `git log --one-line --decorate` command for this.
{% endset %}
{% set sourcetree %}
* :fab-windows: At times, the `HEAD` ref of the local repo is represented as :fas-dot-circle: in Sourcetree, as illustrated in the screenshot below
  <pic eager src="images/sourcetree_HEAD_dot.png" />.
* :fab-apple: The `HEAD` ref is not shown in the UI if it is already pointing at the active branch.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('5') }} **Switch to the `master` branch.** Note how the changes you did in the `feature1` branch are no longer in the working directory.

{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
$ git checkout master
```
{% endset %}
{% set sourcetree %}
Double-click the `master` branch.

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetreeMasterBranchSelected.png" height="150" />
<p/>

<box type="info" header="Revisiting `master` vs `origin/master`" seamless>

In the screenshot above, you see a `master` ref and a `origin/master` ref for the same commit. The former identifies the <tooltip content="i.e., the most recent commit on the branch">tip</tooltip> of the local `master` branch while the latter identifies the tip of the `master` branch at the remote repo named `origin`. The fact that both refs point to the same commit means the local `master` branch and its remote counterpart are <tooltip content="neither one has commits the other one doesn't">in sync</tooltip> with each other.
Similarly, `origin/HEAD` ref appearing against the same commit indicates that <tooltip content="`HEAD` ref indicates the currently checked-out branch's latest commit">the `HEAD` ref</tooltip> of the remote repo is pointing to this commit as well.

</box>
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('6') }} **Add a commit to the master branch.** Let’s imagine it’s a bug fix.<br>
To keep things simple for the time being, this commit should ==not involve the same content that you changed in the `feature1` branch==. To be on the safe side, you can change an entirely different file in this commit.
<div id="samplerepo-things-before-merging">
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "[feature] f2"
    checkout master
    commit id: "[HEAD → master] m3"
    checkout feature1
</mermaid>
</div>

{{ hp_number ('7') }} **Switch between the two branches and see how the working directory changes accordingly.** That is, now you have two parallel timelines that you can freely switch between.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**You can also start a branch from an earlier commit**, instead of the latest commit in the current branch. For that, simply check out the commit you wish to start from.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Start a branch from an earlier commit")  %}

In the `samplerepo-things` repo that you used above, let's create a new branch that starts from the same commit the `feature1` branch started from. Let's pretend this branch will contain an alternative version of the content we added in the `feature1` branch.

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    branch feature1-alt
    checkout feature1
    commit id: "f1"
    commit id: "[feature1] f2"
    checkout master
    commit id: "[HEAD → master] m3"
    checkout feature1-alt
    commit id: "[HEAD → feature1-alt] a1"
</mermaid>

<box type="wrong" seamless>

**Avoid this rookie mistake!**{.text-danger}

==Always remember to switch back to the `master` branch before creating a new branch.== If not, your new branch will be created on top of the current branch.
</box>


1. Switch to the `master` branch.
1. Checkout the commit that is at which the `feature1` branch diverged from the `master` branch (e.g. `git checkout HEAD~1`). This will create a detached `HEAD`.
1. Create a new branch called `feature1-alt`. The `HEAD` will now point to this new branch (i.e., no longer 'detached').
1. Add a commit on the new branch.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>

<div id="extras">
{% call show_exercise('side-track') %}
coming soon ...
{% endcall %}
</div>
