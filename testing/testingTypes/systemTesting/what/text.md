{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain system testing</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../../common/definitions.md#def-system-testing" trim />
</box>

{{ show_term("System testing") }} is typically done by a testing team (also called a QA team).

**System test cases are based on the specified external behavior of the system.** Sometimes, system tests go beyond the bounds defined in the specification. This is useful when testing that the system fails 'gracefully' when pushed beyond its limits.

{% call show_example() %}
Suppose the SUT is a browser that is supposedly capable of handling web pages containing up to 5000 characters. Given below is a test case to test if the SUT fails gracefully if pushed beyond its limits.

```{.no-line-numbers}
Test case: load a web page that is too big
* Input: loads a web page containing more than 5000 characters.
* Expected behavior: aborts the loading of the page
  and shows a meaningful error message.
```

This test case would fail if the browser attempted to load the large file anyway and crashed.
{% endcall %}

**System testing includes testing against non-functional requirements too.** Here are some examples:

* {{ show_term("Performance testing") }} –  to ensure the system responds quickly.
* {{ show_term("Load testing") }} (also called _stress testing_ or _scalability testing_) – to ensure the system can work under heavy load.
* {{ show_term("Security testing") }} – to test how secure the system is.
* {{ show_term("Compatibility testing") }}, _interoperability testing_ – to check whether the system can work with other systems.
* {{ show_term("Usability testing") }} – to test how easy it is to use the system.
* {{ show_term("Portability testing") }} – to test whether the system works on different platforms.

</div>

<div id="extras">
</div>
