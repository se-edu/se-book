{% from "common/macros.njk" import show_term with context %}
<span id="title">Positive versus negative test cases</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain positive and negative test cases</span>

<div id="body">

**A {{ show_term("positive test case") }} is when the test is designed to produce an expected/valid behavior. On the other hand, a {{ show_term("negative test case") }} is designed to produce a behavior that indicates an invalid/unexpected situation, such as an error message.**

<box>

{{ icon_example }} Consider the testing of the method `print(Integer i)` which prints the value of `i`.

* A positive test case: `i == new Integer(50);`
* A negative test case: `i == null;`

</box>

</div>

<div id="extras">
</div>
