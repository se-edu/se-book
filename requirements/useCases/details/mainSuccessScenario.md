The Main Success Scenario (MSS) describes the most straightforward interaction for a given use case, which assumes that nothing goes wrong. This is also called the _Basic Course of Action_ or the _Main Flow of Events_ of a use case. Given below is another example of an MSS.

<tip-box>

```
System: Online Banking System (OBS)
Use case: UC23 - Transfer Money
Actor: User
MSS:
	1. User chooses to transfer money.
	2. OBS requests for details of the transfer.
	3. User enters the requested details.
	4. OBS requests for confirmation.
	5. User confirms transfer.
	6. OBS transfers the money and displays the new account balance.
         Use case ends.

Extensions:
	3a. OBS detects an error in the entered data.
		3a1. OBS requests for the correct data.
		3a2. User enters new data.
	Steps 3a1-3a2 are repeated until the data entered are correct.
	Use case resumes from step 4.

	3b. User requests to effect the transfer in a future date.
    		3b1. OBS requests for confirmation.
    		3b2. User confirms future transfer.
    		Use case ends.

 	*a. At any time, User chooses to cancel the transfer
		*a1. OBS requests to confirm the cancellation
		*a2. User confirms the cancellation
		Use case ends.

	*b. At any time, 120 seconds lapse without any input from the User
		*b1. OBS cancels the transfer
		*b2. OBS informs the User of the cancellation
		Use case ends.

```
Note how the MSS assumes that all entered details are correct and ignores problems such as timeouts, network outages etc. MSS does not tell us what happens if the user enters incorrect data.

</tip-box>
