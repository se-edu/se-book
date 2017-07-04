<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling :arrow_right: Defensive Programming :arrow_right:</div>

<div id="title">

#### Enforcing Referential Integrity :three:

</div>

<div id="body">

A bidirectional association in the design (shown in (a)) is usually emulated at code level using two variables (as shown in (b)).

<tip-box>

Example:

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/manWoman.png" height="280" />
<p/>

</tip-box>

The two classes are meant to be used as shown in (c) below. Now see what happens if the two classes were used as in (d) below. Now James' girlfriend is Jean, while Jean's boyfriend is not James. This situation results as the code was not defensive enough to stop this “love triangle”. In such a situation, we say that _the referential integrity has been violated_. It simply means _there is an inconsistency in object references_.

<tip-box>

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/woman.png" height="180" />
<p/>

</tip-box>

One way to prevent this situation is to implement the two classes as shown below. Note how the referential integrity is maintained.

<tip-box>

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/womanMan.png" height="320" />
<p/>

</tip-box>

When the code `james.setGirlfriend(jean)` is executed, the code ensures that `james` break up with any current girlfriend before he accepts `jean` as the girlfriend. Furthermore, the code ensures that `jean` breaks up with any existing boyfriends and accepts `james` as the boyfriend.

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

</panel>

</div>

</div>
