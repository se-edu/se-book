<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Why :one:

</div>

<div id="body">

**An SUT can take multiple inputs.** You can select values for each input (using equivalence partitioning, boundary value analysis, or some other technique).

<tip-box>

:package: an SUT that takes multiple inputs and some values chosen as values for each input:

* Scenario: calculateGrade
* Method to test: calculateGrade(participation, projectGrade, isAbsent, examScore)
* Values to test (invalid values are **bold**)

Input         | valid values to test | invalid values to test
------------- | -------------------- | ----------------------
participation | 0, 1, 19, 20         | 21, 22
projectGrade  | A, B, C, D, F        |
isAbsent      | true, false          |
examScore     | 0, 1, 69, 70,        | 71, 72

</tip-box>

**Testing all possible combinations is effective but not efficient.** If you test all possible combinations for the above example, you need to test 6x5x2x6=360 cases. Doing so has a higher chance of discovering bugs (i.e. effective) but the number of test cases can be too high (i.e. not efficient). Therefore, **we need smarter ways to combine test inputs that are both effective and efficient.**

</div>

<div id="extras">
</div>

</div>
