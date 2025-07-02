{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_transformation_columns, show_under_the_hood with context %}


{{ hp_number ('1') }} **Examine the revision tree**, to get your bearing first.
```bash{.no-line-numbers}
git log --oneline --decorate
```
{% call show_output() %}
```bash{.no-line-numbers}
e60deae (HEAD -> master, origin/master) Update fruits list
f761ea6 (tag: v1.0) Add colours.txt, shapes.txt
2bedace (tag: v0.9) Add figs to fruits.txt
d5f91de Add fruits.txt
```
{% endcall %}

{{ hp_number ('2') }} **Use the `checkout <commit-identifier>` command to check out a commit** other than the one currently pointed by `HEAD`. You can use any of the following methods:

* `git checkout v1.0`: checks out the commit tagged `v1.0`
* `git checkout 0023cdd`: checks out the commit with the hash `0023cdd`
* `git checkout HEAD~2`: checks out the commit 2 commits behind the most recent commit.

```bash{.no-line-numbers}
git checkout HEAD~2
```
{% call show_output() %}
```bash{.no-line-numbers}
Note: switching to 'HEAD~2'.

You are in 'detached HEAD' state.
# rest of the warning about the detached head ...

HEAD is now at 2bedace Add figs to fruits.txt
```
{% endcall %}

{{ hp_number ('3') }} **Verify `HEAD` and the working directory have updated** as expected.

* `HEAD` should now be pointing at the target commit
* The working directory should match the state it was in at that commit (e.g., files added after that commit -- such as `shapes.txt` should not be in the folder).

```bash{.no-line-numbers}
git log --one-line --decorate
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1['HEAD']@pink}
2bedace (HEAD, tag: v0.9) Add figs to fruits.txt
d5f91de Add fruits.txt
```
`HEAD` is indeed pointing at the target commit.

But note how the output does not show commits you added _after_ the checked-out commit.
{% endcall %}

<box type="info" seamless>

**The `--all` switch tells `git log` to show commits from _all_ refs**, not just those reachable from the current `HEAD`. This includes commits from other branches, tags, and remotes.
</box>

```bash{.no-line-numbers highlight-lines="1['--all']@yellow"}
git log --one-line --decorate --all
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1,2,['--all']@yellow"}
e60deae (origin/master, master) Update fruits list
f761ea6 (tag: v1.0) Add colours.txt, shapes.txt
2bedace (HEAD, tag: v0.9) Add figs to fruits.txt
d5f91de Add fruits.txt

```
{% endcall %}

{{ hp_number ('4') }} **Go back to the latest commit** by checking out the `master` branch again.

```bash{.no-line-numbers}
git checkout master
```
