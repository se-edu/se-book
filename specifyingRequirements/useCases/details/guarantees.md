<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**==_Guarantees_== specify what the use case promises to give us at the end of its operation.**

<tip-box>
  <div>
    <ul>
      <li>Software System: Online Banking System</li>
      <li>Use case: UC23 - Transfer Money</li>
      <li>Actor: User</li>
      <li>Preconditions: User is logged in.</li>
      <li><b>Guarantees:
        <ul>
          <li>Money will be deducted from the source account only if the transfer to the destination account is successful</li>
          <li>The transfer will not result in the account balance going below the minimum balance required.</li>
        </ul>
      </b></li>
      <li>MSS:
        <ol>
          <li>User chooses to transfer money.</li>
          <li>OBS requests for details for the transfer.</li>
          <li class="custom-bullet-point">...</li>
        </ol>
      </li>
    </ul>
  </div>
</tip-box>

<p/>
