<span id="title">Why</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the need for early developer testing</span>

<div id="body">

**Delaying testing until the full product is complete has a number of disadvantages:**

* **Locating the cause of a test case failure is difficult due to the larger search space;** in a large system, the search space could be millions of lines of code, written by hundreds of developers! The failure may also be due to multiple inter-related bugs.
* **Fixing a bug found during such testing could result in major rework**, especially if the bug originated from the design or during requirements specification %%i.e. a faulty design or faulty requirements%%.
* **One bug might 'hide' other bugs**, which could emerge only after the first bug is fixed.
* **The delivery may have to be delayed** if too many bugs are found during testing.

**Therefore, it is better to do early testing**, as hinted by the popular rule of thumb given below, also illustrated by the graph below it.

> The earlier a bug is found, the easier and cheaper to have it fixed.

<pic src="{{baseUrl}}/testing/testingTypes/developerTesting/why/images/diagram.png" height="180" />
<p/>

Such early testing software is usually, and often by necessity, done by the developers themselves i.e., developer testing.

</div>

<div id="extras">
<include src="exercises.md" />
</div>


</div>
