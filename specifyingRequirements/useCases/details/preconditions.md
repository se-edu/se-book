{% from "common/macros.njk" import show_term with context %}
<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**{{ show_term("Preconditions") }} specify the state you expect the system to be in before the use case starts.**

<box>
<div class="text-monospace">

Software System: Online Banking System<br>
Use case:  UC23 - Transfer Money<br>
Actor: User<br>
==Preconditions: User is logged in==<br>
MSS:
1. User chooses to transfer money.
1. OBS requests for details for the transfer.<br>
   ...
</div>
</box>

<p/>
