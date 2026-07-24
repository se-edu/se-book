<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain why security is part of software engineering</span>

<span id="title">Introduction</span>

<div id="body">

Software now handles personal information, money, communication, transportation, education, health, and many other parts of daily life. A defect in such software can do more than inconvenience a user: it can expose information, allow unauthorized actions, or make an important service unavailable.

**Security is therefore part of software engineering, not a specialist activity added after the software is finished.** Every software engineer needs enough security knowledge to recognize common risks, make safer design and implementation decisions, and know when expert help is needed.

This chapter focuses on a small set of ideas that apply broadly, although many examples use a web application because it makes users, permissions, and trust boundaries easy to see. It does not attempt to teach every kind of attack. Instead, it develops one reusable method:

1. **Identify the assets and stakeholders.**
1. **Sketch the system and its trust boundaries.**
1. **Identify how the assets could be harmed or misused.**
1. **Prioritize the risks.**
1. **Choose controls that reduce those risks.**
1. **Verify the controls, and revisit the analysis when the system changes.**

<box type="info" seamless>

{{ icon_example }} **Running example:** We will use a university event-registration system throughout the chapter. Students can view events and register themselves. Organizers can create events and view attendee lists. The system stores names, email addresses, registrations, and organizer privileges.

</box>

</div>

<div id="extras">
</div>
