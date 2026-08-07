{% from "common/macros.njk" import show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain SDLC process models</span>

<div id="body">

**The simplest way to build software is to start coding and keep fixing what breaks, with no explicit stages at all.** That approach, sometimes called {{ show_term("code-and-fix") }}, has no overhead and works well enough for a small program written by one person over a short period. **It stops working as the software and the team grow.** There is no way to tell how far along the work is, no way to divide it among several people without them colliding, and no record of the decisions already made, so changes become harder and more expensive to make.

**Software development goes through different stages such as _requirements, analysis, design, implementation_ and _testing_. These stages are collectively known as the {{ show_term("software development lifecycle") }} (SDLC).** There are several approaches, known as {{ show_term("software development lifecycle models") }} (also called _software process models_), that describe different ways to go through the SDLC. Each process model prescribes a 'roadmap' for the software developers to manage the development effort. The roadmap describes the aims of the development stages, the outcome of each stage, and the workflow i.e., the relationship between stages.

**Reaching users is not the end of the lifecycle.** Once the software is released, it has to be operated, kept working as its environment changes, and improved. **What happens during that time feeds back into development**: defects reported by users, the way the software is actually used, and requests for things it cannot yet do all become inputs to later work. Most software spends far longer in this state than it spent being built for the first time.

</div>

<div id="extras">
</div>
