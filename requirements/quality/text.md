{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Quality of requirements</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain quality of requirements</span>

<div id="body">

Here are some characteristics of well-defined requirements <trigger for="pop:zielczynski"><sup>[:book: zielczynski]</sup></trigger>:

* Unambiguous
* Testable (verifiable)
* Clear (concise, terse, simple, precise)
* Correct
* Understandable
* Feasible (realistic, possible)
* Independent
* {{ show_term("Atomic", "Not divisible any further") }}
* Necessary
* Implementation-free (i.e., abstract)

**Two of these carry most of the weight: a requirement that is unambiguous and testable states an _observable_ result, so evidence can settle whether it has been met.** A requirement that states a judgment instead can only be settled by argument. To make one testable, say who is involved, what they are doing, and what result counts as success.

{% call show_example() %}
Two requirements from the same project, one testable and one not:

* {{ good }} `The system should respond within two seconds.` You can measure this, and the measurement settles the matter.
* {{ bad }} `The system should be usable by a novice who has never carried out an online purchase.` Two people can disagree about whether the system is 'usable', and neither can show the other is wrong.

The second can be rewritten so that evidence settles it:

* {{ good }} `A user who has never carried out an online purchase should be able to complete a purchase unaided, on the first attempt, within five minutes.`
{% endcall %}

Besides these criteria for individual requirements, the set of requirements as a whole should be:

* Consistent
* Non-redundant
* Complete

<popover id="pop:zielczynski">
  <div slot="content">
    <include src="../../common/references.md#zielczynski" />
  </div>
</popover>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
