{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Issue trackers</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain issue trackers</span>

<div id="body">

Keeping track of project tasks %%(who is doing what, which tasks are ongoing, which tasks are done, etc.)%% is an essential part of project management. In small projects, it may be possible to keep track of tasks using simple tools such as online spreadsheets or general-purpose/light-weight task tracking tools such as Trello.

**{{ show_term("Kanban boards") }} provide a simple visual way to track task status.** Teams move task cards across columns such as _To do_, _In progress_, and _Done_. This helps the team see the overall flow of work at a glance. A column with many cards can reveal a buildup of work that needs attention. Larger projects may need more sophisticated task tracking tools.

<div v-closeable alt="Kanban board image">

{% call show_example() %}
A mockup of a Kanban board:

<pic eager class="tbg" src="{{baseUrl}}/projectPlanning/issueTrackers/images/kanbanBoard.svg" width="664" /><br>
<small>%%The arrow shows a card moving from _To do_ to _In progress_ when a team member starts working on that task. The initials on a card show who is assigned to that task.%%</small>
{% endcall %}

</div>


**{{ show_term("Issue trackers") }} (sometimes called bug trackers) are commonly used to track task assignment and progress.** Most online project management software such as GitHub, GitLab, and BitBucket come with an integrated issue tracker. Tools like Jira and Linear are dedicated issue trackers.

<div v-closeable alt="Jira screenshot">

{% call show_example() %}
A screenshot from the Jira Issue tracker software %%--(credit: Atlassian, retrieved on 2026/08)--%%:

<pic eager src="{{baseUrl}}/projectPlanning/issueTrackers/images/xjira.png" width="660" />
<p/>
{% endcall %}

</div>

</div>

<div id="extras">

</div>
