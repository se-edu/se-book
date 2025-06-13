Use the `git status` command to check the status of the working directory.

   ```{.no-line-numbers}
   $ git status
   ```
   {{ icon_output }}
   ```{.no-line-numbers highlight-lines="7,12"}
   On branch master

   No commits yet

   Changes to be committed:
   (use "git rm --cached <file>..." to unstage)
   new file:   fruits.txt

   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)
   modified:   fruits.txt
   ```

   Note how `fruits.txt` now appears twice, once as `new file: ...` (representing the  version of the file we staged earlier, which had only three lines) and once as `modified: ...` (representing the latest version of the file which now has a fourth line).
