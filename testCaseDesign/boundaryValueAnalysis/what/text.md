<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain boundary value analysis</span>

<div id="body">

**_Boundary Value Analysis (BVA)_ is a test case design heuristic that is based on the observation that bugs often result from incorrect handling of boundaries of equivalence partitions.** This is not surprising, as the end points of boundaries are often used in branching instructions, etc., where the programmer can make mistakes.

<box>

{{ icon_example }} The `markCellAt(int x, int y)` operation could contain code such as `if (x > 0 && x <= (W-1))` which involves the boundaries of x’s equivalence partitions.

</box>


**BVA suggests that when picking test inputs from an equivalence partition, values near boundaries (i.e., boundary values) are more likely to find bugs.**

Boundary values are sometimes called _corner cases_.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
