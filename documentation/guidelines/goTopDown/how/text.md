<div id="title">

#### How

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can write documentation in a top-down manner</span>

<div id="body">

<tip-box> 

{{ icon_example }} To explain a system called `SystemFoo` with two sub-systems, `FrontEnd` and `BackEnd`, start by describing the system at the highest level of abstraction, and progressively drill down to lower level details. An outline for such a description is given below.

[First, explain what the system is, in a black-box fashion (no internal details, only the external view).]

>`SystemFoo` is a ....


[Next, explain the high-level architecture of `SystemFoo`, referring to its major components only.]

>`SystemFoo` consists of two major components: `FrontEnd` and `BackEnd`.<br><br>
>The job of `FrontEnd` is to ...  while the job of `BackEnd` is to ...<br><br>
>And this is how `FrontEnd` and `BackEnd` work together ...


[Now we can drill down to `FrontEnd`'s details.]

>`FrontEnd` consists of three major components: `A`, `B`, `C`<br><br>
>`A`'s job is to ...<br>`B`'s job is to...<br>`C`'s job is to...<br><br>
>And this is how the three components work together ...


[At this point, further drill down the internal workings of each component. A reader who is not interested in knowing nitty-gritty details can skip ahead to the section on `BackEnd`.]

>In-depth description of `A`<br><br>
>In-depth description of `B`<br><br>
>...


[At this point drill down details of the `BackEnd`.]

>...

</tip-box>

</div>

<div id="extras">
</div>