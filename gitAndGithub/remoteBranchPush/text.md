{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can push a local branch to a remote, and keep it updated.</span>
<span id="title">{{ trail.remoteBranches.lessons.remoteBranchPush.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Local branches can be replicated in a remote**.
{% endcall %}

**Pushing a copy of local branches to the corresponding remote repo makes those branches available remotely.**

In a previous lesson, we saw how to push the default branch to a remote repository and have Git set up tracking between the local and remote branches using a remote-tracking reference. **Pushing any other local branch to a remote works the same way as pushing the default branch — you simply specify the target branch instead of the default branch.** Pushing any new commits in any local branch to a corresponding remote branch is done similarly as well.

{% set a %} <!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    checkout master
    commit id: "[origin/master][HEAD → master] m2"
    checkout bug-fix
    commit id: "[bug-fix] b1"
    checkout master
</mermaid>

[`bug-fix` branch does not exist in the remote `origin`]
{% endset %}
{% set b %} {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    checkout master
    commit id: "[origin/master][HEAD → master] m2"
    checkout bug-fix
    commit id: "[origin/bug-fix][bug-fix] b1"
    checkout master
</mermaid>

[after pushing `bug-fix` branch to origin,<br>
 and setting up a remote-tracking branch]
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<!-- ------ end: transformation columns -------------------------------->


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Push local branches to remote")  %}

<!-- commands to create samplerepo-company

mkdir samplerepo-company
cd samplerepo-company
git init
echo "Employees" >> employees.txt
git add .
git commit -m "Add employees.txt"
echo "Vendors" >> vendors.txt
git add .
git commit -m "Add vendors.txt"
git switch -c track-sales
echo "Sales" >> sales.txt
git add .
git commit -m "Add sales.txt"
git checkout master
echo "Manager: Michael Scott" >> employees.txt
git commit -am "Add Michael to employees.txt"
-->


{{ hp_number(hop_preparation) }} **Fork the [samplerepo-company](https://github.com/se-edu/samplerepo-company)** to your GitHub account. When doing so, ==un-tick the `Copy the master branch only` option==.<br>
After forking, go to the fork and ensure both branches (`master`, and `track-sales`) are in there.

**Clone the fork** to your computer. It should look something like this:

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch track-sales
    checkout track-sales
    commit id: "[origin/track-sales] s1"
    checkout master
    commit id: "[origin/master][origin/HEAD][HEAD → master] m3"
</mermaid>

<box type="info" seamless>

The `origin/HEAD` remote-tracking ref indicates where the `HEAD` ref is in the remote `origin`.
</box>

{{ hp_number("1") }} **Create a new branch `hiring`, and add a commit to that branch.** The commit can contain any changes you want.

<box type="tip" seamless>

Here are the commands you can run in the terminal to do this step in on shot:

```bash{.no-line-numbers}
git switch -c hiring
echo "Receptionist: Pam" >> employees.txt
git commit -am "Add Pam to employees.txt"
```
</box>

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch track-sales
    checkout track-sales
    commit id: "[origin/track-sales] s1"
    checkout master
    commit id: "[origin/master][origin/HEAD][master] m3"
    branch hiring
    checkout hiring
    commit id: "[HEAD → hiring] h1"
</mermaid>
 The resulting revision graph should look like the one above.

{{ hp_number("2") }} **Push the `hiring` branch to the remote.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the usual `git push <remote> -u <branch>` command to push the branch to the remote, and set up a remote-tracking branch at the same time.

```bash{.no-line-numbers}
git push origin -u hiring
```
{% endset %}
{% set sourcetree %}

<pic src="images/sourcetreeRightClickToPush.png" width="500" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number("3") }} **Verify the branch has been pushed to the remote** by visiting the fork on GitHub, and looking for the `origin/hiring` remote-tracking ref in the local repo.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
</div>
