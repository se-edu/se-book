<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Specifying Requirements :arrow_right: Use Cases :arrow_right:</div>

<div id="title">

#### Introduction :one:

</div>

<div id="body">

<tip-box type="primary">
<include src="../../../common/definitions.md#def-use-case" />
</tip-box>

A **use case** describes an _interaction between the user and the system_ for a _specific functionality_ of the system.

<panel header="%%Use case examples%%" expanded>

<panel header="Example 1: ‘check account balance’ use case for an ATM" type="seamless" expanded>

* System: <popover effect="fade" placement="right" content="Automated Teller Machine">
ATM </popover>
* Use Case: Check account balance
  1. User inserts an ATM card
  2. ATM prompts for PIN
  3. User enters PIN
  4. ATM prompts for withdrawal amount
  5. User enters the amount
  6. ATM ejects the ATM card and issues cash
  7. User collects the card and the cash.

</panel>

<panel header="Example 2" type="seamless">
...
</panel>

<panel header="Example 3" type="seamless">
...
</panel>

</panel>

<p/>

<trigger for="modal:uml" trigger="click">UML</trigger> includes a diagram type called use case diagrams that can illustrate use cases of a system visually, providing a visual ‘table of contents’ of the use cases of a system. In the example below, note how use cases are shown as ovals and user roles relevant to each use case are shown as stick figures.

<modal title="**Unified Modeling Language (UML)**" id="modal:uml">
  <include src="uml.md" />
</modal>

<p/>

<img src="{{baseUrl}}/specifyingRequirements/useCases/introduction/images/ticketMachine.png" height="250" />

<p/>

_Use cases_ can be used to capture the functional requirements of a system.

</div>

<div id="extras">
<div>

</div>
