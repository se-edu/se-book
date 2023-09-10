**To undo the last commit**, right-click on the commit just before it, and choose `Reset current branch to this commit`.

In the next dialog, choose the mode `Mixed - keep working copy but reset index` option. This will make the offending commit disappear but will keep the changes that you included in that commit intact.

<pic eager src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_9.png" />

If you use the `Soft - ...` mode instead, the last commit will be undone as before, but the changes included in that commit will stay in the staging area.

**To delete the last commit entirely** (i.e., undo the commit and also discard the changes included in that commit), do as above but choose the `Hard - ...` mode instead.

**To undo/delete last n commits**, right-click on the commit just before the last n commits, and do as above.
