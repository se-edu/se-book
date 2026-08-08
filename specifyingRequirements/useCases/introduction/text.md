{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Introduction</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain use cases</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-use-case" trim />
</box>

**A {{ show_term("use case") }} describes an _interaction between the user and the system_ for a _specific functionality_ of the system.**

{% call show_example() %}
The main flow of a 'transfer money' use case for an online banking system:
<pre>
System: Online Banking System (OBS)
Use case: UC23 - Transfer Money
Actor: User
MSS:
  1. User chooses to transfer money.
  2. OBS requests for details of the transfer.
  3. User enters the requested details.
  4. OBS requests for confirmation.
  5. User confirms.
  6. OBS transfers the money and displays the new account balance.
  Use case ends.
</pre>
{% endcall %}

<panel type="seamless">
<div slot="header">

%%Another {{ label_example }}: 'upload file' use case of an LMS%%
</div>

<div class="font-monospace small">

* System: A Learning Management System (LMS)
* Actor: Student
* Use Case: Upload file
  1. Student requests to upload file.
  2. LMS requests for the file location.
  3. Student specifies the file location.
  4. LMS uploads the file.

</div>
</panel>

<box background-color="white" border-color="white">

<pic eager class="float-end ms-5" src="{{baseUrl}}/specifyingRequirements/useCases/introduction/images/ticketMachine.png" width="300" />

**<trigger for="modal:uml" trigger="click">{{ show_term("UML") }}</trigger> includes a diagram type called {{ show_term("use case diagrams") }} that can illustrate use cases of a system visually**, providing a visual ‘table of contents’ of the use cases of a system.

In the example on the right, note how use cases are shown as ovals and user roles relevant to each use case are shown as stick figures connected to the corresponding ovals.

<modal header="**Unified Modeling Language (UML)**" id="modal:uml">
  <include src="../../../common/definitions.md#def-uml" />
</modal>
</box>

**Use cases capture the _functional requirements_ of a system.**

</div>

<div id="extras">
</div>
