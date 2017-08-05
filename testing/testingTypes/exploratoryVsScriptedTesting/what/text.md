<div id="path">Testing &rarr; Testing Types &rarr;</div>

<div id="title">

#### What :two:

</div>

<div id="body">

Here are two alternative approaches to testing a software.

1. Scripted testing:  First write a set of test cases based on the system specification, perform the test cases.
2. Exploratory testing: Devise test cases on-the-fly, creating new test cases based on the results of the past test cases.

Exploratory testing is ‘the simultaneous learning, test design, and test execution’ <trigger for="pop:bach-et-explained">[source: bach-et-explained]</trigger> whereby the nature of the follow-up test case is decided based on the behavior of the previous test cases. In other words, running the system and trying out various operations. It is called _exploratory testing_ because testing is driven by observations during testing. Exploratory testing is also known as _reactive testing, error guessing technique, attack-based testing,_ and _bug hunting_. Exploratory testing usually starts with areas identified as error-prone, based on the tester’s past experience with similar systems. One tends to conduct more tests for those operations where more faults are found. For example,

> “Hmm... looks like feature x is broken. This usually means feature n and k could be broken too; we need to look at them soon.
> But before that, let us give a good test run to feature y because users can still use the product if feature y works,
> even if x doesn’t work. Now, if feature y doesn’t work 100%, we have a major problem and this has to be made
> known to the development team sooner rather than later...”

<popover id="pop:bach-et-explained" title="bach-et-explained :mag:" placement="right">
  <div slot="content">
    <include src="../../../../common/references.md#bach-et-explained" />
  </div>
</popover>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
