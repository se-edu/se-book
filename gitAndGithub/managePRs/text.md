<div id="title">

#### Manage PRs

</div>

<span id="prereqs"><panel src="../branch/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Branching%%" />
<panel src="../createPRs/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Create PRs%%" />
<panel src="../mergeConflicts/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Merge Conflicts%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can review and merge PRs on GitHub</span>

<div id="body">

**1. Go to GitHub page of your fork and review the `add-intro` PR** you created previously in [<trigger trigger="click" for="modal:managePrs-createPrs">Tools → Git & GitHub → Create PRs</trigger>] to simulate the PR being reviewed by another developer, as explained below. %%Note that some features available to PR reviewers will be unavailable to you because you are also the author of the PR.%%

<modal large title="Tools → Git & GitHub → Create PRs" id="modal:managePrs-createPrs">
  <include src="../createPRs/unit-inElsewhere-asFlat.md#main" boilerplate />
</modal>

1a. Go to the respective PR page and click on the `Files changed` tab. Hover over the line you want to comment on and click on the <span style="color:#0066ff">{{ fas_plus_square }}</span> icon that appears on the left margin. That should create a text box for you to enter your comment.

<img src="{{baseUrl}}/gitAndGithub/managePRs/images/startReview.png" width="800" />
<p/>


1b. Enter some dummy comment and click on `Start a review` button.

<img src="{{baseUrl}}/gitAndGithub/managePRs/images/addComment.png" width="800" />
<p/>

1c. Add a few more comments in other places of the code.


1d. Click on the `Review Changes` button, enter an overall comment, and click on the `Submit review` button.

<img src="{{baseUrl}}/gitAndGithub/managePRs/images/submitReview.png" width="500" />
<p/>


**2. Update the PR** to simulate revising the code based on reviewer comments. Add some more commits to the `add-intro` branch and push the new commits to the fork. Observe how the PR is updated automatically to reflect the new code.

**3. Merge the PR.** Go to the GitHub page of the respective PR, scroll to the bottom of the `Conversation` tab, and click on the `Merge pull request` button, followed by the `Confirm merge` button. You should see a `Pull request successfully merged and closed` message after the PR is merged.

<img src="{{baseUrl}}/gitAndGithub/managePRs/images/mergePr.png" width="800" />
<p/>


**4. Sync the local repo with the remote repo.** Because of the merge you did on the GitHub, the `master` branch of your fork is now ahead of your local repo by one commit.  To sync the local repo with the remote repo, pull the `master` branch to the local repo. 

```
git checkout master
git pull origin master
```

Observe how the `add-intro` branch is now merged to the `master` branch in your local repo as well.

**5. De-conflict the `add-summary` PR** <trigger trigger="click" for="modal:managePrs-createPrs">that you created earlier</trigger>. Note that GitHub page for the `add-summary` PR is now showing a conflict %%(when you scroll to the bottom of that page, you should see a message `This branch has conflicts that must be resolved`)%%. You can resolve it locally and update the PR accordingly, as explained below.

5a. Switch to the `add-summary` branch. To make that branch up-to-date with the `master` branch, merge the `master` branch to it, which will surface the merge conflict. Resolve it and complete the merge.

5b. Push the updated `add-summary` branch to the fork. That will remove the 'merge conflicts' warning in the GitHub page of the PR.

**6. Merge the `add-summary` PR** using the GitHub interface, similar to how you merged the previous PR. 

{{ icon_info }} Note that you could have merged the `add-summary` branch to the `master` branch locally before pushing it to GitHub. In that case, the PR will be merged on GitHub automatically to reflect that the branch has been merged already.

</div>

<div id="extras">
</div>