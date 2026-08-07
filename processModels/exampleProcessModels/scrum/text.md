{% from "common/macros.njk" import show_term with context %}
<span id="title">Scrum</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain scrum</span>

<div id="body">

**{{ show_term("Scrum") }} is a lightweight framework rather than a complete process.** It fixes a small set of roles, events, and artifacts, and leaves the team to fill in the rest with practices of its own choosing. The description below follows [the Scrum Guide](https://scrumguides.org/).

**A Scrum team holds three accountabilities:**
* **The {{ show_term("Product Owner") }}**, who represents the stakeholders and decides what the product needs next
* **The {{ show_term("Scrum Master") }}**, who is accountable for the team using Scrum well
* **The Developers**, a cross-functional group who do the actual analysis, design, implementation, testing, etc.

**A Scrum project is divided into iterations called {{ show_term("Sprints") }}.** A sprint is the basic unit of development in Scrum. Sprints tend to last between one week and one month, and are a time-boxed (i.e., restricted to a specific duration) effort of a constant length.

**Each sprint is preceded by a planning meeting**, where the team selects the work for the sprint and agrees on a {{ show_term("sprint goal") }}, and followed by a review or retrospective meeting, where the progress is reviewed and lessons for the next sprint are identified.

**During each sprint, the team creates a potentially deliverable product increment** (for example, working and tested software). The work comes from the {{ show_term("product backlog") }}, a prioritized set of high-level requirements for the product as a whole. The items selected for the current sprint form the {{ show_term("sprint backlog") }}.

**Within a sprint the sprint goal stays fixed, but the plan for reaching it does not.** The team updates the sprint backlog as it learns more, and can renegotiate the scope with the Product Owner as long as the sprint goal survives. Development is time-boxed such that the sprint must end on time; work that is not completed returns to the product backlog.

**Scrum enables the creation of self-organizing teams**, relying on frequent and direct communication between all team members and disciplines in the project rather than on documents handed from one to the next.

**A key principle of Scrum is its recognition that during a project the customers can change their minds about what they want and need** (often called requirements churn), and that unpredicted challenges cannot be easily addressed in a traditional predictive or planned manner. As such, Scrum adopts an empirical approach, accepting that the problem cannot be fully understood or defined, focusing instead on maximizing the team’s ability to deliver quickly and respond to emerging requirements.

<pic eager src="{{baseUrl}}/processModels/exampleProcessModels/scrum/images/diagram.png" height="250" />
<p/>

**The {{ show_term("Daily Scrum") }} is a short daily meeting in which the developers synchronize their plans, surface whatever is blocking them, and decide what needs to be taken up separately.** It is not a problem-solving meeting.<br>
{{ label_example }} %%A common way to run it is for each member to say what they did since the previous one, what they plan to do next, and what is in their way.%%

<panel type="seamless" header="{{ icon_video }} Intro to Scrum in Under 10 Minutes" class="non-printable">

<sub>(This is not an endorsement of the product mentioned in the video)</sub>

@[youtube](XU0llRltyFM)

</panel>

</div>

<div id="extras">
</div>
