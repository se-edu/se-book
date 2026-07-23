<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can fix a defect properly</span>

<span id="title">Fixing</span>

<div id="body">

**Do not settle on a fix until you can explain the whole failure.** Temporary changes made as experiments are fine, but a change you intend to keep needs a causal account behind it, and if any of the observed behavior remains unaccounted for, the diagnosis is incomplete. The strongest check is to predict, before making the change, exactly what will be different afterwards, then verify that prediction. A fix that works for reasons you cannot state will come back.

**Fix the cause, not the infection and not the failure.** Special-casing the failing input or clamping a bad value removes the symptom and leaves the cause. It also helps to ask which _kind_ of error you have: a coding error means the code does not do what you intended; a design error means what you intended was wrong. The second cannot be repaired at the site of the failure — patching there breeds special cases, and the real remedy is a design change.

**Which change counts as 'the fix' is sometimes a genuine choice.** In the cart example you could make `getItems()` return a copy, or make `computeTotal()` iterate without mutating. Both remove the failure; they differ in which contract you treat as authoritative. Making that choice consciously, rather than patching whichever line you happened to be looking at, is part of fixing properly.

**Once you have a candidate fix, finish the job:**

* **Look for the defect's relatives** — the same mistake was probably made in the sibling method, the other branch, or the block copy-pasted from this one.
* **Verify against the reproduction, then run the full test suite.** A fix that resolves your failure while breaking two other things is not a fix.
* **Add a regression test** that fails before the fix and passes after it. If you automated the reproduction earlier, you already have it. (→ _Regression testing_, in the Testing chapter.)
* **Remove your temporary probes** — stray prints, leftover breakpoints, commented-out experiments. Assertions and logging you added deliberately to stay are not temporary probes; keep those.
* **Commit the fix on its own**, apart from unrelated cleanup, so that the history stays bisectable for the next bug.

<box>

{{ icon_example }} The cart example, end to end:

1. _Establish the expectation_: computing a total must not change the cart's contents.
1. _Track_: filed as "cart empties itself after the total is shown".
1. _Reproduce_: a test that adds three items, calls `computeTotal()`, then asserts `getItems().size() == 3`. It fails.
1. _Simplify_: one item is enough to fail, so the test uses one.
1. _Localize_: `size()` is 3 before the call and 0 after, so the boundary lies inside `computeTotal()`.
1. _Explain_: stepping in shows that `pending` and `items` are the same object, so `remove(0)` is emptying the cart's own list.
1. _Fix and verify_: `getItems()` returns `List.copyOf(items)`; the test now passes, the rest of the suite still passes, and that test stays behind as the regression test.

</box>

##### Making bugs easier to find

**The cheapest bug to debug is the one that announces itself**, and most of what makes code debuggable is decided long before the bug exists.

* **Fail fast.** Check preconditions and invariants on entry to a method, so an infection surfaces at its origin instead of ten frames later. (→ _Defensive programming_ and _Assertions_, in the Error Handling chapter.)
* **Keep scopes small.** A variable visible across three lines has three lines of suspects; a field visible across a class has the whole class.
* **Prefer immutability.** A value that cannot change cannot be changed wrongly, which removes an entire category of "what modified this?" investigations — including the one in the cart example.
* **Develop incrementally, testing as you go.** When only twenty lines are new, the defect is almost certainly in those twenty lines. This is the highest-value habit on the list, and the first abandoned under time pressure.
* **Use the static checks you already have** — compiler warnings, IDE inspections, linters, `@Override`, generics, `final`. A defect caught here costs no debugging at all.
* **Log at component boundaries**, so a failure reported from the field arrives with its context attached.

Each of these shortens the distance between defect and failure — the quantity the _What_ unit identified as the root of the difficulty.

</div>

<div id="extras">
</div>
