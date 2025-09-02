{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_folder_contents, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} can commit using git</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.commit.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
After staging, you can now proceed to **save the snapshot, aka creating a _commit_**.
{% endcall %}

**Saving a snapshot is called {{ show_git_term('committing') }} and a saved snapshot is called a {{ show_git_term('commit') }}.**

**A Git commit is a full snapshot of your working directory based on the files you have staged**, more precisely, a record of the exact state of all files in the staging area (index) at that moment -- even the files that have not changed since the last commit. This is in contrast to other revision control software that only store the <tooltip content="i.e., the changes made since the last commit">delta</tooltip> in a commit. Consequently, a Git commit has all the information it needs to recreate the snapshot of the working directory at the time the commit was created.<br>
**A commit also includes metadata** such as the author, date, and an optional {{ show_git_term('commit message') }} describing the change.

<box type="important" light>

A Git commit is a snapshot of _all_ tracked files, not simply a delta of _what changed since the last commit_.
</box>

{% call show_hands_on_practical("Creating your first commit") %}

Assuming you have previously staged changes to the `fruits.txt`, go ahead and create a commit.

{{ show_git_tabs('_1') }}

{% endcall %}

</div>

<div id="extras">
{% call show_exercise("grocery-shopping") %}

In the `shopping-list` repo given, there is a `shopping-list.txt`.

1. Edit it to remove at least one item from the shopping list and add at least one new item to the shopping list.
1. Stage the change and commit it.

{% endcall %}
{{ show_detour('stagingFileDeletions') }}
{{ show_detour_preview('updateLastCommit') }}
{{ show_detour_preview('resetUncommitedChanges') }}
{{ show_detour_preview('undoRecentCommits') }}
</div>
