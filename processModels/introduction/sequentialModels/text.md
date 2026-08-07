{% from "common/macros.njk" import show_term with context %}
<span id="title">Sequential models</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain sequential process models</span>

<div id="body">

**The {{ show_term("sequential model") }}, also called the _waterfall_ model, views software development as a linear process**, in which the project is seen as progressing through the development stages. The name _waterfall_ stems from how the model is drawn to look like a waterfall (see below).

<pic eager src="{{baseUrl}}/processModels/introduction/sequentialModels/images/diagram.png" width="550" />
<p/>

**When one stage of the process is completed, it produces some artifacts to be used in the next stage**. For example, the requirements stage produces a comprehensive list of requirements, to be used in the design phase.

**A strict sequential model project moves only in the forward direction** i.e., each stage is completed before starting the next. For example, once the requirements stage is over, there is no provision for revising the requirements later. **In practice the model is often relaxed** to let a stage send work back to the one before it, although doing so means redoing work that was already treated as finished.

**This model can work well for a project that produces software to solve a well-understood problem**, in which case the requirements can remain stable and the effort can be estimated accurately. Furthermore, as each stage has a well-defined outcome, it is easy to track the progress of the project because one can gauge the project progress by monitoring which stage the project is in.

**However, real-world projects often tackle problems that are not well-understood at the beginning**, making them unsuitable for this model. For example, target users of a software product may not be able to state their requirements accurately at the start of the project, if they have not used a similar product before.

**A second weakness is that feedback arrives late.** Each stage's output is checked mainly by the stage that follows it, so integration and contact with real users come near the end. A mistake made while gathering requirements or designing therefore tends to surface at the point where going back to completed work costs the most.

</div>

<div id="extras">
</div>
