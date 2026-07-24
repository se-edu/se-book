<span id="title">Drawing</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw a basic architecture diagram</span>

<div id="body">

While architecture diagrams have no standard notation, follow these guidelines when drawing them.

* **State the view and what the arrows mean.** Put the meaning in a legend or caption. If you need two kinds of arrow, make them visually different and label both.

* **Name each component by its responsibility, not its current implementation.** `Storage` stays accurate if the implementation changes; `JsonFileHandler` becomes a lie the day you switch to a database.

* **Show only what is architecturally relevant.** If a box maps one-to-one onto a single class, the diagram has drifted into detailed design. An architecture diagram with twenty-five boxes is a class diagram in disguise.

* **Minimize the variety of symbols.** If a symbol has no widely-understood meaning %%e.g., a drum shape is widely-understood as representing a database%%, explain it.

* **Avoid the indiscriminate use of double-headed arrows.**

<box>

{{ icon_example }} Consider the two architecture diagrams of the same software given below. Because `Diagram 2` uses double-headed arrows everywhere, the important fact that `GUI` has a genuinely bidirectional dependency with the `Logic` component is no longer visible — it looks like every other connection.

<pic eager src="{{baseUrl}}/architecture/architectureDiagrams/drawing/images/tip.png" height="190" />
<p/>

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
