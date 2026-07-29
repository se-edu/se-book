{% from "common/macros.njk" import show_term with context %}
<span id="title">Validation versus verification</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain validation and verification</span>

<div id="body">

**Quality Assurance = Validation + Verification**

QA involves checking two aspects:

1. {{ show_term("Validation") }}: are you _building the right system_, i.e., are the requirements correct?
2. {{ show_term("Verification") }}: are you _building the system right_, i.e., are the requirements implemented correctly?

Whether something belongs under validation or verification is not that important. What is more important is that both are done, instead of limiting QA to verification only (i.e., remember that the requirements can be wrong too).

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
