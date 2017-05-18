## What is a design pattern? 

#### Some software design problems crop up repeatedly. After repeated attempts at solving such design problems, better solutions are discovered and refined over time. These solutions are collectively known as _design patterns_, a term popularized by the seminal <trigger trigger="click" for="modal:gofbook">_Gang of Four book_</trigger>.

<br/>

<panel header="Some examples of recurring design problems :zero:" type="seamless" expandable>

* An example problem about software architecture: what is the best <trigger for="pop:architecture">architecture</trigger> for a given type of system?
* An example problem about the interaction between classes: how to lower the
  <trigger for="tt:coupling">coupling</trigger> between  `UI` and `Logic` classes ?
* <panel header="Some more examples :zero: " expandable type="seamless">

  * Another example
  * One more example about <trigger for="tt:coupling">coupling</trigger>

  </panel>
</panel><br>

<tip-box type="info">
  <include src="../../common/definitions.md#def-se-design-pattern"/>
</tip-box>

<panel header="%%Above description is too abstract? Here is an illustrative example :zero:%%" expandable type="seamless">
  <include src="../singleton/index.md#main" />
</panel><br/>

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless">

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="outcomes.md" />
  </panel>

  <panel header=":bulb: Test your knowledge" expandable type="seamless">
    <include src="questions.md" />
  </panel>

  <panel header=":pencil: Apply your knowledge" expandable type="seamless">
    <include src="apply.md" />
  </panel>

  <panel header=":package: Resources" expandable type="seamless">
    <include src="resources.md" />
  </panel>

  <panel header=":laughing: Humor" expandable type="seamless">
    <include src="humor.md" />
  </panel>

</panel>


<!-- additional info ------------------------------------------------------------------------------------ -->

<popover id="pop:architecture">
  <div slot="content">
    <include src="../../common/definitions.md#def-architecture" />
  </div>
</popover>

<tooltip id="tt:coupling">
  <div slot="content">
    <include src="../../common/definitions.md#def-coupling" />
  </div>
</tooltip>

<modal title="**GoF Book** :zero:" id="modal:gofbook">
  <include src="gof.md" />
</modal>
