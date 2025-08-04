{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can rebase a branch.</span>
<span id="title">{{ trail.syncingBranches.lessons.syncByRebase.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**_Rebasing_ is another way to synchronise** one branch with another.
{% endcall %}

**{{ show_git_term("Rebasing") }} is another way to synchronise one branch with another, while keeping the history cleaner and more linear.** Instead of creating a merge commit to combine the branches, rebasing moves the entire sequence of commits from your branch and "replays" them on top of another branch. This effectively **moves the base of your branch to the tip of the other branch** (i.e., it 're-bases' it — hence the name), as if you had started your work from there in the first place.

Rebasing is especially useful when you want to update your branch with the latest changes from a main branch, but you prefer an uncluttered history with fewer merge commits.

Suppose we have the following revision graph, and we want to sync the `feature` branch with `master`, so that changes in commit `m2` become visible to the `feature` branch.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout master
    commit id: "[master] m2"
    checkout feature
    commit id: "[HEAD → feature] f2"
</mermaid>

If we merge the `master` branch to the `feature` branch as given below, `m2` becomes visible to the `feature` branch. However, it creates a merge commit.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout master
    commit id: "[master] m2"
    checkout feature
    commit id: "f2"
    merge master id: "[HEAD → feature] mc1"
</mermaid>
Instead of merging, if we _rebased_ the `feature` branch on the `master` branch, we would get the following.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    checkout master
    commit id: "[branch: master] m2"
    branch feature
    checkout feature
    commit id: "f1a"
    commit id: "[HEAD → feature] f2a"
</mermaid>

Note how the rebasing changed the base of the `feature` branch from `m1` to `m2`. As a result, changes done in `m2` are now visible to the `feature` branch. But there is no merge commit, and the revision graph is simpler.

Also note how the first commit in the feature branch, previously shown as `f1`, is now shown as `f1a` after the rebase. Although both commits contain the same changes, other details -- such as the parent commit -- are different, making them two distinct Git objects with different SHA values. Similarly, `f2` and `f2a` are also different. Thus, the history of the entire `feature` branch has changed after the rebase.

**Because rebasing rewrites the commit history of your branch,** you should avoid rebasing branches that you’ve already published, and are potentially used by others -- rewriting published history can cause confusion and conflicts for those using the previous version of the commits.

</div>

<div id="extras">
</div>
