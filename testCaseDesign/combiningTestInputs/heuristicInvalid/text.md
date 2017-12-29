<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design → Combining Test Inputs →</div>

<div id="title">

#### Heuristic: No More Than One Invalid Input In A Test Case :two:

</div>

<div id="body">

Consider the <trigger for="modal:heuristic-valid-test-case" trigger="click">test cases designed in [Heuristic: each valid input at least once in a positive test case]</trigger>.

<modal large title="**Extract from Quality Assurance → Test Case Design → Combining Test Inputs → Heuristic: each valid input at least once in a positive test case**" id="modal:heuristic-valid-test-case">
  <include src="../heuristicValid/text.md#heuristic-valid-test-case" />
</modal>

After running these test cases can you be sure that the error message “invalid price” is shown for negative prices? Answer: No. Reason: `-1`  -- the only input that is a negative price – is in a test case that produces the error message “invalid fruit”.

In this case a useful heuristic to apply is **no more than one invalid input in a test case**. After applying that, we get the following test cases.

<tip-box> 

| Case   | fruitName  | unitPrice  | Expected                       |
| :----: | :--------: | :--------: | :----------------------------: |
| 1      | Apple      | 1          | Print round label              |
| 2      | Banana     | 20         | Print oval label               |
| 2.1    | Cherry     | VV         | Print square label             |
| 3      | VV         | :exclamation:0 | Error message “invalid price”  |
| 4      | VV         | :exclamation:-1| Error message “invalid price"  |
| 4.1    | :exclamation:Dog | VV       | Error message “invalid fruit"  |

VV/IV = Any Invalid or Valid Value VV=Any Valid Value

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>

</div>
