{% from "common/macros.njk" import show_term with context %}
{% from "common/macros.njk" import show_aspect, show_example %}

<span id="title">What</span>
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can explain monolithic and modular-monolithic architectures</span>

<div id="body">

{{ show_aspect("This style focuses on how the system is packaged and deployed.") }}

**A {{ show_term("monolith") }} is a system deployed as a single unit.** You build one artifact and release it as a whole. A typical desktop application is a monolith, as is a great deal of successful commercial software.

**Being one deployable unit does not mean one running process.** A monolith may be launched as several processes, or run as many identical copies behind a load balancer — but they are all copies of the same thing, released together.

**A {{ show_term("modular monolith") }} is a single deployable unit organized internally into well-defined components.** It is still one artifact, but inside it the parts have clear responsibilities, clear interfaces, and disciplined dependencies.
{% call show_example() %}
An invoice manager with `Ui`, `Logic`, `Model`, and `Storage` shipped as one program is a modular monolith.
{% endcall %}

**"Monolith" is not a synonym for "badly structured."** This is the most common misunderstanding. The word describes _how the system is deployed_, not _how well it is organized_. A tangled ball of mud and a disciplined modular monolith share a deployment shape but differ enormously inside; what separates them is whether the internal components and dependencies are real.
<box>

<puml src="images/monolithVsModularMonolith.puml" width="550" />

<small>%%Each arrow is a dependency. Both are monoliths — one deployed unit each, identical from the outside. What differs is inside: on the left, responsibilities are mixed and dependencies point both ways; on the right, each component has one job and the dependencies run one way.%%</small>
</box>

**The modular monolith is usually the sensible starting point for one team building one product.** It keeps building, testing, and debugging simple while still encouraging clear responsibilities.

</div>

<div id="extras">
</div>
