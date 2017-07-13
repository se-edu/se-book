<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

%%**Testing :arrow_right: Testing Types :arrow_right: System Testing :arrow_right:**%%

#### What :one:

<div id="main">

In system testing we take the _whole system_ and test it _against the system specification_.

System testing is typically done by a testing team (also called a QA team).

System test cases are based on the specified external behavior of the system. Sometimes, system tests go beyond the bounds defined in the specification. This is useful when testing that the system fails ‘gracefully’ having pushed beyond its limits.

<tip-box>

Example:

Take the example of an SUT (software under test) that is a browser capable of handling web pages containing up to 5000 characters. A test case can involve loading a web page containing more than 5000 characters. The expected ‘graceful’ behavior would be to ‘abort the loading of the page and show a meaningful error message’. This test case would fail if the browser attempted to load the large file anyway and crashed.

</tip-box>

System testing includes testing against non-functional requirements too. Here are some examples.

* _Performance testing_ –  to ensure the system responds quickly.
* _Load testing_ (also called _stress testing_ or _scalability testing_) – to ensure the system can work under heavy load.
* _Security testing_ – to test how secure the system is.
* _Compatibility testing, interoperability testing_ – to check whether the system can work with other systems.
* _Usability testing_ – to test how easy it is to use the system.
* _Portability testing_ – to test whether the system works on different platforms.

</div>
</div>
