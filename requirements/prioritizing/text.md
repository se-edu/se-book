{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Prioritizing requirements</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain prioritizing requirements</span>

<div id="body">

**Requirements can be prioritized based on the importance and urgency**, while keeping in mind the constraints of schedule, budget, staff resources, quality goals, and other constraints.

A common approach is to group requirements into priority categories. Note that all such scales are subjective, and stakeholders define the meaning of each level in the scale for the project at hand.

{% call show_example() %}
One scheme for categorizing requirements:

* `Essential`: The product must fulfill this requirement; otherwise, users will not accept it.
* `Typical`: Most similar systems have this feature although the product can survive without it.
* `Novel`: New features that could differentiate this product from the rest.

Other schemes:

* `High`, `Medium`, `Low`
* `Must-have`, `Nice-to-have`, `Unlikely-to-have`
* `Level 0`, `Level 1`, `Level 2`, ...
{% endcall %}

**Some requirements can be discarded if they are considered ‘out of {{ show_term("scope", "the extent to which the software features should go") }}’.**

{% call show_example() %}
The requirement given below is for a Calendar application. Stakeholders of the software (e.g., product designers) might decide it is outside the software's scope.

>The software records the actual time taken by each task and shows the difference between the _actual_ and _scheduled_ time for the task.
{% endcall %}

</div>

<div id="extras">
</div>
