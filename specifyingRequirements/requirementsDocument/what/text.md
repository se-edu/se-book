{% from "common/macros.njk" import show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain requirements documents</span>

<div id="body">

As you know, requirements are documented in different formats, each suited for a different purpose. Some examples:

* **Prose** frames the problem and the product's purpose.
* **A feature list** supports scope and delivery discussions.
* **A user story** records one negotiable slice of user value.
* **A use case** makes one workflow, and what can go wrong in it, precise.
* **A glossary** settles what shared terms mean.
* **Supplementary requirements** capture what cuts across all of the above.

**Some teams document requirements in a single authoritative document while others may keep different requirements formats in different places**, %%e.g., user stories in a tracker, the glossary in a wiki, and prototypes in a design tool%%.

**Where there is a single document, there are two common variants:**

* **Product-led teams usually call it a {{ show_term("product requirements document") }} (PRD), or a product brief.** It typically carries the product's purpose, who it is for, the scope and the priorities within it, the stories or use cases that matter most, and the quality constraints the product has to meet.
* **A {{ show_term("software requirements specification") }} (SRS) is its more formal counterpart**, used where requirements have to be agreed precisely with a customer, audited, or contracted for. An SRS is heavier, more structured.

**{{ show_term("Specification-driven development") }} describes an approach that relies heavily on a specification that is clear, versioned, and testable, and uses it both to direct the implementation and to judge what comes back.**

**This matters more as producing a candidate implementation gets cheaper.** An AI can draft questions, propose alternatives, or write code, but it cannot establish what stakeholders actually want, and it cannot decide a trade-off between things two of them both want. Writing the specification, especially the judgment that goes into it, does not get handed off to AI easily.
</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
