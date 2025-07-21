.{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can revert a commit</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.revert.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git can add a new commit to **reverse the changes done in a specific past commit**, called _reverting_ a commit.
{% endcall %}
**When a past commit introduced a bug or an unwanted change, but you do not want to modify that commit** — because rewriting history can cause problems if others have already based work on it — **you can instead {{ show_git_term("revert") }} that commit.**

**Reverting creates a new commit that cancels out the changes of the earlier one** i.e., Git computes the opposite of the changes introduced by that commit — essentially a reverse diff — and applies it as a new commit on top of the current branch. This way, the problematic changes are reversed while preserving the full history, including the "bad" commit and the "fix".

{% set a %}
{{ show_commit('C3') }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

{% endset %}
{% set b %}<small>%%[revert `C2`]%%</small> {% endset %}
{% set c %}
{{ show_commit('R2', style="danger", msg="This commit is the reverse of `C2`") }}
{{ show_commit('C3') }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

{% endset %}
{{ show_transformation_columns(a, b, c) }}

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Revert a commit")  %}

{{ hp_number("0") }} **Preparation: Run the following commands to create a repo with a few commits:**

```bash
mkdir pioneers
cd pioneers
git init

echo "hacked the matrix" >> neo.txt
git add .
git commit -m "Add Neo"

echo "father of theoretical computing" >> alan-turing.txt
git add .
git commit -m "Add Turing"

echo "created COBOL, compiler pioneer" >> grace-hopper.txt
git add .
git commit -m "Add Hopper"
```
{{ show_commit('C3', msg='Add Hopper', desc=show_head()) }}
{{ show_commit('C2', msg='Add Turing') }}
{{ show_commit('C1', msg='Add Neo', edge='') }}
<p/>

{{ hp_number("1") }} **Revert the commit `Add Neo`**.

{% set cli %} <!-- ------ start: Git Tabs --------------->

**You can use the `git revert <commit>` command to revert a commit.** In this case, we want to revert the commit that is two commits behind the `HEAD`.
```bash{.no-line-numbers}
git revert HEAD~2
```
What happens next:
1. **Git prepares a new commit which reverses the target commit**
1. **Git opens your default text editor containing a proposed commit message.** You can edit it, or accept the proposed text.
1. **Once you close the editor, Git will create the new commit.**

{% endset %}
{% set sourcetree %}

In the revision graph, right-click on the commit you want to revert, and choose `Reverse commit...`
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

<box type="warning" seamless>

**A revert can result in a {{ show_git_term("conflict") }}**, if the new changes done to reverse the previous commit conflict with the changes done in other more recent commits. Then, you need to resolve the conflict before the revert operation can proceed. <span class="non-printable">Conflict resolution is covered in a later topic.</span>
</box>
</div>

<div id="extras">
</div>
