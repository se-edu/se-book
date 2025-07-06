{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.workingWithRemotes.lessons.pull.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When there are new changes in the remote, you need to **_pull_ those changes down to your local repo**.
{% endcall %}

**There are two steps to bringing down changes from a remote repository into a local repository: _fetch_ and _merge_.**

* **{{ show_git_term("Fetch") }} is the act of downloading the latest changes from the remote repository, but without applying them to your current branch yet.** It updates your local copy of the remote branches so you can see what has changed remotely, but your own work and branch remain untouched.
* **{{ show_git_term("Merge") }} is what you do after fetching, to actually incorporate the fetched changes into your current branch.** It combines your work with the changes from the remote branch, creating a new commit if needed.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Fetch and merge from a remote")  %}

{{ hp_number ('1') }} **Set the stage by simulating the remote having newer commits** than a local repo (e.g., the `things` repo). We do this by 'rewinding' the local repo into a state it was in two commits before, as given below.

<panel header="**Rewinding a repo to fall behind the remote repo**{.text-info}" expanded>

Here are the steps to make the local repo fall two commits behind the remote repo:

**Step 1:**{.text-info} **Push commits in the local repo to the remote**, if you haven't done so already.<br>
%%Reason: to ensure the commits that we discard are still present in the remote repo.%%<br>
```bash{.no-line-numbers}
git push origin master
```

**Step 2:**{.text-info} **Move back the current branch ref** by two commits.
```bash{.no-line-numbers}
git reset --hard HEAD~2
```
{% set a %}
{{ show_commit('C4', msg='Update fruits list', desc=show_ref('master') + show_head() + show_ref('origin/master')) }}
{{ show_commit('C3', msg='Add colors.txt, shapes.txt', desc=show_tag('v1.0')) }}
{{ show_commit('C2', msg='Add figs to fruits.txt', desc=show_tag('v0.9')) }}
{{ show_commit('C1', msg='Add fruits.txt', edge='') }}
{% endset %}
{% set b %}{% endset %}
{% set c %}
{{ show_commit('C4', desc=show_ref('origin/master')) }}
{{ show_commit('C3', desc=show_tag('v1.0')) }}
{{ show_commit('C2', desc=show_ref('master') + show_head() + show_tag('v0.9')) }}
{{ show_commit('C1', edge='') }}
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<p/>

**Step 3:**{.text-info} **Move back the remote-tracking branch ref** by two commits.
```bash{.no-line-numbers}
git update-ref refs/remotes/origin/master HEAD
```

{% set a %}
{{ show_commit('C4', desc=show_ref('origin/master')) }}
{{ show_commit('C3', desc=show_tag('v1.0')) }}
{{ show_commit('C2', desc=show_ref('master') + show_head() + show_tag('v0.9')) }}
{{ show_commit('C1', edge='') }}
{% endset %}
{% set b %}{% endset %}
{% set c %}
{{ show_commit('  ', style='light') }}
{{ show_commit('C3', style='secondary', desc=show_tag('v1.0')) }}
{{ show_commit('C2', desc=show_ref('master') + show_head() + show_ref('origin/master') + ' ' + show_tag('v0.9')) }}
{{ show_commit('C1', edge='') }}
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<p/>

<box type="info" header="More on the `update-ref` command ...{.text-info}" seamless>

* What it does: The `git update-ref refs/remotes/origin/master HEAD` commands resets the remote-tracking branch ref `origin/master` to follow the current `HEAD`, effectively making the repo 'forget' that it previously pushed two more commits to the remote.
* What it is: `update-ref` is an example of what are known as Git {{ show_git_term("plumbing commands") }} -- lower-level commands used by Git internally. In contrast, day-to-day Git commands (such as `commit`, `log`, `push` etc.) are known as {{ show_git_term("porcelain commands") }} (as in, in bathrooms we see the porcelain parts but not the plumbing parts that works below the surface to make everything work).
</box>

Here are the three commands, for ease of copying:

```bash{.no-line-numbers}
git push origin master
git reset --hard HEAD~2
git update-ref refs/remotes/origin/master HEAD
```
</panel>
<p/>

{{ hp_number ('2') }} **Confirm the local repo is unaware of the missing two commits**. Now, your local repo state is exactly how it would be if you had cloned the repo 2 commits ago i.e., it is like somebody has added two more commits to the remote repo _after_ you cloned it.

{% set cli %} <!-- ------ start: Git Tabs --------------->
A `git status` command will now report that `Your branch is up to date with 'origin/master'`, proving that the local repo is unaware that the remote repo has two extra commits. The `log` command shows that the current branch does not have the two commits we discarded earlier.
```bash{.no-line-numbers}
git status
git log --oneline --decorate
```
However, if you add the `--all` switch to the `log` command, you will see one more commit.
```bash{.no-line-numbers highlight-lines="1['--all']"}
git log --oneline --decorate --all
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1"}
f761ea6 (tag: v1.0) Add colours.txt, shapes.txt
2bedace (HEAD -> master, tag: v0.9, origin/master) Add figs to fruits.txt
d5f91de Add fruits.txt
```
{% endcall %}

What does the `--all` switch do? It makes the output include all reachable commits, not just the commits in the current branch.<br>
Why does it show an extra commit in the output here? Although we got rid of two commits from the `master` branch, in this example, one of those commits is still reachable via the tag `v1.0`, which makes it part of the visible revision graph. However, it is not part of the `master` branch.
{% endset %}
{% set sourcetree %}
This is what you should see in the revision graph:

<pic src="images/sourcetreeStartingPoint.png" width="500" />

Observe how the local branch ref `master` and the remote-tracking branch ref `origin/master` have moved back two commits.

Why does the revision graph show an extra commit (the one at the top)? Although we got rid of two commits from the `master` branch, in this example, one of those commits is still reachable by the tag `v1.0`, which makes it part of the revision graph. However, it is not part of the `master` branch.

Are you seeing something like the below instead (i.e., `origin/master`)? In that case, the Sourcetree could be auto-fetching from the remotes periodically, making the repo automatically aware that it is behind the remote.

<pic src="images/sourcetreeAfterFetching.png" width="500" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Fetch from the remote.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git fetch <remote>` command to fetch changes from a remote. If the remote is not specified, the default remote `origin` will be used.

```bash{.no-line-numbers}
git fetch origin
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="2['2bedace..e60deae']"}
From https://github.com/.../things
   2bedace..e60deae  master     -> origin/master
