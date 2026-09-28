{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain exploratory testing and scripted testing</span>

<div id="body">

**Here are two alternative approaches to testing software: _Scripted_ testing and _Exploratory_ testing.**

1. **{{ show_term("Scripted testing") }}:**  First write a set of test cases based on the expected behavior of the SUT, and then perform testing based on that set of test cases.

2. **{{ show_term("Exploratory testing") }}:** Devise test cases on-the-fly, creating new test cases based on the results of the past test cases.

Exploratory testing is ‘the simultaneous learning, test design, and test execution’ <trigger trigger="click" for="modal:exploratoryWhat-bach-et-explained">--[source]--</trigger> whereby the nature of the follow-up test case is decided based on the behavior of the previous test cases. In other words, running the system and trying out various operations. It is called _exploratory testing_ because testing is driven by observations during testing. Exploratory testing usually starts with areas identified as error-prone, based on the tester’s past experience with similar systems. One tends to conduct more tests for those operations where more faults are found.

{% call show_example() %}
The thought process behind a segment of an exploratory testing session:

"Hmm... looks like feature x doesn't work for this specific input. But I didn't encounter such an error when I was testing feature y and z -- that strange because they are basically the same operation performed in a different context. Let me go back and try this same input in those feature to make sure.
{% endcall %}


{{ icon_info }} **Other names for exploratory testing: _reactive testing_, _error guessing_ technique, _attack-based testing_, _bug hunting_.**


<modal id="modal:exploratoryWhat-bach-et-explained" header="bach-et-explained {{icon_preview}}">
  <include src="../../../../common/references.md#bach-et-explained" />
</modal>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
