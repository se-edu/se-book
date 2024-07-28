You can use the `branch` command to create a new branch and the `checkout` command to switch to a specific branch.

```{.no-line-numbers}
$ git branch feature1
$ git checkout feature1
```

One-step shortcut to create a branch and switch to it at the same time:

```{.no-line-numbers}
$ git checkout –b feature1
```
<box type="info" header="The new `switch` command" seamless>

Git recently introduced a [`switch` command](https://git-scm.com/docs/git-switch) that you can use instead of the `checkout` command given above.

To create a new branch and switch to it:
```{.no-line-numbers highlight-lines="2['switch']"}
$ git branch feature1
$ git switch feature1
```
One-step shortcut:

```{.no-line-numbers highlight-lines="1['switch –c']"}
$ git switch –c feature1
```
</box>
