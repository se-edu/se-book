<span id="title">Test input combination strategies</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain some basic test input combination strategies</span>

<div id="body">

Given below are some basic strategies for generating a set of test cases by combining multiple test inputs.

<box>

{{ icon_example }} Let's assume the SUT has the following three inputs and you have selected the given values for testing:

SUT: `foo(char p1, int p2, boolean p3)`

Values to test:

| Input   | Values      |
| :-----: | :---------: |
| p1      | a, b, c     |
| p2      | 1, 2, 3     |
| p3      | T, F        |  

</box>

**The _all combinations_ strategy generates test cases for each unique combination of test inputs.**

<box>

{{ icon_example }} This strategy generates 3x3x2=18 test cases.

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | a       | 1       | F       |
| 3           | a       | 2       | T       |
| ...         | ...     | ...     | ...     |
| 18          | c       | 3       | F       |

</box>

**The _at least once_ strategy includes each test input at least once.**

<box>

{{ icon_example }} This strategy generates 3 test cases.

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | b       | 2       | F       |
| 3           | c       | 3       | VV/IV   |

VV/IV = Any Valid Value / Any Invalid Value

</box>

**The _all pairs_ strategy creates test cases so that for any given pair of inputs, all combinations between them are tested.** It is based on the observation that a bug is rarely the result of more than two interacting factors. The resulting number of test cases is lower than the _all combinations_ strategy, but higher than the _at least once_ approach.

<box>

{{ icon_example }} This strategy generates 9 test cases:

<panel type="seamless" header="See steps">

Let's first consider inputs p1 and p2:

| Input   | Values      |
| :-----: | :---------: |
| p1      | a, b, c     |
| p2      | 1, 2, 3     |

These values can generate <tooltip content="(a,1)(a,2)(a,3)(b,1)(b,2),...">3x3=9 combinations</tooltip>, and the test cases should cover all of them.

Next, let's consider p1 and p3.

| Input   | Values      |
| :-----: | :---------: |
| p1      | a, b, c     |
| p3      | T, F        |

These values can generate <tooltip content="(a,T)(a,F)(b,T)(b,F),...">3x2=6 combinations</tooltip>, and the test cases should cover all of them.

Similarly, inputs p2 and p3 generate another 6 combinations.

The 9 test cases given below cover all the above 9+6+6 combinations.

</panel>

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

</box>

A variation of this strategy is to test all pairs of inputs but only for inputs that could influence each other.

<box>

{{ icon_example }} Testing all pairs between p1 and p3 only while ensuring all p2 values are tested at least once:

| Test Case   | p1      | p2      | p3      |
| :---------: | :-----: | :-----: | :-----: |
| 1           | a       | 1       | T       |
| 2           | a       | 2       | F       |
| 3           | b       | 3       | T       |
| 4           | b       | VV/IV   | F       |
| 5           | c       | VV/IV   | T       |
| 6           | c       | VV/IV   | F       |

</box>

**The _random_ strategy generates test cases using one of the other strategies and then picks a subset randomly** (presumably because the original set of test cases is too big).

**There are other strategies that can be used too.**

</div>

<div id="extras">
</div>
