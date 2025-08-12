{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can rename a branch in a local repository.</span>
<span id="title">{{ trail.branchingLocally.lessons.branchRename.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Branches can be renamed**, for example, to fix a mistake in the branch name.
{% endcall %}

**Local branches can be renamed easily.** Renaming a branch simply changes the branch reference (i.e., the name used to identify the branch) — it is just a cosmetic change.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Rename local branches")  %}

{{ hp_number(hop_preparation) }} **First, create the repo `samplerepo-books` for this hands-on practical**, by running the following commands in your terminal.

```bash
mkdir samplerepo-books
cd samplerepo-books
git init
echo "Horror Stories" >> horror.txt
git add .
git commit -m "Add horror.txt"
git switch -c textbooks
echo "Textbooks" >> textbooks.txt
git add .
git commit -m "Add textbooks.txt"
git switch master
git switch -c fantasy
echo "Fantasy Books" >> fantasy.txt
git add .
git commit -m "Add fantasy.txt"
git switch master
git merge --no-ff -m "Merge branch textbooks" textbooks
```
The above should give you a repo similar to the revision graph given below, on the left.


{% set a %}<!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch textbooks
    checkout textbooks
    commit id: "[textbooks] t1"
    checkout master
    branch fantasy
    checkout fantasy
    commit id: "[fantasy] f1"
    checkout master
    merge textbooks id: "[HEAD → master] mc1"
</mermaid>
{% endset %}
{% set b %}<small>%%[rename branches]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'master'}} }%%" }}
    commit id: "m1"
    branch study-books
    checkout study-books
    commit id: "[study-books] t1"
    checkout master
    branch fantasy-books
    checkout fantasy-books
    commit id: "[fantasy-books] f1"
    checkout master
    merge study-books id: "[HEAD → master] mc1"
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<!-- ------ end: transformation columns -------------------------------->

{{ hp_number(hop_target) }} **Rename the `fantasy` branch to `fantasy-books`.** Similarly, rename `textbooks` branch to `study-books`. The outcome should be similar to the revision graph above, on the right.

{{ hp_number("steps:") }}

{% set cli %} <!-- ------ start: Git Tabs --------------->

To rename a branch, use the `git branch -m <current-name> <new-name>` command (`-m` stands for 'move'):
```bash{.no-line-numbers highlight-lines="3['--graph'],3['--all']"}
git branch -m fantasy fantasy-books
git branch -m textbooks study-books
git log --oneline --decorate --graph --all  # verify the changes
```
{% call show_output() %}
```bash{.no-line-numbers}
*   443132a (HEAD -> master) Merge branch textbooks
|\
| * 4969163 (study-books) Add textbooks.txt
|/
| * 0586ee1 (fantasy-books) Add fantasy.txt
|/
* 7f28f0e Add horror.txt
```
{{ icon_info }} Note these additional switches to the `log` command:
* `--all`: Shows all branches, not just the current branch.
* `--graph`: Shows a graph-like visualisation (notice how `*` is used to indicate a commit, and branches are indicated using vertical lines).
{% endcall %}

{% endset %}
{% set sourcetree %}

Right-click on the branch name and choose `Rename...`. Provide the new branch name in the next dialog.<br>

<pic src="images/sourcetreeRightClickToRename.png" width="400" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

{% call show_sidebar("Branch naming conventions") %}

**Branch names can contain lowercase letters, numbers, `/`, dashes (`-`), underscores (`_`), and dots (`.`)**.
You can use uppercase letters too, but many teams avoid them for consistency.

**A common branch naming convention is to prefix it with `<category>/`.** Some examples:
* `feature/login-form` — for new features (`origin/feature/login-form` could be the matching remote-tracking branch)
* `bugfix/profile-photo` — for fixing bugs
* `hotfix/payment-crash` — for urgent production fixes
* `release/2.0` — for prepping a release
* `experiment/ai-chatbot` — for “just trying stuff”

Although forward-slash (`/`) in the prefix doesn't mean folders, some tools treat it kind of like a path so you can group related branches when you run git branch. Shown below is an example of how Sourcetree groups branches with the same prefix.

<pic src="images/sourcetreeGroupedBranches.png" />
{% endcall %}

</div>
<div id="extras">
{% set scenario %}
In the `rename-this` repo, you have been working on the login feature for your application on the branch `login`. On second thoughts, you now wish you had named it `feature/login`, to indicate the category of work done in the branch.
<mermaid>
gitGraph
    commit id: "m1"
    commit id: "m2"
    branch login
    commit id: "b1"
    checkout main
    commit id: "m3"
    checkout login
    commit id: "b2"
</mermaid>
{% endset %}
{% call show_exercise("branch-rename", scenario=scenario)  %}

In the `rename-this` repo, rename the `login` branch to `feature/login`.
{% endcall %}
</div>
