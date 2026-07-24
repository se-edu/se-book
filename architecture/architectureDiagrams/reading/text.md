<span id="title">Reading</span>

<span id="prereqs"><panel src="../../introduction/what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Architecture → Introduction → What%%" popup-url="{{ baseUrl }}/architecture/introduction/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can interpret an architecture diagram</span>

<div id="body">

**Architecture diagrams have no universally adopted notation.** Unlike UML class diagrams, there is no rulebook: different teams use different shapes, colors, and arrows. A reader must first work out what the notation means.

**Read an architecture diagram by asking four questions in order:**

1. **What view is this?** Code organization, deployment, communication, or something else — each shows different information.
1. **What are the major parts?** Usually the boxes. Expect a handful, not thirty.
1. **What is each part responsible for?** Names, labels, and nearby text should make this clear.
1. **What do the relationships mean?** Follow each arrow's direction, and check the legend for what an arrow means.

**A single diagram need not explain the whole architecture, but it must communicate its chosen view without ambiguity.** If you cannot answer those four questions from the diagram and its caption, the diagram is incomplete — a useful thing to notice when reviewing a teammate's work.

<div v-closeable alt="architecture diagram examples" id="architecture-diagram-examples">

<box>

{{ icon_example }} Here are two real architecture diagrams, from actual projects, drawn by different teams in different notations. They describe systems unrelated to the task-manager example, which is exactly the situation you face when you join an unfamiliar project.

<tabs>
  <tab header="TEAMMATES">

<pic eager src="https://teammates.github.io/teammates/diagrams/highlevelArchitecture.png" width="700"/><br>

  </tab>
  <tab header="se-edu/addressbook-level3">

<pic eager src="https://se-education.org/addressbook-level3/images/ArchitectureDiagram.png" width="300"/><br>

  </tab>
</tabs>

</box>

</div>

**Try the four questions on both.** They organize their boxes differently, use different shapes, and label their arrows differently, yet both are legitimate and both answer the questions. Notice too that each carries supporting parts a teaching example omits — a component that starts the application, a component of shared utilities — and their dependencies do not form a tidy chain. **That gap between a clean teaching diagram and a real one is normal.**

</div>

<div id="extras">
</div>
