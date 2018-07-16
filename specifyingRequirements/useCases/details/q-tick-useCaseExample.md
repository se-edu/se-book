<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

<panel header="{{ icon_Q_A }} What’s wrong with this use case?">
<question>

Identify problems with this use case description.

<div>
  <ul>
    <li>System: EZ-Link machine (those found at MRTs)</li>
    <li>Use case: UC2 top-up EZ-Link card</li>
    <li>Actor: EZ-Link card user</li>
    <li>Preconditions: All hardware in working order.</li>
    <li>Guarantees: If MSS completes at least until step 7, the card will be topped-up.</li>
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

- [ ] a. It does not consider ‘system crash’ scenario.
- [ ] b. It does not contain enough UI details.
- [ ] c. The extension given is in fact an inclusion.
- [ ] d. No post conditions are given.
- [ ] e. ‘Use case ends’ is duplicated.

<div slot="answer">

None.

Explanation: Catastrophic failures such as ‘system crash’ need not be included in a use case. A use case is not supposed to contain UI details. Post conditions are optional. It is not a problem to have multiple exit points for a use case.

</div>
</question>
</panel>
