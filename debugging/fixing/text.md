{% from "common/macros.njk" import show_example with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can fix a defect properly</span>

<span id="title">Fixing</span>

<div id="body">

**Do not settle on a fix until you can explain the whole failure.** Temporary changes made as experiments are fine, but a change you intend to keep needs a causal account that explains every observed behavior. The strongest check is to predict, before making the change, exactly what will be different afterwards, then verify that prediction. A fix that works for reasons you cannot state can fail again.

**Fix the cause, not the infection and not the failure.** Special-casing the failing input or clamping a bad value removes the symptom and leaves the cause. Also consider whether you have a coding error or a design error: a coding error is code that does not do what you intended -- whereas a design error means the intention itself was wrong. The real remedy for the latter is a design change, not a code fix.

**Which change counts as 'the fix' is sometimes a genuine choice.** Making that choice consciously so that the fix does not degrade other aspects of the system (e.g., the design integrity).<br>
{{ label_example }} %%In the cart example you could make `getItems()` return a copy, or make `computeTotal()` iterate without mutating. Both remove the failure; they differ in which contract you treat as authoritative.%%

**Once you have a candidate fix, finish the job:**

* **Look for the defect's relatives** — the same mistake was probably made in the sibling method, the other branch, or the block copy-pasted from this one.
* **Verify against the reproduction, then run the full test suite.** A fix that resolves your failure while breaking two other things is not a fix.
* **Add a regression test** that fails before the fix and passes after it. If you automated the reproduction earlier, you already have it.
* **Remove your temporary probes** — stray print statements, leftover breakpoints, commented-out experiments. Assertions and logging you added deliberately to stay are not temporary probes; keep those.
* **Commit the fix on its own**, apart from unrelated cleanup, so that the history stays bisectable for the next bug.

{% call show_example() %}
The cart example, end to end:

1. _Track_: computing a total must not change the cart's contents; filed as "cart empties itself after the total is shown".
1. _Reproduce_: adding three items and then calling `computeTotal()` empties the cart every time.
1. _Automate and simplify_: a test that adds items, calls `computeTotal()`, then asserts on `getItems().size()`. One item is enough to fail, so the test uses one.
1. _Find origins_, _Focus_, _Isolate_: the only statement that could empty `items` is the loop in `computeTotal()`, and `size()` dropping from 3 to 0 across the call — with `pending` and `items` confirmed to be the same object — settles it.
1. _Correct_: both `getItems()` returning a copy and `computeTotal()` iterating without mutating would remove the failure. Choose one and implement it.<br>
   Check the relatives: any other getter on the class that returns an internal collection has the same problem.<br>
   Wrap up: The test now passes, the rest of the suite still passes, the new test stays behind as the regression test, and the breakpoints used can come out.
{% endcall %}

</div>

<div id="extras">
</div>
