{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can cherry-pick commits.</span>
<span id="title">{{ trail.syncingBranches.lessons.cherryPick.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**_Cherry-picking_ is a Git operation that copies over a specific commit** from one branch to another.

{% endcall %}

**{{ show_git_term("Cherry-picking") }} is another way to synchronise branches, by applying specific commits from one branch onto another.**

Unlike merging or rebasing — which bring over all changes since the branches diverged — cherry-picking lets you choose individual commits and apply just those, one at a time, to your current branch. This is useful when you want to bring over a bug fix or a small feature from another branch without merging the entire branch history.

Because cherry-picking copies only the chosen commits, **it creates new commits on your branch with the same changes but different SHA values**.

Suppose we have the following revision graph, and we want to bring over the changes introduced in `m3` (in the `master` branch) onto the `feature` branch.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout master
    commit id: "m2"
    commit id: "m3" type: HIGHLIGHT
    commit id: "[master] m4"
    checkout feature
    commit id: "[HEAD → feature] f2"
</mermaid>

After cherry-picking `m3` onto the `feature` branch, the revision graph should look like the following:

<mermaid>
gitGraph
{{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout master
    commit id: "m2"
    commit id: "m3" type: HIGHLIGHT
    commit id: "[master] m4"
    checkout feature
    commit id: "f3"
    commit id: "[HEAD → feature] m3a" type: HIGHLIGHT
</mermaid>

Note how it makes the changes done in `m3` available (from now on) in the `feature` branch, with minimal changes to the revison graph.<br>
Also note that the new commit `m3a` contains the same changes as `m3`, but it will a different Git object with a different SHA value.

**Cherry-picking is another Git operation that can result in conflicts** i.e., if the changes in the cherry-picked commit conflicts with the changes in the receiving branch.
</div>
<div id="extras">
</div>
