

To push the newer commit(s) to the remote, any of the following commands should work:

* `git push origin master`
* `git push origin`<br>
  (due to tracking you set up earlier, Git will assume you are pushing the `master` branch)
* `git push`<br>
  (due to tracking, Git will assume you are pushing to the remote `origin` and to the branch `master` i.e., `origin/master`)

After pushing, the revision graph should look something like the following (note how both local and remote-tracking branch refs are pointing to the same commit again).

```bash {highlight-lines="1['HEAD']@pink,1['master']@#e6fff2,1['origin/master']@#e6fff2"}
e60deae (HEAD -> master, origin/master) Update fruits list
f761ea6 Add colours.txt, shapes.txt
2bedace Add figs to fruits.txt
d5f91de Add fruits.txt
```
