<div id="title">

#### Acceptance vs System Testing

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the differences between system testing and acceptance testing</span>

<div id="body">

Acceptance testing comes after system testing. Similar to system testing, acceptance testing involves testing the whole system.

Some differences between system testing and acceptance testing:

| System Testing | Acceptance Testing |
| :------------- | :----------------- |
| Done against the system specification | Done against the requirements specification |
| Done by testers of the project team | Done by a team that represents the customer |
| Done on the development environment or a test bed | Done on the deployment site or on a close simulation of the deployment site |
| Both negative and positive test cases | More focus on positive test cases |

%%Note: _negative_ test cases: cases where the SUT is not expected to work normally e.g. incorrect inputs; _positive_ test cases: cases where the SUT is expected to work normally%%

<tip-box>

**Requirement Specification vs System Specification**

The requirement specification need not be the same as the system specification. Some example differences:

| Requirements Specification | System Specification |
| :------------------------- | :------------------- |
| limited to how the system behaves in normal working conditions | can also include details on how it will fail gracefully when pushed beyond limits, how to recover, etc. specification
| written in terms of problems that need to be solved (e.g. provide a method to locate an email quickly)| written in terms of how the system solve those problems (e.g. explain the email search feature) |
| specifies the interface available for intended end-users | could contain additional APIs not available for end-users (for the use of developers/testers) |

However, **in many cases one document serves as both a requirement specification and a system specification.**

</tip-box>

**Passing system tests does not necessarily mean passing acceptance testing.** Some examples:
* The system might work on the testbed environments but might not work the same way in the deployment environment, due to subtle differences between the two environments.
* The system might conform to the system specification but could fail to solve the problem it was supposed to solve for the user, due to flaws in the system design.


</div>

<div id="extras">

<include src="exercises.md" />

</div>