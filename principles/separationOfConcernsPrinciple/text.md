<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Separation of Concerns Principle :three:

</div>

<div id="body">

<tip-box type="primary">

<include src="../../common/definitions.md#def-separation-concerns-principle" />

</tip-box>

A _concern_ in this context is a set of information that affects the code of a computer program.

<tip-box> 

:package: Examples for _concerns_:

*	A specific feature, such as the code related to `add employee` feature
*	A specific aspect, such as the code related to `persistence` or `security`
*	A specific entity, such as the code related to the `Employee` entity

</tip-box>

**Applying <tooltip content="Separation of Concerns">SoC</tooltip> reduces functional overlaps among code sections and also limits the ripple effect when changes are introduced to a specific part of the system.**

<tip-box> 

:package: If the code related to _persistence_ is separated from the code related to _security_, a change to how the data are persisted will not need changes to how the security is implemented.

</tip-box>

**This principle can be applied at the class level, as well as on higher levels.** 

<tip-box> 

:package: The <trigger trigger="click" for="modal:soc-nTier">n-tier architecture</trigger> utilizes this principle. Each layer in the architecture has a well-defined functionality that has no functional overlap with each other. 

</tip-box>

<modal title="TextBook »" id="modal:soc-nTier">
  <include src="../../architecture/architecturalStyles/nTier/what/full.md"/>
</modal>

**This principle should lead to higher <trigger trigger="click" for="soc-cohesion">cohesion</trigger> and lower <trigger trigger="click" for="soc-coupling">coupling</trigger>.**

<modal title="TextBook »" id="soc-coupling">
  <include src="../../designFundamentals/coupling/what/full.md"/>
</modal>
<modal title="TextBook »" id="soc-cohesion">
  <include src="../../designFundamentals/cohesion/what/full.md"/>
</modal>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
