**1. Fetch details from the remote.** e.g., if the remote is named `myfork`

```{.no-line-numbers}
$ git fetch myfork
```

**2. List the branches** to see the name of the branch you want to pull.

```{.no-line-numbers}
$ git branch -a
```
{{ icon_output }}
```{.no-line-numbers}
master
remotes/myfork/master
remotes/myfork/branch1
```
`-a` flag tells Git to list both local and remote branches.

**3. Create a matching local branch and switch to it.**
```{.no-line-numbers}
$ git switch -c branch1 myfork/branch1
```
{{ icon_output }}
```{.no-line-numbers}
Switched to a new branch 'branch1'
branch 'branch1' set up to track 'myfork/branch1'.
```
`-c` flag tells Git to create a new local branch.
