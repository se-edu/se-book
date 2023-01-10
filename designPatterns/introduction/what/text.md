<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain design patterns</span>

<div id="body">


<box type="definition" seamless>
<include src="../../../common/definitions.md#def-design-pattern" trim />
</box>

In software development, there are certain problems that recur in a certain context.

<box>

{{ icon_example }} Some examples of recurring design problems:

| Design Context  | Recurring Problem
| --------------- | -----------------
| Assembling a system that makes use of other existing systems implemented using different technologies | What is the best architecture?
| UI needs to be updated when the data in the application backend changes | How to initiate an update to the UI when data changes without coupling the backend to the UI?

</box>

After repeated attempts at solving such problems, better solutions are discovered and refined over time. These solutions are known as design patterns, **a term popularized by the seminal book** [**_Design Patterns: Elements of Reusable Object-Oriented Software_ by the so-called "Gang of Four" (GoF)**](https://en.wikipedia.org/wiki/Design_Patterns) written by Eric Gamma, Richard Helm, Ralph Johnson, and John Vlissides.


</div>

<div id="extras">

<include src="exercises.md" />

</div>
