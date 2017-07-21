<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github :arrow_right: </div>

<div id="title">

#### Manage PRs :three:

</div>

<div id="body">

1. Go to GitHub and review (i.e. add some dummy comments to the code) to the first PR created [previously](./createPRs).
2. Update the add-foo PR: Add some more commits to the `add-foo` branch and push the new commits to the fork. The PR will be updated automatically.
3. Merge add-foo PR.
4. Sync the local repo with the upstream repo. i.e. pull the master branch to the local repo.

```
git checkout master
git pull origin master
```

5. Resolve conflicts. Note that GitHub page for the `add-bar` PR is not showing a conflict. You can resolve it locally and update the PR accordingly.

  * Switch to the `add-bar` branch. Merge `master` branch to it, which will surface the merge conflict. Resolve it and complete the merge.
  * Push the updated `add-bar` branch to the fork.

6. Merge second PR.

</div>

<div id="extras">
<div>

</div>
