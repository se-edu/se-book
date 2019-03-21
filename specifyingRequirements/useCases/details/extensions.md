**==_Extensions_== are "add-on"s to the MSS that describe _exceptional/alternative flow of events_.** They describe variations of the scenario that can happen if certain things are not as expected by the MSS. Extensions appear below the MSS. 

<tip-box>

{{ icon_example }} This example adds some extensions to the use case in the previous example.

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
      <li>*b. At any time, 120 seconds lapse without any input from the User.
        <ol class="custom-bullet-list">
          <li>*b1. OBS cancels the transfer.</li>
          <li>*b2. OBS informs the User of the cancellation.</li>
          <li>Use case ends.</li>
        </ol>
      </li>
    </ol>
  </li>
</ul>

</tip-box>

Note that the numbering style is not a universal rule but a widely used convention. Based on that convention, 
* either of the extensions marked `3a.` and `3b.` can happen just after step `3` of the MSS.
* the extension marked as `*a.` can happen at any step (hence, the `*`).

When separating extensions from the MSS, keep in mind that the **MSS should be self-contained**. That is, the MSS should give us a complete usage scenario. 

Also note that it is not useful to mention events such as power failures or system crashes as extensions because the system cannot function beyond such catastrophic failures.

<img src="{{baseUrl}}/specifyingRequirements/useCases/details/images/extension.png" height="250" />

<p/>

In use case diagrams you can use the `<<extend>>` arrows to show extensions. Note the direction of the arrow is from the extension to the use case it extends and the arrow uses a dashed line.
