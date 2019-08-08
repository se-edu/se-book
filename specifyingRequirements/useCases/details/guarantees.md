<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**==_Guarantees_== specify what the use case promises to give us at the end of its operation.**

<box>
<div class="text-monospace">

Software System: Online Banking System<br>
Use case: UC23 - Transfer Money<br>
Actor: User<br>
Preconditions: User is logged in.<br>
==Guarantees:==
* Money will be deducted from the source account only if the transfer to the destination account is successful
* The transfer will not result in the account balance going below the minimum balance required.

MSS:
1. User chooses to transfer money.
1. OBS requests for details for the transfer.<br>
   ...
</div>
</box>

<p/>
