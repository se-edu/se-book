<span id="title">Combining and choosing styles</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain how styles combine, and can choose a reasonable starting architecture</span>

<div id="body">

**Most real applications combine several styles at once**, because each style answers a different question. The task manager is a **modular monolith**, **layered** internally, with an **event-driven** user interface; once tasks are shared through a server, it is also a **client** in a client-server system. All of those are true at the same time.

**When describing your own architecture, name the styles that apply and say what each is doing.** "A modular monolith, layered internally, with an event-driven UI" tells a reader far more than any single label.

**Three questions drive most architecture decisions at this level:**

1. **Which changes and quality attributes matter most here?** Separate the parts that the important, likely changes fall along.
1. **Can the important parts be understood and tested on their own?** If testing task handling requires launching a window, two components are more entangled than the diagram claims.
1. **What new complexity does each boundary add?** Every boundary costs an interface to maintain and something to explain; a boundary that crosses a network also adds a class of failures that did not exist before.

**The first two pull toward more separation; the third pulls toward less. Architecture is choosing where to stop.**

| If you need... | Consider... |
|----------------|-------------|
| Clear responsibilities inside one program | Components and layers (a modular monolith) |
| Parts to react without being called directly | Event-driven communication |
| Several installations to share live data | Client-server |
| Reusable capabilities other systems can call | Services |
| Independent releases by several separate teams | Microservices |

**For one team building one product, a modular monolith is a strong default.** One deployable program, clear internal components, one-way dependencies. **Add a network boundary only when a concrete requirement justifies its latency, failure modes, security work, and operational cost.**

<box>

{{ icon_example }} Each step below is a response to a requirement, not an upgrade. **Moving right buys specific capabilities and adds specific costs** — a team that moves right without a requirement pushing them has bought the costs and none of the benefits.

<puml src="images/architectureProgression.puml" height="360" />

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
