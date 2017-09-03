<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github &rarr; </div>

<div id="title">

#### Forking Workflow :four:

</div>

<div id="body">


<p/>

1. **Create a GitHub organization** for your team. We'll refer to this organization as _team org_ from now on.
2. **One member: Fork [se-edu/samplerepo-workflow-practice](https://github.com/se-edu/samplerepo-workflow-practice) to your team org**.
3. **Each team member: Fork that repo** from your team org to your own GitHub account.
4. **Each team member: Create a PR** to add a file `yourName.md` %%&nbsp;(e.g. `jonhDoe.md`)&nbsp;%% containing a brief resume of yourself.
5. **For each PR: review, update, and merge.** i.e. for each PR
  * A team member (not the PR author): Review the PR by adding comments (can be just dummy comments).
  * PR author: Update the PR by pushing more commits to it, to simulate updating the PR based on review comments.
  * Another team member: Merge the PR using the GitHub interface.
  * All members: Sync fork with upstream changes.
6. **Create conflicting PRs.**
  * Each team member: Create a PR to add yourself under the `Team Members` section in the `README.md`.
  * One member: in the `master` branch, remove John Doe and Jane Doe from the `README.md`, commit, and push to the main repo.
7. **Merge PRs one at a time.** Before merging a PR, you’ll have to resolve conflicts. Steps:
  * [Optional] A member can inform the PR author (by posting a comment) that there is a conflict in the PR.
  * PR author: Pull the `master` branch from the repo in your team org. Merge the pulled `master` branch to your PR branch. Resolve the merge conflict that crops up during the merge. Push the updated PR branch to your fork.
  * Another member or the PR author: When GitHub does not indicate a conflict anymore, you can go ahead and merge the PR.

</div>

<div id="extras">
<div>

</div>
