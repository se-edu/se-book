<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Manage PRs :three:

</div>

<div id="body">

**1. Go to GitHub page of your fork and review the `add-intro` PR** you created previously in [Tools → Git & GitHub → Create PRs]({{baseUrl}}/gitAndGithub/createPRs/index.html) to simulate the PR being reviewed by another developer, as explained below. %%Note that some features available to PR reviewers will be unavailable to you because you are also the author of the PR.%%

1a. Go to the respective PR page and click on the `Files changed` tab. Hover over the line you want to comment on and click on the `+` icon that appears on the left margin. That should create a text box for you to enter your comment.

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

**5. De-conflict the `add-summary` PR.** Note that GitHub page for the `add-summary` PR is now showing a conflict %%(when you scroll to the bottom of that page, you should see a message `This branch has conflicts that must be resolved`)%%. You can resolve it locally and update the PR accordingly, as explained below.

5a. Switch to the `add-summary` branch. To make that branch up-to-date with the `master` branch, merge the `master` branch to it, which will surface the merge conflict. Resolve it and complete the merge.

5b. Push the updated `add-summary` branch to the fork. That will remove the 'merge conflicts' warning in the GitHub page of the PR.

**6. Merge the `add-summary` PR** using the GitHub interface, similar to how you merged the previous PR. 

<tip-box type="info"> 

Note that you could have merged the `add-summary` branch to the `master` branch locally before pushing it to GitHub. In that case, the PR will be merged on GitHub automatically to reflect that the branch has been merged already.
  
</tip-box>

</div>

<div id="extras">
</div>

</div>
