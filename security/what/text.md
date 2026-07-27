{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can explain software security using basic security concepts</span>
<span id="title">What</span>

<div id="body">

Software now handles personal information, money, communication, transportation, education, health, and many other parts of daily life. A defect in such software can do more than inconvenience a user: it can expose information, allow unauthorized actions, or make an important service unavailable.

**Security is therefore part of software engineering, not a specialist activity added after the software is finished.** Every software engineer needs enough security knowledge to recognize common risks, make safer design and implementation decisions, and know when expert help is needed.

This textbook focuses on a small set of ideas that apply broadly. It does not attempt to teach every kind of attack. Instead, it develops one reusable method.

**Software security is the protection of a system and its stakeholders from misuse and harm, whether deliberate or accidental.** A conventional defect might be triggered accidentally. In contrast, a security weakness may be deliberately searched for and exploited by someone who can choose the inputs, actions, timing, and sequence most favorable to an attack. **Security analysis assumes that deliberate case**, because an attacker who chooses the worst inputs, timing, and sequence exercises a feature far harder than accident usually does. **Accidental causes still need attention of their own**, because a misconfiguration, an operator mistake, or a corrupted record may never resemble an attack. This difference changes how engineers must think.

{% call show_example() %}
We will use a university event-registration system as the running example throughout the related topics of this textbook. Students can view events and register themselves. Organizers can create events and view attendee lists. The system stores names, email addresses, registrations, and organizer privileges.

Testing this event registration system for whether an ordinary user can register for an event is necessary, but it is not enough. We must also ask whether one student can view another student's registration, whether a non-organizer can obtain an attendee list, and whether an attacker can submit enough costly requests to make registration unavailable to everyone else.
{% endcall %}

##### The security mindset

**The _security mindset_ means questioning assumptions and considering how a feature could be deliberately misused.** When implementing a feature, ask both:

* Does the intended workflow work?
* What are we trusting, and what could someone do if that trust is misplaced?

{% call show_example() %}
Suppose a browser sends the following data when a user requests an attendee list:
```text
eventId = 42
isOrganizer = true
```
The value `eventId` identifies the requested event. However, `isOrganizer` is merely a claim made by software under the user's control. Hiding the attendee-list button from ordinary users does not stop them from constructing the request themselves. A security-minded engineer treats the flag as untrusted and asks where the user's authority is established.
{% endcall %}

**The security mindset is not the belief that every user is malicious.** It is the recognition that software must remain safe when inputs are mistaken, unusual, corrupted, or deliberately hostile. The same controls often protect against both accidents and attacks.

##### Three basic security goals

**Security is broader than secrecy.** Protecting information from disclosure matters, but so do preventing unauthorized changes, preserving service availability, and ensuring that actions are performed by the right people.

**Three of these are security _properties_, together called the {{ show_term("CIA triad") }}.** Establishing that actions are performed by the right people is not a fourth property; it is a mechanism used to protect all three. **The triad gives three useful questions to ask:**

* **_Confidentiality_ asks who is allowed to see the information.**<br>
  {{ label_example }} %%An attendee's email address should not be disclosed to another student without a valid reason and permission.%% { text="C" t-size="15px" t-class="badge rounded-pill my-1 bg-info-subtle text-dark font-monospace" }

* **_Integrity_ asks whether information and behavior have remained correct, complete, and free from improper change or destruction.** Authorization is one control used to preserve it.<br>
  {{ label_example }} %%A student should not be able to cancel another student's registration or grant themselves organizer privileges.%% { text="I" t-size="15px" t-class="badge rounded-pill my-1 bg-info-subtle text-dark font-monospace" }

* **_Availability_ asks whether authorized users can obtain the service when they need it.**<br>
  {{ label_example }} %%The registration service should remain usable during a popular event's sign-up period.%% { text="A" t-size="15px" t-class="badge rounded-pill my-1 bg-info-subtle text-dark font-monospace" }

A single incident can affect more than one goal.<br>
{{ label_example }} %%A compromised organizer account might expose attendee details, alter registrations, and delete events.%%

##### A small vocabulary

The following terms let a team discuss security precisely:

* **{{ show_term("Asset") }}: something worth protecting.**<br>
  {{ label_example }} %%Assets include data, account privileges, service availability, money, physical resources, and reputation.%%
* **{{ show_term("Stakeholder") }}: a person or group that can benefit or suffer from the system's security decisions.**<br>
  {{ label_example }} %%Students, organizers, system operators, and the university are stakeholders in the event system.%%
* **{{ show_term("Threat") }}: a possible way an asset could be harmed.**<br>
  {{ label_example }} %%A student reading another student's registration is a threat to confidentiality.%%
* **{{ show_term("Vulnerability") }}: a weakness that allows a threat to be realized.**<br>
  {{ label_example }} %%Failing to check which student owns a registration is a vulnerability.%%
* **{{ show_term("Attack") }}: an attempt to exploit a vulnerability.**<br>
  {{ label_example }} %%Changing a registration identifier in a request to retrieve someone else's record is an attack.%%
* **{{ show_term("Control") }} or {{ show_term("Mitigation") }}: reduces the likelihood or impact of a threat.**<br>
  {{ label_example }} %%Checking ownership before returning a registration is a control.%%
* **{{ show_term("Authentication") }}: establishing which identity is making a request.**<br>
  {{ label_example }} %%Signing in as a particular student.%%
* **{{ show_term("Authorization") }}: deciding whether that identity may perform a specific action on a specific resource.**<br>
  {{ label_example }} %%Checking that this student owns the registration they asked to see.%%
* **{{ show_term("Risk") }}: combines the likelihood of a threat with the seriousness of its impact.**
* **{{ show_term("Misuse case") }}: a short scenario describing how someone could deliberately use the system to cause harm.**<br>
  {{ label_example }} %%A student changes an event identifier to download another event's list.%%

These terms describe different parts of one situation. A valuable database is not a vulnerability. A possible theft is not an attack until someone attempts it. A control can reduce risk without eliminating it.

##### Security and privacy

**Privacy is related to, but distinct from, security.** Security asks whether information and capabilities are protected from unauthorized use. Privacy also asks whether collecting, using, retaining, and sharing personal information is appropriate in the first place.

**Data that is never collected cannot later be leaked by that system.** Strong access control cannot justify collecting data the system does not need.<br>
{{ label_example }} %%The event system might need an attendee's name and contact address, but probably not their date of birth.%%

##### Security is risk management

**Perfect security is not achievable; secure engineering is risk management.** A useful security claim must say what is being protected, from whom, under what assumptions, and to what degree.

{% call show_example() %}
Encrypting database backups, with keys held separately, can reduce the harm caused by someone stealing one. It cannot protect attendee data from an organizer who is legitimately permitted to view it. A rate limit can make an automated denial-of-service attack more expensive, but a sufficiently large attack may still overwhelm the system.
{% endcall %}

**Security also has costs.** A control can consume development time, reduce performance, make a system harder to use, or create new failure modes. The goal is not to add every possible control. It is to identify important risks and choose controls whose benefits justify their costs.

##### Some names you will encounter

You do not need to memorize a catalog of vulnerabilities, but a few common labels are useful:

* **_Broken access control_ allows someone to perform an action or access data they are not authorized to use.**
* **{{  show_term("Injection") }} occurs when a system interprets untrusted data as code or commands.**
* **{{  show_term("Cross-site scripting (XSS)") }} occurs when a web application causes untrusted content to execute as a script in another user's browser.**
* **_Vulnerable or outdated components_ expose a system to known weaknesses in reused software.**

**Each label has a matching engineering practice, and this chapter covers all four:** enforcing authorization on every protected action, keeping untrusted data separate from commands, encoding output for the context it is placed into, and treating dependencies as part of the product.

The [OWASP Top 10](https://owasp.org/www-project-top-ten/) is a widely used awareness list for web-application risks. It is a useful pointer for further study, but it is not a complete model of software security and should not replace thinking about the specific system in front of you.

</div>

<div id="extras">
</div>
