<div id="title">

#### Introduction

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain use cases</span>

<div id="body">

<tip-box type="definition">
<include src="../../../common/definitions.md#def-use-case" />
</tip-box>

**A use case describes an _interaction between the user and the system_ for a _specific functionality_ of the system.**

<tip-box> 

<panel header="{{ icon_example }} Example 1: 'check account balance' use case for an ATM" type="seamless" expanded>

* System: <popover effect="fade" placement="right" content="Automated Teller Machine">
ATM </popover>
* Actor: Customer
* Use Case: Check account balance
  1. User inserts an ATM card
  2. ATM prompts for PIN
  3. User enters PIN
  4. ATM prompts for withdrawal amount
  5. User enters the amount
  6. ATM ejects the ATM card and issues cash
  7. User collects the card and the cash.

</panel>

<panel header="%%{{ icon_example }} Example 2: 'upload file' use case of an LMS%%" type="seamless">

* System: A Learning Management System (LMS)
* Actor: Student
* Use Case: Upload file
  1. Student requests to upload file
  2. LMS requests for the file location
  3. Student specifies the file location
  4. LMS uploads the file
  
</panel>

</tip-box>


<p/>

**<trigger for="modal:uml" trigger="click">UML</trigger> includes a diagram type called use case diagrams that can illustrate use cases of a system visually**, providing a visual ‘table of contents’ of the use cases of a system. In the example below, note how use cases are shown as ovals and user roles relevant to each use case are shown as stick figures connected to the corresponding ovals.

<modal title="**Unified Modeling Language (UML)**" id="modal:uml">
  <include src="../../../common/definitions.md#def-uml" />
</modal>

<p/>

<img src="{{baseUrl}}/specifyingRequirements/useCases/introduction/images/ticketMachine.png" width="300" />

<p/>

**Use cases capture the _functional requirements_ of a system.**

</div>

<div id="extras">
</div>