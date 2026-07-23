<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain debugging</span>

<span id="title">What</span>

<div id="body">

<box type="info" seamless>

This chapter draws substantially on [The Debugging Book](https://www.debuggingbook.org/) by Andreas Zeller et al., in particular its terminology of defects, infections, and failures, and its treatment of debugging as an application of the scientific method. Further material was adapted from the debugging readings of [MIT 6.102](https://web.mit.edu/6.102/www/sp26/classes/13-debugging/), [UC Berkeley CS61B](https://sp23.datastructur.es/materials/guides/intellij/debugging/), [Stanford CS107](https://web.stanford.edu/class/archive/cs/cs107/cs107.1262/resources/debugging.html), [UW CSE 332](https://courses.cs.washington.edu/courses/cse332/20sp/handouts/debugging.pdf), and [CMU 15-213](https://www.cs.cmu.edu/afs/cs/academic/class/15213-s25/www/lectures/08-design-debugging.pdf).

</box>

**_Debugging_ is the process of finding the cause of a known problem in a program, and fixing it.** It starts _after_ you know something is wrong; finding that a problem exists is the job of testing. The hard part is the diagnosis, not the correction — once you understand why a program misbehaves, the fix is often a single character.

To debug well, distinguish four things that beginners tend to lump together as 'the bug':

* **A _mistake_ is the human act that started it all** e.g., you misremembered that list indices start at `1`.
* **A _defect_ is the resulting error in the code.** This is what most people mean by 'a bug' e.g., a loop that starts counting from the wrong index.
* **An _infection_ is the resulting error in the program state at run time.** When the defective line executes, some variable now holds a wrong value.
* **A _failure_ is the externally visible wrong behavior** e.g., a total shown to the user that is too small, or a crash.

**These four form a chain, and each link can be far from the next:**

```
mistake → defect → infection → infection → ... → failure
          (code)   (state)      (state)          (behavior)
```

**Debugging is therefore a search, not a lookup: you observe the failure but must fix the defect.** The infection spreads as the wrong value is passed on, stored in a field, or used to compute another wrong value, so where the program crashed is usually _not_ where the mistake was made. The chain also explains why bugs hide: a defect infects the state only when that line executes, and an infection becomes a failure only if it propagates out to something observable. A defect can sit in daily-executed code for months unnoticed.

**Before hunting for a defective line, make sure you can state what the correct behavior is and why.** Often the real disagreement is about the requirement, not the code, and skipping this step means searching code that was right all along. Note too that the chain assumes the fault lies in code — the common case, but not the only one. A failure can equally originate in configuration, in data left by an earlier version, in a dependency, in the deployment, or in a requirement that was wrong to begin with; sometimes the program is right and the _test_ is wrong. Locating 'the defect' means locating whatever has to change.

<box>

{{ icon_example }} A _running example_, used throughout this chapter. A shopping cart prints the correct total, but then appears empty.

```java
class Cart {
    private final List<Item> items = new ArrayList<>();

    void add(Item item) {
        items.add(item);
    }

    List<Item> getItems() {
        return items;
    }

    int computeTotal() {
        int total = 0;
        List<Item> pending = getItems();
        while (!pending.isEmpty()) {
            total += pending.remove(0).price();
        }
        return total;
    }
}
```

* _Mistake_: the programmer assumed `getItems()` hands back a copy.
* _Defect_: `getItems()` returns the internal list itself, which `computeTotal()` then empties.
* _Infection_: after `computeTotal()` returns, the cart's own `items` list is empty.
* _Failure_: the next attempt to display the cart shows nothing.

A debugger stopped at the failure would be pointing at the display code, which is correct.

</box>

##### Why debugging is hard

**Debugging consumes a large share of real development effort**, often more than writing the code did. Beginners tend to read time spent debugging as evidence that they are bad at programming. It is not; debugging is a distinct and learnable engineering skill.

Three things make it hard. First, the distance between defect and failure: the crash site is not the crime scene, so the instinct to study the code around the error message is often the least productive move available. Second, you cannot inspect everything — a running program holds an enormous amount of state, changing at every step, and choosing which small part to look at is most of the skill. Third, **your mental model of the code is exactly the thing that is wrong**: had you understood it correctly you would not have written the defect, so re-reading with the same assumptions reproduces the same blind spot. Hence debugging must be driven by evidence from the running program, not by reasoning alone.

**Debugging time is therefore not proportional to the size of the fix.** A one-character correction can cost an afternoon. The cost lives in the search, and every technique in this chapter aims at making that search cheaper.

##### How not to debug

**Most unproductive debugging comes from having no method, rather than from using the wrong tool.**

* {{ bad }} **_Stare and hope_** — reading the code and waiting for the bug to reveal itself. This inspects the code but not the state, using the mental model that wrote the defect. Fine as a 30-second first try; a poor plan for the next two hours.
* {{ bad }} **_Shotgun debugging_** — changing whatever looks suspicious and re-running to see whether it helped. Each run teaches you nothing: a change that does not fix the problem has neither confirmed nor eliminated any explanation, and unrelated edits accumulate.
* {{ bad }} **_Debugging into existence_** — mutating the code until the symptom disappears. The symptom often vanishes because a second defect cancels the first, leaving two bugs and a harder problem later.
* {{ bad }} **Fixing the symptom instead of the cause** e.g., special-casing the input that fails, or wrapping the crash in an empty `catch` block. The failure goes away and the defect stays.
* {{ bad }} **Keeping no record of what you tried.** Without notes you will re-test explanations you already eliminated, lose your place when interrupted, and be unable to hand the problem over.

Temporary print statements deserve a more careful verdict than a blanket ban. They are costly as a default habit — an edit-build-run cycle per question, edits that can introduce fresh defects, output that swamps the signal, leftovers that reach production — but **printing is not the problem; printing _without a hypothesis_ is**, which is shotgun debugging in another form. A few prints chosen to answer a specific question are legitimate, and in production, embedded, or concurrent settings they are sometimes the only tool available.

**What these have in common is that they produce activity without producing information.** A productive debugging step is one that rules something out.

</div>

<div id="extras">
</div>
