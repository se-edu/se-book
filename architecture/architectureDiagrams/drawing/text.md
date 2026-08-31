{% from "common/macros.njk" import show_example with context %}
<span id="title">Drawing</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw a basic architecture diagram</span>

<div id="body">

While architecture diagrams have no standard notation, follow these guidelines when drawing them.

* **State the view and what the arrows mean.** Put the meaning in a legend or caption. If you need two kinds of arrow, make them visually different and label both.
* **Name each component by its responsibility, not its current implementation.**<br>
  {{ label_example }} %%`Storage` stays accurate if the implementation changes; `JsonFileHandler` becomes a lie the day you switch to a database.%%
* **Show only what is architecturally relevant.** If a box maps one-to-one onto a single class, the diagram has drifted into detailed design. A crowded diagram is usually a sign that it has slipped to a lower level of abstraction than it claims.
* **Minimize the variety of symbols, and prefer familiar ones** %%e.g., a drum shape is widely understood to represent a database%%. **Explain any symbol whose meaning may not be obvious.**
* **Avoid the indiscriminate use of double-headed arrows.**
{% call show_example() %}
Consider the two architecture diagrams of the same software given below. Because `Diagram 2` uses double-headed arrows everywhere, the important fact that `GUI` has a genuinely bidirectional dependency with the `Logic` component is no longer visible — it looks like every other connection.

<pic eager class="tbg" src="{{baseUrl}}/architecture/architectureDiagrams/drawing/images/tip.svg" width="576" />
{% endcall %}

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
