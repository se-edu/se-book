Use the `git push -u <remote-repo-name> <local-branch-name>` to push the commits to a remote repository.
```bash{.no-line-numbers}
git push -u origin master
```
Explanation:

* `push`: the Git sub-command that pushes the current local repo content to a remote repo
* `origin`: name of the remote
* `master`: branch to push
* `-u` (or `--set-upstream`): the flag that tells Git to track that this local `master` is tracking `origin/master` branch
