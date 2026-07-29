{% from "common/macros.njk" import show_example, show_term with context %}
<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**The {{ show_term("Main Success Scenario (MSS)") }} describes the most straightforward interaction for a given use case, which assumes that nothing goes wrong.** This is also called the _Basic Course of Action_ or the _Main Flow of Events_ of a use case. 

{% call show_example() %}
Note how the MSS below assumes that all entered details are correct and ignores problems such as timeouts and network outages. %%It does not tell us what happens if the user enters incorrect data.%%

<div class="font-monospace small">

System: Online Banking System (OBS)<br>
Use case: UC23 - Transfer Money<br>
Actor: User<br>
MSS:
1. User chooses to transfer money.
1. OBS requests for details of the transfer.
1. User enters the requested details.
1. OBS requests for confirmation.
1. OBS transfers the money and displays the new account balance.

Use case ends.
</div>
{% endcall %}
