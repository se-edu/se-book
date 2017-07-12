<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design :arrow_right: Combining Test Inputs :arrow_right:</div>

<div id="title">

#### Test Input Combination Strategies :two:

</div>

<div id="body">

Given below are some basic strategies for generating a set of test cases by combining multiple test input combination strategies.

<tip-box>

Scenario: foo

SUT: foo(p1 char, p2 int, p3 boolean)

Selected values for each input:

| Input   | Values      |
| :-----: | :---------: |
| p1      | a, b, c     |
| p2      | 1, 2, 3     |
| p3      | T, F        |  

</tip-box>

**a) all combinations**: generate test cases for each unique combination of test inputs

<tip-box>

Example: the foo scenario requires 3x3x2=18 test cases under the ‘all combinations strategy

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | a       | 1       | F       |
| 3           | a       | 2       | T       |
| ...         | ...     | ...     | ...     |
| 18          | c       | 3       | F       |

</tip-box>

**b) at least once**: include each test input at least once

<tip-box>

Example:

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | b       | 1       | F       |
| 3           | c       | 3       | VV/IV   |

VV/IV = Any Value

</tip-box>

**c) all pairs**: This strategy creates test cases so that for any given pair of parameters, all combinations between them are tested. It is based on the observations that a bug is rarely the result of more than two interacting factors. The resulting number of test cases is lower than the “all combinations” approach, but higher than the “at least once” approach.

<tip-box>

Example: the foo scenario requires 9 test cases to cover all pairs

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | a       | 2       | T       |
| 3           | a       | 3       | F       |
| 4           | b       | 1       | F       |
| 5           | b       | 2       | T       |
| 6           | b       | 3       | F       |
| 7           | c       | 1       | T       |
| 8           | c       | 2       | F       |
| 9           | c       | 3       | T       |

</tip-box>

A variation of this strategy is to test all pairs of inputs but only for inputs that could influence each other.

<tip-box>

Example: the foo scenario, testing all pairs between p1 and p3 only while ensuring all p3 values are tested at least once

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | a       | 2       | F       |
| 3           | b       | 3       | T       |
| 4           | b       | VV/IV   | F       |
| 5           | c       | VV/IV   | T       |
| 6           | c       | VV/IV   | F       |

</tip-box>

**d) random:** In this strategy we generate test cases using one of the other strategies and then pick a subset randomly (presumably because the original set of test cases is too big).

**e) other**: There are other strategies that can be used.

</div>

</div>
