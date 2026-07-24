<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain monolithic and modular-monolithic architectures</span>

<div id="body">

**A monolith is a system deployed as a single unit.** You build one artifact and release it as a whole. A typical desktop application is a monolith, as is a great deal of successful commercial software.

**Being one deployable unit does not mean one running process.** A monolith may be launched as several processes, or run as many identical copies behind a load balancer — but they are all copies of the same thing, released together.

**A modular monolith is a single deployable unit organized internally into well-defined components.** It is still one artifact, but inside it the parts have clear responsibilities, clear interfaces, and disciplined dependencies. **A task manager with `Ui`, `Logic`, `Model`, and `Storage` shipped as one program is a modular monolith.**

**"Monolith" is not a synonym for "badly structured."** This is the most common misunderstanding. The word describes _how the system is deployed_, not _how well it is organized_. A tangled ball of mud and a disciplined modular monolith share a deployment shape but differ enormously inside; what separates them is whether the internal components and dependencies are real.

**The modular monolith is usually the sensible starting point for one team building one product.** It keeps building, testing, and debugging simple while still encouraging clear responsibilities. The topic on combining and choosing styles returns to this recommendation once you have seen the distributed alternatives.

</div>

<div id="extras">
</div>
