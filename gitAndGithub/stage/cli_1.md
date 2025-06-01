1. Use the `git status` command to check the status of the working directory.

   ```{.no-line-numbers}
   $ git status
   ```
   {{ icon_output }}
   ```{.no-line-numbers}
   On branch master

   No commits yet

   Untracked files:
     (use "git add <file>..." to include in what will be committed)

     fruits.txt
   nothing added to commit but untracked files present (use "git add" to track)
   ```

2. Use the `add` command to tell Git to track the file.

   ```{.no-line-numbers}
   $ git add fruits.txt
   ```

   <box type="tip" seamless>

   You can replace the `add` with `stage` (e.g., `git stage fruits.txt`) and the result is the same (they are synonyms).
   </box>

3. Now, check the status again. You can see the file is no longer 'untracked'.

   ```{.no-line-numbers}
   $ git status
   ```
   {{ icon_output }}
   ```{.no-line-numbers}
   On branch master

   No commits yet

   Changes to be committed:
     (use "git rm --cached <file>..." to unstage)

         new file:   fruits.txt

   ```
   {{ icon_info }} As before, don't worry if you don't understand the content of the output (we'll unpack it in a later lesson). The point to note is that the file is no longer listed as 'untracked'.
