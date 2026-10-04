{% from "common/macros.njk" import show_example with context %}
<span id="title">What</span>
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can distinguish between top-down and bottom-up documentation</span>

<div id="body">

**When writing project documents, a top-down breadth-first explanation is easier to understand than a bottom-up one.**

**A top-down document is structured like an upside-down tree, with its root at the top, so readers can follow the path that interests them to the component they want to study in depth.** They need not read the whole document or understand the whole system.


{% call show_example() %}
To explain a system called `SystemFoo` with two sub-systems, `FrontEnd` and `BackEnd`, start by describing the system at the highest level of abstraction, and progressively drill down to lower-level details. An outline for such a description is given below.

[First, explain what the system is, in a black-box fashion (no internal details, only the external view).]

>`SystemFoo` is a ....


[Next, explain the high-level architecture of `SystemFoo`, referring to its major components only.]

>`SystemFoo` consists of two major components: `FrontEnd` and `BackEnd`.<br><br>
>The job of `FrontEnd` is to ...; the job of `BackEnd` is to ...<br><br>
>And this is how `FrontEnd` and `BackEnd` work together ...


[Now you can drill down to `FrontEnd`'s details.]

>`FrontEnd` consists of three major components: `A`, `B`, `C`<br><br>
>`A`'s job is to ...<br>`B`'s job is to...<br>`C`'s job is to...<br><br>
>And this is how the three components work together ...


[At this point, drill down further into the internal workings of each component. A reader who is not interested in the nitty-gritty details can skip ahead to the section on `BackEnd`.]

>In-depth description of `A`<br><br>
>In-depth description of `B`<br><br>
>...


[At this point, drill down to the details of the `BackEnd`.]

>...
{% endcall %}

</div>

<div id="extras">
</div>