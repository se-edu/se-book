Right-click the target commit (i.e. the commit that is 2 commits behind the tip) and choose `Reset current branch to this commit`.

<pic src="{{baseUrl}}/gitAndGithub/pull/images/rightClickOnTargetCommit.png" height="100" />
<p/>

Choose the `Hard - …` option and click `OK`.

<pic src="{{baseUrl}}/gitAndGithub/pull/images/sourcetree_1.png" height="120" />
<p/>

This is what you will see.

<pic src="{{baseUrl}}/gitAndGithub/pull/images/sourcetree_2.png" height="150" />
<p/>

Note the following (cross-refer the screenshot above):

Arrow marked as `a`: The local repo is now at this commit, marked by the `master` label.<br>
Arrow marked as `b`: The `origin/master` label shows what is the latest commit in the `master` branch in the remote repo. `origin` is the default name given to the upstream repo you cloned from.
