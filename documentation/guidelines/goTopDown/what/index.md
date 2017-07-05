<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

%%**Documentation :arrow_right: Guidelines :arrow_right: Go Top-down, Not Bottom-up :arrow_right:**%%

#### What :one:

<div id="main">

When writing project documents, a top-down breadth-first explanation is easier to understand than a bottom-up one. To explain a system called _SystemFoo_ with two sub-systems, _front-end_ and _back-end_, start by describing the system at the highest level of abstraction, and progressively drill down to lower level details. An outline for such a description is given below.

[First, explain what the system is, in a black-box fashion (no internal details, only the external view).]
_SystemFoo_ is a ....

[Next, explain the high-level architecture of _SystemFoo_, referring to its major components only.]
_SystemFoo_ consists of two major components: _front-end_ and _back-end_.
The job of _front-end_ is to ...  while the job of _back-end_ is to ...
And this is how _front-end_ and _back-end_ work together ...

[Now we can drill down to _front-end_'s details.]
_front-end_ consists of three major components: A, B, C
A's job is to ... B's job is to... C's job is to...
And this is how the three components work together ...

[At this point, further drill down the internal workings of each component. A reader who is not interested in knowing nitty-gritty details can skip ahead to the section on _back-end_.]
...

[At this point drill down details of the _back-end_.]
...

</div>
</div>
