<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can recognize hard-to-debug situations</span>

<span id="title">Advanced</span>

<div id="body">

<box type="info" seamless>

Nothing in the earlier units depends on this one. It extends the techniques in _How_ and _Tools_, and describes situations you will eventually meet but need not master now.

</box>

##### Going further with the basic techniques

**_Delta debugging_ automates the reduction described in _How_**, systematically removing parts of the input and keeping whichever reduction still fails. It handles the cases where plain halving does not, at a cost: in the worst case it needs on the order of n² tests. Note the wider point — a mechanical procedure can replace intuition for this step entirely.

**The boundary model of localization describes the simple, deterministic case.** It blurs when the defect is an _omission_ %%nothing wrong happens; something right merely fails to%%, when two references alias the same object, when threads interleave, or when the bad state came from outside the program. Treat the boundary as what you are looking for, not as something guaranteed to exist at one identifiable point.

**Two further debugger commands are worth knowing once the basics are comfortable.** _Force step into_ enters library code that _step into_ normally skips. _Reset frame_ (or _drop frame_) pops the current call so you can re-enter a method you stepped past — but it restores only the execution point and local variables. Anything the method already did to fields, static state, files, or console output stays done, so it is not a way of going back in time.

**_Tracing_ records the execution automatically** — every line executed, or every change to a chosen variable — for examination afterwards. It is the right probe when the failure is too fast to watch, or happens in a run you cannot sit through interactively.

<box>

A widely used mnemonic for the debugging process is **TRAFFIC** — Track, Reproduce, Automate, Find origins, Focus, Isolate, Correct.

</box>

##### Hard cases

**Some defects resist all of the above — recognize them as a category rather than conclude you are bad at debugging.**

* **_Heisenbugs_ change or vanish when you try to observe them.** Adding a print, attaching a debugger, or compiling with different settings perturbs timing or memory layout enough to hide the problem.
* **Concurrency bugs are non-deterministic by nature.** Race conditions and deadlocks often cannot be reproduced on demand, and breakpoints alter the thread interleaving, so the debugger itself can make them disappear. Reason about the code, and log with thread identifiers.
* **Some failures occur only in production**, under real data volumes, real configuration, and real users. With no way to attach a debugger, logging and telemetry are the entire toolkit.
* **Performance problems are defects too** whenever the system misses a stated response-time or resource requirement — they just cannot be located by stepping. Profile rather than debug, and measure before optimizing: intuitions about where the time goes are usually wrong.
* **Bugs in code you did not write are usually bugs in your use of it.** Build a minimal case demonstrating the misbehavior; the exercise generally exposes your own mistake, and if it does not, you have exactly what the library's issue tracker will ask for.
* **Sometimes the defect is in the test**, not in the code: the program is right and the expectation is wrong. Worth considering early, because it is easy to lose hours to.

##### Debugging in a team

**A bug that is not written down is a bug that gets forgotten**, which is what issue trackers exist to prevent. A useful record contains the expected and actual behavior, the steps to reproduce, the environment, and the smallest failing case you found.

Keep a running list of incidental bugs noticed while debugging something else; writing them down takes seconds and prevents the costlier alternative of abandoning the current investigation to chase a new one. Note too that bugs cluster — in recently changed code, in frequently changed code, and in the most complex modules — which is useful when deciding where to concentrate reviews and testing.

**AI assistants are useful for some parts of debugging and unreliable for others.** They are good at explaining unfamiliar error messages, proposing candidate hypotheses, and serving as an always-available rubber duck. They are unreliable at diagnosing a defect they cannot run, and will produce confident, fluent, incorrect explanations. The discipline of _How_ is what makes them safe: treat any suggestion as a hypothesis, insist it be falsifiable, and verify it against the running program yourself.

##### Quick reference: common situations

**Some symptoms suggest a standard first move.** Treat these as starting points rather than diagnoses.

| Symptom | Often means | Reasonable first move |
|---|---|---|
| `NullPointerException` | Something was never initialized, or a method returned `null` unnoticed | Read the message to see which expression was null, then ask why |
| Program hangs | A loop that never ends, a deadlock, blocking I/O, or an operation far slower than expected | Pause with the debugger and read the call stack of each thread |
| `StackOverflowError` | Recursion without a reachable base case | Read the repeating cycle in the trace |
| Wrong output, no crash | Anything — the hardest and most common case | Binary-search the execution for the first point where the state is wrong |
| Off-by-one results | Boundary handling | Test with the smallest inputs: 0, 1, and 2 elements |
| Passes tests, fails in the app | Environment, configuration, or leftover state | Compare the two environments before touching code |
| Fails only on the second run | State persisted or not reset between runs | Look for static fields and files written by the first run |
| Fails only on a teammate's machine | Locale, file paths, line endings, timezone, versions | Compare environments, not code |
| Worked yesterday | A recent change | Bisect the history before reading any code |
| Fails only sometimes | See _Hard cases_ above | Work on making it more frequent or more observable first |

</div>

<div id="extras">
</div>
