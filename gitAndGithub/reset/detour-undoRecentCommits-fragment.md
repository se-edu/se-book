{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="preview">

**How do you undo or delete the last few commits** if you realise they were incorrect, unnecessary, or done too soon?
</div>

Undoing or deleting recent `n` commits is easily accomplished with Git's `reset` feature.

* **To delete recent `n` commits and discard the those changes entirely, do a `hard` reset** the commit `HEAD~n` e.g.,
  ```bash
  git reset --hard HEAD~3
  ```
* **To undo recent `n` commits, but keep changes staged, do a `soft` reset** the commit `HEAD~n` e.g.,
  ```bash
  git reset --soft HEAD~3
  ```
* **To undo recent `n` commits, and move changes to the working directory, do a `mixe` reset** the commit `HEAD~n` e.g.,
  ```bash
  git reset --mixed HEAD~3
  ```

To do the above for the most recent commit only, use `HEAD~1` (or just `HEAD~`).
