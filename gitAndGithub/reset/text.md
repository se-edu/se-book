{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_tour_link, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can reset Git history.</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.reset.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git can also **_reset_ the revision history to a specific point** so that you can start over from that point.
{% endcall %}

Suppose you realise your last few commits have gone in the wrong direction, and you want to go back to an earlier commit and continue from there — as if the “bad” commits never happened. Git’s _reset_ feature can help you do that.

**Git {{ show_git_term("reset") }} moves the {{ show_git_term('tip', 'reset') }} of the current branch to a specific commit**, optionally adjusting your staged and unstaged changes to match. **This effectively rewrites the branch's history** by discarding any commits that came after that point.

{{ show_git_term_tip('tip', 'reset') }}

Resetting is different from the _checkout_ feature:

* Reset: Lets you start over from a past state. It rewrites history by moving the branch ref to a new location.
* Checkout: Lets you explore a past state _without_ rewriting history. It just moves the `HEAD` ref.

{% set a %}
{{ show_commit('C3', desc=show_ref('master') + show_head() + " <small>(original _tip_ of the branch)</small>") }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>
{% endset %}
{% set b %}<small>%%[reset to `C2`...]%%</small> {% endset %}
{% set c %}
{{ show_commit('C3', style="light", desc="<small><md>#r#commit no longer in the `master` branch!##</md></small>") }}
{{ show_commit('C2', desc=show_ref('master') + show_head() + " <small>(the new _tip_)</small>") }}
{{ show_commit('C1', edge='') }}
<p/>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

**There are three types of resets: soft, mixed, hard.** All three move the branch pointer to a new commit, but they vary based on what happens to the staging area and the working directory.

* {{ show_git_term("soft reset") }}: Moves the cumulative changes from the discarded commits in to the staging area, waiting to be committed again. Any staged and unstaged changes that existed before the reset will remain untouched.
* {{ show_git_term("mixed reset") }}: Cumulative changes from the discarded commits, and any existing staged changes, are moved into the working directory.
* {{ show_git_term("hard reset") }}: All staged and unstaged changes are discarded. Both the working directory and the staging area are aligned with the target commit (as if no changes were done after that commit).


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Resetting to past commits")  %}

{{ hp_number(hop_preparation) }} **First, set the stage** as follows (e.g., in the `things` repo):<br>
i) Add four commits that are supposedly 'bad' commits.<br>
ii) Do a 'bad' change to one file and stage it.<br>
iii) Do a 'bad' change to another file, but don't stage it.

{{ show_commit('B4', style="dark", desc=show_ref('master') + show_head(), msg='Add incorrect.txt') }}
{{ show_commit('B3', style="dark", msg='Incorrectly update fruits.txt') }}
{{ show_commit('B2', style="dark", msg='Incorrectly update shapes.txt') }}
{{ show_commit('B1', style="dark", msg='Incorrectly update colours.txt') }}
{{ show_commit('C4', msg='Update fruits list') }}
<p/>

{{ icon_tip }} The following commands can be used to add commits `B1`-`B4`:
```bash
echo "bad colour" >> colours.txt
git commit -am "Incorrectly update colours.txt"

echo "bad shape" >> shapes.txt
git commit -am "Incorrectly update shapes.txt"

echo "bad fruit" >> fruits.txt
git commit -am "Incorrectly update fruits.txt"

echo "bad line" >> incorrect.txt
git add incorrect.txt
git commit -m "Add incorrect.txt"

echo "another bad colour" >> colours.txt
git add colours.txt

echo "another bad shape" >> shapes.txt
```

Now we have some 'bad' commits and some 'bad' changes in both the staging area and the working directory. Let's use the reset feature to get rid of all of them, but do it in three steps so that you can learn all three types of resets.

{{ hp_number ('1') }} **Do a _soft_ reset to `B2`** (i.e., discard last two commits). Verify,

