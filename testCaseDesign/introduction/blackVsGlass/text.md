<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design &rarr; Introduction &rarr;</div>

<div id="title">

#### Black Box vs Glass Box :two:

</div>

<div id="body">

Test case design is said to be following, a categorization based on how much of SUT internal details are considered when designing test cases.

* _Black-box_ (aka _specification-based or responsibility-based_) approach: test cases are designed exclusively based on the SUT’s specified external behavior.
* _White-box_ (aka _glass-box or structured or implementation-based_) approach: test cases are designed based on what is known about the SUT’s implementation, i.e. the code.
* _Gray-box_ approach: test case design uses _some_ important information about the implementation. For example, if the implementation of a sort operation uses an algorithm to sort lists shorter than 1000 items and another to sort lists longer than 1000 items, more meaningful test cases can then be added to verify the correctness of both algorithms.

</div>

<div id="extras">
<div>

</div>
