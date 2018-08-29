<panel header="Q: Use case diagram for QA system">
<question has-input="false">

A software house wishes to automate its Quality Assurance division.

The system is to be used by Testers, Programmers and System Administrators. Only an administrator can create new users and assign tasks to programmers. Any tester can create a bug report, as well as set the status of a bug report as ‘closed’. Only a programmer can set the state of a bug report to ‘fixed’, but a programmer cannot set the status of a bug report to ‘closed’. Each tester is assigned just one task at a time. A task involves testing of a particular component for a particular customer. Tester must document the bugs they find. Each bug is given a unique identifier. Other information recorded about the bug is component id, severity, date and time reported, programmer who is assigned to fix it, date fixed, date retested and date closed. The system keeps track of which bugs are assigned to which programmer at any given time. It should be able to generate reports on the number of bugs found, fixed and closed e.g. number of bugs per component and per customer; number of bugs found by a particular tester ; number of bugs awaiting to be fixed; number of bugs awaiting to be retested; number of bugs awaiting to be assigned to programmers etc.

**Develop a use case diagram to capture their requirements given below.**

<div slot="answer">

<img src="{{baseUrl}}/specifyingRequirements/useCases/identifying/images/qaSystem.jpg" width="400" />

<p/>

**Explanation**: The given description contains information not relevant to use case modeling. Furthermore, the description is not enough to complete the use case diagram All these are realities of real projects. However, the process of trying to create this use case diagram prompts us to investigate issues such as:

*	Is ‘edit bug report’ a use case or editing the bug report is covered by other use cases such as those for setting the status of bug reports? If it is indeed a separate use case, who are the actors of that use case?
*	Does ‘assign task’ simply means ‘assign bug report’ or is there any other type of tasks?
*	There was some mention about Customers and Components. Does the system have to support use cases for creating and maintaining details about those entities? For example, should we have a ‘create customer record’ use case?
*	Which actors can perform the ‘generate report’ use case? Are reports generated automatically by the system at a specific time or generated ‘on demand’ when users request to view them? Do we have to treat different types of reports as different use cases (in case some types of reports are restricted to some types of users)? The above diagram assumes (just for illustration) that the report is generated on demand and only the system admin can generate any report.


</div>
</question>
</panel>