* the `master` branch is now pointing at `B2`, and,
* the changes that were in the discarded commits (i.e., `B3` and `B4`) are now in the staging area.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git reset --soft <commit>` command to do a soft reset.

```bash
git reset --soft HEAD~2
```
You can run the following commands to verify the current status of the repo is as expected.

```bash
git status                    # check overall status
git log --oneline --decorate  # check the branch tip
git diff                      # check unstaged changes
git diff --staged             # check staged changes
```
{% endset %}
{% set sourcetree %}

Right-click on the commit that you want to reset to, and choose `Reset <branch-name> to this commit` option.

<pic src="images/sourcetreeResetBranchToCommit.png" width="400" />

In the next dialog, choose `Soft - keep all local changes`.

<pic src="images/sourcetreeResetDialog.png" width="400" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('2') }} **Do a _mixed_ reset to commit `B1`**. Verify,

* the `master` branch is now pointing at `B1`.
* the staging area is empty.
* the accumulated changes from all three discarded commits (including those from the previous soft reset) are now appearing as unstaged changes in the working directory.<br>
  Note how `incorrect.txt` appears as an 'untracked' file -- this is because unstaging a change of type 'add file' results in an untracked file.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git reset --mixed <commit>` command to do a mixed reset. The `--mixed` flag is the default, and can be omitted.

```bash
git reset HEAD~1
```
Verify the repo status, as before.
{% endset %}
{% set sourcetree %}

Similar to the previous reset, but choose the `Mixed - keep working copy but reset index` option in the reset dialog.

<pic src="images/sourcetreeResetDialogMixed.png" width="400" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Do a _hard_ reset to commit `C4`**. Verify,

* the `master` branch is now pointing at `C4` i.e., all 'bad' commits are gone.
* the staging area is empty.
* there are no unstaged changes (except for the untracked files `incorrect.txt` -- Git leaves untracked files alone, as untracked files are not meant to be under Git's control).

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git --hard reset <commit>` command.

```bash
git reset --hard HEAD~1
```
Verify the repo status, as before.
{% endset %}
{% set sourcetree %}

Similar to the previous reset, but choose the `Hard - discard all working copy changes` option.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**Rewriting history can cause your local repo to {{ show_git_term("diverge") }} from its remote counterpart.** For example, if you discard earlier commits and create new ones in their place, and you’ve already pushed the original commits to a remote repository, your local branch history will no longer match the corresponding remote branch. Git refers to this as a diverged history.

To protect the integrity of the remote, Git will reject attempts to push a diverged branch using a normal push. If you want **to _overwrite_ the remote history with your local version, you must perform a {{ show_git_term("force push") }}**.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Force-push commits")  %}

{{ hp_number(hop_preparation) }} **Choose a local-remote repo pair under your control** e.g., the `things` repo from {{ show_tour_link(trail.backingUpOnCloud) }}.

{{ hp_number("1") }} **Rewrite the last commit**: Reset the current branch back by one commit, and add a new commit.<br>
For example, you can use the following commands.

```bash
git reset --hard HEAD~1
echo "water" >> drinks.txt
git add .
git commit -m "Add drinks.txt"
```

{{ hp_number("2") }} **Observe how the local branch is diverged**.
```bash
git log --oneline --graph --all
```
{% call show_output() %}
```bash
* fc1d04e (HEAD -> master) Add drinks.txt
| * e60deae (upstream/master, origin/master) Update fruits list
|/
* f761ea6 (tag: v1.0) Add colours.txt, shapes.txt
* 2bedace (tag: v0.9) Add figs to fruits.txt
* d5f91de Add fruits.txt
```
{% endcall %}


{{ hp_number("3") }} **Attempt to push to the remote.** Observe Git rejects the push.

```bash
git push origin master
```
{% call show_output() %}
```bash
To https://github.com/.../things.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/.../things.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: ...
```
{% endcall %}

{{ hp_number("4") }} **Do a force-push.**

You can use the `--force` (or `-f`) flag to force push.

```bash
git push -f origin master
```

<box type="tip" seamless>

**A safer alternative to `--force` is `--force-with-lease`** which overwrites the remote branch only if it hasn’t changed since you last fetched it (i.e., only if remote doesn't have recent changes that you are unaware of):
```bash
git push --force-with-lease origin master
```
</box>


<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>

<div id="extras">
{{ show_detour('resetUncommitedChanges') }}
{{ show_detour_preview('updateLastCommit') }}
{{ show_detour('undoRecentCommits') }}
{{ show_detour('resetTrackingBranch') }}
</div>
