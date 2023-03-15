1. Navigate to the folder containing the local repo.

1. Set the new remote repo as a _remote_ of the local repo.<br>
   command: `git remote add {remote_name} {remote_repo_url}`<br>
   e.g., `git remote add upstream1 https://github.com/johndoe/foobar.git`

1. Now you can fetch or pull (pulling will fetch the branch _and_ merge the new code to the current branch) from the new remote.<br>
   e.g., `git fetch upstream1 master` or `git pull upstream1 master`
