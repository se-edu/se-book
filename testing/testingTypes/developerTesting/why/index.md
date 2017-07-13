<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

%%**Testing :arrow_right: Testing Types :arrow_right: Developer Testing :arrow_right:**%%

#### Why :two:

<div id="main">

At first it might seem logical to have the system built in its entirety first and then getting it tested by professional testers. Here are the downsides of that approach.

* Locating the cause of such a test case failure is difficult due to a large search space; in a large system, the search space could be millions of lines of code, written by hundreds of developers! The failure may also be due to multiple inter-related bugs.
* Fixing a bug found during such testing could result in major rework, especially if the bug originated during the design or during requirements specification (i.e. a faulty design or faulty requirements).
* One bug might 'hide' other bugs, which could emerge only after the first bug is fixed.
* Too many bugs found during system testing can lead to delivery delays.

Due to the above reasons, it is better to do early developers testing. In fact, there is a widely accepted rule of thumb that says _the earlier a bug is found, the easier and cheaper to have it fixed_, as illustrated by the graph below.

<img src="{{baseUrl}}/testing/testingTypes/developerTesting/why/images/diagram.png" height="180" />
<p/>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
