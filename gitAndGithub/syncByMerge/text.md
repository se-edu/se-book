{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can use merging to sync branches.</span>
<span id="title">{{ trail.syncingBranches.lessons.syncByMerge.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Merging is one way to keep one branch synchronised** with another.
{% endcall %}

**When working in parallel branches, you’ll often need to {{ show_git_term("sync") }} (short for synchronise) one branch with another.** For example, while developing a feature in one branch, you might want to bring in a recent bug fix from another branch that your branch doesn’t yet have.

**The simplest way to sync branches is to merge** — that is, to sync a branch `b1` with changes from another branch `b2`, you merge `b2` into `b1`. In fact, you can merge them periodically to keep one branch up to date with the other.

<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    branch feature
    commit id: "f1"
    checkout master
    checkout bug-fix
    commit id: "b1"
    checkout master
    merge bug-fix
    checkout feature
    merge master id: "mc1"
    commit id: "f2"
    checkout master
    commit id: "m2"
    checkout feature
    merge master id: "mc2"
    checkout master
    commit id: "m3"
    checkout feature
    commit id: "[feature] f3"
    checkout master
    commit id: "[HEAD → master] m4"
</mermaid>

In the example above, you can see how the `feature` branch is merging the `master` branch periodically to keep itself in sync with the changes being introduced to the `master` branch.
</div>

<div id="extras">
</div>
