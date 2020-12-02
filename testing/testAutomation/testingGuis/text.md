<span id="title">Automated testing of GUIs</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain automated GUI testing</span>

<div id="body">

If a software product has a GUI (Graphical User Interface) component, all product-level testing (i.e. the types of testing mentioned above) need to be done using the GUI. However, **testing the GUI is much harder than testing the CLI (Command Line Interface) or API**, for the following reasons:

* Most GUIs can support a large number of different operations, many of which can be performed in any arbitrary order.
* GUI operations are more difficult to automate than API testing. Reliably automating GUI operations and automatically verifying whether the GUI behaves as expected is harder than calling an operation and comparing its return value with an expected value. Therefore, automated regression testing of GUIs is rather difficult. 
* The appearance of a GUI (and sometimes even behavior) can be different across platforms and even environments. For example, a GUI can behave differently based on whether it is minimized or maximized, in focus or out of focus, and in a high resolution display or a low resolution display.

<img src="{{baseUrl}}/testing/testAutomation/testingGuis/images/diagram.png" height="120" />
<p/>

**Moving as much logic as possible out of the GUI can make GUI testing easier.** That way, you can bypass the GUI to test the rest of the system using automated API testing. While this still requires the GUI to be tested, the number of such test cases can be reduced as most of the system will have been tested using automated API testing.

**There are testing tools that can automate GUI testing.** 

<box>

{{ icon_example }} Some tools used for automated GUI testing:
* **TestFX** can do automated testing of JavaFX GUIs<br>
* **Visual Studio** supports the ‘record replay’ type of GUI test automation.
* [**Selenium**](http://seleniumhq.org/) can be used to automate testing of web application UIs<br>

  <panel type="seamless" header="{{ icon_video }} Demo video of automated testing of a web application" class="non-printable">
  
  This video shows automated testing of the [TEAMMATES](http://github.com/teammates/teammates) web app using Selenium.
  
  @[youtube](ihst69Zq1xM)
  
  </panel>


</box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
