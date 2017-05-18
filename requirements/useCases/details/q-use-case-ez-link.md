<panel header="Q: EZ-Link top-up use case :two:">
<question has-input="true">

Complete the following use case (MSS, extensions, etc.). Note that you should not blindly follow how the existing EZ-Link machine operates since it will prevent you from designing a better system.  You should consider all possible extensions without complicating the use case too much.

```
System: EZ-Link machine (those found at MRTs)
Use case: UC2 top-up EZ-Link card
Actor: EZ-Link card user
```

<div slot="answer">

```
System: EZ-Link machine (those found at MRTs)
Use case: UC2 top-up EZ-Link card
Actor: EZ-Link card user
Preconditions: All hardware in working order.
Guarantees:  MSS -> the card will be topped-up.
MSS:
	1. User places the card on the reader.
	2. System displays card details and prompts for desired action.
	3. User selects top-up.
	4. System requests for top-up details (amount, payment option, receipt required?).
	5. User enters details.
	6. System processes cash payment (UC02) or NETS payment (UC03).
	7. System updates the card value.
	8. System indicates transaction as completed.
	9. If requested in step 5, system prints receipt.
	10. User removes the card.
         Use case ends.

Extensions:
	*a. User removed card or other hardware error detected.
	*a1. System indicates the transaction has been aborted.
         Use case ends.
```

Notes:
*	We assume that the only way to cancel a transaction is by removing the card.
*	By not breaking step 4 into further steps, we avoid committing to a particular mechanism to enter data. For example, we are free to accept all data in one screen.
*	In step 5, we assume that the input mechanism does not allow any incorrect data.

```
System: EZ-Link machine
Use case:  UC03 process NETS payment
Actor: EZ-Link card user
Preconditions: A transaction requiring payment is underway.
Guarantees: MSS → Transaction amount is transferred from user account to EZ-Link company account.
MSS:
	1. System requests to insert ATM card.
	2. User inserts the ATM card.
	3. System requests for PIN.
	4. User enters PIN.
	5. System reports success.
         Use case ends.

Extensions:
	2a. Unacceptable ATM card (damaged or inserted wrong side up).
         …
	4a. Wrong PIN.
         …
	4b. Insufficient funds.
         …
	*a. Connection to the NETS gateway is disrupted.
         …
```

Note: UC02 can be written along similar lines.

</div>
</question>
</panel>
