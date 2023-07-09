Open a Git Bash Terminal.

If you installed Sourcetree, you can click the `Terminal` button to open a GitBash terminal (on a Linux/Mac environment, even a regular terminal should do).

<pic src="{{baseUrl}}/gitAndGithub/init/images/cli_1.png" height="100" />
<p/>

Navigate to the `things` directory.<br>
Use the command `git init` which should initialize the repo.

```{.no-line-numbers}
$ cd /c/repos/things
$ git init
```
{{ icon_output }}
```{.no-line-numbers}
Initialized empty Git repository in c:/repos/things/.git/
```

You can use the _list all_ command `ls -a` to view all files, which should show the `.git` directory that was created by the previous command.

```{.no-line-numbers}
$ ls -a
.  ..  .git
```

You can also use the `git status` command to check the status of the newly-created repo. It should respond with something like the following:

```{.no-line-numbers}
$ git status
```
{{ icon_output }}
```{.no-line-numbers}
# On branch master
#
# No commits yet
#
nothing to commit (create/copy files and use "git add" to track)
```
