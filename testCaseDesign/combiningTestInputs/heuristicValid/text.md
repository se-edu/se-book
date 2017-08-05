<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design &rarr; Combining Test Inputs &rarr;</div>

<div id="title">

#### Heuristic: Each Valid Input At Least Once In A Positive Test Case :two:

</div>

<div id="body">

<tip-box>

Scenario: calculateFruitPrice

SUT  printLabel(fruitName String, unitPrice int)

Selected values for each input (invalid values are underlined):

<table class="table">
  <tr>
    <th>Input</th>
    <th>Values</th>
    <th>Reason</th>
  </tr>
  <tr>
    <td>fruitName</td>
    <td>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
        <li>Dog</li>
      </ul>
    </td>
  <td>
      <ul>
        <li>Label format is round</li>
        <li>Label format is oval</li>
        <li>Label format is square</li>
        <li>Not a valid fruit</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>unitPrice</td>
    <td>
      <ul>
        <li>1</li>
        <li>20</li>
        <li>0</li>
        <li>-1</li>
      </ul>
    </td>
  <td>
      <ul>
        <li>Only one digit</li>
        <li>Two digits</li>
        <li>Invalid because 0 is not a valid price</li>
        <li>Invalid because negative prices are not allowed</li>
      </ul>
    </td>
  </tr>
</table>

</tip-box>

Suppose these are the test cases being considered.

| Case   | fruitName  | unitPrice  | Expected                       |
| :----: | :--------: | :--------: | :----------------------------: |
| 1      | Apple      | 1          | Print label                    |
| 2      | Banana     | 20         | Print label                    |
| 3      | Cherry     | 0          | Error message “invalid price”  |
| 4      | Dog        | -1         | Error message “invalid fruit"  |

It looks like the test cases were created using the ‘at least once’ strategy. After running these tests can we confirm that square-format label printing is done correctly? Answer: No. Reason: `Cherry` -- the only input that can produce a square-format label -- is in a negative test case which produces an error message instead of a label. If there is a bug in the code that prints labels in square-format, these tests cases will not trigger that bug.

In this case a useful heuristic to apply is ‘each valid input at least once in a positive test case’ which means exactly what it says. `Cherry` is a valid test input and we must ensure that it appears at least once in a valid test case. Here are the updated test cases after applying that heuristic.

<div id="heuristic-valid-test-case">

| Case   | fruitName  | unitPrice  | Expected                       |
| :----: | :--------: | :--------: | :----------------------------: |
| 1      | Apple      | 1          | Print round label              |
| 2      | Banana     | 20         | Print oval label               |
| 2.1    | Cherry     | VV/IV      | Print square label             |
| 3      | VV         | 0          | Error message “invalid price”  |
| 4      | Dog        | -1         | Error message “invalid fruit"  |

VV/IV = Any Invalid or Valid Value VV=Any Valid Value

</div>

</div>

<div id="extras">
<div>

</div>
