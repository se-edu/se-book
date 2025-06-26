{% from "common/macros.njk" import hp_number, show_output with context %}

{{ hp_number('1') }} **Open the local repo** in Sourcetree.

{{ hp_number('2') }} **Choose `Repository` → `Repository Settings`** menu option.

{{ hp_number('3') }} **Add a new _remote_** to the repo with the following values.

   <pic eager src="images/fillRemoteInfoForSourceTree.png" width="450" />

   * `Remote name`: the name you want to assign to the remote repo e.g., `upstream1`
   * `URL/path`: the URL of your repo (ending in `.git`) that e.g., `https://github.com/johndoe/foobar.git`
   * `Username`: your GitHub username<br><br>
