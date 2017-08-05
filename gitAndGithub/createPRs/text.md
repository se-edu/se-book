<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github &rarr; </div>

<div id="title">

#### Create PRs :two:

</div>

<div id="body">

1. Fork the se-edu/samplerepo-pr-practice. Clone it into your computer.
2. Create a branch named `add-foo` in your clone. Add a commit which adds/modifies some new text.
3. Push the branch to the fork.
4. Create a Pull Request from the `add-foo` branch in your fork to the `master` branch of the same fork (i.e. `your-user-name/samplerepo-pr-practice`, not `se-edu/samplerepo-pr-practice`), as described in https://help.github.com/articles/creating-a-pull-request/
5. Go back to your local repo, and create a new branch `add-bar` off the `master` branch. It is very important that you switch back to `master` before you create the new branch. If not, the rew branch will be created off the current branch `add-foo`.
6. Add a commit to `add-bar` that modifies the same part of the repo modified in the previous PR. Push to the fork and create a new PR similar to before.


</div>

<div id="extras">
<div>

</div>
