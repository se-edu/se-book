<panel header=":lock::key: Choose the correct statement.">
<question>

Which of these is not one of the heuristics recommended when creating test cases with multiple inputs?

- [ ] a. All invalid test inputs must be tested together.
- [ ] b. It is ok to combine valid values for different inputs.
- [ ] c. No more than one invalid test input should be in a given test case.
- [ ] d. Each valid test input should appear at least once in a test case that doesn’t have any invalid inputs.

<div slot="answer">

- [x] a. All invalid test inputs must be tested together.
- [ ] b. It is ok to combine valid values for different inputs.
- [ ] c. No more than one invalid test input should be in a given test case.
- [ ] d. Each valid test input should appear at least once in a test case that doesn’t have any invalid inputs.

Explanation: If you test all invalid test inputs together, you will not know if each one of the invalid inputs are handled correctly by the SUT. This is because most SUTs return an error message upon encountering the first invalid input. 

</div>
</question>
</panel>
