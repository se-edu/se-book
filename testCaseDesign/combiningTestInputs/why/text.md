<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design &rarr; Combining Test Inputs &rarr;</div>

<div id="title">

#### Why :one:

</div>

<div id="body">

Often, an SUT can take multiple inputs. Having selected test values for each input (using equivalence partitioning, boundary value analysis, or some other technique), how are they combined to create test cases?

<tip-box>

* Scenario: calculateGrade

* Method to test: calculateGrade(participation, projectGrade, isAbsent, examScore)

* Values to test (invalid values are **bold**)

	* participation: 0, 1, 19, 20, **21**, **22**
  * projectGrade: A, B, C, D, F
  * isAbsent: true, false
  * examScore: 0, 1, 69, 70, **71**, **72**

</tip-box>

For the calculateGrade scenario above, one obvious solution is to test all possible combinations i.e. test all 6x5x2x6=360 cases. Naturally, this technique has a higher chance of discovering bugs (i.e. effective) but the number of combinations can be too high to test (i.e. not efficient).

Therefore, we need smarter ways to combine test inputs that are both effective and efficient.

</div>

<div id="extras">
<div>

</div>
