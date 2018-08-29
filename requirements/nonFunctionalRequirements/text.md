<div id="title">

#### Non-Functional Requirements

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain non-functional requirements</span>

<div id="body">

There are two kinds of requirements:  

1. **_Functional requirements_ specify what the system should do.**
2. **_Non-functional requirements_ specify the constraints under which system is developed and operated.** 

<tip-box> 

{{ icon_example }} Some examples of non-functional requirement categories:

* Data requirements e.g. size, <tooltip content="how often do data change">volatility</tooltip>, <tooltip content="saving data permanenetly">persistency</tooltip> etc.,
* Environment requirements e.g. technical environment in which system would operate or need to be compatible with.
* Accessibility, Capacity, Compliance with regulations, Documentation, Disaster recovery, Efficiency, Extensibility, Fault tolerance, Interoperability, Maintainability, Privacy, Portability, Quality, Reliability, Response time, Robustness, Scalability, Security, Stability, Testability, and more ...

<panel type="seamless" header="{{ icon_example }} Some concrete examples of NFRs" expanded>

* Business/domain rules:   e.g. the size of the minefield cannot be smaller than five.
* Constraints: e.g.  the system should be backward compatible with data produced by earlier versions of the system; system testers are available only during the last month of the project; the total project cost should not exceed $1.5 million.
* Technical requirements: e.g. the system should work on both 32-bit and 64-bit environments.
* Performance requirements: e.g. the system should respond within two seconds.
* Quality requirements: e.g. the system should be usable by a novice who has never carried out an online purchase.
* Process requirements: e.g. the project is expected to adhere to a schedule that delivers a feature set every one month.
* Notes about project scope: e.g. the product is not required to handle the printing of reports.
* Any other noteworthy points: e.g. the game should not use images deemed offensive to those injured in real mine clearing activities.
</panel>

</tip-box>


We may have to spend an extra effort in digging NFRs out as early as possible because,
1. **NFRs are easier to miss** %%&nbsp;e.g., stakeholders tend to think of functional requirements first%%
1. sometimes **NFRs are critical to the success of the software.** %%&nbsp;E.g. A web application that is too slow or that has low security is unlikely to succeed even if it has all the right functionality.%%

</div>

<div id="extras">
<include src="exercises.md" />
</div>