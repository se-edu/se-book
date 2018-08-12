<div id="title">

#### Automated Testing of GUIs

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain automated GUI testing</span>

<div id="body">

If a software product has a GUI component, all product-level testing (i.e. the types of testing mentioned above) need to be done using the GUI. However, **testing the GUI is much harder than testing the CLI (command line interface) or API**, for the following reasons:

* Most GUIs can support a large number of different operations, many of which can be performed in any arbitrary order.
* GUI operations are more difficult to automate than API testing. Reliably automating GUI operations and automatically verifying whether the GUI behaves as expected is harder than calling an operation and comparing its return value with an expected value. Therefore, automated regression testing of GUIs is rather difficult. 
* The appearance of a GUI (and sometimes even behavior) can be different across platforms and even environments. For example, a GUI can behave differently based on whether it is minimized or maximized, in focus or out of focus, and in a high resolution display or a low resolution display.

<img src="{{baseUrl}}/testing/testAutomation/testingGuis/images/diagram.png" height="120" />
<p/>

**One approach to overcome the challenges of testing GUIs is to minimize logic aspects in the GUI.** Then, bypass the GUI to test the rest of the system using automated API testing. While this still requires the GUI to be tested manually, the number of such manual test cases can be reduced as most of the system has been tested using automated API testing.

**There are testing tools that can automate GUI testing.** 

<tip-box> 

{{ icon_example }} Some tools used for automated GUI testing:
* **TestFx** can do automated testing of JavaFX GUIs<br>
* **VisualStudio** supports ‘record replay’ type of GUI test automation.
* [**Selenium**](http://seleniumhq.org/) can be used to automate testing of Web application UIs<br>

  <panel type="seamless" header="{{ icon_video }} demo video of automated testing of a Web application" class="non-printable">
  
  This video shows automated testing of the [TEAMMATES](http://github.com/teammates/teammates) Web app using Selenium
  
  @[youtube](ihst69Zq1xM)
  
  </panel>


</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>