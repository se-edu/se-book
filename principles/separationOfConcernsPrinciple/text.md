<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Principles &rarr; </div>

<div id="title">

#### Separation of Concerns :three:

</div>

<div id="body">

<tip-box type="primary">

<include src="../../common/definitions.md#def-separation-concerns-principle" />

</tip-box>

A concern in this context is a set of information that affects the code of a computer program.

Examples for _concerns_:

*	A specific feature, such as the code related to `add employee` feature
*	A specific aspect, such as the code related to `persistence` or `security`
*	A specific entity, such as the code related to the `Employee` entity

Applying SoC reduces functional overlaps among code sections and also limits the ripple effect when changes are introduced to a specific part of the system.

This principle can be applied at the class level, as well as on higher levels. For example, the n-tier architecture utilizes this principle. Each layer in the architecture has a well-defined functionality that has no functional overlap with each other. A correct application of this principle should lead to higher cohesion and lower coupling.

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
