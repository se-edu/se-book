<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

<panel header="{{ icon_Q_A }} EZ-Link top-up use case">
<question has-input="true">

Complete the following use case (MSS, extensions, etc.). Note that you should not blindly follow how the existing  <tooltip content="A type of a cash card topup machine">EZ-Link machine</tooltip> operates because it will prevent you from designing a better system.  You should consider all possible extensions without complicating the use case too much.

<tip-box>

* System: EZ-Link machine
* Use case: UC2 top-up EZ-Link card
* Actor: EZ-Link card user

</tip-box>

<div slot="answer">

<tip-box>
  <div>
    <ul>
      <li>System: EZ-Link machine (those found at MRTs)</li>
      <li>Use case: UC2 top-up EZ-Link card</li>
      <li>Actor: EZ-Link card user</li>
      <li>Preconditions: All hardware in working order.</li>
      <li>Guarantees: MSS → the card will be topped-up.</li>
      <li>MSS:
        <ol>
          <li>User places the card on the reader.</li>
          <li>System displays card details and prompts for desired action.</li>
          <li>User selects top-up.</li>
          <li>System requests for top-up details (amount, payment option, receipt required?).</li>
          <li>User enters details.</li>
          <li>System processes <span class="underline">cash payment (UC02)</span> or <span class="underline">NETS payment (UC03).</span></li>
          <li>System updates the card value.</li>
          <li>System indicates transaction as completed.</li>
          <li>If requested in step 5, system prints receipt.</li>
          <li>User removes the card.</li>
          <li class="custom-bullet-point">Use case ends.</li>
        </ol>
      </li>
      <li> Extensions:
        <ol class="custom-bullet-list">
          <li>*a. User removed card or other hardware error detected.
            <ol class="custom-bullet-list">
              <li>*a1. System indicates the transaction has been aborted.</li>
              <li>Use case ends.</li>
            </ol>
          </li>
        </ol>
      </li>
    </ul>
  </div>

Notes:
* We assume that the only way to cancel a transaction is by removing the card.
* By not breaking step 4 into further steps, we avoid committing to a particular mechanism to enter data. For example, we are free to accept all data in one screen.
* In step 5, we assume that the input mechanism does not allow any incorrect data.

</tip-box>

<tip-box>
  <div>
    <ul>
      <li>System: EZ-Link machine</li>
      <li>Use case: UC03 process NETS payment</li>
      <li>Actor: EZ-Link card user</li>
      <li>Preconditions: A transaction requiring payment is underway.</li>
      <li>Guarantees: MSS → Transaction amount is transferred from user account to EZ-Link company account.</li>
      <li>MSS:
        <ol>
          <li>System requests to insert ATM card.</li>
          <li>User inserts the ATM card.</li>
          <li>System requests for PIN.</li>
          <li>User enters PIN.</li>
          <li>System reports success.</li>
          <li class="custom-bullet-point">Use case ends.</li>
        </ol>
      </li>
      <li> Extensions:
        <ol class="custom-bullet-list">
          <li>2a. Unacceptable ATM card (damaged or inserted wrong side up).
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>4a. Wrong PIN.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>4b. Insufficient funds.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>*a. Connection to the NETS gateway is disrupted.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
        </ol>
      </li>
    </ul>
  </div>

Note: UC02 can be written along similar lines.

</tip-box>

</div>
</question>
</panel>
