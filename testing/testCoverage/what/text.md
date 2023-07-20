<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain test coverage</span>

<div id="body">

**_Test coverage_ is a metric used to measure the extent to which testing exercises the code** i.e., how much of the code is 'covered' by the tests.

Here are some examples of different coverage criteria:

* **Function/method coverage** : based on functions executed %%e.g., testing executed 90 out of 100 functions%%.
* **Statement coverage** : based on the number of lines of code executed %%e.g., testing executed 23k out of 25k LOC%%.
* **Decision/branch coverage** : based on the decision points exercised %%e.g., an `if` statement evaluated to both `true` and `false` with separate test cases during testing is considered 'covered'%%.
* **Condition coverage** : based on the boolean sub-expressions, each evaluated to both true and false with different test cases. Condition coverage is not the same as the decision coverage.

<box>

{{ icon_example }} `if(x > 2 && x < 44)` is considered one decision point but two conditions.

For 100% branch or decision coverage, two test cases are required:

  * `(x > 2 && x < 44) == true` :  [e.g. `x == 4`]
  * `(x > 2 && x < 44) == false` :  [e.g. `x == 100`]

For 100% condition coverage, three test cases are required:

  * `(x > 2) == true` , `(x < 44) == true` : [e.g. `x == 4`] <sup>%%[see note 1]%%</sup>
  * `(x < 44) == false` : [e.g. `x == 100`]
  * `(x > 2) == false` : [e.g. `x == 0`]

Note 1: A case where both conditions are `true` is needed because most execution environments use a _short circuiting_ behavior for compound boolean expressions e.g., given an expression `c1 && c2`, `c2` will not be evaluated if `c1` is `false` (as the final result is going to be `false` anyway).
</box>


* **Path coverage** measures coverage in terms of possible paths through a given part of the code executed. 100% path coverage means all possible paths have been executed. A commonly used notation for path analysis is called the _Control Flow Graph (CFG)_.
* **Entry/exit coverage** measures coverage in terms of possible _calls to_ and _exits_ from the operations in the SUT.<br>
  _Entry points_ refer to all places from which the method is called from the rest of the code i.e., all places where the control is handed over to the method in concern.<br>
  _Exit points_ refer to points at which the control is returned to the caller e.g., return statements, throwing of exceptions.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
