{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain requirements documents</span>

<div id="body">

**Requirements are documented in different formats, each suited for a different purpose** as you know. Some examples:

* _Prose_ frames the problem and the product's purpose.
* _A feature list_ supports scope and delivery discussions.
* _A user story_ records one negotiable slice of user value.
* _A use case_ makes one workflow, and what can go wrong in it, precise.
* _A glossary_ settles what shared terms mean.
* _Supplementary requirements_ capture what cuts across all of the above.

**Some teams document requirements in a single authoritative document while others may keep different requirements formats in different places**, %%e.g., user stories in a tracker, the glossary in a wiki, and prototypes in a design tool%%.

**Where there is a single document, there are two common variants:**

* **Product-led teams usually call it a {{ show_term("product requirements document") }} (PRD), or a product brief.** It typically carries the product's purpose, who it is for, the scope and the priorities within it, the stories or use cases that matter most, and the quality constraints the product has to meet.
* **A {{ show_term("software requirements specification") }} (SRS) is its more formal counterpart**, used where requirements have to be agreed precisely with a customer, audited, or contracted for. An SRS is heavier, more structured.

**A requirements document explains the problem and the required outcomes, whereas a {{ show_term("software specification") }} defines the system's behavior precisely enough to implement and verify it.**

{% call show_example() %}
For a library system:

* A _requirement_: "A member should be able to renew a borrowed book."
* Its _specification_: "When a member selects Renew for an eligible loan, the system shall extend the due date by the configured loan period and display the new due date."
{% endcall %}

**Some teams put both their requirements and their software specification in one document**, while others keep them separate.

**{{ show_term("Specification-driven development") }} describes an approach that relies heavily on a detailed specification to direct the implementation and to judge the work delivered.** The detailed specification serves as a single source of truth for what to build and how to build it. This approach is especially relevant when most of the development work is done by AI agents.
</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
