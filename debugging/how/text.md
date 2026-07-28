{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can debug systematically</span>

<span id="title">How</span>

<div id="body">

**Systematic debugging follows roughly this sequence:**

1. **_Track_** — state what the correct behavior is, and record the problem somewhere durable.
1. **_Reproduce_** — make the failure happen on demand.
1. **_Automate and simplify_** — turn the reproduction into a one-command test, and reduce it to the smallest case that still fails.
1. **_Find origins_** — list the places where the state could first have gone wrong.
1. **_Focus_** — pick the most likely origin, and state what it predicts.
1. **_Isolate_** — run the check that decides, and conclude.
1. **_Correct_** — fix the cause, confirm it, and guard against recurrence.

<box type="tip" seamless>

**The initials spell TRAFFIC**, a widely used mnemonic for the debugging process %%due to Andreas Zeller%%.
</box>

**Treat this as a map rather than a mandatory order.** Steps 4 to 6 form a loop that turns several times before it lands on the cause, and you can reorder the earlier steps freely: simplifying often finds the origin for free, and a failed isolation sends you back for a better reproduction.

**The most common mistake is jumping straight to step 7.** Starting at 'correct' and working backwards is how shotgun debugging happens. This unit covers steps 1 to 6; step 7 is covered separately.

<box type="info" light>

##### SIDEBAR: Scientific debugging {.text-info}

**Steps 1 to 6 of TRAFFIC are the _scientific method_ applied to a program**: you have an unexplained phenomenon, you propose an explanation, and you test it. Applying it deliberately is what separates systematic debugging from guesswork; every technique that follows exists to make one turn of this loop cheaper.

1. **_Observe_** %%steps 1 to 3%% — collect what you know: the input, the expected result, the actual result, and any state already inspected. Facts only; no guesses yet.
1. **_Hypothesize_** %%steps 4 and 5%% — propose a specific, falsifiable explanation.<br>
  {{ label_example }} %%"Something's wrong with the list" is not a hypothesis; "`items` is empty by the time `computeTotal()` returns" is.%%
1. **_Predict_** %%step 5%% — state what you would observe if the hypothesis were true, and if it were false.
1. **_Experiment_** %%step 6%% — run the smallest probe that distinguishes those outcomes: a breakpoint, an assertion, a targeted print.
1. **_Conclude_** %%step 6%% — reject the hypothesis, or record it as _supported so far_. The asymmetry matters: a result that matches your prediction does not prove your explanation is the only one that fits, whereas one that does not is decisive. You stop not when an observation matches, but when your explanation accounts for the whole failure — every symptom you saw, not only the one you probed.

**Keep a debugging log.** One line per hypothesis, prediction, observation, and conclusion sounds bureaucratic, but it stops you re-testing rejected explanations, survives interruptions, and is what you hand over when the bug becomes someone else's. Start one as soon as the investigation will outlast a few hypotheses, or as soon as you catch yourself repeating a probe.

{% call show_example() %}
A debugging log for the cart example, in which `computeTotal()` empties the very list that `getItems()` handed it:

| # | Hypothesis | Prediction | Observation | Conclusion |
|---|---|---|---|---|
| 1 | `add()` never stored the items | `items.size() == 0` right after adding | `size() == 3` | Rejected |
| 2 | Something empties the list during `computeTotal()` | `size()` drops from 3 to 0 across the call | 3 before, 0 after | Supported — narrowed to that method |
| 3 | `pending` and `items` are the same object | the two identities match when stepping into the loop | same object | Supported — and it accounts for the whole failure: correct total, then an empty cart |

Rejecting hypothesis 1 is what suggested hypothesis 2.
{% endcall %}

</box>

<box type="tip" seamless>

**Know when to stop for the day:** Debugging is unusually sensitive to fatigue, because the whole activity consists of holding a model of the program in your head.
</box>

##### 1. Track

**Debugging starts with being able to state what the correct behavior is, and why.** Without that you have nothing to compare the program against, and you risk searching code that was right all along. State the expectation in the form the test will eventually take: for this input, that exact result.

**Record the problem somewhere durable, so it survives an interruption** — an issue tracker entry for anything beyond a few minutes of work, or a note beside you for the rest. A useful record holds the expected behavior, the actual behavior, the conditions under which you saw it, the steps to reproduce it, and the smallest failing case you have. This is not the same thing as a debugging log: the record holds the problem, while the log holds the investigation, one line per hypothesis and what it settled.

<box type="tip" seamless>

**Sometimes the fault is in the test**, not in the code under investigation: the test may hold its own defect, or its expectation may be wrong. Worth considering early, because it is easy to lose hours to a test that was wrong all along.
</box>

##### 2. Reproduce

**A reliable reproduction is the most valuable thing you can have**, because it makes every experiment cheap and is the surest way to confirm afterwards that the fix worked.

Reproducing means recreating everything the failure depends on, usually more than the input alone: the input data, the program version, the environment and configuration %%operating system, locale, file paths, settings%%, the sequence of actions, and the starting state, such as leftovers from a previous run.

**Build the reproduction deliberately rather than waiting for the failure to recur.** Pin every source of nondeterminism you control — the random seed, the clock and time zone, iteration order, the number of threads. Script the sequence of actions instead of performing it by hand, so it is identical every time. Reset to a known starting state before each attempt, so a leftover from the previous run cannot decide the outcome. And record the environment values from the run that failed, so you can restore them rather than guess at them.

**When you cannot reproduce a failure you can still investigate it**, but the work changes character. Instead of running experiments you mine the evidence left behind: stack traces, logs, crash dumps %%a snapshot of the process's state at the moment it died%%, thread dumps %%what every thread was doing or waiting for%%, and the differences between runs that failed and runs that did not. The immediate goal becomes making the failure more observable or more frequent — logging around the suspected area, tightening assertions, or finding the extra ingredient that decides between the two outcomes. Reproducibility is not all-or-nothing: moving a bug from 'once a week' to 'one run in five' is real progress. Without a reproduction you also confirm the fix differently: test the mechanism you believe was wrong, then watch for recurrence over a period long enough to mean something.

##### 3. Automate and simplify

**Automate the reproduction as a test case as early as you can.** Turning "launch the app and perform these six steps" into a one-second command is what makes the hypothesis loop affordable, and it becomes the regression test once you have a fix. You will run it dozens of times before you are done.

**The smaller the failing case, the smaller the search space** — every element you can remove while the failure persists eliminates a whole category of possible causes.

**Try halving the input first**: cut it in half, test each half, keep whichever still fails, repeat. When it works it is very cheap, and needs no insight into the code.

**But halving frequently does not work.** Sometimes neither half fails, because the failure needs two elements the cut separated. Sometimes both fail for an unrelated reason, because half an input is not valid input — half a Java file does not compile, half a config file lacks its required header. Then remove smaller pieces one at a time, preserving whatever structure the format demands.

Simplify the code path too, not just the data: strip away unrelated features, configuration, and calls until only the failing core remains. A failure that survives is far easier to reason about; one that does not has told you something about what it depends on.

{% call show_example() %}
A 500-line configuration file makes the app crash at startup. Halving gets nowhere: neither half crashes, because the failure needs one setting from each. Removing settings one at a time from the full file isolates the pair — a `theme` entry and a `locale` entry, each harmless alone. Every trial file must keep the required header, or the app rejects it for an unrelated reason and the experiment tells you nothing.
{% endcall %}

**A good bug report is a reproduction that someone else can run.** The work of reproducing and simplifying _is_ the content of the report — which is why producing a minimal example so often solves the problem before it is filed. When you cannot reproduce a failure, report the evidence you do have %%logs, stack traces, the conditions under which it appeared%% rather than nothing.

##### 4. Find origins

**An origin is a place where the state could first have gone wrong**: before it the state is correct, after it the state is infected, and the cause sits at that boundary. This step aims at a list of candidate origins rather than a single answer — a search that begins with one suspect usually ends by wrongly confirming that suspect.

* **Reason backwards from the wrong value.** Ask which statements could have produced it, then which produced _their_ inputs. Following data and control dependencies backwards is called {{ show_term("backward slicing") }} — it narrows the candidates rather than pinpointing them, since a slice reliably contains every statement that could be responsible, usually along with some that could not.
* **Explain the code aloud, line by line.** _Rubber duck debugging_ — explaining it to an inanimate object — works for a real reason: articulating what each line does forces you to state assumptions you had taken for granted, and the wrong one tends to announce itself mid-sentence. A patient friend, a written explanation, or an AI chat window works too — provided you do the explaining and verify anything it suggests against the running program; the value is in articulating the code, not in the reply you get back.
* **Read the evidence you already have** before generating candidates from the code alone. An exception message names the expression that failed, a stack trace names the calls that led there, and a diff names what changed recently.

##### 5. Focus

**Candidate origins are not equally likely, and the order you check them in decides how long the search takes.**

* **Prefer recently changed code to long-stable code, your code to library code, and library code to the compiler or the operating system.** This is a starting bias rather than a rule.
* **Turn the chosen origin into a prediction before you check it.** State what you would observe if it is guilty and what you would observe if it is innocent; if you cannot say what the two outcomes would mean before you press run, you are not yet running an experiment.
* **Where two candidates both fit the evidence, look for the check that separates them**, rather than one that merely agrees with your favorite.

##### 6. Isolate

**Isolating means running one check, discarding the part of the search space it rules out, and repeating** until the boundary narrows to a single statement.

* **Binary search along the execution is the highest-value technique here.** Pick a point roughly halfway through the suspect region, pause, and ask one question: is the state already wrong? If yes, look earlier; if no, look later. Each check roughly halves the region still under suspicion.
* **Binary search over versions, when the code used to work.** If it passed last week, the cause is in one of the commits since — bisect the history rather than the code. `git bisect` automates this, and works best with small, self-contained commits; one you cannot build or test must be skipped, leaving several candidates rather than one.
* **Swap a suspect component for one you trust.** If the failure survives the swap, that component is very likely not responsible.<br>
  {{ label_example }} %%Replace your comparator with a trivially correct one.%%
* **Change one thing at a time**, or the outcome will not tell you which change produced it.
* **Record the conclusion, then start the next turn of the loop** from the narrowed region — or, once the boundary is a single statement you can explain, move on to correcting the cause.

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
* **Log at component boundaries**, so a failure reported from the field arrives with its context attached.

Each of these shortens the distance between defect and failure, which is the root of the difficulty.

</box>

</div>

<div id="extras">
</div>
