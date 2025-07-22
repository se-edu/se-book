{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

**To change the URL of a remote** (e.g., origin), use `git remote set-url <remote-name> <new-url>` e.g.,
```bash
git remote set-url origin https://github.com/user/repo.git
```

**To rename a remote**, use `git remote rename <old-name> <new-name>` e.g.,
```bash
git remote rename origin upstream
```

**To delete a remote** from your Git repository, use `git remote remove <remote-name>` e.g.,
```bash
git remote remove origin
```

**To check the current remotes** and their URLs, use:
```
git remote -v
```
