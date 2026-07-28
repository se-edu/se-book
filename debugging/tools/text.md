{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use a debugger</span>

<span id="title">Tools</span>

<div id="body">

**Every way of looking inside a running program is a {{ show_term("probe") }}** — a means of answering one specific question about its state. The useful question is never "print statements or debugger?" but "what is the cheapest probe that answers _this_ question?" Some probes come out once the bug is found %%(e.g., a breakpoint or a temporary print statement)%%; others are meant to stay %%(e.g., a permanent log statement added at a component boundary)%%.

* **Print statements are the cheapest to start with and the most expensive to iterate with.** They need no setup, work in any environment, and survive across process and machine boundaries — but every new question costs an edit-build-run cycle, each edit is a chance to introduce a fresh defect, and leftovers reach production if you forget them.
* **Logging is the disciplined, permanent form of printing.** Leveled and filterable, log statements can stay in the code — so they are still there when the failure happens on a user's machine at 3am, where no debugger can reach.
* **Assertions are probes that check themselves.** Rather than printing a value for you to examine, an assertion states what it should be and fails immediately when it is not, turning a silent infection into a loud, located failure. If you use Java's `assert` statement, enable assertions in your run configuration (`-ea`) or it will do nothing; test-framework assertions are separate and always run.
* **A debugger asks questions interactively, without changing the code at all.**

<box type="tip" seamless>

As a rough guide:

* reproducible and local → debugger
* needs to survive into production → logging
* want to catch the problem at its origin → assertions
</box>

##### Using a debugger

**A debugger lets you pause a running program and inspect and control it from the inside, without modifying its code.** That last part is what makes it different in kind from printing: asking one more question costs seconds rather than another edit-build-run cycle.

**Breakpoints determine where the program pauses.**

* A **{{ show_term("line breakpoint") }}** pauses when execution reaches a given line.
* A **{{ show_term("conditional breakpoint") }}** pauses only when a condition holds. This makes debugging the 4137th iteration of a loop feasible at all, and it is the feature beginners most often do not know exists.<br>
  {{ label_example }} %%Pausing only when `i == 4137`.%%
* An **{{ show_term("exception breakpoint") }}** pauses at the moment an exception is thrown, before the stack unwinds and discards the state you need.
* A **{{ show_term("field watchpoint") }}** pauses when a field's value changes rather than at a location — the right tool for "what is setting this to `null`?".

<box type="tip" seamless>

**Disable breakpoints rather than deleting them**, so that a debugging session can be paused and resumed.
</box>

**Stepping commands determine how execution advances.** {{ show_term("step over") }} runs the next line, including any call it makes, as one step. {{ show_term("step into") }} enters the method being called. {{ show_term("step out") }} finishes the current method and pauses at its caller. {{ show_term("run to cursor") }} continues to a chosen line.

**The inspection views tell you what state the program is in.**

* **The call stack shows how execution reached this point**, and selecting any frame reveals that method's variables. The cause is often several frames above where the program stopped.
* **The variables view shows the values currently in scope**, and _watches_ track a chosen expression as you step.
* **_Evaluate expression_ runs arbitrary code at the paused point**, turning passive inspection into a live experiment: you can test a hypothesis without editing or restarting. One caution — evaluating really does run the code, so calling a method that mutates state, or setting a variable by hand, changes the program you are observing.

{% call show_example() %}
One session on the cart example, from the first breakpoint to the diagnosis:

1. Set a _line breakpoint_ on `total += pending.remove(0).price();`, then run the code that adds three items and calls `computeTotal()`.
1. At the first pause the _variables view_ shows `pending` holding all three items, and nothing yet looks wrong.
1. _Evaluate expression_ on `pending == items` answers `true`. That single evaluation is the diagnosis — the list being emptied is the cart's own — and it cost no edit, no rebuild, and no re-run.
1. The _call stack_ shows `computeTotal()` called from the display code, so the frame the failure will surface in is not the frame the defect is in.
1. Resume, and watch `items.size()` fall in the variables view as the loop runs.

A field watchpoint on `items` would not have helped here: `items` is assigned once, where it is declared, so the watchpoint fires at construction and never for `remove(0)`. A watchpoint catches a field being reassigned, not the object it already points at being modified.
{% endcall %}

<box type="tip" seamless>

Two habits are worth forming:

1. Set your first breakpoint _before_ the suspected region rather than at the failure, so you can watch the state go wrong
1. Remember that a debugger reports only _what_ the state is. The _why_ still comes from the hypothesis loop.
</box>

<box type="tip" seamless>

**AI assistants are useful for some parts of debugging and unreliable for others.** They are good at explaining unfamiliar error messages, proposing candidate hypotheses, and serving as an always-available rubber duck. They are unreliable at diagnosing a defect in code they cannot run, and will produce confident, fluent, incorrect explanations. A systematic method is what makes them safe: treat any suggestion as a hypothesis, insist it be falsifiable, and verify it against the running program yourself.
</box>

##### Reading stack traces

**A stack trace is a precise report of where a program failed and the call path that led there**, and beginners routinely scroll past it. Note its limit: the call path is exact, but how the program came to be in that state is not in the trace.

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
| `ConcurrentModificationException` | A collection was modified while being iterated over, usually in a single thread {{ label_example }} %%removing from a list inside a for-each loop over that list%% |
| `StackOverflowError` | Recursion with a missing or unreachable base case |
| `NumberFormatException` | Unvalidated input being parsed as a number |


</div>

<div id="extras">

<include src="resourcesPanel.md" boilerplate/>

</div>
