{% from "common/macros.njk" import show_term with context %}
<span id="title">Black box versus glass box</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain black box and glass box test case design</span>

<div id="body">

**Test case design can be of three types, based on how much of the SUT’s internal details are considered when designing test cases:**

* **{{ show_term("Black-box") }} (aka _specification-based or responsibility-based_) approach**: test cases are designed exclusively based on the SUT’s specified external behavior.

* **{{ show_term("White-box") }} (aka _glass-box or structured or implementation-based_) approach**: test cases are designed based on what is known about the SUT’s implementation, i.e., the code.

* **{{ show_term("Gray-box") }} approach**: test case design uses _some_ important information about the implementation. For example, if the implementation of a sort operation uses different algorithms to sort lists shorter than 1000 items and lists longer than 1000 items, more meaningful test cases can then be added to verify the correctness of both algorithms.


<panel type="seamless" header="{{ icon_video }} %%Black-box and white-box testing%%"> 

<sub>Note: these videos are from the [Udacity course _Software Development Process_ by Georgia Tech](https://www.udacity.com/course/software-development-process--ud805)</sub>

<tabs> 
  <tab header="{{ icon_video }} Black-box vs White-box testing">
 
@[youtube](jRwwb7iaRsU)

  </tab>
  <tab header="{{ icon_video }} Black-box testing example">
 
@[youtube](6pbB37nFUZw)

  </tab>
  <tab header="{{ icon_video }} White-box testing example">
 
@[youtube](KIAkoae6_jE)

  </tab>

</tabs>
</panel>

</div>

<div id="extras">
</div>
