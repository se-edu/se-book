{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Able to check out a commit.</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.checkout.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Another useful feature of revision control is to be able to **view the working directory as it was at a specific point in history, by _checking out_** a commit created at that point.
{% endcall %}

**To view the working directory at a specific point in history, you can {{ show_git_term("check out") }} a commit** that was created at that point. When you check out a commit, Git:

1. Updates the files in your working directory to match the state they were in at that commit i.e., overwrites the working directory with the snapshot in the commit.
2. Moves the ref `HEAD` to that specific commit, to indicate that it is the 'current' commit.



Note that if you have uncommitted changes in the working directory, you need to <trigger trigger="click" for="modal:checkout-stash">stash</trigger> them first to prevent them from being overwritten.

<modal large header="Git & GitHub → Stash" id="modal:checkout-stash">
  <include src="../stash/unit-inElsewhere-asPanelBody.md" boilerplate />
</modal>

{{ show_git_tabs('_1') }}

</div>

<div id="extras">
</div>
