{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="preview">

**Comparing branches in Git is useful when you want to understand how two lines of development differ — for example, before merging a branch**, you might want to review what changes it introduces to the main branch.
</div>

Here are two ways to compare two branches:

* Using double-dot notation `git diff branchA..branchB`: This displays changes needed to go from `branchA` to `branchB` (i.e., what `branchB` has that `branchA` doesn’t).
* Using triple-dot notation `git diff branchA...branchB`: This shows the diff between the merge base and `branchB`, highlighting what has changed in `branchB` since it split from `branchA`.
