{% from "common/macros.njk" import show_example with context %}
<span id="title">Drawing</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw a basic architecture diagram</span>

<div id="body">

While architecture diagrams have no standard notation, follow these guidelines when drawing them.

* **Name each component by its responsibility, not its current implementation.**<br>
  {{ label_example }} %%`Storage` stays accurate even if the implementation changes; `JsonFileHandler` becomes inaccurate if you switch to a database later.%%
* **Show only what is architecturally relevant.** If the architecture has more than a handful of components, it is a sign that it has slipped to a lower level of abstraction than it should be.
* **Use familiar symbols, and explain them in a legend.** %%e.g., a drum shape is widely understood to represent a database%%. Explain any symbol whose meaning may not be obvious. If you need two kinds of arrow, make them visually different and label both in the legend.
* **Avoid the indiscriminate use of double-headed arrows** if arrow directions can be used more meaningfully.
{% call show_example() %}
Consider the two architecture diagrams of the same software given below. Because `Diagram 2` uses double-headed arrows everywhere, the important fact that `GUI` has a genuinely bidirectional dependency with the `Logic` component is no longer visible.

<pic eager class="tbg" src="{{baseUrl}}/architecture/architectureDiagrams/drawing/images/tip.svg" width="576" />
{% endcall %}

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
