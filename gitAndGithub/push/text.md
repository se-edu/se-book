{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.push.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The third step of backing up a local repo on GitHub: **push a copy of the local repo to the remote repo**.

{% endcall %}

**You can {{ show_git_term('push') }} content of one repository to another**, usually from your local repo to a remote repo. Pushing transfers recorded Git history (such as past commits), but it does not transfer unstaged changes or untracked files.

* **To push, you need to have <tooltip content="permission to update contents on the remote">write-access</tooltip> to the remote repo**.
* **Pushing is performed one branch at a time**; you must specify which branch you want to push.

**You can configure Git to {{ show_git_term("track") }} a pairing between a local branch and a remote branch**, so in future you can push from the same local branch to the corresponding remote branch without needing to specify them again. For example, you can set your local `master` branch to _track_ the `master` branch on the remote repo `origin` i.e., local `master` branch will track the <tooltip content="'upstream' is commonly used to refer to the remote repo connected to a local repo">upstream</tooltip> branch `origin/master`.

{{ show_commit('C3', desc=show_ref('master') + show_head() + show_ref('origin/master')) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

In the revision graph above, you see a new type of ref ({{ show_ref('origin/master') }}). This is a {{ show_git_term("remote-tracking branch") }} **ref that represents the state of a corresponding branch in a remote repository** (if you previously set up the branch to 'track' a remote branch). In this example, the `master` branch in the remote `origin` is also at the commit `C3` (which means you have not created new commits after you pushed to the remote).

If you now create a new commit `C4`, the state of the revision graph will be as follows:

{{ show_commit('#y#C4##', desc=show_ref('master')  + show_head(), style="primary") }}
{{ show_commit('C3', desc= show_ref('origin/master')) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

Explanation: When you create `C4`, the current branch `master` moves to `C4`, and `HEAD` moves along with it. However, the `master` branch in the remote `origin` remains at `C3` (because you have not pushed `C4` yet). That is, the remote-tracking branch `origin/master` is _one commit {{ show_git_term("behind") }}_ the local branch `master` (or, the local branch is _one commit {{ show_git_term("ahead") }}_). The `origin/master` ref will move to `C4` only after you push your local branch to the remote again.

{% call show_hands_on_practical('Pushing a local repo to an empty remote repo')  %}

{{ hp_number(hop_preparation) }} Use a local repo that is connected to an empty remote repo e.g., the `things` repo from previous hands-on practicals:

{{ hp_number("1") }} **Push the `master` branch** to the remote. **Also instruct Git to track this branch pair**.

{{ show_git_tabs('-push-to-empty-remote-fragment') }}

{{ hp_number("2") }} **Observe the remote-tracking branch** `origin/master` is now pointing at the same commit as the `master` branch.
{{ show_git_tabs('-after-pushing-to-empty-remote-fragment') }}

{% endcall %}

**The push command can be used repeatedly to send further updates to another repo** e.g., to update the remote with commits you created since you pushed the first time.

{% call show_hands_on_practical('Pushing to send further updates to a repo')  %}

{{ hp_number(hop_target) }} Add a few more commits to the same local repo, and push those commits to the remote repo.

{{ hp_number ('1') }} **Commit** some changes in your local repo.

{% set cli %} <!-- ------ start: Git Tabs --------------->
Use the `git commit` command to create commits, as you did before.

Optionally, you can run the `git status` command, which should confirm that your local branch is 'ahead' by one commit (i.e., the local branch has commits that are not present in the corresponding branch in the remote repo).

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash {highlight-lines="2"}
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```
{% endcall %}

You can also use the `git log --oneline --graph` command to see where the branch refs are. Note how the remote-tracking branch `origin/master` is one commit behind the local `master`.

```bash {highlight-lines="1['HEAD']@pink,1['master']@#e6fff2,2['origin/master']@#e6fff2"}
e60deae (HEAD -> master) Update fruits list
f761ea6 (origin/master) Add colours.txt, shapes.txt
2bedace Add figs to fruits.txt
d5f91de Add fruits.txt
```
{% endset %}
{% set sourcetree %}
Create commits as you did before.

Before pushing the new commit, Sourcetree will indicate that your local branch is 'ahead' by one commit (i.e., the local branch has one new commit that is not in the corresponding branch in the remote repo).

<pic eager src="{{baseUrl}}/gitAndGithub/push/images/sourcetreeLocalBranchAhead.png" height="100" />
<p/>

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->


{{ hp_number ('2') }} **Push** the new commits to your fork on GitHub.

{{ show_git_tabs('-subsequent-push-fragment') }}

{% endcall %}


**Note that you can push between two repos only if those repos have a shared history** among them (i.e., one should have been created by copying the other).

</div>

<div id="extras">
{% call show_exercise("push-over") %}
Create a new commit on the `main` branch of the local repo in `push-this` folder, and push the updated `main` branch to the remote.
{% endcall %}

{{ show_detour('pushToMultipleRepos') }}

</div>
