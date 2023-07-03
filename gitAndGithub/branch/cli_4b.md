
**If the branch exists in the remote already, and the local branch is already set up to track the corresponding remote branch**, use the command: `git push {remote repository} {branch}`. Examples:<br>
* `git push origin master` pushes the `master` branch to the repo named `origin` (i.e., the repo you cloned from)
* `git push upstream-repo add-intro` pushes the `add-intro` branch to the repo named `upstream-repo`

**If pushing a branch you created locally to the remote for the _first time_**, add the `-u` flag to get the local branch to track the new upstream branch:<br/>
e.g., `git push -u origin add-intro`


{{ icon_resource }} See [git-scm.com/docs/git-push](https://git-scm.com/docs/git-push) for details of the `push` command.
