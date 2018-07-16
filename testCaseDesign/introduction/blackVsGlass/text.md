<div id="title">

#### Black Box vs Glass Box

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain black box and glass box test case design</span>

<div id="body">

**Test case design can be of three types, based on how much of SUT internal details are considered when designing test cases:**

* **_Black-box_ (aka _specification-based or responsibility-based_) approach**: test cases are designed exclusively based on the SUT’s specified external behavior.

* **_White-box_ (aka _glass-box or structured or implementation-based_) approach**: test cases are designed based on what is known about the SUT’s implementation, i.e. the code.

* **_Gray-box_ approach**: test case design uses _some_ important information about the implementation. For example, if the implementation of a sort operation uses different algorithms to sort lists shorter than 1000 items and lists longer than 1000 items, more meaningful test cases can then be added to verify the correctness of both algorithms.


<panel type="seamless" header="{{ icon_video }} %%Black-box and white-box testing%%"> 

<sub>Note: these videos are from the [Udacity course _Software Development Process_ by Georgia Tech](https://www.udacity.com/course/software-development-process--ud805)</sub>

<tabs> 
  <tab header="{{ icon_video }} Black-box vs White-box testing">
 
@[youtube](jRwwb7iaRsU)

  <hr></tab>
  <tab header="{{ icon_video }} Black-box testing example">
 
@[youtube](6pbB37nFUZw)

  <hr></tab>
  <tab header="{{ icon_video }} White-box testing example">
 
@[youtube](KIAkoae6_jE)

  <hr></tab>

</tabs>
</panel>

</div>

<div id="extras">
</div>