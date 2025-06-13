{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can compare git revisions</span>

<span id="title">`diff`: Comparing revisions</span>

<div id="body">

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
