{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can debug systematically</span>

<span id="title">How</span>

<div id="body">

**Systematic debugging follows roughly this sequence:**

1. **_Establish the expectation_** — be able to state what the correct behavior is, and why.
1. **_Track_** — record the problem somewhere durable, so it survives an interruption.
1. **_Reproduce_** — make the failure happen on demand.
1. **_Simplify_** — reduce it to the smallest case that still fails.
1. **_Localize_** — narrow down where the state first goes wrong.
1. **_Explain_** — establish the cause, by forming and testing hypotheses.
1. **_Fix and verify_** — correct the cause, confirm it, and guard against recurrence.

**Treat this as a map rather than a mandatory order.** Steps 3 to 6 form a loop and frequently reorder: simplifying often localizes the problem for free, and a failed localization sends you back for a better reproduction.

**The most common mistake is jumping straight to step 7.** Starting at 'fix' and working backwards is how shotgun debugging happens. This unit covers steps 1 to 6; step 7 is covered in _Fixing_.

##### Scientific debugging

**The inner loop of steps 3 to 6 is the scientific method**: you have an unexplained phenomenon, you propose an explanation, and you test it. Applying it deliberately is what separates systematic debugging from guesswork; every technique that follows exists to make one turn of this loop cheaper.

1. **_Observe_** — collect what you know: the input, the expected result, the actual result, and any state already inspected. Facts only; no guesses yet.
1. **_Hypothesize_** — propose a specific, falsifiable explanation.<br>
  {{ label_example }} %%"Something's wrong with the list" is not a hypothesis; "`items` is empty by the time `computeTotal()` returns" is.%%
1. **_Predict_** — state what you would observe if the hypothesis were true, and if it were false.
1. **_Experiment_** — run the smallest probe that distinguishes those outcomes: a breakpoint, an assertion, a targeted print.
1. **_Conclude_** — reject the hypothesis, or record it as _supported so far_. The asymmetry matters: a result that matches your prediction does not prove your explanation is the only one that fits, whereas one that does not is decisive.

**A good hypothesis can be proven wrong, and a good experiment leads somewhere different depending on its outcome.** If you already know what you will see, the run teaches you nothing. Where two rival explanations both fit, look for the experiment that separates them rather than one that merely agrees with your favorite.

<box type="tip" seamless>

**Sometimes the defect is in the test**, not in the code: the program is right and the expectation is wrong. Worth considering early, because it is easy to lose hours to.
</box>

**Keep a debugging log.** One line per hypothesis, prediction, observation, and conclusion sounds bureaucratic, but it pays for itself within about twenty minutes on any non-trivial bug: it stops you re-testing rejected explanations, survives interruptions, and is what you hand over when the bug becomes someone else's.

{% call show_example() %}
A debugging log for the cart example, in which `computeTotal()` empties the very list that `getItems()` handed it:

| # | Hypothesis | Prediction | Observation | Conclusion |
|---|---|---|---|---|
| 1 | `add()` never stored the items | `items.size() == 0` right after adding | `size() == 3` | Rejected |
| 2 | Something empties the list during `computeTotal()` | `size()` drops from 3 to 0 across the call | 3 before, 0 after | Supported — narrowed to that method |
| 3 | `pending` and `items` are the same object | the two identities match when stepping into the loop | same object | Supported — cause found |

Rejecting hypothesis 1 is what suggested hypothesis 2.
{% endcall %}

**_Rubber duck debugging_ — explaining your code line by line to an inanimate object — works for a real reason.** Articulating what each line does forces you to state assumptions you had taken for granted, and the wrong one tends to announce itself mid-sentence. A patient friend, a written explanation, or an AI chat window serves as well (and even better) than a rubber duck. Knowing when to stop for the day helps too: debugging is unusually sensitive to fatigue, because the whole activity consists of holding a model of the program in your head.

##### Reproducing the failure

**A reliable reproduction is the most valuable thing you can have**, because it makes every experiment cheap and is the only way to confirm afterwards that the fix worked.

Reproducing means recreating everything the failure depends on, usually more than the input alone: the input data, the program version, the environment and configuration %%operating system, locale, file paths, settings%%, the sequence of actions in order, and the starting state such as leftovers from a previous run.

**Automate the reproduction as a test case as early as you can.** Turning "launch the app and perform these six steps" into a one-second command is what makes the hypothesis loop affordable — you will run it dozens of times before you are done — and it becomes the regression test once you have a fix.

**When you cannot reproduce a failure you can still investigate it**, but the work changes character. Instead of running experiments you mine the evidence left behind: stack traces, logs, crash dumps, thread dumps, and the differences between runs that failed and runs that did not. The immediate goal becomes making the failure more observable or more frequent — logging around the suspected area, tightening assertions, or finding the extra ingredient that decides between the two outcomes. Reproducibility is not all-or-nothing: moving a bug from 'once a week' to 'one run in five' is real progress.

##### Simplifying the failing case

**The smaller the failing case, the smaller the search space** — every element you can remove while the failure persists eliminates a whole category of possible causes.

**Try halving the input first**: cut it in half, test each half, keep whichever still fails, repeat. When it works it is very cheap, and needs no insight into the code.

**But halving frequently does not work.** Sometimes neither half fails, because the failure needs two elements the cut separated. Sometimes both fail for an unrelated reason, because half an input is not valid input — half a Java file does not compile, half a config file lacks its required header. Then remove smaller pieces one at a time, preserving whatever structure the format demands.

Simplify the code path too, not just the data: strip away unrelated features, configuration, and calls until only the failing core remains. A failure that survives is far easier to reason about; one that does not has told you something about what it depends on.

{% call show_example() %}
A 500-line configuration file makes the app crash at startup. Halving gets nowhere: neither half crashes, because the failure needs one setting from each. Removing settings one at a time from the full file isolates the pair — a `theme` entry and a `locale` entry, each harmless alone. Every trial file must keep the required header, or the app rejects it for an unrelated reason and the experiment tells you nothing.
{% endcall %}

**A good bug report is a reproduction that someone else can run.** The work of reproducing and simplifying _is_ the content of the report — which is why producing a minimal example so often solves the problem before it is filed. When you cannot reproduce a failure, report the evidence you do have %%logs, stack traces, the conditions under which it appeared%% rather than nothing.

##### Narrowing the search space

**The goal of localization is to find the earliest point at which the program state is wrong**: before it the state is correct, after it the state is infected, and the cause sits at the boundary.

* **Binary search along the execution is the highest-value technique here.** Pick a point roughly halfway through the suspect region, pause, and ask one question: is the state already wrong? If yes, look earlier; if no, look later. Each check roughly halves the region still under suspicion.
* **Reason backwards from the wrong value.** Ask which statements could have produced it, then which produced _their_ inputs. Following data and control dependencies backwards is called {{ show_term("slicing") }}.
* **Binary search over versions, when the code used to work.** If it passed last week, the cause is in one of the commits since — bisect the history rather than the code. `git bisect` automates this, and works best with small, self-contained commits; one you cannot build or test must be skipped, leaving several candidates rather than one.
* **Swap components to test a suspect in isolation.** If the failure survives the swap, that component is exonerated.<br>
  {{ label_example }} %%Replace your comparator with a trivially correct one.%%
* **Prioritize your suspects sensibly**: recently changed code before long-stable code, your code before library code, library code before the compiler or the operating system. This is a starting bias rather than a rule.

**Change one thing at a time, and know in advance what each run will tell you.** If you cannot say what the two possible outcomes would mean before you press run, you are not yet running an experiment.

<box type="info" seamless>

**Sidebar: Making bugs easier to find** {.text-info}

**The cheapest bug to debug is the one that announces itself**, and most of what makes code debuggable is decided long before the bug exists.

* **Fail fast.** Check preconditions and invariants on entry to a method, so an infection surfaces at its origin instead of ten frames later. (related: _defensive programming_, _assertions_)
* **Keep scopes small.** A variable visible across three lines has only three lines as the search space for the bug; a field visible across a class has the whole class.
* **Prefer immutability.** A value that cannot change cannot be changed wrongly, which removes an entire category of "what modified this?" investigations %%— including the one in the cart example%%.
* **Develop incrementally, testing as you go.** When only twenty lines are new, the defect is almost certainly in those twenty lines. This is a high-value habit often abandoned under time pressure.
* **Use the static checks you already have** — compiler warnings, IDE inspections, linters, `@Override`, generics, `final`. A defect caught here costs no debugging at all.
* **Log at component boundaries**, so a failure reported from the field arrives with its context attached.

Each of these shortens the distance between defect and failure — the quantity the _What_ unit identified as the root of the difficulty.

</box>

</div>

<div id="extras">
</div>
