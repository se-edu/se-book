{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can delete a branch in a remote repo.</span>
<span id="title">{{ trail.remoteBranches.lessons.remoteBranchDelete.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Often, you'll need to **delete a branch in a remote repo** after it has served it purpose.
{% endcall %}

**To delete a branch in a remote repository, you simply tell Git to remove the reference to that branch from the remote.** This does not delete the branch from your local repository — it only removes it from the remote, so others won’t see it anymore. This is useful for cleaning up clutter in the remote repo e.g., delete old or merged branches that are no longer needed on the remote.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Delete (and restore) branches in a remote")  %}

{{ hp_number("1") }} **Fork the [samplerepo-books](https://github.com/se-edu/samplerepo-books)** to your GitHub account. When doing so, ==un-select the `Copy the master branch only` option==.<br>
After forking, go to the fork and ensure all three branches are in there.

{{ hp_number("2") }} **Clone the fork** to your computer.

{{ hp_number("3") }} **Create a local copy of the `fantasy` branch** in your clone.

Follow instructions in {{ show_lesson_link(trail.remoteBranches.lessons.remoteBranchPush) }}.

{{ hp_number("4") }} **Delete the remote branch `fantasy`.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the `git push <remote> --delete <branch>` command to delete a branch in a remote. This is like pushing changes in a branch to a remote, except we request the branch to be deleted instead by adding the `--delete` switch.
```bash{.no-line-numbers}
git push origin --delete fantasy
```
{% endset %}
{% set sourcetree %}

Locate the remote branch under `REMOTES` → `origin`, right-click on the branch name, and choose `Delete...`:

<pic src="{{baseUrl}}/gitAndGithub/remoteBranchDelete/images/sourcetreeRightClickToDelete.png" width="300" />


{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number("5") }} **Verify the branch was deleted** from the remote, by going to the fork on GitHub and checking the branches page `https://github.com/{YOUR_USERNAME}/samplerepo-books/branches`<br> e.g., `https://github.com/johndoe/samplerepo-books/branches`.

**Also verify the local copy has not been deleted**.

{{ hp_number("6") }} **Restore the remote branch from the local copy.**

Push the local branch to the remote, while enabling the tracking option (as if pushing the branch to the remote for the first time), as covered in {{ show_lesson_link(trail.remoteBranches.lessons.remoteBranchPush) }}.

<box type="info" seamless>

In the above steps, we first created a local copy of the branch before deleting it in the remote repo. Doing so is optional.
**You can delete a remote branch without ever checking it out locally** — you just need to know its name on the remote. Deleting the remote branch directly without creating a local copy is **recommended if you simply want to clean up a remote branch you no longer need.**
</box>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
</div>
