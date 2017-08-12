Double-click the commit you want to load to the working directory, or right-click on that commit and choose `Checkout...`.

Click `OK` to the warning about ‘detached HEAD’ (similar to below).

<img src="{{baseUrl}}/gitAndGithub/checkout/images/warning.png" height="140" />
<p/>

The specified version is now loaded to the working folder, as indicated by the `HEAD` label. `HEAD` is a reference to the currently checked out commit.

<img src="{{baseUrl}}/gitAndGithub/checkout/images/sourcetree_4.png" height="100" />
<p/>

If you checkout a commit that come before the commit in which you added the `.gitignore` file, Git will now show ignored fiels as ‘unstaged modifications’ because at that stage Git hasn’t been told to ignore those files.

<img src="{{baseUrl}}/gitAndGithub/checkout/images/sourcetree_5.png" height="260" />
<p/>

To go back to the latest commit, double-click it.
