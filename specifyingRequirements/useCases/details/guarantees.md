{% from "common/macros.njk" import show_example, show_term with context %}
<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**{{ show_term("Guarantees") }} specify what the use case promises to give us at the end of its operation.**

{% call show_example() %}
A use case with guarantees:
<div class="font-monospace small">

Software System: Online Banking System<br>
Use case: UC23 - Transfer Money<br>
Actor: User<br>
Preconditions: User is logged in.<br>
==Guarantees:==
* Money will be deducted from the source account only if the transfer to the destination account is successful.
* The transfer will not result in the account balance going below the minimum balance required.

MSS:
1. User chooses to transfer money.
1. OBS requests for details for the transfer.<br>
   ...
</div>
{% endcall %}

**Guarantees do for a use case what acceptance criteria do for a user story:** they state the observable result that decides whether the interaction did its job, so that 'done' does not have to be argued about afterwards.

<p/>
