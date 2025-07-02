Create a file named `.gitignore` in the working directory root and add the following line in it.

```{heading=".gitignore"}
temp.txt
```

Observe how `temp.text` is no longer detected as 'untracked' by running the `git status` command (but now it will detect the `.gitignore` file as 'untracked'.

Update the `.gitignore` file as follows:

```{heading=".gitignore" highlight-lines="2"}
temp.txt
*.tmp
```

Observe how `.tmp` files are no longer detected as 'untracked' by running the `git status` command.