```
Observe that Git reports fetching a commit range (i.e., `SHA..SHA`) from the remote.
{% endcall %}

{% endset %}
{% set sourcetree %}
Click on the `Fetch` button on the top menu:<br>
<annotate src="images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
  <a-point x="45%" y="5%" content="Look within this box">
    <div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
  </a-point>
</annotate>

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('4') }} **Verify the fetch worked** i.e., the local repo is now aware of the two missing commits. Also observe how the tip of the `master` branch, the staging area, and the working directory remain unchanged after the fetch.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git status` command to confirm the repo now knows that it is behind the remote repo.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="2[:50]"}
On branch master
Your branch is behind 'origin/master' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

nothing to commit, working tree clean
```
{% endcall %}

{% endset %}
{% set sourcetree %}

Now, the revision graph should look something like the below. Note how the `origin/master` ref is now two commits ahead of the `master` ref.

<pic src="images/sourcetreeAfterFetching.png" width="500" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('5') }} **Merge the fetched changes.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git merge <remote-tracking-branch>` command to merge the fetched changes. Check the status and the revision graph to verify the branch tip has now moved by two more commits.

```bash{.no-line-numbers}
git merge origin/master

git status
git log --oneline --decorate
```
{% endset %}
{% set sourcetree %}
To merge the fetched changes, right-click on the latest commit on `origin/remote` branch and choose `Merge`.

<pic src="images/sourcetreeRightClickToMerge.png" width="500" />

In the next dialog, choose as follows:<br>
<pic src="images/sourcetreeMergeDialog.png" width="500" />

The final result should be something like the below (same as the repo state before we started this hands-on practical):<br>
<pic src="images/sourcetreeAfterMerging.png" width="500" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ icon_warning }} Note that merging the fetched changes can get complicated if there are multiple branches or the commits in the local repo conflicts with commits in the remote repo. We will address them when we learn more about Git branches, in a later lesson.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


**{{ show_git_term("Pull") }} is a shortcut that combines fetch and merge** — it fetches the latest changes from the remote and immediately merges them into your current branch. In practice, Git users typically use the pull instead of the fetch and merge.

<box type="info" seamless>

{{ show_git_term("pull") }} = {{ show_git_term("fetch") }} + {{ show_git_term("merge") }}
</box>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Pull from a remote")  %}

{{ hp_number ('1') }} **Similar to previous hands-on practical, set simulate the remote having two newer commits** than a local repo.

{{ hp_number ('2') }} **Pull the newer commits from the remote**, instead of a fetch followed by a merge.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git pull <remote> <branch>` command to pull changes.

```bash{.no-line-numbers}
git pull origin master
```
The following works too. If the `<remote>` and `<branch>` are not specified, Git will pull to the current branch from the remote branch it is tracking.
```bash{.no-line-numbers}
git pull
```
{% endset %}
{% set sourcetree %}
Click on the `Pull` button on the top menu:<br>
<annotate src="images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
<a-point x="24%" y="5%" content="Look within this box">
<div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>

<p/>
In the next dialog, choose as follows:<br>
<pic src="images/sourcetreePullDialog.png" width="500" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Verify the outcome** is same as the fetch + merge steps you did in the previous hands-on practical.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
</div>
