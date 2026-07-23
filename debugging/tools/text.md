<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use a debugger</span>

<span id="title">Tools</span>

<div id="body">

**Every way of looking inside a running program is a _probe_** — a means of answering one specific question about its state. The useful question is never "print statements or debugger?" but "what is the cheapest probe that answers _this_ question?" Some probes come out once the bug is found; others are meant to stay.

* **Print statements are the cheapest to start with and the most expensive to iterate with.** They need no setup, work in any environment, and survive across process and machine boundaries — but every new question costs an edit-build-run cycle, and the output has to be cleaned up afterwards.
* **Logging is the disciplined, permanent form of printing.** Leveled and filterable, log statements can stay in the code — so they are still there when the failure happens on a user's machine at 3am, where no debugger can reach. (→ _Logging_, in the Error Handling chapter.)
* **Assertions are probes that check themselves.** Rather than printing a value for you to examine, an assertion states what it should be and fails immediately when it is not, turning a silent infection into a loud, located failure. (→ _Assertions_, in the Error Handling chapter.)
* **A debugger asks questions interactively, without changing the code at all.**

As a rough guide: reproducible and local → debugger; needs to survive into production → logging; want to catch the problem at its origin → assertions.

##### Using a debugger

**A debugger lets you pause a running program and inspect and control it from the inside, without modifying its code.** That last part is what makes it different in kind from printing: asking one more question costs seconds rather than another edit-build-run cycle.

**Breakpoints determine where the program pauses.**

* A **line breakpoint** pauses when execution reaches a given line.
* A **conditional breakpoint** pauses only when a condition holds e.g., `i == 4137`. This makes debugging the 4137th iteration of a loop feasible at all, and it is the feature beginners most often do not know exists.
* An **exception breakpoint** pauses at the moment an exception is thrown, before the stack unwinds and discards the state you need.
* A **field watchpoint** pauses when a field's value changes rather than at a location — the right tool for "what is setting this to `null`?". In Java, only fields can be watched this way, not local variables.
* **Disable breakpoints rather than deleting them**, so that a debugging session can be paused and resumed.

**Stepping commands determine how execution advances.** _Step over_ runs the next line, including any call it makes, as one step. _Step into_ enters the method being called. _Step out_ finishes the current method and pauses at its caller. _Run to cursor_ continues to a chosen line.

**The inspection views tell you what state the program is in.**

* **The call stack shows how execution reached this point**, and selecting any frame reveals that method's variables. As the _What_ unit noted, the cause is often several frames above where the program stopped.
* **The variables view shows the values currently in scope**, and _watches_ track a chosen expression as you step.
* **_Evaluate expression_ runs arbitrary code at the paused point**, turning passive inspection into a live experiment: you can test a hypothesis without editing or restarting. One caution — evaluating really does run the code, so calling a method that mutates state, or setting a variable by hand, changes the program you are observing.

Two habits are worth forming: set your first breakpoint _before_ the suspected region rather than at the failure, so you can watch the state go wrong; and remember that a debugger reports only _what_ the state is. The _why_ still comes from the hypothesis loop.

##### Reading stack traces

**A stack trace is a free and precise report of where a program failed and the call path that led there**, and beginners routinely scroll past it. Note its limit: the call path is exact, but how the program came to be in that state is not in the trace.

Read it in this order:

1. **The exception type and message**, which frequently name the problem outright.
1. **The topmost frame in _your_ code** — not the topmost frame overall, which is usually library or platform code doing exactly what it was asked.
1. **The chain of callers below it**, which shows how execution arrived there.

The top of the trace is where the failure surfaced, but the cause is often further down, in whichever frame passed the bad value along. In wrapped exceptions, read the `Caused by:` chain from the bottom up.

| Exception | Usually means |
|---|---|
| `NullPointerException` | Something expected to be initialized never was, or a method returned `null` unnoticed |
| `IndexOutOfBoundsException` | An off-by-one, or an index computed from stale size information |
| `ClassCastException` | An object is not the type assumed, often after an unchecked cast |
| `ConcurrentModificationException` | A collection was modified while being iterated over — usually in a single thread e.g., removing from a list inside a for-each loop over that list |
| `StackOverflowError` | Recursion with a missing or unreachable base case |
| `NumberFormatException` | Unvalidated input being parsed as a number |

**Recent Java versions name the expression that was `null`** e.g., `Cannot invoke "Person.getName()" because "p" is null`. That pinpoints the null — usually a large step forward — though why it was null may lie elsewhere. (→ _Exceptions_, in the Error Handling chapter.)

</div>

<div id="extras">

<include src="resourcesPanel.md" boilerplate/>

</div>
