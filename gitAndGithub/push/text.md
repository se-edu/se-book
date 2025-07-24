{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.push.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The third step of backing up a local repo on GitHub: **push a copy of the local repo to the remote repo**.

{% endcall %}

**You can {{ show_git_term('push') }} content of one repository to another**. Pushing can transfer Git history (e.g., past commits) as well as files in the working directory. Note that pushing to a remote repo requires you to have write-access to it.

When pushing to a remote repo, you typically need to specify the following information:

* The name of the remote (e.g., `origin`).
* The name of your current local branch (e.g., `master`).

**If this is the first time you are pushing this branch to the remote repo, you can also ask Git to {{ show_git_term("track") }} this remote/branch pairing** (e.g., remember that this local `master` branch is _tracking_ the `master` branch in the <tooltip content="'upstream' is commonly used to refer to the remote repo connected to a local repo">upstream</tooltip> repo `origin` i.e., local `master` branch is tracking upstream `origin/master` branch), so in future you can push the same remote/branch without needing to specify them again.

{% call show_hands_on_practical('Pushing a local repo to an empty remote repo')  %}

Here, we assume you already have a local repo that is connected to an empty remote repo, from previous hands-on practicals:

{{ show_git_tabs('-push-to-empty-remote-fragment') }}

{% endcall %}

**The push command can be used repeatedly to send further updates to another repo** e.g., to update the remote with commits you created since you pushed the first time.

{% call show_hands_on_practical('Pushing to send further updates to a repo')  %}

Add a few more commits to your local repo, and push those commits to the remote repo, as follows:

{{ hp_number ('1') }} **Commit** some changes in your local repo.

{% set cli %} <!-- ------ start: Git Tabs --------------->
Use the `git commit` command to create commits, as you did before.

Optionally, you can run the `git status` command, which should confirm that your local branch is 'ahead' by one commit (i.e., the local branch has one new commit that is not in the corresponding branch in the remote repo).

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
Create a new commit on your local copy of the repo in the `push-this` folder, and push the change to the remote.
{% endcall %}

{{ show_detour('pushToMultipleRepos') }}

</div>
