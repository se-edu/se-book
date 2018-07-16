<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain test coverage</span>

<div id="body">

**_Test coverage_ is a metric used to measure the extent to which testing exercises the code** i.e., how much of the code is 'covered' by the tests. 

Here are some examples of different coverage criteria:

* **Function/method coverage** : based on functions executed %%&nbsp;e.g., testing executed 90 out of 100 functions%%.
* **Statement coverage** : based on the number of line of code executed %%&nbsp;e.g., testing executed 23k out of 25k LOC%%.
* **Decision/branch coverage** : based on the decision points exercised %%&nbsp;e.g., an `if` statement evaluated to both `true` and `false` with separate test cases during testing is considered 'covered'%%.
* **Condition coverage** : based on the boolean sub-expressions, each evaluated to both true and false with different test cases. Condition coverage is not the same as the decision coverage.
 
<tip-box> 

{{ icon_example }} `if(x > 2 && x < 44)` is considered one decision point but two conditions. 

For 100% branch or decision coverage, two test cases are required:

  * `(x > 2 && x < 44) == true` :  [e.g. `x == 4`]
  * `(x > 2 && x < 44) == false` :  [e.g. `x == 100`]

For 100% condition coverage, three test cases are required

  * `(x > 2) == true` , `(x < 44) == true` : [e.g. `x == 4`]
  * `(x < 44) == false` : [e.g. `x == 100`]
  * `(x > 2) == false` : [e.g. `x == 0`]

</tip-box>
 

* **Path coverage** measures coverage in terms of possible paths through a given part of the code executed. 100% path coverage means all possible paths have been executed. A commonly used notation for path analysis is called the _Control Flow Graph (CFG)_. 
* **Entry/exit coverage** measures coverage in terms of possible _calls to_ and _exits_ from the operations in the SUT.

</div>

<div id="extras">

<include src="exercises.md" />

</div>