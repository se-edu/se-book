<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Specifying Requirements &rarr; User Stories &rarr;</div>

<div id="title">

#### Details :two:

</div>

<div id="body">

**The `{benefit}` can be omitted** if it is obvious.

<tip-box>

As a user, I can login to the system ~~so that I can access my data~~

</tip-box>

<tip-box type="warning">

It is recommended to confirm there is a concrete benefit even if you omit it from the user story. If not, we could end up adding features that have no real benefit.

</tip-box>

We can add more characteristics to the `{user role}` to provide more context to the user story.

<tip-box>

* As a ==forgetful== user, I can view a password hint, so that I can recall my password.
* As an ==expert== user, I can tweak the underlying formatting tags of the document, so that I can format the document exactly as I need.

</tip-box>

**We can write user stories at various levels**. High-level user stories, called _**epics**_ (or _themes_) cover bigger functionality. We can then break down these epics to multiple user stories of normal size.

<tip-box>

[Epic] As a lecturer, I can monitor student participation levels
  * As a lecturer, I can view the forum post count of each student
    so that I can identify the activity level of students in the forum
  * As a lecturer, I can view webcast view records of each student
    so that I can identify the students who did not view webcasts
  * As a lecturer, I can view file download statistics of each student
    so that I can identify the students who do not download lecture materials

</tip-box>

**We can add _conditions of satisfaction_ to a user story** to specify things that need to be true for the user story implementation to be accepted as ‘done’.

<tip-box>

* As a lecturer, I can view the forum post count of each student so that I can identify the activity level of students in the forum.<br/>
  Conditions:<br/>
  [ ] Separate post count for each forum should be shown<br/>
  [ ] Total post count of a student should be shown<br/>
  [ ] The list should be sortable by student name and post count

</tip-box>

**Other useful info that can be added to a user story** includes (but not limited to)

* Priority: how important the user story is
* Size: the estimated effort to implement the user story
* Urgency: how soon the feature is needed

<panel header="%%More examples :zero:%%" type="seamless">

User stories for a travel website (credit: Mike Cohen)

<tip-box>

* As a registered user, I am required to log in so that I can access the system
* As a forgetful user, I can request a password reminder so that I can log in if I forget mine
* [Epic] As a user, I can cancel a reservation
  * As a premium site member, I can cancel a reservation up to the last minute
  * As a non-premium member, I can cancel up to 24 hours in advance
  * As a member, I am emailed a conﬁrmation of any cancelled reservation
* [Epic] As a frequent ﬂyer, I want to book a trip
  * As a frequent ﬂyer, I want to book a trip using miles
  * As a frequent ﬂyer, I want to rebook a trip I take often
  * As a frequent ﬂyer, I want to request an upgrade
  * As a frequent ﬂyer, I want to see if my upgrade cleared

</tip-box>

</panel>

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
