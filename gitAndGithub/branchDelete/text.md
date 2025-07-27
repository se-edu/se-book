{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can delete a branch in a local repository.</span>
<span id="title">{{ trail.branchingLocally.lessons.branchDelete.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Branches can be deleted**, to get rid of them when they are no longer needed.
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
    branch _
    checkout _
    commit id: "b1"
    checkout master
    merge _ id: "[HEAD → master] mc1"
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
    branch _
    checkout _
    commit id: "b1"
    checkout master
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the above example, the commit `b1` is no longer reachable, unless we know its commit ID (i.e., the `SHA`).<br>

{% call show_sidebar("What makes a commit 'unreachable'?") %} <!-- -------------------- -->

**Recall that a commit only has a pointer to its parent commit** (not its descendent commits).

**A commit is considered {{ show_git_term("reachable") }} if you can get to it by starting at a branch, tag, or other ref and walking backward through its parent commits.** This is the normal state for commits — they are part of the visible history of a branch or tag.

**When no branch, tag, or ref points to a commit (directly or indirectly), it becomes {{ show_git_term("unreachable") }}.** This often happens when you delete a branch or rewrite history (e.g., with reset or rebase), leaving some commits {{ show_git_term('"orphaned"') }} (or {{ show_git_term('"dangling"') }}) without a ref pointing to them.

<div class="indented-level1">

In the example below, `C4` is unreachable (i.e., cannot be reached by starting at any of the three refs: {{ show_tag('v1.0') }} or {{ show_ref('master') }} or {{ show_head() }}), but the other three are all reachable.

{{ show_commit('C4', edge="↓", desc="<md>#r#unreachable!##", style="dark") }}
{{ show_commit('C3', edge="↓", desc= show_tag("v1.0")) }}
{{ show_commit('C2', edge="↓", desc=show_ref('master')  + show_head()) }}
{{ show_commit('C1', edge='') }}
<p/>
</div>

**Unreachable commits are not deleted immediately — Git keeps them for a while before cleaning them up.** By default, Git retains unreachable commits for at least **30 days**, during which they can still be recovered if you know their SHA. **After that, they will be garbage-collected, and will be lost for good.**
{% endcall %} <!-- end: sidebar -------------------------------------->

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Delete branches")  %}

{{ hp_number("Preparation") }} **First, create the repo `samplerepo-books-2` for this hands-on practical**, by running the following commands in your terminal.

```bash
mkdir samplerepo-books-2
cd samplerepo-books-2
git init
echo "Horror Stories" >> horror.txt
git add .
git commit -m "Add horror.txt"
git switch -c textbooks
echo "Textbooks" >> textbooks.txt
git add .
git commit -m "Add textbooks.txt"
git switch -c fantasy master
echo "Fantasy Books" >> fantasy.txt
git add .
git commit -m "Add fantasy.txt"
git checkout master
git merge --no-ff -m "Merge branch textbooks" textbooks
```

{{ hp_number("1") }} **Delete the (the merged) `textbooks` branch.**
{% set cli %} <!-- ------ start: Git Tabs --------------->
Use the `git branch -d <branch>` command to delete a local branch 'safely' -- this command will fail if the branch has unmerged changes.
```bash{.no-line-numbers}
git branch -d textbooks
git log --oneline --decorate --graph --all  # check the current revision graph
```
{% call show_output() %}
```bash{.no-line-numbers}
*   443132a (HEAD -> master) Merge branch textbooks
|\
| * 4969163 Add textbooks.txt
|/
| * 0586ee1 (fantasy) Add fantasy.txt
|/
* 7f28f0e Add horror.txt
```
{% endcall %}
{% endset %}
{% set sourcetree %}
Right-click on the branch name and choose `Delete <branch>`:<br>
<pic src="images/sourcetreeRightClickToDelete.png" width="450" />

In the next dialog, click `OK`:<br>
<pic src="images/sourcetreeDeleteBranchDialog.png" width="400" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

Observe that all commits remain. The only missing thing is the `textbook` ref.

{{ hp_number("2") }} **Make a copy of the `SHA` of the tip of the (unmerged) `fantasy` branch.**

{{ hp_number("3") }} **Delete the `fantasy` branch..**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Attempt to delete the branch. It should fail, as shown below:
```bash{.no-line-numbers}
git branch -d fantasy
```
{% call show_output() %}
```bash{.no-line-numbers}
error: the branch 'fantasy' is not fully merged
hint: If you are sure you want to delete it, run 'git branch -D fantasy'
```
{% endcall %}

As also hinted by the error message, you can replace the `-d` with `-D` to 'force' the deletion.

```bash{.no-line-numbers}
git branch -D fantasy
```
Now, check the revision graph:
```bash{.no-line-numbers}
git log --oneline --decorate --graph --all
```
{% call show_output() %}
```bash{.no-line-numbers}
*   443132a (HEAD -> master) Merge branch textbooks
|\
| * 4969163 Add textbooks.txt
|/
* 7f28f0e Add horror.txt
```
{% endcall %}

{% endset %}
{% set sourcetree %}

Attempt to delete the branch as you did before. It will fail because the branch has unmerged commits.<br>
<pic src="images/sourcetreeBranchDeletionFailed.png" width="550" />

Try again but this time, tick the `Force delete` option, which will force Git to delete the unmerged branch:<br>
<pic src="images/sourcetreeDeleteBranchDialog.png" width="400" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

Observe how the branch ref `fantasy` is gone, together with any unmerged commits on it.

{{ hp_number("4") }}  **Attempt to view the 'unreachable' commit** whose `SHA` you noted in step 2.

e.g., `git show 32b34fb` (use the `SHA` you copied earlier)

Observe how the commit still exists and still reachable using the commit ID, although not reachable by other means, and not visible in the revision graph.
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


</div>
<div id="extras">
</div>
