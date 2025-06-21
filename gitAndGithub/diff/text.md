{% from "common/macros.njk" import trail, show_git_tabs, show_hands_on_practical, show_lesson_intro with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.diff.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}


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
