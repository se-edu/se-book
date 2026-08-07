{% from "common/macros.njk" import show_term with context %}
<span id="title">Agile models</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain agile process models</span>

<div id="body">

**The agile approaches grew out of lightweight methods that were already in use.** In 2001, a group of prominent software engineering practitioners -- among them the authors of several such methods -- met to articulate the values their approaches had in common. They were reacting against the documentation-driven, heavyweight processes used in most large projects at the time. The result was the {{ show_term("agile manifesto") }}.

>We are uncovering better ways of developing software by doing it and helping others do it.
>
>Through this work we have come to value:
>
>* **Individuals and interactions** over processes and tools
>* **Working software** over comprehensive documentation
>* **Customer collaboration** over contract negotiation
>* **Responding to change** over following a plan
>
>That is, while there is value in the items on the right, we value the items on the left more.<br>
><sub>-- Extract from the [Agile Manifesto](http://agilemanifesto.org/)</sub>

The methods represented at that meeting, and later approaches built on the same values, are collectively called {{ show_term("agile processes") }}. Some of the key features of agile approaches are:

* Requirements are prioritized by user need, clarified with the whole team regularly (sometimes daily), and folded into the development schedule as they change.
* Instead of a detailed design and a full project plan up front, the team works from a rough plan and a high-level design that evolves as the work goes on.
* The team shares responsibility for delivering the product, and reports progress openly to each other and to the user.

**Many agile processes are in use today. _eXtreme Programming (XP)_ and _Scrum_ are two well-known ones.**

**Agile approaches depend on conditions that are not always present**: a customer available to give feedback continuously, and the ability to ship a change cheaply. Where those are missing -- a fixed-price contract with a signed-off scope, or software that must be certified before release -- an agile approach costs more than it returns.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
