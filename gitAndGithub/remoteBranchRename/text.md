{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can rename a branch in a remote repo.</span>
<span id="title">{{ trail.remoteBranches.lessons.remoteBranchRename.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Occasionally, you might need to **rename a branch in a remote repo**.
{% endcall %}

**Git does not have a way to rename remote branches in place. Instead, you create a new branch with the desired name and delete the old one.** This involves renaming your local branch to the new name, pushing it to the remote (which effectively creates a new remote branch), and then removing the old branch from the remote. This ensures the remote reflects the updated name while preserving the commit history and any work already done on the branch.

<box type="tip" seamless>

While Git cannot rename a remote branch in place, **[GitHub allows you to rename a branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch) in a remote repo.** If you use this approach, the local repo still needs to be updated to reflect the change.
</box>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Rename branches in a remote")  %}

{{ hp_number(hop_preparation) }} You can use the fork and the clone of the [samplerepo-books](https://github.com/se-edu/samplerepo-books) that you created in {{ show_lesson_link(trail.remoteBranches.lessons.remoteBranchDelete) }}.

{{ hp_number(hop_target) }} **Rename the branch `fantasy`** in the remote (i.e., your fork) to `fantasy-books`.

{{ hp_number("Steps") }}

1. Ensure you are in the `master` branch.
1. Create a local copy of the remote-tracking branch `origin/fantasy`.
1. Rename the local copy of the branch to `fantasy-books`.
1. Push the renamed local branch to the remote, while setting up tracking for the branch as well.
1. Delete the remote branch.

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
git switch master                     # ensure you are on the master branch
git switch -c fantasy origin/fantasy  # create a local copy, tracking the remote branch
git branch -m fantasy fantasy-books   # rename local branch
git push -u origin fantasy-books      # push the new branch to remote, and set it to track
git push origin --delete fantasy      # delete the old branch
```

You can run the `git log --oneline --decorate --graph --all` to check the revision graph after each step. The final outcome should be something like the below:

```bash{.no-line-numbers}
* 355915c (HEAD -> fantasy-books, origin/fantasy-books) Add fantasy.txt
| * 027b2b0 (origin/master, origin/HEAD, master) Merge branch textbooks
|/|
| * a6ebaec (origin/textbooks) Add textbooks.txt
|/
* d462638 Add horror.txt
```

{% endset %}
{% set sourcetree %}

Perform the above steps (each step was covered in a previous lesson).


{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>

<div id="extras">
</div>
