Open a Git Bash Terminal.

If you installed SourceTree, you can click the `Terminal` button to open a GitBash terminal.

<img src="{{baseUrl}}/gitAndGithub/init/images/cli_1.png" height="100" />
<p/>

Navigate to the `things` directory.

Use the command `git init` which should initialize the repo.

```
$ git init
Initialized empty Git repository in c:/repos/things/.git/
```

You can use the command `ls -a` to view all files, which should show the `.git` directory that was created by the previous command.

```
$ ls -a
.  ..  .git
```

You can also use the `git status` command to check the status of the newly-created repo. It should respond with something like the bellow

```
git status
```
{{ icon_output }}
```
# On branch master
#
# Initial commit
#
nothing to commit (create/copy files and use "git add" to track)
```
