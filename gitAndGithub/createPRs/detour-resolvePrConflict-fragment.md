{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

**Merge conflicts can happen in ongoing PRs**, when the receiving branch of the upstream repo has been updated in a way that the PR code conflicts with the latest version of that branch. GitHub indicates such conflicts with the message **%%This branch has conflicts that must be resolved%%**.

Here is the standard way to fix this problem:
1. Pull the `master` branch from the upstream repo to your local repo.
   ```{.no-line-numbers}
   git checkout master
   git pull upstream master
   ```
1. In the local repo, attempt to merge the `master` branch (that you updated in the previous step) onto the PR branch, in order to bring over the new code in the `master` branch to your PR branch.
   ```{.no-line-numbers}
   git checkout pr-branch  # assuming pr-branch is the name of branch in the PR
   git merge master
   ```
1. The merge you are attempting will run into a merge conflict, due to the aforementioned conflicting code in the `master` branch.
   Resolve the conflict manually (this topic is covered <trigger trigger="click" for="modal:createPr-mergeConflicts">elsewhere</trigger>), and complete the merge.
1. Push the PR branch to your fork. As the updated code in that branch no longer is conflicting with the `master` branch, the merge conflict alert in the PR will go away automatically.


<modal large header="Git & GitHub → Dealing with merge conflicts →" id="modal:createPr-mergeConflicts">
<include src="../mergeConflicts/text.md"/>
</modal>
