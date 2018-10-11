<div id="title">

#### Usage

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use user stories to manage requirements of project</span>

<div id="body">

**User stories capture user requirements in a way that is convenient for <popover content="i.e. which features to include in the product">scoping</popover>, <popover content="i.e. how much effort each feature will take">estimation</popover> and <popover content="i.e. when to deliver each feature">scheduling</popover>.**

> [User stories] strongly shift the focus from writing about features to discussing them. In fact, these discussions are more important than whatever text is written. <sub>[Mike Cohn, MountainGoat Software [:link:](https://www.mountaingoatsoftware.com/agile/user-stories)]</sub>

**User stories differ from <popover content="e.g. a description of the requirements written in prose">traditional requirements specifications</popover> mainly in the level of detail.** User stories should only provide enough details to make a reasonably low risk estimate of how long the user story will take to implement. When the time comes to implement the user story, the developers will meet with the customer face-to-face  to work out a more detailed description of the requirements. %%[<trigger for="modal:xp-user-stories" trigger="click">more...</trigger>]%%

**User stories can capture <trigger trigger="click" for="modal:userStoriesUsage-nfr">non-functional requirements</trigger> too** because even NFRs must benefit some stakeholder.

<modal large title="Textbook {{ icon_embedding }}" id="modal:userStoriesUsage-nfr">
  <include src="../../../requirements/nonFunctionalRequirements/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<tip-box>

{{ icon_example }} An example of a NFR captured as a user story:

As a | I want to | so that
-----|-----------|--------
impatient user | to be able experience reasonable response time from the website while up to 1000 concurrent users are using it | I can use the app even when the traffic is at the maximum expected level

</tip-box>

<div id="usageTips">

Given their lightweight nature, **user stories are quite handy for recording requirements during early stages of requirements gathering**.

<tip-box> 

:bulb: Here are some tips for using user stories for early stages of requirement gathering:

* **Define the _target user_:**  
  Decide your target user's profile (e.g. a student, office worker, programmer, sales person) and work patterns (e.g. Does he work in groups or alone? Does he share his computer with others?). A clear understanding of the target user will help when deciding the importance of a user story. You can even give this user a name. %%&nbsp;e.g. Target user Jean is a university student studying in a non-IT field. She interacts with a lot of people due to her involvement in university clubs/societies. ...%%
* **Define the _problem scope_:**
  Decide that exact problem you are going to solve for the target user. %%&nbsp;e.g. Help Jean keep track of all her school contacts%%
* **Don't be too hasty to discard 'unusual' user stories:**  
  Those might make your product unique and stand out from the rest, at least for the target users.
* **Don't go into too much details:**  
  For example, consider this user story: `As a user, I want to see a list of tasks that needs my attention most at the present time, so that I pay attention to them first.`<br> 
  When discussing this user story, don't worry about what tasks should be considered _needs my attention most at the present time_. Those details can be worked out later.
* **Don't be biased by preconceived product ideas:**  
  When you are at the stage of identifying user needs, clear your mind of ideas you have about what your end product will look like. 
* **Don't discuss implementation details or whether you are actually going to implement it:**  
  When gathering requirements, your decision is whether the user's need is important enough for you to want to fulfil it. Implementation details can be discussed later. If a user story turns out to be too difficult to implement later, you can always omit it from the implementation plan. 
   
</tip-box>

</div>

While use cases can be recorded on <tooltip content="e.g. index cards or sticky notes">physical paper</tooltip> in the initial stages, an online tool is more suitable for longer-term management of user stories, especially if the team is not <tooltip content="physically in the same location">co-located</tooltip>.

<panel header="**Tool Examples**: How to use some example online tools to manage user stories" alt="tool examples">
  <include src="tools.md" />
</panel>

<modal id="modal:xp-user-stories" title=":bookmark: User stories vs traditional requirement specifications, according to XP">

<include src="../../../common/popOvers.md#xp" inline /> uses User stories to capture requirements.

[This page](http://www.extremeprogramming.org/rules/userstories.html) in their website explains the difference between user stories and traditional requirements.

>One of the biggest misunderstandings with user stories is how they differ from traditional requirements specifications. The biggest difference is in the level of detail. User stories should only provide enough detail to make a reasonably low risk estimate of how long the story will take to implement. When the time comes to implement the story developers will go to the customer and receive a detailed description of the requirements face to face.

</modal>

</div>

<div id="extras">
  <include src="resources.md" />
</div>