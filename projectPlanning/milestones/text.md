{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Milestones</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain milestones</span>

<div id="body">

**A {{ show_term("milestone") }} is the end of a stage which indicates significant progress.** You should take into account dependencies and priorities when deciding on the features to be delivered at a certain milestone.<br>
{{ label_example }} %%Each intermediate product release is a milestone.%%

In some projects, it is not practical to have a very detailed plan for the whole project due to the uncertainty and unavailability of required information. In such cases, you can use a high-level plan for the whole project and a detailed plan for the next few milestones.

{% call show_example() %}
Milestones for the Minesweeper project, iteration 1:

| Day      | Milestones                        |
| -------- | --------------------------------- |
| Day 1    | Architecture skeleton completed   |
| Day 3    | ‘new game’ feature implemented    |
| Day 4    | ‘new game’ feature tested         |
{% endcall %}

</div>

<div id="extras">
</div>
