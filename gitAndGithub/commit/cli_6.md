{% from "common/macros.njk" import hp_number, show_output with context %}

**To undo the last commit**, but keep the changes in the staging area, use the following command.

```{.no-line-numbers}
$ git reset --soft HEAD~1
```

To undo the last commit, and remove the changes from the staging area (but not discard the changes), used `--mixed` instead of `--soft`.

```{.no-line-numbers highlight-lines="1['--mixed']"}
$ git reset --mixed HEAD~1
```

**To delete the last commit entirely** (i.e., undo the commit and also discard the changes included in that commit), do as above but use the `--hard` flag instead (i.e., do a hard reset).

```{.no-line-numbers highlight-lines="1['--hard']"}
$ git reset --hard HEAD~1
```

**To undo/delete last n commits**: `HEAD~1` is used to tell Git you are targeting the commit one position before the latest commit -- in this case the target commit is the one we want to reset to, not the one we want to undo (as the command used is `reset`). To undo/delete two last commits, you can use `HEAD~2`, and so on.
