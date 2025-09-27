{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

1. Ensure you are in the <popover content="If you merged branch `foo` onto branch `bar`, branch `bar` is the _destination branch_">destination branch of the merge</popover>.
1. Do a hard reset of that branch to the commit that would be the tip of that branch had you not done the offending merge i.e., rewind that branch to the state it was in before the merge.

----{.dashed .border-warning}

{{ icon_example }} In the example below, you merged `master` to `feature1`.

<annotate src="{{baseUrl}}/gitAndGithub/merge/images/sourcetreeAfterMeringMaster.png" width="500" >
<a-point x="4%" y="42%" color="yellow" size="18" opacity="0.4" content="Do a hard reset to this commit"/>
</annotate>

If you want to undo that merge,

1. Ensure you are in the `feature1` branch (because that's the destination branch).
1. Reset the `feature1` branch to the commit spotlighted in the screenshot above (because that was the tip of the `feature1` branch before you merged the `master` branch to it).
