{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

{{ hp_number('2.1') }} **Note how the file is shown as ‘unstaged’.** The question mark icon indicates the file is untracked.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetree_1a.png" height="220" />
<p/>

<box type="tip" seamless>

If the newly-added file does not show up in Sourcetree UI, refresh the UI (:fab-windows:: <kbd>F5</kbd><br> | :fab-apple: <kbd>⌥</kbd>+<kbd>R</kbd>)
</box>

{{ hp_number('2.2') }} **Stage the file** by selecting the `fruits.txt` and clicking on the `Stage Selected` button.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetree_1b.png" height="100" />
<p/>

{{ hp_number('2.3') }} **Note how the file is staged now** i.e., `fruits.txt` appears in the `Staged files` panel now.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetree_1c.png" height="180" />
<p/>

<box type="info" seamless>

**If Sourcetree shows a `\ No newline at the end of the file` message** below the staged lines (i.e., below the `cherries` line in the above screenshot), that is because you did not hit <kbd>enter</kbd> after entering the last line of the file (hence, Git is not sure if that line is complete). To rectify, move the cursor to the end of the last line in that file and hit <kbd>enter</kbd> (like you are adding a blank line below it). This new change will now appear as an 'unstaged' change. Stage it as well.
</box>
