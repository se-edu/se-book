{% from "common/macros.njk" import show_example with context %}
<span id="title">Automated testing of GUIs</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain automated GUI testing</span>

<div id="body">

If a software product has a <tooltip content="Graphical User Interface">GUI</tooltip> component, all product-level testing (i.e., the types of testing mentioned above) needs to be done using the GUI. However, **testing a GUI is harder than testing a <tooltip content="Command Line Interface">CLI</tooltip> or an <tooltip content="Application Programming Interface">API</tooltip>**, for the following reasons:

* Most GUIs can support a large number of different operations, many of which can be performed in any arbitrary order.
* GUI operations are more difficult to automate than API testing. Reliably automating GUI operations and automatically verifying whether the GUI behaves as expected is harder than calling an operation and comparing its return value with an expected value. Therefore, automated regression testing of GUIs is rather difficult.
* The appearance of a GUI (and sometimes even behavior) can be different across platforms and even environments. For example, a GUI can behave differently based on whether it is minimized or maximized, in focus or out of focus, and on a high-resolution display or a low-resolution display.

<pic eager class="tbg" src="{{baseUrl}}/testing/testAutomation/testingGuis/images/diagram.png" height="120" />
<p/>

**Moving as much logic as possible out of the GUI can make GUI testing easier.** That way, you can bypass the GUI to test the rest of the system using automated API testing. While this still requires the GUI to be tested, the number of such test cases can be reduced as most of the system can be tested through the API.

**There are testing tools that can automate GUI testing.**

{% call show_example() %}
Some tools used for automated GUI testing:

* **TestFX** can do automated testing of JavaFX GUIs<br>
* **Visual Studio** supports the ‘record replay’ type of GUI test automation.
* [**Selenium**](http://seleniumhq.org/), [**Playwright**](https://playwright.dev), [**Cypress**](https://www.cypress.io/), [**Puppeteer**](https://pptr.dev) are among tools that can automate testing of web application UIs<br>

{% endcall %}

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
