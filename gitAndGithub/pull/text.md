{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Can fetch/pull from a remote repository.</span>
<span id="title">{{ trail.workingWithRemotes.lessons.pull.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When there are new changes in the remote, you need to **_pull_ those changes down to your local repo**.
{% endcall %}

**There are two steps to bringing over changes from a remote repository into a local repository: _fetch_ and _merge_.**

* **{{ show_git_term("Fetch") }} is the act of downloading the latest changes from the remote repository, but without applying them to your current branch yet.** It updates metadata in your repo so that it knows what has changed in the remote repo, but your own local branch remains untouched.
* **{{ show_git_term("Merge") }} is what you do after fetching, to actually incorporate the fetched changes into your local branch.** It combines your local branch with the changes from the corresponding branch from the remote repo.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Fetch and merge from a remote")  %}

{{ hp_number ('1') }} **Clone the repo [se-edu/samplerepo-finances](https://github.com/se-edu/samplerepo-finances)**. It has 3 commits. Your clone now has a remote `origin` pointing to the remote repo you cloned from.

{{ hp_number ('2') }} **Change the remote `origin`** to point to [samplerepo-finances-2](https://github.com/se-edu/samplerepo-finances-2.git). This remote repo is a copy of the one you cloned, but it has two extra commits.

{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git remote set-url origin https://github.com/se-edu/samplerepo-finances-2.git
```
{% endset %}
{% set sourcetree %}
Go to `Repository` → `Repository settings ...` to update remotes.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Verify the local repo is unaware of the extra commits** in the remote.

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="2"}
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```
{% endcall %}

{% endset %}
{% set sourcetree %}
The revision graph should look like the below:

<pic src="images/sourcetreeStartingPoint.png" width="500" />
<p/>

If it looks like the below, it is possible that Sourcetree is auto-fetching data from the repo periodically.

<pic src="images/sourcetreeAfterFetching.png" width="500" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->


{{ hp_number ('4') }} **Fetch from the new remote.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git fetch <remote>` command to fetch changes from a remote. If the `<remote>` is not specified, the default remote `origin` will be used.

```bash{.no-line-numbers}
git fetch origin
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="2['2bedace..e60deae']"}
remote: Enumerating objects: 8, done.
... # more output ...
   afbe966..cc6a151  master     -> origin/master
 * [new tag]         beta       -> beta
```
{% endcall %}

{% endset %}
{% set sourcetree %}
Click on the `Fetch` button on the top menu:<br>
<annotate src="{{baseUrl}}/gitAndGithub/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
  <a-point x="45%" y="5%" content="Look within this box">
    <div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
  </a-point>
</annotate>

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('5') }} **Verify the fetch worked** i.e., the local repo is now aware of the two missing commits. Also observe how the local branch ref of the `master` branch, the staging area, and the working directory remain unchanged after the fetch.

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

{{ hp_number ('6') }} **Merge the fetched changes.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git merge <remote-tracking-branch>` command to merge the fetched changes. Check the status and the revision graph to verify that the branch tip has now moved by two more commits.

```bash{.no-line-numbers}
git merge origin/master

git status
git log --oneline --decorate
```
{% endset %}
{% set sourcetree %}
To merge the fetched changes, right-click on the latest commit on `origin/remote` branch and choose `Merge`.

<pic src="images/sourcetreeRightClickToMerge.png" width="400" />

In the next dialog, choose as follows:<br>
<pic src="images/sourcetreeMergeDialog.png" width="500" />

The final result should be something like the below (same as the repo state before we started this hands-on practical):<br>
<pic src="images/sourcetreeAfterMerging.png" width="500" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ icon_warning }} Note that merging the fetched changes can get complicated if there are multiple branches or the commits in the local repo conflict with commits in the remote repo. We will address them when we learn more about Git branches, in a later lesson.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


**{{ show_git_term("Pull") }} is a shortcut that combines fetch and merge** — it fetches the latest changes from the remote and immediately merges them into your current branch. In practice, Git users typically use the pull instead of the fetch-then-merge.

<box type="info" seamless>

{{ show_git_term("pull") }} = {{ show_git_term("fetch") }} + {{ show_git_term("merge") }}
</box>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Pull from a remote")  %}

{{ hp_number ('1') }} **Similar to the previous hands-on practical, clone the repo** [se-edu/samplerepo-finances](https://github.com/se-edu/samplerepo-finances) (to a new location).<br>
**Change the remote** `origin` to point to [samplerepo-finances-2](https://github.com/se-edu/samplerepo-finances-2.git).

{{ hp_number ('2') }} **Pull the newer commits from the remote**, instead of a fetch-then-merge.

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
<annotate src="{{baseUrl}}/gitAndGithub/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
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

**You can pull from any number of remote repos**, provided the repos involved have a shared history. This can be useful when the upstream repo you forked from has some new commits that you wish to bring over to your copies of the repo (i.e., your fork and your local repo).

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Sync your repos with the upstream repo")  %}

{{ hp_number(hop_preparation) }} **Fork [se-edu/samplerepo-finances](https://github.com/se-edu/samplerepo-finances)** to your GitHub account.<br>
**Clone your fork to your computer**.<br>
Now, let's pretend that there are some new commits in upstream repo that you would like to bring over to your fork, and your local repo. Here are the steps:

{{ hp_number ('1') }} **Add the upstream repo [se-edu/samplerepo-finances](https://github.com/se-edu/samplerepo-finances) as remote** named `upstream` in your local repo.

<box type="tip" seamless>

Adding remotes was covered in {{ show_lesson_link(trail.backingUpOnCloud.lessons.setRemote) }}
</box>

{{ hp_number ('2') }} **Pull from the upstream repo.** If there are new commits (in this case, there will be none), those will come over to your local repo. For example:
```bash{.no-line-numbers}
git pull upstream master
```

{{ hp_number ('3') }} **Push to your fork.** Any new commits you pulled from the upstream repo will now appear in your fork as well. For example:
```bash{.no-line-numbers}
git push origin master
```
<box type="info" seamless>

The method given above is the more 'standard' method of synchronising a fork with the upstream repo. In addition, platforms such as GitHub can provide other ways (example: GitHub's [Sync fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) feature).
</box>

{{ hp_number ('4') }} **For good measure, let's pull from another repo.**<br>

* Add the upstream repo [se-edu/samplerepo-finances-2](https://github.com/se-edu/samplerepo-finances-2) as remote named `other-upstream` in your local repo.{ texts="['4.1)','4.2)','4.3)']" }
* Pull from it to your local repo; this will bring some new commits.<br>
* Now, you can push those new commits to your fork.

```bash
git remote add other-upstream https://github.com/se-edu/samplerepo-finances-2.git
git pull other-upstream master
git push origin master
```


{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
{% call show_exercise("fetch-and-pull")  %}

You have been given a clone of the [git-mastery/gm-shapes](https://github.com/git-mastery/gm-shapes) repo.

1. Another developer Alice has created a remote copy of this repo at https://github.com/git-mastery/gm-shapes-alice which seems to have an additional commit in the `main` branch.
   * Add that repo as a remote named `alice-upstream`.
   * Bring over Alice's additional commit to your repo.
2. Alice's friend Bob has copied Alice's repo to https://github.com/git-mastery/gm-shapes-bob, and added one more commit.
   * Add that repo as another remote named `bob-upstream`.
   * Download the metadata about this new commit (i.e., fetch, not pull or merge) to your repo.

{% endcall %}
{{ show_detour('pullingFromMultipleRemotes') }}

</div>
