{% from "common/macros.njk" import show_example with context %}
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

<div v-closeable alt="architecture diagram examples" id="architecture-diagram-examples">

{% call show_example() %}
Here are two real architecture diagrams, from actual projects, drawn by different teams in different notations.

<tabs>
  <tab header="TEAMMATES">
<annotate src="https://teammates.github.io/teammates/diagrams/highlevelArchitecture.png">
  <a-point x="10%" y="90%" x>--> dependencies</a-point>
</annotate>
  </tab>
  <tab header="se-edu/addressbook-level3">
<div class="tbg">
<pic eager src="https://se-education.org/addressbook-level3/images/ArchitectureDiagram.png" width="300"/><br>

<small>dashed arrows: dependencies<br>solid arrows: associations</small>
</div>
  </tab>
</tabs>

{% endcall %}

</div>



</div>

<div id="extras">
</div>
