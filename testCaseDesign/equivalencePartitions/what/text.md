<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain equivalence partitions</span>

<div id="body">

Consider the testing of the following operation.

<tip-box> 

<div id="isValidMonth">

`isValidMonth(m)` : returns `true` if `m` (and `int`) is in the range [1..12]
</div>
</tip-box>

It is inefficient and impractical to test this method for all integer values `[-MIN_INT to MAX_INT]`.  Fortunately, there is no need to test all possible input values. For example, if the input value `233` failed to produce the correct result, the input `234` is likely to fail too; there is no need to test both.

In general, **most SUTs do not treat each input in a unique way. Instead, they process all possible inputs in a small number of distinct ways.** That means a range of inputs is treated the same way inside the SUT.
**_Equivalence partitioning (EP)_ is a test case design technique that uses the above observation to improve the E&E of testing.**

<tip-box type="definition">
  <include src="../../../common/definitions.md#def-equivalence-partition" />
</tip-box>

**By dividing possible inputs into equivalence partitions we can,**
* **avoid testing too many inputs from one partition.** Testing too many inputs from the same partition is unlikely to find new bugs. This increases the efficiency of testing by reducing redundant test cases.
* **ensure all partitions are tested.** Missing partitions can result in bugs going unnoticed. This increases the effectiveness of testing by increasing the chance of finding bugs.

</div>

<div id="extras">
</div>