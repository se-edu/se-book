Optionally, you can run the `git status` command, which should confirm that your local branch is 'ahead' by one commit (i.e., the local branch has one new commit that is not in the corresponding branch in the remote repo).

```bash{.no-line-numbers, highlight-lines="2"}
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

To push the newer commit(s) to the remote, any of the following commands should work:

* `git push origin master`
* `git push origin`<br>
  (due to tracking you set up earlier, Git will assume you are pushing the`master` branch)
* `git push`<br>
  (due to tracking, Git will assume you are pushing to the remote `origin` and to the branch `master` i.e., `origin/master`)

