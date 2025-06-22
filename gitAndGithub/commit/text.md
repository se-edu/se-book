{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_folder_contents, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} can commit using git</span>

<span id="title">{{ trail.recordingfolderhistory.lessons.commit.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
after staging, you can now proceed to **save the snapshot, aka creating a _commit_**.
{% endcall %}

**Saving a snapshot is called {{ show_git_term('committing') }} and a saved snapshot is called a {{ show_git_term('commit') }}.**

**A git commit is a snapshot of your project based on the files you have staged**, more precisely, a record of the exact state of all files in the staging area (index) at that moment -- even the files that have not changed since the last commit.<br>
**A commit also includes metadata** such as the author, date, and an optional {{ show_git_term('commit message') }} describing the change.

<box type="important" light>

A Git commit is a snapshot of _all_ staged files, not simply a delta of _what changed since last commit_.
</box>

{% call show_hands_on_practical("Creating your first commit") %}

Assuming you have previously staged changes to the `fruits.txt`, go ahead and create a commit.

{{ show_git_tabs('_1') }}

{% endcall %}

**Git can show you the list of commits** in the Git history.

{% call show_hands_on_practical("Viewing the list of commits") %}

1. **View the list of commits**, which should show just the one commit you created just now.

{{ show_git_tabs('_2', indent_level=1) }}

2. **Create a few more commits** (i.e., a few rounds of add/edit files -> stage -> commit), and observe how the list of commits grows.

{{ show_git_tabs('_3', indent_level=1) }}
{% endcall %}

</div>

<div id="extras">
</div>
