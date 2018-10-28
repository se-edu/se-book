<div id="title">

#### Mix

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply multiple test input combination techniques together</span>

<div id="body">

Consider the calculateGrade scenario given below:

<tip-box>

* SUT : `calculateGrade(participation, projectGrade, isAbsent, examScore)`
* Values to test: invalid values are ++underlined++
  * participation: 0, 1, 19, 20, ++21++, ++22++
  * projectGrade: A, B, C, D, F
  * isAbsent: true, false
  * examScore: 0, 1, 69, 70, ++71++, ++72++

</tip-box>

To get the first cut of test cases, let’s apply the _at least once_ strategy.

<tip-box>

**Test cases for calculateGrade V1**

| Case No. | participation  | projectGrade | isAbsent    | examScore | Expected    |
| :------: | :------------: | :----------: | :---------: | :-------: | :---------: |
| 1        | 0              | A            | true        | 0         | ...         |
| 2        | 1              | B            | false       | 1         | ...         |
| 3        | 19             | C            | VV/IV       | 69        | ...         |
| 4        | 20             | D            | VV/IV       | 70        | ...         |
| 5        | ++21++         | F            | VV/IV       | ++71++    | Err Msg     |
| 6        | ++22++         | VV/IV        | VV/IV       | ++72++    | Err Msg     |

VV/IV = Any Valid or Invalid Value, Err Msg = Error Message

</tip-box>

Next, let’s apply the _each valid input at least once in a positive test case_ heuristic. Test case 5 has a valid value for `projectGrade=F` that doesn't appear in any other positive test case. Let's replace test case 5 with 5.1 and 5.2 to rectify that.

<tip-box>

**Test cases for calculateGrade V2**

| Case No. | participation  | projectGrade | isAbsent    | examScore | Expected    |
| :------: | :------------: | :----------: | :---------: | :-------: | :---------: |
| 1        | 0              | A            | true        | 0         | ...         |
| 2        | 1              | B            | false       | 1         | ...         |
| 3        | 19             | C            | VV          | 69        | ...         |
| 4        | 20             | D            | VV          | 70        | ...         |
| ==5.1==  | VV             | F            | VV          | VV        | ...         |
| ==5.2==  | ++21++         | VV/IV        | VV/IV       | ++71++    | Err Msg     |
| 6        | ++22++         | VV/IV        | VV/IV       | ++72++    | Err Msg     |

VV = Any Valid Value VV/IV = Any Valid or Invalid Value

</tip-box>

Next, we apply the _no more than one invalid input in a test case_ heuristic. Test cases 5.2 and 6 don't follow that heuristic. Let's rectify the situation as follows:

<tip-box>

**Test cases for calculateGrade V3**

| Case No. | participation  | projectGrade | isAbsent    | examScore | Expected    |
| :------: | :------------: | :----------: | :---------: | :-------: | :---------: |
| 1        | 0              | A            | true        | 0         | ...         |
| 2        | 1              | B            | false       | 1         | ...         |
| 3        | 19             | C            | VV          | 69        | ...         |
| 4        | 20             | D            | VV          | 70        | ...         |
| 5.1      | VV             | F            | VV          | VV        | ...         |
| 5.2      | ++21++         | ==VV==       | ==VV==      | ==VV==    | Err Msg     |
| ==5.3==  | ++22++         | VV           | VV          | VV        | Err Msg     |
| ==6.1==  | VV             | VV           | VV          | ++71++    | Err Msg     |
| ==6.2==  | VV             | VV           | VV          | ++72++    | Err Msg     |

</tip-box>

Next, let us assume that there is a dependency between the inputs `examScore` and `isAbsent` such that an absent student can only have `examScore=0`. To cater for the hidden invalid case arising from this, we can add a new test case where `isAbsent=true` and `examScore!=0`. In addition, test cases 3-6.2 should have `isAbsent=false` so that the input remains valid.

<tip-box>

**Test cases for calculateGrade V4**

| Case No. | participation  | projectGrade | isAbsent    | examScore | Expected    |
| :------: | :------------: | :----------: | :---------: | :-------: | :---------: |
| 1        | 0              | A            | true        | 0         | ...         |
| 2        | 1              | B            | false       | 1         | ...         |
| 3        | 19             | C            | ==false==   | 69        | ...         |
| 4        | 20             | D            | ==false==   | 70        | ...         |
| 5.1      | VV             | F            | ==false==   | VV        | ...         |
| 5.2      | ++21++         | VV           | ==false==   | VV        | Err Msg     |
| 5.3      | ++22++         | VV           | ==false==   | VV        | Err Msg     |
| 6.1      | VV             | VV           | ==false==   | ++71++    | Err Msg     |
| 6.2      | VV             | VV           | ==false==   | ++72++    | Err Msg     |
| ==7==    | ==VV==         | ==VV==       | ==true==    | ==!=0==   | ==Err Msg== |

</tip-box>

</div>

<div id="extras">
 <include src="exercisesPanel.md" boilerplate />
</div>