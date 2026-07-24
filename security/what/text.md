<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain software security using basic security concepts</span>

<span id="title">What</span>

<div id="body">

**Software security is the protection of a system and its stakeholders from intentional misuse and harm.** A conventional defect might be triggered accidentally. A security weakness may be deliberately searched for and exploited by someone who can choose the inputs, actions, timing, and sequence most favorable to an attack.

This difference changes how engineers must think. Testing whether an ordinary user can register for an event is necessary, but it is not enough. We must also ask whether one student can view another student's registration, whether a non-organizer can obtain an attendee list, and whether an attacker can submit enough costly requests to make registration unavailable to everyone else.

##### The security mindset

**The _security mindset_ means questioning assumptions and considering how a feature could be deliberately misused.** When implementing a feature, ask both:

* Does the intended workflow work?
* What are we trusting, and what could someone do if that trust is misplaced?

Suppose a browser sends the following data when a user requests an attendee list:

```text
eventId = 42
isOrganizer = true
```

The value `eventId` identifies the requested event. However, `isOrganizer` is merely a claim made by software under the user's control. Hiding the attendee-list button from ordinary users does not stop them from constructing the request themselves. A security-minded engineer treats the flag as untrusted and asks where the user's authority is established.

**The security mindset is not the belief that every user is malicious.** It is the recognition that software must remain safe when inputs are mistaken, unusual, corrupted, or deliberately hostile. The same controls often protect against both accidents and attacks.

##### Three basic security goals

Three questions provide a useful starting point:

* **_Confidentiality_ asks who is allowed to see the information.** An attendee's email address should not be disclosed to another student without a valid reason and permission.
* **_Integrity_ asks who is allowed to create, change, or delete information and behavior.** A student should not be able to cancel another student's registration or grant themselves organizer privileges.
* **_Availability_ asks whether authorized users can obtain the service when they need it.** The registration service should remain usable during a popular event's sign-up period.

These goals are often called the _CIA triad_. A single incident can affect more than one goal. For example, a compromised organizer account might expose attendee details, alter registrations, and delete events.

**Security is broader than secrecy.** Protecting information from disclosure matters, but so do preventing unauthorized changes, preserving service availability, and ensuring that actions are performed by the right people.

##### A small vocabulary

The following terms let a team discuss security precisely:

* **An _asset_ is something worth protecting.** Assets include data, account privileges, service availability, money, physical resources, and reputation.
* **A _stakeholder_ is a person or group that can benefit or suffer from the system's security decisions.** Students, organizers, system operators, and the university are stakeholders in the event system.
* **A _threat_ is a possible way an asset could be harmed.** A student reading another student's registration is a threat to confidentiality.
* **A _vulnerability_ is a weakness that makes a threat possible.** Failing to check which student owns a registration is a vulnerability.
* **An _attack_ is an attempt to exploit a vulnerability.** Changing a registration identifier in a request to retrieve someone else's record is an attack.
* **A _control_, or _mitigation_, reduces the likelihood or impact of a threat.** Checking ownership before returning a registration is a control.
* **_Risk_ combines the likelihood of a threat with the seriousness of its impact.**

These terms describe different parts of one situation. A valuable database is not a vulnerability. A possible theft is not an attack until someone attempts it. A control can reduce risk without eliminating it.

##### Security and privacy

**Privacy is related to, but distinct from, security.** Security asks whether information and capabilities are protected from unauthorized use. Privacy also asks whether collecting, using, retaining, and sharing personal information is appropriate in the first place.

Strong access control cannot justify collecting data the system does not need. The event system might need an attendee's name and contact address, but probably not their date of birth. **Data that is never collected cannot later be leaked by that system.**

##### Security is risk management

**Perfect security is not achievable; secure engineering is risk management.** A useful security claim must say what is being protected, from whom, under what assumptions, and to what degree.

For example, encrypting a database can reduce the harm caused by someone stealing a backup. It cannot protect attendee data from an organizer who is legitimately permitted to view it. A rate limit can make an automated denial-of-service attack more expensive, but a sufficiently large attack may still overwhelm the system.

Security also has costs. A control can consume development time, reduce performance, make a system harder to use, or create new failure modes. The goal is not to add every possible control. It is to identify important risks and choose controls whose benefits justify their costs.

##### Some names you will encounter

You do not need to memorize a catalog of vulnerabilities, but a few common labels are useful:

* **_Broken access control_ allows someone to perform an action or access data they are not authorized to use.**
* **_Injection_ occurs when a system interprets untrusted data as code or commands.**
* **_Cross-site scripting_ (XSS) occurs when a web application causes untrusted content to execute as a script in another user's browser.**
* **_Vulnerable or outdated components_ expose a system to known weaknesses in reused software.**

The [OWASP Top 10](https://owasp.org/www-project-top-ten/) is a widely used awareness list for web-application risks. It is a useful pointer for further study, but it is not a complete model of software security and should not replace thinking about the specific system in front of you.

</div>

<div id="extras">
</div>
