{% from "common/macros.njk" import hp_number, show_output with context %}

{{ hp_number('1') }} **Open the local repo** in Sourcetree.

{{ hp_number('2') }} **Choose `Repository` → `Repository Settings`** menu option.

{{ hp_number('3') }} **Add a new _remote_** to the repo with the following values.

   <pic eager src="images/fillRemoteInfoForSourceTree.png" width="450" />

   * `Remote name`: the name you want to assign to the remote repo e.g., `upstream1`
   * `URL/path`: the URL of your repo (ending in `.git`) that e.g., `https://github.com/johndoe/foobar.git`
   * `Username`: your GitHub username<br><br>

{{ hp_number('1') }} Now, you can fetch or pull (pulling will fetch the branch _and_ merge the new code to the current branch) from the added repo as you did before ==but choose the remote name of the repo you want to pull from== (instead of `origin`):<br>
   Click the `Fetch` button or the `Pull` button first.<br>
   <pic eager src="images/sourcetree_3.png" height="160" />
   <p/>

   <box type="tip" seamless>

   If the `Remote branch to pull` dropdown is empty, click the `Refresh` button on its right.
   </box>

{{ hp_number('1') }} If the pull from the `samplerepo-things-2` was successful, you should have received one more commit into your local repo.
