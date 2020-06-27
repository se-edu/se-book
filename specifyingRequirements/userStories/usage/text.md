<span id="title">Usage</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use user stories to manage requirements of project</span>

<div id="body">

**User stories capture user requirements in a way that is convenient for <popover content="i.e. which features to include in the product">scoping</popover>, <popover content="i.e. how much effort each feature will take">estimation</popover>, and <popover content="i.e. when to deliver each feature">scheduling</popover>.**

> [User stories] strongly shift the focus from writing about features to discussing them. In fact, these discussions are more important than whatever text is written. <sub>[Mike Cohn, MountainGoat Software [:link:](https://www.mountaingoatsoftware.com/agile/user-stories)]</sub>

**User stories differ from <popover content="e.g. a description of the requirements written in prose">traditional requirements specifications</popover> mainly in the level of detail.** User stories should only provide enough details to make a reasonably low risk estimate of how long the user story will take to implement. When the time comes to implement the user story, the developers will meet with the customer face-to-face  to work out a more detailed description of the requirements. %%[<trigger for="modal:xp-user-stories" trigger="click">more...</trigger>]%%

**User stories can capture <trigger trigger="click" for="modal:userStoriesUsage-nfr">non-functional requirements</trigger> too** because even NFRs must benefit some stakeholder.

<modal large header="Textbook {{ icon_embedding }}" id="modal:userStoriesUsage-nfr">
  <include src="../../../requirements/nonFunctionalRequirements/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

{{ icon_example }} An example of a NFR captured as a user story:

As a | I want to | so that
-----|-----------|--------
impatient user | to be able experience reasonable response time from the website while up to 1000 concurrent users are using it | I can use the app even when the traffic is at the maximum expected level

</box>

<div id="usageTips">

Given their lightweight nature, **user stories are quite handy for recording requirements during early stages of requirements gathering**.

<box>

#### A recipe for brainstorming user stories

Given below is a possible _recipe_ you can take when using user stories for early stages of requirement gathering.

****Step 1:**** **Define the _target user_ as a _persona_:**

Decide your target user's profile (e.g. a student, office worker, programmer, sales person) and work patterns (e.g. Does he work in groups or alone? Does he share his computer with others?). A clear understanding of the target user will help when deciding the importance of a user story. You can even narrow it down to a _persona_. Here is an example:

> Jean is a university student studying in a non-IT field. She interacts with a lot of people due to her involvement in university clubs/societies. ...


****Step 2:**** **Define the _problem scope_:**

Decide that exact problem you are going to solve for the target user. It is also useful to specify what related problems it will _not_ solve so that the exact scope is clear.

> ProductX helps Jean keep track of all her school contacts. It does not cover communicating with contacts.


****Step 3:**** **List _scenarios_ to form a _narrative_:**

Think of the various likely scenarios your target user is likely to go through as she uses your app. Following a chronological sequence as if you are telling a story might be helpful.

<blockquote>

**A. First use:**
1. Jean get to know about ProductX. She downloads it and launches it to check out what it can do.
1. After playing around with the product for a bit, Jean wants to start using it for real.
1. ...

**B. Second use:** (Jean is still a beginner)
1. Jean launches ProductX. She wants to find ...
1. ...

**C. 10th use:** (Jean is a little bit familiar with the app)
1. ...


**D. 100th use:** (Jean is an expert user)
1. Jean launches the app and does ... and ... followed by ... as per her usual habit.
1. Jean feels some of the data in the app are no longer needed. She wants to get rid of them to reduce clutter.
1.
</blockquote>

More examples that might apply to some products:

<blockquote>

* Jean uses the app at the start of the day to ...
* Jean uses the app before going to sleep to ...
* Jean doesn't use app for a while because she was on a three-month training programme. She is now back at work and wants to resume her daily use of the app.
* Jean moves to another company. Some of her clients come with her but some don't.
* Jean starts freelancing in her spare time. She wants to keep her free-lancing clients separate from her other clients.
</blockquote>


****Step 4:**** **List the user stories to supports the scenarios:**

Based on the scenarios, decide user stories you need to support each. For example, based on the scenario 'A. First use', you might have user stories such as these:

<blockquote>

* As a potential user exploring the app, I can see the app populated with sample data, so that I can easily see how the app will look like when it is in use.
* As a user ready to start using the app, I can purge all current data, so that I can get rid of sample/experimental data I used for exploring the app.
</blockquote>

To give another example, based on the scenario 'D. 100th use', you might have user stories such as these:

<blockquote>

* As an expert user, I can create shortcuts for tasks, so that I can save time on frequently performed tasks.
* As a long-time user, I can archive/hide unused data, so that I am not distracted by irrelevant data.
</blockquote>

==Do not 'evaluate' the value of user stories while brainstorming==. %%Reason: an important aspect of brainstorming is not judging the ideas generated.%%

****Other tips:****

* **Don't be too hasty to discard 'unusual' user stories:**
  Those might make your product unique and stand out from the rest, at least for the target users.
* **Don't go into too much details:**  
  For example, consider this user story: `As a user, I want to see a list of tasks that needs my attention most at the present time, so that I pay attention to them first.`<br> 
  When discussing this user story, don't worry about what tasks should be considered _needs my attention most at the present time_. Those details can be worked out later.
* **Don't be biased by preconceived product ideas:**  
  When you are at the stage of identifying user needs, clear your mind of ideas you have about what your end product will look like. That is, don't try to reverse-engineer a preconceived product idea into user stories.
* **Don't discuss implementation details or whether you are actually going to implement it:**  
  When gathering requirements, your decision is whether the user's need is important enough for you to want to fulfil it. Implementation details can be discussed later. If a user story turns out to be too difficult to implement later, you can always omit it from the implementation plan. 
   
</box>

</div>

While use cases can be recorded on <tooltip content="e.g. index cards or sticky notes">physical paper</tooltip> in the initial stages, an online tool is more suitable for longer-term management of user stories, especially if the team is not <tooltip content="physically in the same location">co-located</tooltip>.

<span class="non-printable">
<panel header="**Tool Examples**: How to use some example online tools to manage user stories" alt="tool examples">
  <include src="tools.md" />
</panel>
</span>

<modal id="modal:xp-user-stories" header=":bookmark: User stories vs traditional requirement specifications, according to XP">

<include src="../../../common/popOvers.md#xp" inline /> uses User stories to capture requirements.

[This page](http://www.extremeprogramming.org/rules/userstories.html) in their website explains the difference between user stories and traditional requirements.

>One of the biggest misunderstandings with user stories is how they differ from traditional requirements specifications. The biggest difference is in the level of detail. User stories should only provide enough detail to make a reasonably low risk estimate of how long the story will take to implement. When the time comes to implement the story developers will go to the customer and receive a detailed description of the requirements face to face.

</modal>

</div>

<div id="extras">
  <include src="resources.md" />
</div>