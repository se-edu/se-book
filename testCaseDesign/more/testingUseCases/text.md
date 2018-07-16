<div id="title">

#### Testing Based on Use Cases

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain test case design for use case based testing</span>

<div id="body">

**Use cases can be used for system testing and acceptance testing**. For example, the main success scenario can be one test case while each variation (due to extensions) can form another test case. However, note that use cases do not specify the exact data entered into the system. Instead, it might say something like `user enters his personal data into the system`. Therefore, the tester has to choose data by considering equivalence partitions and boundary values. The combinations of these could result in one use case producing many test cases.

To increase <trigger trigger="click" for="modal:usebaseBased-EandE">E&E of testing</trigger>, high-priority use cases are given more attention. For example, a <trigger trigger="click" for="modal:usecaseBased-scripted">scripted approach</trigger> can be used to test high priority test cases, while an exploratory approach is used to test other areas of concern that could emerge during testing.

<modal large title="Quality Assurance → Test Case Design → Introduction → (extract) E&E of testing" id="modal:usebaseBased-EandE">
  <include src="../../introduction/what/text.md#e-and-e"/>
</modal>

<modal large title="Textbook {{ icon_embedding }}" id="modal:usecaseBased-scripted">
  <include src="../../../testing/testingTypes/exploratoryVsScriptedTesting/what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

</div>

<div id="extras">
</div>