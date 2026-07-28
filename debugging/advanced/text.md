{% from "common/macros.njk" import show_term with context %}
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can recognize situations where the basic debugging techniques fall short, and know what to reach for instead</span>
<span id="title">Advanced</span>

<div id="body">

<box type="info" seamless>

Nothing in the earlier units depends on this one. It extends the techniques in _How_ and _Tools_, and describes situations you will eventually meet but need not master now.

</box>

##### Going further with the basic techniques

**{{ show_term("Delta debugging") }} automates the simplification of the failing case**, systematically removing parts of the input and keeping whichever reduction still fails. It handles the cases where plain halving does not, at a cost: in the worst case it needs on the order of n² tests. It still needs two things from you: a reliable test for whether a reduction still fails, and reductions that leave the input valid — the required header in the config example of _How_ is exactly such a constraint. Note the wider point — a mechanical procedure can replace intuition for this step.

**The idea of a single boundary where the state first goes wrong describes the simple, deterministic case.** It blurs when the defect is an _omission_ %%nothing wrong happens; something right merely fails to%%, when two references alias the same object, when threads interleave, or when the bad state came from outside the program. Treat the boundary as what you are looking for, not as something guaranteed to exist at one identifiable point.

**Two further debugger commands are worth knowing once the basics are comfortable.** {{ show_term("Force step into") }} enters library code that _step into_ normally skips. {{ show_term("Reset frame") }} (or {{ show_term("Drop frame") }}) pops the current call so you can re-enter a method you stepped past — but it restores only the execution point and local variables. Anything the method already did to fields, static state, files, or console output stays done, so it is not a way of going back in time.

**{{ show_term("Tracing") }} records the execution automatically** — every line executed, or every change to a chosen variable — for examination afterwards. It is the right probe when the failure is too fast to watch, or happens in a run you cannot sit through interactively — at the cost of volume, and of slowing the program enough to disturb the timing-sensitive failures described below.

##### Hard cases

**Some defects resist all of the above. They form recognizable categories, each with its own approach.**

* **A {{ show_term("Heisenbug") }} changes or vanishes when you try to observe it.** Adding a print, attaching a debugger, or compiling with different settings perturbs timing or memory layout enough to hide the problem.
* **Concurrency bugs are timing- and schedule-dependent.** Race conditions and deadlocks often cannot be reproduced on demand, and breakpoints alter the thread interleaving, so the debugger itself can make them disappear. Reason about the code, and log with thread identifiers.
* **Some failures occur only in production**, under real data volumes, real configuration, and real users. With no way to attach a debugger, logging, telemetry %%measurements the running system reports about itself%%, and post-mortem artifacts such as crash and thread dumps are the toolkit.
* **Performance problems are bugs too** whenever the system misses a stated response-time or resource requirement — they just cannot be located by stepping. Profile rather than debug, and measure before optimizing: intuitions about where the time goes are usually wrong.
* **Bugs in code you did not write are usually bugs in your use of it.** Build a minimal case demonstrating the misbehavior; the exercise generally exposes your own mistake, and if it does not, you have exactly what the library's issue tracker will ask for.

</div>

<div id="extras">
</div>
