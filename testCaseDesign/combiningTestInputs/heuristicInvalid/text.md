<span id="prereqs"><panel src="../heuristicValid/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Quality Assurance → Test Case Design → Combining Test Inputs → Heuristic: Each Valid Input at Least Once in a Positive Test Case%%" popup-url="{{ baseUrl }}/testCaseDesign/combiningTestInputs/heuristicValid" /></span>

<span id="outcomes">{{ icon_outcome }} Can apply heuristic ‘test invalid inputs individually before combining them’</span>

<span id="title">Heuristic: Test invalid inputs individually before combining them</span>

<div id="body">

**To verify the SUT is handling a certain invalid input correctly, it is better to test that invalid input without combining it with other invalid inputs.** For example, consider the test case 4 of <trigger for="modal:heuristic-valid-test-case" trigger="click">test cases designed in [Heuristic: each valid input at least once in a positive test case]</trigger>. After running that test case, can you be sure that the error message “invalid fruit” is caused by the invalid fruitName `Dog`?

* Answer: No
* Reason: Because it could have been (incorrectly) triggered by the other invalid unitPrice of `-1` in that test case, due to a bug in the code.

Therefore, if that test case was intended to verify that the invalid fruitName `Dog` triggers the "invalid fruit" error message, it is better not to include the invalid unitPrice `-1` in that test case at the same time. If the invalid value `-1` needs to be tested, we should test it in a separate test case.

After applying the above insight to our running example, you get the following test cases.

<modal large header="**Extract from Quality Assurance → Test Case Design → Combining Test Inputs → Heuristic: each valid input at least once in a positive test case**" id="modal:heuristic-valid-test-case">
  <include src="../heuristicValid/text.md#heuristic-valid-test-case" />
</modal>

<box>

| Case   | fruitName  | unitPrice  | Expected                       |
| :----: | :--------: | :--------: | :----------------------------: |
| 1      | Apple      | 1          | Print round label              |
| 2      | Banana     | 20         | Print oval label               |
| 2.1    | Cherry     | VV         | Print square label             |
| 3      | VV         | !!0!!      | Error message “invalid price”  |
| ==4==  | VV         | ==!!-1!!== | Error message “invalid price"  |
| ==4.1== | ==!!Dog!!== | VV       | Error message “invalid fruit"  |

--VV/IV = Any Invalid or Valid Value VV = Any Valid Value--

</box>

**This is not to say _never_ have more than one invalid input in a test case**. In fact, an SUT might work correctly when only one invalid input is given but not when a certain combination of multiple invalid inputs is given. Hence, it is still useful to have test cases with multiple invalid inputs, _after_ you already have confirmed that the SUT works when only one invalid input is given.

**_Test invalid inputs individually before combining them_** is the heuristic we learned here. As a test case with multiple invalid inputs _by itself_ does not confirm that the SUT works for each of those invalid inputs, you are better off testing the SUT with one-invalid-input-at-a-time first, and if you can afford more test cases, also testing with combinations of invalid inputs.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
