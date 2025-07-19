{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

When Git initialises a repo in a folder, it does not touch any files in the folder, other than create the `.git` folder its contents. So, reversing the operation is as simple as deleting the newly-created `.git` folder.

```bash{.no-line-numbers}
git status #run this to confirm a repo exists

rm -rf .git  #delete the .git folder

git status #this should give an error, as the repo no longer exists
```
