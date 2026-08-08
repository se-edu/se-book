{% from "common/macros.njk" import show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain requirements documents</span>

<div id="body">

**Teams rarely keep the various requirements formats as separate artifacts; they package them into one document that says what is to be built.**

**In product-led teams that document is usually called a {{ show_term("product requirements document") }} (PRD), or a product brief.** It typically carries the product's purpose, who it is for, the scope and the priorities within it, the stories or use cases that matter most, and the quality constraints the product has to meet.

**A {{ show_term("software requirements specification") }} (SRS) is its more formal counterpart**, used where requirements have to be agreed precisely with a customer, audited, or contracted for. An SRS is heavier, more structured, and more stable than a PRD; the two are not interchangeable names for the same thing.

{{ icon_important_big_red }} A single document is one common packaging, not a rule. Many teams keep user stories in a tracker, the glossary in a wiki, and prototypes in a design tool, and write down only what needs agreeing in one place.

Each format earns its place by doing a different job:

* **Prose** frames the problem and the product's purpose.
* **A feature list** supports scope and delivery discussions.
* **A user story** records one negotiable slice of user value.
* **A use case** makes one workflow, and what can go wrong in it, precise.
* **A glossary** settles what shared terms mean.
* **Supplementary requirements** capture what cuts across all of the above.

**Choosing between them is a question of what you need to be precise about**, not of which notation is better.

**Working from such a document has a name: {{ show_term("specification-driven development") }} means starting from a specification that is clear, versioned, and testable, and using it both to direct the implementation and to judge what comes back.** The second half is the part that is easy to skip. A specification that only ever directs work, and is never used to check the result against, is a wish list.

**This matters more as producing a candidate implementation gets cheaper.** An assistant can draft questions, propose alternatives, or write code, but it cannot establish what stakeholders actually want, and it cannot decide a trade-off between things two of them both want. Those stay with the people accountable for the product, which is why writing the specification, and the judgment that goes into it, is the part of this work that does not get handed off.

</div>

<div id="extras">
</div>
