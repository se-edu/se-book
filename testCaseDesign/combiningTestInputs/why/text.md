<span id="title">Why</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the need for strategies to combine test inputs</span>

<div id="body">

**An SUT can take multiple inputs.** You can select values for each input (using equivalence partitioning, boundary value analysis, or some other technique).

<box>

{{ icon_example }} An SUT that takes multiple inputs and some values chosen for each input:

* Method to test: `calculateGrade(participation, projectGrade, isAbsent, examScore)`
* Values to test:
  Input         | Valid values to test | Invalid values to test
  ------------- | -------------------- | ----------------------
  participation | 0, 1, 19, 20         | 21, 22
  projectGrade  | A, B, C, D, F        |
  isAbsent      | true, false          |
  examScore     | 0, 1, 69, 70,        | 71, 72

</box>

**Testing all possible combinations is effective but not efficient.** If you test all possible combinations for the above example, you need to test 6x5x2x6=360 cases. Doing so has a higher chance of discovering bugs (i.e. effective) but the number of test cases will be too high (i.e. not efficient). Therefore, **you need smarter ways to combine test inputs that are both effective and efficient.**

</div>

<div id="extras">
</div>
