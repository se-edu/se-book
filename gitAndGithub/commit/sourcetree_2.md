Select the `fruits.txt` and click on the `Stage Selected` button.

<pic src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_2.png" height="100" />
<p/>

`fruits.txt` should appear in the `Staged files` panel now.

<pic src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_3.png" height="180" />
<p/>

<box type="info" seamless>

**If Sourcetree shows a `\ No newline at the end of the file` message** below the staged lines (i.e., below the `cherries` line in the above screenshot), that is because you did not hit <kbd>enter</kbd> after entering the last line of the file (hence, Git is not sure if that line is complete). To rectify, go to that line and hit <kbd>enter</kbd> (like you are adding a blank line below it). This new change will now appear as an 'unstaged' change. Stage it as well.
</box>
