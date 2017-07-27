<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design :arrow_right: Equivalence Partitions :arrow_right:</div>

<div id="title">

#### What :two:

</div>

<div id="body">

Consider the testing of the following operation.

* `isValidMonth (int m): boolean`
* Description: checks if `m` is in the range [1..12]. returns `true` if `m` is in the range, `false` otherwise.

It is inefficient and impractical to test this method for all integer values `[-MIN_INT to MAX_INT]`.  Fortunately, there is no need to test all possible input values. For example, if the input value `233` failed to produce the correct result, the input `234` is likely to fail too; there is no need to test both.

In general, most SUTs do not treat each input in a unique way. Instead, they process all possible inputs in a small number of distinct ways. That means a range of inputs is treated the same way inside the SUT.

<tip-box type="primary">

<include src="../../../common/definitions.md#def-equivalence-partition" />

</tip-box>

_Equivalence partitioning_ is a technique that uses the above observation to improve the E&E of testing. By dividing possible inputs into equivalence partitions we can,

* avoid testing too many inputs from one partisan. Testing too many inputs from the same partition is unlikely to find new bugs.
* ensure all partitions are tested. Missing partitions can result in bugs going unnoticed.

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
