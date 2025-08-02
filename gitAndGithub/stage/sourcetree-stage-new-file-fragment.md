{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

{{ hp_number('2.1') }} **Note how the file is shown as ‘unstaged’.** The question mark icon indicates the file is untracked.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetreeWinAddedFile.png" height="220" />
<p/>

<box type="tip" seamless>

If the newly-added file does not show up in Sourcetree UI, refresh the UI (:fab-windows:: <kbd>F5</kbd><br> | :fab-apple: <kbd>⌥</kbd>+<kbd>R</kbd>)
</box>

<box type="warning" seamless>

**Sourcetree screenshots/instructions: :fab-windows: vs :fab-apple:**

Note that Sourcetree UI can vary slightly between Windows and Mac versions. Some of the screenshots given in our lessons are from the Windows version while some are from the Mac version.

In som cases, we have specified how they differ.<br>
In other cases, you may need to adapt if the given screenshots/instructions are slightly different from what you are seeing in your Sourcetree.
</box>

{{ hp_number('2.2') }} **Stage the file**:

:fab-windows: Select the `fruits.txt` and click on the `Stage Selected` button.<br>
<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetreeWinStageButton.png" width="350"/>
<p/>

:fab-apple: Staging can be done using tick boxes or the `...` menu in front of the file.<br>
<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetreeMacStageFile.png" />
<p/>


{{ hp_number('2.3') }} **Note how the file is staged now** i.e., `fruits.txt` appears in the `Staged files` panel now.

<pic eager src="{{baseUrl}}/gitAndGithub/stage/images/sourcetreeWinNewFileStaged.png" height="180" />
<p/>

<box type="info" seamless>

**If Sourcetree shows a `\ No newline at the end of the file` message** below the staged lines (i.e., below the `cherries` line in the above screenshot), that is because you did not hit <kbd>enter</kbd> after entering the last line of the file (hence, Git is not sure if that line is complete). To rectify, move the cursor to the end of the last line in that file and hit <kbd>enter</kbd> (like you are adding a blank line below it). This new change will now appear as an 'unstaged' change. Stage it as well.
</box>
