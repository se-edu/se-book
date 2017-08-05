<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design &rarr; Equivalence Partitions &rarr;</div>

<div id="title">

#### Basic :two:

</div>

<div id="body">

Equivalence partitions (EPs) are usually derived from the specifications of the SUT. Preconditions and postconditions can also help in identifying partitions. For example, these could be EPs for the isValidMonth example:

*	[MIN_INT ... 0] (below the range that produces ‘true’)
*	[1 … 12] (the range that produces ‘true’)
*	[13 … MAX_INT] (above the range that produces ‘true’)

When the SUT has multiple inputs, we should identify EPs for each input.

<tip-box>

Example:

{example of a two-parameter method}

</tip-box>

Some inputs have only a small number of possible values and a potentially unique behavior for each value. In those cases we have to consider each value as a partition by itself.

<tip-box>

Example:

{example where each value is a partition}

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
