<span id="title">Introduction</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain use cases</span>

<div id="body">

<box type="definition">
<include src="../../../common/definitions.md#def-use-case" />
</box>

**A use case describes an _interaction between the user and the system_ for a _specific functionality_ of the system.**

<box>

<panel header="{{ icon_example }} Example 1: 'transfer money' use case for an online banking system" type="seamless" expanded>
<div class="text-monospace">

<div class="text-monospace">

<ul>
  <li>System: Online Banking System (OBS)</li>
  <li>Use case: UC23 - Transfer Money</li>
  <li>Actor: User</li>
  <li>MSS:
    <ol>
      <li>User chooses to transfer money.</li>
      <li>OBS requests for details of the transfer.</li>
      <li>User enters the requested details.</li>
      <li>OBS requests for confirmation.</li>
      <li>User confirms.</li>
      <li>OBS transfers the money and displays the new account balance.</li>
      <li class="custom-bullet-point">Use case ends.</li>
    </ol>
  </li><br>
  <li> Extensions:
    <ol class="custom-bullet-list">
      <li>3a. OBS detects an error in the entered data.
        <ol class="custom-bullet-list">
          <li>3a1. OBS requests for the correct data.</li>
          <li>3a2. User enters new data.</li>
          <li>Steps 3a1-3a2 are repeated until the data entered are correct.</li>
          <li>Use case resumes from step 4.</li><br>
        </ol>
      </li>
      <li>3b. User requests to effect the transfer in a future date.
        <ol class="custom-bullet-list">
          <li>3b1. OBS requests for confirmation.</li>
          <li>3b2. User confirms future transfer.</li>
          <li>Use case ends.</li><br>
        </ol>
      </li>
      <li>*a. At any time, User chooses to cancel the transfer.
        <ol class="custom-bullet-list">
          <li>*a1. OBS requests to confirm the cancellation.</li>
          <li>*a2. User confirms the cancellation.</li>
          <li>Use case ends.</li><br>
        </ol>
      </li>
    </ol>
  </li>
</ul>

</div>

</div>
</panel>

<panel header="%%{{ icon_example }} Example 2: 'upload file' use case of an LMS%%" type="seamless">
<div class="text-monospace">

* System: A Learning Management System (LMS)
* Actor: Student
* Use Case: Upload file
  1. Student requests to upload file
  2. LMS requests for the file location
  3. Student specifies the file location
  4. LMS uploads the file

</div>
</panel>

</box>


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