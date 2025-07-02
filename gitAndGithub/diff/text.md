{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.diff.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git can tell you **the net effect of changes between two points of history**.
{% endcall %}

Suppose you’re trying to improve the performance of a piece of software by experimenting with different code tweaks. You commit after each change (as you should). After several commits, you now want to review the overall effect of all those changes on the code. With Git, you can do that easily.

**Git can show you what changed in each commit.**

{{ show_git_tabs('_1') }}

**Git can also show you the difference between two points in the history** of the repo.

{{ show_git_tabs('_2') }}


<!--

git diff can show unstaged changes (use q to exit)
and git diff --cached to see what you’ve staged so far

-->

</div>

<div id="extras">
</div>
