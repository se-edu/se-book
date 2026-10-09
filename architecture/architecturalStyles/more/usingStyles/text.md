{% from "common/macros.njk" import show_example with context %}
<span id="title">Combining and choosing styles</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain how styles combine, and can choose a reasonable starting architecture</span>

<div id="body">

**Most real applications combine several styles at once**, because each style addresses a different aspect.
{% call show_example() %}
The invoice manager is a modular monolith, layered internally, with an event-driven user interface; once invoices are shared through a server, it is also a client in a client-server system. All of those are true at the same time.
{% endcall %}

**Every style trades benefits for costs.** Layering limits how far a change spreads but adds indirection. Distribution lets users share data but adds latency and partial failures. A style's value depends on the problem it solves.

**For one team building one product, a modular monolith is a strong default.** One deployable program, clear internal components, one-way dependencies. Add a network boundary only when a concrete requirement justifies its latency, failure modes, security work, and operational cost.

{% call show_example() %}
Each step below is a response to a requirement, not an upgrade. Moving down gains specific capabilities and adds specific costs.

<puml src="images/architectureProgression.puml" width="238" />

<small>%%Each arrow is a step from one architecture to the next, labeled with the requirement that drives it. Some styles carry forward and others are replaced, at different scopes.%%</small>
{% endcall %}

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
