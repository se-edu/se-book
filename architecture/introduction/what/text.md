{% from "common/macros.njk" import show_term with context %}
{% from "common/macros.njk" import show_example with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ label_outcome }} Can explain what software architecture is</span>

<div id="body">

**When you write a small program by yourself, you can hold its structure in your head.** You know where each piece of functionality lives, and you can usually predict what a change will affect.

**That becomes much harder as the software and its team grow.** Several people add code to the same program at once, and none of them has read all of it. Questions that once seemed trivial start to matter:

* _Where does this new code belong?_
* _Where does each part run?_
* _How do the parts communicate?_
* _Which qualities matter most — ease of change, speed, reliability, security?_

**{{ show_term("Software architecture") }} is the set of significant decisions about a system's overall organization.** It identifies the major parts, their responsibilities, how they interact, and how they are deployed.

<div class="d-none">
<!-- generate once and reuse -->
<puml src="{{ baseUrl }}/architecture/introduction/what/images/architecture.puml" width="128" name="architecture" />
</div>

{% call show_example() %}

Consider a desktop invoice-management application in which users create invoices, set due dates, and mark invoices as paid. A possible architecture has four parts:

<div id="invoice-manager-architecture" >

<pic src="{{ baseUrl }}/architecture/introduction/what/images/architecture.png" width="128" />

<small>%%Each arrow in the diagram is a dependency: the part at the tail needs the part at the head.%%</small>

* `Ui`: displays information and receives user input
* `Logic`: interprets user actions and carries out operations
* `Model`: represents invoices and other data while the program runs
* `Storage`: reads data from and writes it to persistent storage
</div>
{% endcall %}

**An architecture description deliberately leaves out most of what is inside each part.** It does not say how many classes are in `Logic`, which one validates a user command, or which collection holds the invoices. Those are detailed design decisions.


**Architecture and detailed design differ in how far a decision reaches, not merely in how big it is.** An architectural decision constrains what the other parts can do, shapes the qualities the system can achieve, and is expensive to reverse once the rest of the system is built on it.
{% call show_example() %}
Deciding that persistent data belongs in a separate `Storage` component is architecture. Deciding that `Storage` uses one class per file format is detailed design.
{% endcall %}

**The boundary is not absolute.** An internal choice becomes architecturally significant when it strongly affects the rest of the system.
{% call show_example() %}
A change to the data representation to make the application able to handle a million invoices can be architecturally significant, affecting more than the internals of the `Storage` component.
{% endcall %}


**Every software system has an architecture, even when nobody designed one deliberately.** An unplanned program still has parts and dependencies; they are simply accidental, undocumented, and usually tangled. **The value of deciding an architecture on purpose is that the team shares one, understands it, and can reason about it.**

**An architecture is a shared and evolving technical understanding, not one person's private plan.** A team sets an initial architecture early — the decisions are expensive to reverse later — then tests it against real requirements and revises it deliberately when those requirements change. Larger organizations may give one person an _architect_ role to hold the technical vision, but the architecture still has to be understood by everyone building the system.

**An architecture is also more than a diagram.** Although an architecture is often represented by a diagram (like the one in the example above), a diagram shows one view. The architecture also includes the constraints everyone must work within and the _reasons_ behind the choices.
{% call show_example() %}
 The fact that the application stores data locally _because it must work without a network connection_ is also part of the architecture, although it may not be captured by the architecture diagram.
{% endcall %}

<box type="definition" seamless>

_The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them. Architecture is concerned with the public side of interfaces; private details of elements—details having to do solely with internal implementation—are not architectural._

<sub>-- _Software Architecture in Practice (2nd edition)_, Bass, Clements, and Kazman</sub>
</box>

The definition above is widely quoted in the literature. "Externally visible properties" means what <tooltip content="e.g., `Storage`">a software element of the architecture</tooltip> promises to do, not how it does it.
</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
