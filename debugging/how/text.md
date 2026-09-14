{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can debug systematically</span>

<span id="title">How</span>

<div id="body">

**Systematic debugging involves following tasks, whose first letters make up the mnemonic TRAFFIC** %%(credit: Andreas Zeller)%%.

* **rack**{.text-info} — state what the correct behavior is, and record the problem somewhere durable.{ texts="['T','R','A','F','F', 'I', 'C']" t-class="badge rounded-pill font-monospace text-bg-info mb-1 me-0 pe-0 fw-bold" }
* **eproduce**{.text-info} — make the failure happen on demand.
* **utomate and simplify**{.text-info} — turn the reproduction into a one-step test, and reduce it to the smallest case that still fails.
* **ind origins**{.text-info} — list the places where the state could first have gone wrong.
* **ocus**{.text-info} — pick the most likely candidate origin, and state what it predicts.
* **solate**{.text-info} — run the check that decides if the candidate origin is the actual origin, and conclude.
* **orrect**{.text-info} — fix the cause, confirm it, and guard against recurrence.

**TRAFFIC is a map rather than a mandatory sequence.** Some tasks can be done in a loop before it lands on the cause, and you can reorder the other tasks as you see fit.

**The most common mistake is jumping straight to <span class="badge rounded-pill font-monospace text-bg-info fw-bold">C</span>.** Starting at 'correct' and working backwards is how shotgun debugging happens. This text below covers the six tasks TRAFFIC except C, which is covered separately.

<div class="non-printable">

<panel type="info" header="{{ icon_extra }} SIDEBAR: Scientific debugging" minimized >

**Steps 1 to 6 of TRAFFIC are the _scientific method_ applied to a program**: you have an unexplained phenomenon, you propose an explanation, and you test it. Applying it deliberately is what separates systematic debugging from guesswork.

1. **_Observe_** %%steps 1 to 3%% -- collect what you know: the input, the expected result, the actual result, and any state already inspected.
1. **_Hypothesize_** %%steps 4 and 5%% -- propose a specific, verifiable explanation.<br>
  {{ label_example }} %%"Something's wrong with the list" is not a hypothesis; "`items` is empty by the time `computeTotal()` returns" is.%%
1. **_Predict_** %%step 5%% -- state what you would observe if the hypothesis were true, and if it were false.
1. **_Experiment_** %%step 6%% -- run the smallest probe that distinguishes those outcomes: a breakpoint, an assertion, a targeted print.
1. **_Conclude_** %%step 6%% -- reject the hypothesis, or record it as _supported so far_. A result that matches your prediction does not prove your hypothesis is the only one that fits, whereas one that does not is decisive. You stop not when an observation matches, but when your explanation accounts for the whole failure -- every symptom you saw, not only the one you probed.

**Good record keeping is part of the scientific method.** For example, keep a debugging log that records the hypothesis, prediction, observation, and conclusion.

{% call show_example() %}
A debugging log for the cart example, in which `computeTotal()` empties the very list that `getItems()` handed it:

| # | Hypothesis | Prediction | Observation | Conclusion |
|---|---|---|---|---|
| 1 | `add()` never stored the items | `items.size() == 0` right after adding | `size() == 3` | Rejected |
| 2 | Something empties the list during `computeTotal()` | `size()` drops from 3 to 0 across the call | 3 before, 0 after | Supported — narrowed to that method |
| 3 | `pending` and `items` are the same object | the two identities match when stepping into the loop | same object | Supported — and it accounts for the whole failure: correct total, then an empty cart |

Rejecting hypothesis 1 is what suggested hypothesis 2.
{% endcall %}

</panel>
</div>

<box type="tip" seamless>

**Know when to stop for the day:** Debugging is unusually sensitive to fatigue, because the whole activity consists of holding a model of the program in your head.
</box>

{% macro show_traffic_name(letter, rest) %}<span class="badge rounded-pill font-monospace text-bg-info pe-0 me-0 fw-bold">++{{ letter }}++</span><span class="text-info-emphasis">{{ rest }}</span>{% endmacro %}

##### {{ show_traffic_name('T', 'rack') }}

**The first step of debugging should be stating what the correct behavior is, and why.** Without that you have nothing to compare the program against, and you risk searching code that was right all along. State the expectation in a testable form: for this input, that exact result.

<box type="tip" seamless>

**Sometimes the fault is in the test**, not in the code under investigation. It is worth considering early, because it is easy to lose hours to a test that was wrong all along.
</box>

##### {{ show_traffic_name('R', 'eproduce') }}

**A reliable reproduction makes every experiment cheap** and is a way to confirm afterwards that the fix worked. Reproducing means recreating everything the failure depends on, e.g., the input data, the program version, the environment and <tooltip content="i.e., OS, locale, file paths, settings, etc.">configuration</tooltip>, the sequence of actions, and the starting state, such as leftovers from a previous run.

**When you cannot reproduce a failure you can still investigate it**. Instead of running experiments you mine the evidence left behind: stack traces, logs, <tooltip content="a snapshot of the process's state at the moment it died">crash dumps</tooltip>, <tooltip content="what every thread was doing or waiting for">thread dumps</tooltip>, and the differences between runs that failed and runs that did not. The immediate goal becomes making the failure more observable or more frequent. Moving a bug from 'once a week' to 'one run in five' is real progress.

##### {{ show_traffic_name('A', 'utomate and simplify') }}

**Automate the reproduction as a test case as early as you can.** Turning "launch the app and perform these six steps" into a one-second command is what makes the hypothesis loop cheap, and it can become the regression test once you have a fix.

**Why simplify? The smaller the failing case, the smaller the search space** -- every element you can remove while the failure persists eliminates a whole category of possible causes. Some directions you can try:

* **Shrink the input space**: Cut the input space in half, test each half, keep whichever still fails, repeat. When it works it is very cheap, and needs no insight into the code. But halving does not always work: sometimes neither half fails, because the failure needs two elements the halving separated.
* **Simplify the code path**: Strip away unrelated features, configuration, and calls until only the failing core remains. Now you have less code to search for the defect.

{% call show_example() %}
A 500-line configuration file makes the app crash at startup. Halving gets nowhere: neither half crashes, because the failure needs one setting from each. Removing settings one at a time from the full file isolates the pair — a `theme` entry and a `locale` entry, each harmless alone.
{% endcall %}

##### {{ show_traffic_name('F', 'ind origins') }}

**An origin is a place where the state could first have gone wrong**: before it the state is correct, after it the state is infected, and the cause sits at that boundary. This step often produces a list of candidate origins rather than a single answer. Some techniques you can follow:

* **Reason backwards from the wrong value.** Ask which statements could have produced it, then which produced _their_ inputs. Following data and control dependencies backwards is called {{ show_term("backward slicing") }} — it narrows the candidates rather than pinpointing them, since a slice reliably contains every statement that could be responsible, usually along with some that could not.
* **Explain the code to someone, line by line** (aka {{ show_term("rubber duck debugging") }}): explaining the code to a patient friend, in a written explanation, to an AI, or even to an inanimate object like a rubber duck works for a real reason: articulating what each line does forces you to state assumptions you had taken for granted, and you often spot the wrong assumption mid-sentence %%("...then, that object is passed to ... wait, that can't be right ... that object should not cross this boundary!")%%.
* **Read the evidence you already have** before generating candidates from the code alone. An exception message names the expression that failed, a stack trace names the calls that led there, and a diff names what changed recently.

##### {{ show_traffic_name('F', 'ocus') }}

**Candidate origins are not equally likely, and the order you check them in decides how long the search takes.**

* **Prefer recently changed code to long-stable code, your code to library code, and library code to the compiler or the operating system.** This is a starting bias rather than a rule %%(i.e., it is possible for the bug to be in the library code or even the OS, although less likely)%%.
* **Turn the chosen origin into a prediction before you check it.** State what you would observe if it is guilty and what you would observe if it is innocent. This makes your debugging more systematic and helps you narrow down the candidates faster.

##### {{ show_traffic_name('I', 'isolate') }}

**Isolating means running one check, discarding the part of the search space it rules out, and repeating** until you find what needs to be fixed.

* **Binary search over the execution can be used to find when the state gets infected**. Pick a point roughly halfway through the suspect region, pause, and ask one question: is the state already wrong? If yes, look earlier; if no, look later. Each check roughly halves the region still under suspicion.
* **Binary search over versions can be used to find when the code used to work.** If it passed last week, the cause is in one of the commits since -- bisect the history rather than the code. `git bisect` automates this, and works best with small, self-contained commits. Martin Fowler calls this [Diff Debugging](https://martinfowler.com/bliki/DiffDebugging.html).
* **Swap a suspect component for one you trust.** If the failure survives the swap, that component is very likely not responsible.
* **Change one thing at a time**, or the outcome will not tell you which change produced it.
* **Record the conclusion, then start the next turn of the loop** from the narrowed region until you find what needs to be fixed.

{% call show_example() %}
Binary search along the execution, on a run too long to watch: a 10,000-row import produces the right running total at the start and the wrong one at the end, and nothing in between is visible. Pause at row 5,000 and ask one question — is the total already wrong? If it is, the cause lies in the first half, so pause next at row 2,500; if it is not, pause at row 7,500. Fourteen such checks reduce 10,000 rows to one, and none of them requires understanding the code — only the ability to say whether the state is already wrong.
{% endcall %}

<box type="success" light>

##### SIDEBAR: Making bugs easier to find {.text-success}

**The cheapest bug to debug is the one that announces itself**, and most of what makes code debuggable is decided long before the bug exists.

* **Fail fast.** Check preconditions and invariants on entry to a method, so an infection surfaces close to its origin instead of ten frames later. (related: _defensive programming_, _assertions_)
* **Keep scopes small.** A variable visible across three lines has only three lines that could have changed it; a field visible across a class has the whole class.
* **Prefer immutability.** A value that cannot change cannot be changed wrongly, which removes an entire category of "what modified this?" investigations %%— including the one in the cart example%%.
* **Develop incrementally, testing as you go.** When only twenty lines are new, the defect is almost certainly in those twenty lines. This is a high-value habit often abandoned under time pressure.
* **Use the static checks you already have** — compiler warnings, IDE inspections, linters, `@Override`, generics, `final`. A defect caught here costs no debugging at all.
* **Log at component boundaries**, so that logs can help you narrow the search to specific components.

Each of these shortens the distance between defect and failure, which is the root of the difficulty.

</box>

##### {{ show_traffic_name('C', 'orrect') }}

Covered in a separate section, titled _Fixing_.

</div>

<div id="extras">
</div>
