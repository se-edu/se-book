<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain cohesion</span>

<div id="body">

**_Cohesion_ is a measure of how strongly-related and focused the various responsibilities of a component are.** A highly-cohesive component keeps related functionalities together while keeping out all other unrelated things.

**Higher cohesion is better.** Disadvantages of low cohesion (aka _weak_ cohesion):
* Lowers the understandability of modules as it is difficult to express module functionalities at a higher level.
* Lowers maintainability because a module can be modified due to unrelated causes %%&nbsp;(reason: the module contains code unrelated to each other)%% or many many modules may need to be modified to achieve a small change in behavior %%&nbsp;(reason: because the code realated to that change is not localized to a single module)%%.
* Lowers reusability of modules because they do not represent logical units of functionality.

</div>

<div id="extras">
</div>