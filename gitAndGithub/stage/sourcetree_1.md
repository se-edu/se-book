The file is shown as ‘unstaged’. The question mark icon indicates the file is untracked.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetree_1a.png" height="220" />
<p/>

<box type="tip" seamless>

If the newly-added file does not show up in Sourcetree UI, refresh the UI (:fab-windows:: <kbd>F5</kbd><br> | :fab-apple: <kbd>⌥</kbd>+<kbd>R</kbd>)
</box>

Select the `fruits.txt` and click on the `Stage Selected` button.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetree_1b.png" height="100" />
<p/>

`fruits.txt` should appear in the `Staged files` panel now.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetree_1c.png" height="180" />
<p/>

<box type="info" seamless>

**If Sourcetree shows a `\ No newline at the end of the file` message** below the staged lines (i.e., below the `cherries` line in the above screenshot), that is because you did not hit <kbd>enter</kbd> after entering the last line of the file (hence, Git is not sure if that line is complete). To rectify, move the cursor to the end of the last line in that file and hit <kbd>enter</kbd> (like you are adding a blank line below it). This new change will now appear as an 'unstaged' change. Stage it as well.
</box>
