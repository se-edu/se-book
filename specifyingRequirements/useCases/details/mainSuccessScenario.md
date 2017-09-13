<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**The ==_Main Success Scenario (MSS)_== describes the most straightforward interaction for a given use case, which assumes that nothing goes wrong.** This is also called the _Basic Course of Action_ or the _Main Flow of Events_ of a use case. 

<tip-box>

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
      <li>OBS transfers the money and displays the new account balance.</li>
      <li class="custom-bullet-point">Use case ends.</li>
    </ol>
  </li>
</ul>

Note how the MSS assumes that all entered details are correct and ignores problems such as timeouts, network outages etc. Fro example, MSS does not tell us what happens if the user enters an incorrect data.

</tip-box>
