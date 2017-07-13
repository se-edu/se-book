<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

%%**Testing :arrow_right: Testing Types :arrow_right: Acceptance Testing :arrow_right:**%%

#### Acceptance vs System Testing :two:

<div id="main">

Acceptance testing comes after system testing. Similar to system testing, acceptance testing involves testing the whole system.

Some differences between system testing and acceptance testing:

| System Testing                                      | Acceptance Testing                                                           |
| :-------------------------------------------------: | :--------------------------------------------------------------------------: |
| Done against the system specification               | Done against the requirements specification (see note 1 below)               |
| Done by testers of the project team                 | Done by a team that represents the customer                                  |
| Done on the development environment or a test bed   | Done on the deployment site or on a close simulation of the deployment site  |
| Both positive and negative test cases               | More focus on positive test cases                                            |

<tip-box>

**Requirement Specification vs System Specification**

The requirement specification need not be the same as the system specification. Some example differences:

* Requirements specification could be limited to how the system behaves in normal working conditions while the system specification can also include details on how it will fail gracefully when pushed beyond limits, how to recover,
* System specification could contain additional APIs  not available for users (for the use of developers/testers), etc
•	Requirement specification could be written in terms of problems that need to be solved (e.g. provide a method to locate an email quickly) while the system specification could be written in terms of how the system solve those problems (e.g. explain the email search feature).

However, in many cases one document serves as both a requirement specification and a system specification.

**Importance of testing on the deployment environment**

A system could work perfectly on the development environment, but fail in the deployment environment due to subtle differences between the two.

</tip-box>

</div>
</div>
