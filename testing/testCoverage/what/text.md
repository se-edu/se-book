<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Testing &rarr; Test Coverage &rarr;</div>

<div id="title">

#### What :two:

</div>

<div id="body">

In the context of testing, coverage is a metric used to measure the extent to which testing exercises the code.

Here are some examples of different coverage criteria:

* **Function/method coverage** measures the coverage in terms of functions executed e.g. testing executed 90 out of 100 functions.
* **Statement coverage** measures coverage in terms of the number of line of code executed e.g. testing executed 23k out of 25k LOC.
* **Decision/branch coverage** measures coverage in terms of decision points e.g. an if statement evaluated to both true and false with separate test cases during testing.
* **Condition coverage** measures coverage in terms of boolean sub-expressions, each evaluated to both true and false with different test cases. Condition coverage is not the same as the decision coverage; e.g. if(x > 2 && x < 44) is considered one decision point but two conditions. For 100% branch or decision coverage, two test cases are required:

  * (x > 2 && x < 44) == true :  [e.g. x = 4]
  * (x > 2 && x < 44) == false :  [e.g. x = 100]
  * For 100% condition coverage, three test cases are required

    * (x > 2) == true , (x < 44) == true : [e.g. x = 4]
    * (x < 44) == false : [e.g. x = 100]
    * (x > 2) == false : [e.g. x = 0]

* **Path coverage** measures coverage in terms of possible paths through a given part of the code executed. 100% path coverage means all possible paths have been executed. A commonly used notation for path analysis is called the _Control Flow Graph (CFG)_. For an introduction to CFGs, refer to the side-note below.
* **Entry/exit coverage** measures coverage in terms of possible _calls to_ and _exits_ from the operations in the SUT.

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
