<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling :arrow_right: Defensive Programming :arrow_right:</div>

<div id="title">

#### Enforcing 1-to-1 Associations :three:

</div>

<div id="body">

Consider the association given below. Here, a MinedCell cannot exist without a Mine and vice versa. The only way to enforce this is by simultaneous object creation. However, in Java and C++, only one object can be created at a time. Given below are two alternatives. Both options violate the multiplicity for a short period of time.

<tip-box>

Example:

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/1to1Associations/images/minedCell.png" height="250" />
<p/>

</tip-box>

</div>

</div>
