{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Testability</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain testability</span>

<div id="body">

**{{ show_term("Testability") }} is an indication of how easy it is to test an SUT.** As testability depends a lot on the design and implementation, you should try to increase the testability when you design and implement software. The higher the testability, the easier it is to achieve better quality software.

{% call show_example() %}
A method `getGreeting()` returns `"Good morning"` before noon and `"Good afternoon"` otherwise.

* **Less testable: the method reads the current time from the system clock by itself.** To test the afternoon case, you would have to run the test in the afternoon (or tamper with the computer's clock).
* **More testable: the method takes the hour as a parameter instead**, i.e., `getGreeting(int hour)`. Now a test can simply check that `getGreeting(9)` returns `"Good morning"` and `getGreeting(15)` returns `"Good afternoon"`, at any time of the day.
{% endcall %}

</div>

<div id="extras">
</div>