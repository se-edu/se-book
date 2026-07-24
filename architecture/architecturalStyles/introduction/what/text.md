<span id="title">What</span>

<span id="prereqs"><panel src="../../../introduction/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Architecture → Introduction → What%%" popup-url="{{ baseUrl }}/architecture/introduction/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain what an architectural style is, and why several styles can describe one system</span>

<div id="body">

**An architectural style is a reusable way of organizing the major parts of a system** (aka _architectural pattern_), just as <trigger trigger="click" for="modal:archiStyles-buildingArchitectures">building architectures follow recognized styles</trigger>. Naming a style — "layered", "client-server" — lets developers refer to a familiar arrangement without explaining it from scratch.

**Different styles describe different aspects of a system, which is why one system can use several at once.** This is the most useful thing to know before reading the rest of this section:

| Style | The aspect it describes |
|-------|-------------------------|
| Layered | how the code inside a program is organized |
| Event-driven | what triggers work, and how notifications flow |
| Client-server | the roles parts play, and where they run |
| Monolithic / microservice | how the system is packaged and deployed |

Because these are different questions, the answers do not compete: one application can be layered _and_ event-driven _and_ a client at the same time. The final topic, on combining and choosing styles, returns to this.

**Every style trades benefits for costs, and the costs are the part beginners skip.** Layering makes change easier to contain but adds indirection. Distribution lets users share data but adds latency and partial failures. **A style is not a badge of quality; its value depends on the problem. Whenever you meet a new style, look for what it costs before deciding you want it.**

<modal large header="Building Architecture Styles" id="modal:archiStyles-buildingArchitectures">

<pic eager src="https://inspectapedia.com/exterior/ArchitectureStyles.jpg" width="600"/><br>
<sub>source: https://inspectapedia.com</sub>

</modal>

</div>

<div id="extras">
</div>
