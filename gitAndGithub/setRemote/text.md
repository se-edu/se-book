{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}


<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can link a local repo with a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.setRemote.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The second step of backing up a local repo on GitHub: **link the _local_ repo with the _remote_ repo** on GitHub.
{% endcall %}

**A Git {{ show_git_term('remote') }} is a reference to a repository hosted elsewhere**, usually on a server like GitHub, GitLab, or Bitbucket. It allows your local Git repo to communicate with another remote copy — for example, to upload to commits that you created locally but missing in the remote copy.

**By _adding a remote_, you are informing the local repo details of a remote repo it can communicate with**, for example, where the repo exists, what name to use to refer to the remote, and which network protocol to use to communicate with it (e.g., HTTPS vs SSH).

**A Git repo can have multiple remotes.** You simply need to specify different names for each remote (e.g., `upstream`, `central`, `production`, `other-backup` ...).

{% call show_hands_on_practical('Add a remote to a repo')  %}

Add the empty remote repo you created on GitHub as a remote of a local repo you have.

{% set cli %} <!-- ------ start: Git Tabs --------------->
{{ hp_number ('1') }} In a terminal, navigate to the folder containing the local repo `things` your created earlier.

{{ hp_number ('2') }} **List the current list of remotes** using the `git remote -v` command, for a sanity check. No output is expected if there are no remotes yet.

{{ hp_number ('3') }} **Add a new remote repo** using the `git remote add <remote-name> <remote-url>` command.<br>
   i.e., `git remote add origin https://github.com/{YOUR-GITHUB-USERNAME}/things.git`

{{ hp_number ('4') }} **List the remotes again to verify** the new remote was added.

```bash {.no-line-numbers}
git remote -v
```
{% call show_output() %}
```{.no-line-numbers  highlight-lines="1['origin'],1['fetch'],2['origin'],2['push']"}
origin  https://github.com/johndoe/things.git (fetch)
origin  https://github.com/johndoe/things.git (push)
```
{% endcall %}

{{ icon_info }} The same remote will be listed twice, to show that you can do two operations (`fetch` and `push`) using this remote. You can ignore that for now. The important thing is the remote you added is being listed.

{% endset %}
{% set sourcetree %}

{{ hp_number('1') }} **Open the local repo** in Sourcetree.

{{ hp_number('2') }} **Choose `Repository` → `Repository Settings`** menu option.

{{ hp_number('3') }} **Add a new _remote_** to the repo with the following values.

   <pic eager src="images/fillRemoteInfoForSourceTree.png" width="450" />

   * `Remote name`: the name you want to assign to the remote repo i.e., `origin`
   * `URL/path`: the URL of your remote repo<br>
     i.e., `https://github.com/{YOUR-GITHUB-USERNAME}/things.git`
   * `Username`: your GitHub username<br><br>

{{ hp_number('4') }} **Verify the remote was added** by going to `Repository` → `Repository Settings` again.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
{{ hp_number('5') }} **Add another _remote_**, to verify that a repo can have multiple remotes. You can use any name (e.g., `backup` and any URL for this).
{% endcall %}

</div>

<div id="extras">
{% call show_exercise("link-me") %}
Add the `git-mastery/link-me` repository as the `upstream` remote for the `link-this` repository.
{% endcall %}
</div>
