<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can write more detailed user stories</span>

<span id="title">Details</span>

<div id="body">

**The `{benefit}` can be omitted** if it is obvious.

<box>
<div class="text-monospace">

As a user, I can login to the system ~~so that I can access my data~~
</div>
</box>

{{ icon_tip }} It is recommended to confirm there is a concrete benefit even if you omit it from the user story. If not, you could end up adding features that have no real benefit.

You can add more characteristics to the `{user role}` to provide more context to the user story.

<box>
<div class="text-monospace">

* As a ==forgetful== user, I can view a password hint, so that I can recall my password.
* As an ==expert== user, I can tweak the underlying formatting tags of the document, so that I can format the document exactly as I need.
</div>
</box>

**You can write user stories at various levels**. High-level user stories, called ==_epics_== (or _themes_) cover bigger functionality. You can then break down these epics to multiple user stories of normal size.

<box>
<div class="text-monospace">

[Epic] As a lecturer, I can monitor student participation levels
* As a lecturer, I can view the forum post count of each student<br>
  so that I can identify the activity level of students in the forum
* As a lecturer, I can view webcast view records of each student<br>
  so that I can identify the students who did not view webcasts
* As a lecturer, I can view file download statistics of each student<br>
  so that I can identify the students who did not download lecture materials
</div>
</box>

**You can add _conditions of satisfaction_ to a user story** to specify things that need to be true for the user story implementation to be accepted as ‘done’.

<box>
<div class="text-monospace">

_As a_ lecturer, _I can_ view the forum post count of each student _so that_ I can identify the activity level of students in the forum.

Conditions:

:far-check-square: Separate post count for each forum should be shown<br>
:far-square: Total post count of a student should be shown<br>
:far-check-square: The list should be sortable by student name and post count
</div>
</box>

**Other useful info that can be added to a user story** includes (but not limited to)

* Priority: how important the user story is
* Size: the estimated effort to implement the user story
* Urgency: how soon the feature is needed

<span class="non-printable">
<panel minimized >
<span slot="header" class="card-title">{{ icon_example }} More examples {{ icon_extra }}</md></span>

User stories for a travel website (credit: Mike Cohen)

<box>
<div class="text-monospace">

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
</div>
</box>

</panel>
</span>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
