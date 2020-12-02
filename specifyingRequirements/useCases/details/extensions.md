**==_Extensions_== are "add-on"s to the MSS that describe _exceptional/alternative flow of events_.** They describe variations of the scenario that can happen if certain things are not as expected by the MSS. Extensions appear below the MSS. 

<box>

{{ icon_example }} This example adds some extensions to the use case in the previous example.

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

<pre>
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
  
  *a. At any time, User chooses to cancel the transfer.
      *a1. OBS requests to confirm the cancellation.
      *a2. User confirms the cancellation.
      Use case ends.

  *b. At any time, 120 seconds lapse without any input from the User.
      *b1. OBS cancels the transfer.
      *b2. OBS informs the User of the cancellation.
      Use case ends.
</pre>
</box>

Note that the numbering style is not a universal rule but a widely used convention. Based on that convention, 
* either of the extensions marked `3a.` and `3b.` can happen just after step `3` of the MSS.
* the extension marked as `*a.` can happen at any step (hence, the `*`).

When separating extensions from the MSS, keep in mind that the **MSS should be self-contained**. That is, the MSS should give us a complete usage scenario. 

Also note that it is not useful to mention events such as power failures or system crashes as extensions because the system cannot function beyond such catastrophic failures.

<img src="{{baseUrl}}/specifyingRequirements/useCases/details/images/extension.png" height="250" />

<p/>

In use case diagrams you can use the `<<extend>>` arrows to show extensions. Note the direction of the arrow is from the extension to the use case it extends and the arrow uses a dashed line.
