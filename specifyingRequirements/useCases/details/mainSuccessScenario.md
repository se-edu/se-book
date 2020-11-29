<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**The ==_Main Success Scenario (MSS)_== describes the most straightforward interaction for a given use case, which assumes that nothing goes wrong.** This is also called the _Basic Course of Action_ or the _Main Flow of Events_ of a use case. 

<box>

{{ icon_example }} Note how the MSS in the example below assumes that all entered details are correct and ignores problems such as timeouts, network outages etc. %%For example, the MSS does not tell us what happens if the user enters incorrect data.%%

<div class="text-monospace">

System: Online Banking System (OBS)<br>
Use case: UC23 - Transfer Money<br>
Actor: User
MSS:
1. User chooses to transfer money.
1. OBS requests for details of the transfer.
1. User enters the requested details.
1. OBS requests for confirmation.
1. OBS transfers the money and displays the new account balance.

Use case ends.
</div>


</box>
