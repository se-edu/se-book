<span id="title">Separation of concerns principle</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain separation of concerns principle</span>

<div id="body">

<box type="definition" seamless>
<include src="../../common/definitions.md#def-separation-concerns-principle" />
</box>

A _concern_ in this context is a set of information that affects the code of a computer program.

<box>

{{ icon_example }} Examples for _concerns_:

*	A specific feature, such as the code related to `add employee` feature
*	A specific aspect, such as the code related to `persistence` or `security`
*	A specific entity, such as the code related to the `Employee` entity

</box>

**Applying <tooltip content="Separation of Concerns">SoC</tooltip> reduces functional overlaps among code sections and also limits the ripple effect when changes are introduced to a specific part of the system.**

<box>

{{ icon_example }} If the code related to _persistence_ is separated from the code related to _security_, a change to how the data are persisted will not need changes to how the security is implemented.

</box>

**This principle can be applied at the class level, as well as on higher levels.** 

<box>

{{ icon_example }} The <trigger trigger="click" for="modal:soc-nTier">n-tier architecture</trigger> utilizes this principle. Each layer in the architecture has a well-defined functionality that has no functional overlap with each other. 

</box>

<modal header="TextBook {{ icon_embedding }}" id="modal:soc-nTier">
  <include src="../../architecture/architecturalStyles/nTier/what/unit-inElsewhere-asPanelBody.md" boilerplate/>
</modal>

**This principle should lead to higher <trigger trigger="click" for="soc-cohesion">cohesion</trigger> and lower <trigger trigger="click" for="soc-coupling">coupling</trigger>.**

<modal header="TextBook {{ icon_embedding }}" id="soc-coupling">
  <include src="../../designFundamentals/coupling/what/unit-inElsewhere-asPanelBody.md" boilerplate/>
</modal>
<modal header="TextBook {{ icon_embedding }}" id="soc-cohesion">
  <include src="../../designFundamentals/cohesion/what/unit-inElsewhere-asPanelBody.md" boilerplate/>
</modal>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
