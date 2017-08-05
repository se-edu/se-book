<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design &rarr; Introduction &rarr;</div>

<div id="title">

#### What :two:

</div>

<div id="body">

Testing all possible ways of using an SUT often requires an infinite number of test cases.  Except for trivial SUTs, exhaustive testing is not practical.

<tip-box>

Example:

Consider the test cases for adding a String object to a Collection:

* Add an item to an empty collection.
*	Add an item when there is one item in the collection.
*	Add an item when there are 2, 3, .... n items in the collection.
*	Add an item that has an English, a French, a Spanish, … word.
*	Add an item that is the same as an existing item.
*	Add an item immediately after adding another item.
*	Add an item immediately after system startup.
*	...

Exhaustive testing of this operation can take many more test cases.

</tip-box>

> Program testing can be used to show the presence of bugs, but never to show their absence!  
>
> --Edsger Dijkstra

Every test case adds to the cost of testing. In some systems, a single test case can cost thousands of dollars (e.g. on-field testing of flight-control software). Therefore, test cases have to be designed to make the best use of testing resources.  In particular:

* Testing should be effective, i.e. it finds a high % of existing bugs. A set of test cases that finds 60 defects is more effective than a set that finds only 30 defects in the same system.
* Testing should be efficient, i.e. it has a high rate of success (bugs found/test cases). A set of 20 test cases that finds 8 defects is more efficient than another set of 40 test cases that finds the same 8 defects.

For testing to be E&E, each new test we add should be targeting a potential fault that is not already targeted by existing test cases. There are test case design techniques that can help us improve E&E (Effectiveness and Efficiency) of testing. E.g. Equivalence Partitioning, Boundary Value Analysis

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
