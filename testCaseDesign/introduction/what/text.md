<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the need for deliberate test case design</span>

<div id="body">

**Except for trivial <tooltip content="Software Under Test">SUTs</tooltip>, <tooltip content="testing all possible cases">exhaustive testing</tooltip> is not practical** because such testing often requires a massive/infinite number of test cases.  

<tip-box>

{{ icon_example }} Consider the test cases for adding a string object to a <tooltip content="Java: `ArrayList`,<br>Python: `list`">collection</tooltip>:

* Add an item to an empty collection.
* Add an item when there is one item in the collection.
* Add an item when there are 2, 3, .... n items in the collection.
* Add an item that has an English, a French, a Spanish, ... word.
* Add an item that is the same as an existing item.
* Add an item immediately after adding another item.
* Add an item immediately after system startup.
* ...

Exhaustive testing of this operation can take many more test cases.

</tip-box>

> Program testing can be used to show the presence of bugs, but never to show their absence!  
> <sub>--Edsger Dijkstra</sub>

<div id="e-and-e">

**Every test case adds to the cost of testing.** In some systems, a single test case can cost thousands of dollars %%&nbsp;e.g. on-field testing of flight-control software%%. Therefore, **test cases need to be designed to make the best use of testing resources.**  In particular:

* **Testing should be _effective_** i.e., it finds a high percentage of existing bugs %%e.g., a set of test cases that finds 60 defects is more effective than a set that finds only 30 defects in the same system%%.

* **Testing should be _efficient_** i.e., it has a high rate of success (bugs found/test cases) %%a set of 20 test cases that finds 8 defects is more efficient than another set of 40 test cases that finds the same 8 defects%%.

**For testing to be <tooltip content="Efficient and Effective">E&E</tooltip>, each new test we add should be targeting a potential fault that is not already targeted by existing test cases.** There are test case design techniques that can help us improve E&E of testing.
</div>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>