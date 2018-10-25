<div id="title">

#### Heuristic: Each Valid Input at Least Once in a Positive Test Case

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply heuristic ‘each valid input at least once in a positive test case’</span>

<div id="body">

Consider the following scenario.

<tip-box>

SUT:  `printLabel(fruitName String, unitPrice int)`

**Selected values for** `fruitName` (invalid values are ++underlined++ ):

Values	| Explanation
------- | -----------
Apple   | Label format is round
Banana  | Label format is oval
Cherry  | Label format is square
++Dog++ | Not a valid fruit

**Selected values for** `unitPrice`:

Values	| Explanation
------- | -----------
1       | Only one digit
20      | Two digits
++0++   | Invalid because 0 is not a valid price
++-1++  | Invalid because negative prices are not allowed

</tip-box>

Suppose these are the test cases being considered.

<tip-box> 

| Case   | fruitName  | unitPrice  | Expected                       |
| :----: | :--------: | :--------: | :----------------------------: |
| 1      | Apple      | 1          | Print label                    |
| 2      | Banana     | 20         | Print label                    |
| 3      | Cherry     | ++0++      | Error message “invalid price”  |
| 4      | ++Dog++    | ++-1++     | Error message “invalid fruit"  |

</tip-box>

It looks like the test cases were created using the _at least once_ strategy. After running these tests can we confirm that square-format label printing is done correctly?
* Answer: No.
* Reason: `Cherry` -- the only input that can produce a square-format label -- is in a negative test case which produces an error message instead of a label. If there is a bug in the code that prints labels in square-format, these tests cases will not trigger that bug.

In this case a useful heuristic to apply is **each valid input must appear at least once in a positive test case**. `Cherry` is a valid test input and we must ensure that it appears at least once in a positive test case. Here are the updated test cases after applying that heuristic.

<tip-box> 

<div id="heuristic-valid-test-case">

| Case   | fruitName  | unitPrice  | Expected                       |
| :----: | :--------: | :--------: | :----------------------------: |
| 1      | Apple      | 1          | Print round label              |
| 2      | Banana     | 20         | Print oval label               |
| 2.1    | Cherry     | VV         | Print square label             |
| 3      | VV         | ++0++      | Error message “invalid price”  |
| 4      | ++Dog++    | ++-1++     | Error message “invalid fruit"  |

VV/IV = Any Invalid or Valid Value VV=Any Valid Value

</div>

</tip-box>

</div>

<div id="extras">
</div>