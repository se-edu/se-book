{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can pull branches from a remote repo to a local repo.</span>
<span id="title">{{ trail.remoteBranches.lessons.remoteBranchPull.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
**Branches in a remote can be replicated in the local repo**, and maintained in sync with each other.
{% endcall %}

Sometimes we need to create a local copy of a branch from a remote repository, make further changes to it, and keep it synchronised with the remote branch. Let's explore how to handle this in a few common use cases:

****Use case 1:**** **Working with branches that already existed in the remote repo when you cloned it to your computer.**
<div class="indented-level1">

**When you clone a repository,**

1. **Git checks out the default branch.** You can start working on this branch immediately. This branch is tracking the default branch in the remote, which means you easily synchronise changes in this branch with the remote by pulling and pushing.
1. **Git also _fetches_ all the other branches from the remote.** These other branches are not immediately available as local branches, but they are visible as remote-tracking branches.<br>
   **You can think of remote-tracking branches as read-only references** to the state of those branches in the remote repository at the time of cloning. They allow you to see what work has been done on those branches without yet making local copies of them.<br>
   **To work on one of these branches, you can create a new local branch based on the remote-tracking branch.** Once you do this, your local branch will usually be configured to track the corresponding branch on the remote, so you can easily synchronise your work later.

</div>

//HANDS-ON: examine remote-tracking branches

****Use case 2:**** **Working with branches that were added to the remote repository after you cloned it** %%e.g., a branch someone else pushed to the remote after you cloned%%.

<div class="indented-level1">

**Simply fetch to update your local repository with information about the new branch.** After that, you can create a local copy of it and work with it just as you did in Use Case 1.
</div>


</div>

<div id="extras">
</div>
