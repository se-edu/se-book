<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design :arrow_right: Boundary Value Analysis :arrow_right:</div>

<div id="title">

#### What :one:

</div>

<div id="body">

_Boundary Value Analysis (BVA)_ is another heuristic that can enhance the E&E of test cases designed using equivalence partitioning. It is based on the observation that bugs often result from incorrect handling of boundaries of equivalence partitions. This is not surprising, as the end points of the boundary are often used in branching instructions etc. where the programmer can make mistakes.

E.g. `markCellAt(int x, int y)` operation could contain code such as if `(x > 0 && x < = (W-1))` which involves boundaries of x’s equivalence partitions.

BVA suggests that when picking test inputs from an equivalence partition, values near boundaries (i.e. boundary values) should be included.

Boundary values are sometimes called corner cases.

</div>

</div>
