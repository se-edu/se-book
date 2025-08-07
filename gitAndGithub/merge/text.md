{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can merge branches in a local repo.</span>
<span id="title">{{ trail.branchingLocally.lessons.merge.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Most work done in **branches eventually gets _merged_** together.
{% endcall %}

**{{ show_git_term("Merging") }} combines the changes from one branch into another**, bringing their diverged timelines back together.

When you merge, Git looks at the two branches and figures out how their histories have diverged since their {{ show_git_term("merge base") }} (i.e., the most recent common ancestor commit of two branches). It then applies the changes from the other branch onto your current branch, creating a new commit. **The new commit created when merging is called a {{ show_git_term("merge commit") }} — it records the result of combining both sets of changes.**

Given below is an illustration of how such a merge looks like in the revision graph:

<annotate src="{{ baseUrl }}/gitAndGithub/merge/images/mergeWithCommit.png" width="600">
<a-point x="2%" y="10%" label="[1]" opacity="0"/>
<a-point x="40%" y="10%" label="[2]" opacity="0"/>
<a-point x="95%" y="47%" label="[3]" opacity="0"/>
<a-point x="85%" y="70%" opacity="0"><md>#r#← merge base##</md></a-point>
<a-point x="56%" y="10%" opacity="0"><md>#r#merge commit →##</md></a-point>
</annotate>
<p/>

* We are on the `fix1` branch (as indicated by `HEAD`). {texts="['[1]', '[2]', '[3]']"}
* We have switched to the `master` branch (thus, `HEAD` is now pointing to `master` ref).
* The `fix1` branch has been merged into the `master` branch, creating a _merge commit_ `f`. The repo is still on the `master` branch.

**A merge commit has two parent commits** e.g., in the above example, the merge commit `f` has both `d` and `e` as parent commits. **The parent commit on the receiving branch is considered the {{ show_git_term("first parent") }} and the other is considered the {{ show_git_term("second parent") }}** e.g., in the example above, `fix1` branch is being merged into the `master` branch (i.e., the receiving branch) -- accordingly, `d` is the first parent and `e` is the second parent.


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Merge a branch (with a merge commit)")  %}

{{ hp_number(hop_preparation) }} We continue with the `samplerepo-things` repo from earlier, which should look like the following. Note that we are ignoring the `feature1-alt` branch, for simplicity.

<include src="../branch/text.md#samplerepo-things-before-merging" />

{{ hp_number ('1') }} **Switch back to the `feature1` branch.**

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "[HEAD → feature1] f2"
    checkout master
    commit id: "[master] m3"
    checkout feature1
</mermaid>

{{ hp_number ('2') }} **Merge the `master` branch to the `feature1` branch**, giving an end-result like the following. Also note how Git has created a _merge commit_ (shown as `mc1` in the diagram below).
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "f2"
    checkout master
    commit id: "[master] m3"
    checkout feature1
    merge master id: "[HEAD → feature1] mc1"
</mermaid>

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
$ git merge master
```
{% endset %}
{% set sourcetree %}
Right-click on the `master` branch and choose `merge master into the current branch`. Click `OK` in the next dialog.<br>
The revision graph should look like this now (colours and line alignment might vary but the graph structure should be the same):<br>
<pic eager src="{{baseUrl}}/gitAndGithub/merge/images/sourcetreeAfterMeringMaster.png" height="120" />
<p/>
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->

Observe how the changes you made in the `master` branch (i.e., the imaginary bug fix in `m3`) is now available even when you are in the `feature1` branch.<br>
Furthermore, observe (e.g., `git show HEAD`) how the merge commit contains the sum of changes done in  commits `m3`, `f1`, and `f2`.

{{ hp_number ('3') }} **Add another commit to the `feature1` branch**, in which you do some further changes to the `numbers.txt`.<br>
**Switch to the `master` branch and add one more commit.**

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "f2"
    checkout master
    commit id: "m3"
    checkout feature1
    merge master id: "mc1"
    commit id: "[feature1] f3"
    checkout master
    commit id: "[HEAD → master] m4"
</mermaid>

{{ hp_number ('4') }} **Merge `feature1` to the master branch**, giving an end-result like this:

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "f2"
    checkout master
    commit id: "m3"
    checkout feature1
    merge master id: "mc1"
    commit id: "[feature1] f3"
    checkout master
    commit id: "m4"
    merge feature1 id: "[HEAD → master] mc2"
</mermaid>

{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git merge feature1
```
{% endset %}
{% set sourcetree %}
Right-click on the `feature1` branch and choose `Merge...`. The resulting revision graph should look like this:

<pic eager src="{{baseUrl}}/gitAndGithub/merge/images/sourcetreeAfterMeringFeature1.png" height="150" />
<p/>
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

Now, any changes you made in `feature1` branch are available in the master branch.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**When the branch you're merging into hasn't diverged** — meaning it hasn't had any new commits since the merge base —  **Git simply moves the branch pointer forward to include all the new commits**, keeping the history clean and linear. This is **called a {{ show_git_term("fast-forward merge") }}** because Git simply "fast-forwards" the branch pointer to the tip of the other branch. The result looks as if all the changes had been made directly on one branch, without any branching at all.

{% set a %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "[HEAD → master] m2"
    branch bug-fix
    commit id: "b1"
    commit id: "[bug-fix] b2"
    checkout master
</mermaid>
{% endset %}
{% set b %}<small>%%[merge `bug-fix`]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    commit id: "b1"
    commit id: "[HEAD → master][bug-fix] b2"
    checkout master
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the example above, the `master` branch has not changed since the merge base (i.e., `m2`). Hence, merging the branch `bug-fix` onto `master` can be done by fast-forwarding the `master` branch ref to the tip of the `bug-fix` branch (i.e., `b2`).

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Do a fast-forward merge")  %}

{{ hp_number(hop_preparation) }} Let's continue with the same `samplerepo-things` repo we used above, and do a fast-forward merge this time.

{{ hp_number ('1') }} **Create a new branch called `add-countries`, and some commits to it** as follows:<br>
Switch to the new branch, add a file named `countries.txt`, stage it, and commit it.<br>
Do some changes to `countries.txt`, and commit those changes.<br>
You should have something like this now:
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "[master] mc2"
    branch add-countries
    commit id: "a1"
    commit id: "[HEAD → add-countries] a2"
</mermaid>

{{ hp_number ('2') }} **Go back to the `master` branch.**

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "[HEAD → master] mc2"
    branch add-countries
    commit id: "a1"
    commit id: "add-countries] a2"
</mermaid>

{{ hp_number ('3') }} **Merge the `add-countries` branch onto the `master` branch.** Observe that there is no merge commit. The `master` branch ref (and the `HEAD` ref along with it) moved to the tip of the `add-countries` branch (i.e., `a2`) and both branches now point to `a2`.

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master (and add-countries)'}} }%%" }}
    commit id: "mc2"
    commit id: "a1"
    commit id: "[HEAD → master][add-countries] a2"
</mermaid>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->



**It is possible to force Git to create a merge commit even if fast forwarding is possible.** This is useful if you prefer the revision graph to visually show when each branch was merged to the main timeline.

<div class="non-printable">

{% set cli %} <!-- ------ start: Git Tabs --------------->

To prevent Git from fast-forwarding, use the `--no-ff` switch when merging. Example:
```bash{.no-line-numbers}
git merge --no-ff add-countries
```
{% endset %}
{% set sourcetree %}
:fab-windows: Windows: Tick the box shown below when you merge a branch:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/mergeBranchDialog.png" height="150" />
<p/>

-------

:fab-apple: Mac:

Trigger the branch operation using the following menu button:

<annotate src="{{baseUrl}}/gitAndGithub/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
<a-point x="74%" y="5%" content="Look within this box">
<div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>
<p/>

In the next dialog, tick the following option:

<pic eager src="{{baseUrl}}/gitAndGithub/merge/images/sourcetreeMergeWithoutFf.png" width="600" />

To permanently prevent fast-forwarding:

1. Go to Sourcetree `Settings`.
1. Navigate to the `Git` section.
1. Tick the box `Do not fast-forward when merging, always create commit`.

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
</div>

**A {{ show_git_term("squash merge") }} combines all the changes from a branch into a single commit on the receiving branch**, without preserving the full commit history of the branch being merged. This is especially useful when the feature branch contains many small or experimental commits that would clutter the main branch’s history. By squashing, you retain the final state of the changes while presenting them as one cohesive unit, making the project history easier to read and manage. It also helps maintain a linear, simplified commit log on the main branch.

{% set a %} <!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "[HEAD → master] m1"
    branch feature
    checkout feature
    commit id: "f1"
    commit id: "[feature] f2"
</mermaid>

{% endset %}
{% set b %}<small>%%[squash merge...]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    commit id: "[feature] f2"
    checkout master
    commit id: "[HEAD → master] s1 (same as f1+f2)" type: HIGHLIGHT
</mermaid>

{% endset %}
{{ show_transformation_columns(a, b, c) }}
<!-- ------ end: transformation columns -------------------------------->

In the example above, the branch `feature` has been squash merged onto the `master` branch, creating a single 'squashed' commit `s1` that combines all the commits in `feature` branch.

</div>
<div id="extras">

{% call show_exercise("branch-bender") %}

In the given `webapp` repo, there are three branches: `feature/login`, `feature/dashboard`, `feature/payments`

1. Merge `feature/login` onto the `main` branch, ==while ensuring a merge commit is created== (i.e., no fast-forwarding).
1. Merge `feature/dashboard` onto the `main` branch.
1. Merge `feature/payments` onto the `main` branch.

The final result should look like this:

<mermaid>
gitGraph
commit
branch feature/login
checkout main
branch feature/dashboard
checkout main
branch feature/payments
checkout feature/login
commit
commit
checkout main
merge feature/login
checkout feature/dashboard
commit
commit
commit
checkout main
merge feature/dashboard
checkout feature/payments
commit
commit
checkout main
merge feature/payments
</mermaid>
{% endcall %}

{{ show_detour('undoMerge') }}
{{ show_detour('compareBranches') }}
{{ show_detour('squashMerge') }}
</div>
