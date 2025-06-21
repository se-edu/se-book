{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} Can commit using Git</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.commit.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
After staging, you can now proceed to **save the snapshot, aka creating a _commit_**.
{% endcall %}

 **Saving the staged changes into Git's memory is called _committing_ and a saved snapshot saved is called a _commit_.**

 **When creating a commit, you can specify a descriptive _commit message_**, to provide more information to someone examining this snapshot. For example, what are the noteworthy changes included in this snapshot.

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
