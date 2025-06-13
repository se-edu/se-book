First, let us do a sanity check using the `git status` command.

```bash{.no-line-numbers}
$ git status
```
{{ icon_output }}
```bash{.no-line-numbers}
On branch master

No commits yet

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
  new file:   fruits.txt
```

Now, use the `commit` command to commit. The `-m` switch is used to specify the commit message.

```bash{.no-line-numbers}
$ git commit -m "Add fruits.txt"
```
{{ icon_output }}
```bash{.no-line-numbers}
[master (root-commit) d5f91de] Add fruits.txt
 1 file changed, 5 insertions(+)
 create mode 100644 fruits.txt
 ```

You can use the `git status` command again to verify that the staging area is empty.

```bash{.no-line-numbers}
$ git status
```
{{ icon_output }}
```bash{.no-line-numbers}
On branch master
nothing to commit, working tree clean
```
{{ icon_info }} Note how the output says `nothing to commit` which means the staging area is now empty.


