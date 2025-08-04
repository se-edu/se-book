{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

**Adding a file to the `.gitignore` file is not enough if the file was already being tracked** by Git in previous commits. In such cases, you need to do both of the following:

1. **{{ show_git_term("Untrack") }} the file (i.e., remove the file from the staging area and stop tracking it in future)**, using the `git rm --cached <file(s)>` command.
   ```bash
   git rm --cached data/ic.txt
   ```
1. **Add it to the `.gitignore`** file, as usual.

