{% from "common/macros.njk" import show_example with context %}
<span id="title">Choosing a model</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can choose a process model to suit a project</span>

<div id="body">

**No process model is best for every project; the choice depends on the project.** These questions are the ones that usually decide it:

* **How well is the problem understood at the start?** The less certain you are about what to build, the more you gain from delivering something early and learning from the response to it.
* **How stable are the requirements likely to be?** Requirements that will keep moving are expensive to freeze into an early document.
* **How costly is a late change?** Changing a web page after release is cheap; changing software already embedded in shipped hardware is not.
* **Are users available to give feedback during development?** Frequent feedback is what makes short iterations worth their overhead. Without it, the iterations still cost the overhead.
* **Does anything outside the project demand signed-off documents?** Contractual, regulatory, and safety-certification requirements can dictate stage-by-stage evidence regardless of what the team would prefer.
* **How large and how experienced is the team?** Coordinating many people, or people new to each other, needs more explicit structure than a small experienced team does.

**These questions guide a choice; they do not compute one.** Two reasonable teams can weigh them differently and both be right, and a project can combine approaches rather than adopt one wholesale.

{% call show_example() %}
Two projects, two defensible answers:

* Software controlling a car's braking system: the requirements are prescribed by safety regulations, changes after release are extremely expensive, and evidence for each stage has to be produced anyway. A largely sequential approach fits -- though a regulated project can equally run iteratively, producing the required evidence at each iteration.
* A new feature for a social media app: nobody knows yet which version users will prefer, and shipping a change costs little. Short iterations with real users fit.
{% endcall %}

</div>

<div id="extras">
</div>
