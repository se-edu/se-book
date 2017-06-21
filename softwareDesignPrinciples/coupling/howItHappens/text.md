<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Principles :arrow_right: Coupling :arrow_right:</div>

<div id="title">

#### How it happens :two:

</div>

<div id="body">

In general component A is coupled to B if a change to B could _potentially_ require a change in A.

Some examples:

*	_component A_ has access to the internal structure of _component B_ (this results in a very high level of coupling);
*	_component A_ and B depend on the same global variable;
*	_component A_ calls _component B_;
*	_component A_ receives an object of _component B_ as a parameter or a return value;
*	_component A_ inherits from _component B_;
*	_components A_ and _B_ are required to follow the same data format or communication protocol.

</div>

</div>
