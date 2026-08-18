{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Issue trackers</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain issue trackers</span>

<div id="body">

Keeping track of project tasks %%(who is doing what, which tasks are ongoing, which tasks are done, etc.)%% is an essential part of project management. In small projects, it may be possible to keep track of tasks using simple tools such as online spreadsheets or general-purpose/light-weight task tracking tools such as Trello.

**{{ show_term("Kanban boards") }} provide a simple visual way to track task status.** Teams move task cards across columns such as _To do_, _In progress_, and _Done_. This helps the team see the overall flow of work at a glance. A column with many cards can reveal a buildup of work that needs attention. Larger projects may need more sophisticated task tracking tools.

**{{ show_term("Issue trackers") }} (sometimes called bug trackers) are commonly used to track task assignment and progress.** Most online project management software such as GitHub, GitLab, and BitBucket come with an integrated issue tracker. Tools like Jira and Linear are dedicated issue trackers.

<div v-closeable alt="Jira screenshot">

{% call show_example() %}
A screenshot from the Jira Issue tracker software %%(Jira is part of the BitBucket project management tool suite)%%:

<pic eager src="{{baseUrl}}/projectPlanning/issueTrackers/images/xjira.png" height="350" />
<p/>
{% endcall %}

</div>

</div>

<div id="extras">

</div>
