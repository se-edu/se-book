{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.remoteBranches.lessons.branchDelete.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

**Deleting a branch deletes the corresponding branch ref from the revision history** (it does not delete any commits). The impact of the loss of the branch ref depends on whether the branch has been merged.

****When you delete a branch that has been merged,**** **the commits of the branch will still exist in the history and will be safe. Only the branch ref is lost.**

{% set a %}<!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    checkout bug-fix
    commit id: "[bug-fix] b1"
    checkout master
    merge bug-fix id: "[HEAD → master] mc1"
</mermaid>
{% endset %}
{% set b %}<small>%%[delete branch `bug-fix`]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    checkout bug-fix
    commit id: "b1"
    checkout master
    merge bug-fix id: "[HEAD → master] mc1"
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the above example, the only impact of the deletion is the loss of the branch ref `bug-fix`. All commits remain reachable (via the `master` branch), and there is no other impact on the revision history.

In fact, some prefer to delete the branch soon after merging it, to reduce branch references cluttering up the revision history.

****When you delete a branch that has not been merged,**** **the loss of the branch ref can render some commits unreachable** (unless you know their commit IDs or they are reachable through other refs), putting them at risk of being lost eventually.

{% set a %}<!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "[HEAD → master] m1"
    branch bug-fix
    checkout bug-fix
    commit id: "[bug-fix] b1"
    checkout master
</mermaid>
{% endset %}
{% set b %}<small>%%[delete branch `bug-fix`]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "[HEAD → master] m1"
    branch bug-fix
    checkout bug-fix
    commit id: "b1"
    checkout master
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the above example, the commit `b1` is no longer reachable, unless we know its commit ID (i.e., the `SHA`).<br>

<box type="info" header="****SIDEBAR: What makes a commit 'unreachable'?****{.text-info}" seamless>

**Recall that a commit only has a pointer to its parent commit** (not its descendent commits).

**A commit is considered {{ show_git_term("reachable") }} if you can get to it by starting at a branch, tag, or other ref and walking backward through its parent commits.** This is the normal state for commits — they are part of the visible history of a branch or tag.

**When no branch, tag, or ref points to a commit (directly or indirectly), it becomes {{ show_git_term("unreachable") }}.** This often happens when you delete a branch or rewrite history (e.g., with reset or rebase), leaving some commits {{ show_git_term('"orphaned"') }} without a name pointing to them.

<div class="indented-level1">

In the example below, `C4` is unreachable (i.e., cannot be reached by starting at any of the three refs: {{ show_tag('v1.0') }} or {{ show_ref('master') }} or {{ show_head() }}), but the other three are all reachable.

{{ show_commit('C4', edge="↓", desc="<md>#r#unreachable!##", style="dark") }}
{{ show_commit('C3', edge="↓", desc= show_tag("v1.0")) }}
{{ show_commit('C2', edge="↓", desc=show_ref('master')  + show_head()) }}
{{ show_commit('C1', edge='') }}
<p/>
</div>

**Unreachable commits are not deleted immediately — Git keeps them for a while before cleaning them up.** By default, Git retains unreachable commits for at least **30 days**, during which they can still be recovered if you know their SHA. **After that, they will be garbage-collected, and will be lost for good.**
</box>

//HANDS-ON

</div>

<div id="extras">
</div>
