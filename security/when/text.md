{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can integrate security into the software lifecycle</span>
<span id="title">When</span>

<div id="body">

**Security work should accompany every stage of development because a late safeguard cannot reliably repair an insecure assumption made earlier.**

| Stage | Minimum security action |
|---|---|
| Requirements | Identify sensitive assets and state important security requirements and misuse cases. |
| Design | Draw trust boundaries, perform lightweight threat modeling, minimize privileges and exposed interfaces, and choose established mechanisms. |
| Implementation | Validate untrusted data, encode output for its context, enforce authorization, protect secrets, use safe APIs, and review dependencies. |
| Code review and testing | Review security-sensitive paths and test misuse cases, trust boundaries, and permissions. |
| Integration and release | Check dependencies and secrets, use secure configuration and defaults, and remove development credentials and diagnostics. |
| Operation and maintenance | Monitor important failures, update relevant components, remove unused access, and prepare to contain and recover from incidents. |

The table is a timing guide. Apply the threat-modeling, implementation, and verification practices while the relevant decisions are still easy to change, and continue maintaining the controls after release.

**State security needs as testable properties rather than vague wishes.**
{% call show_example() %}
"The system must be secure" gives the team no direction. "Only an event's organizers can view its attendee list" names the asset (the attendee list), the property to preserve (confidentiality), and who must not be able to reach it (anyone who is not an organizer of that event). A corresponding misuse case is "a student changes an event identifier to download another event's list."
{% endcall %}

**Revisit the security analysis whenever an important assumption changes.** Common triggers include:

* a new kind of user or permission;
* new sensitive data;
* a new external service or dependency;
* a new interface or deployment environment;
* a changed trust boundary; or
* information about a newly discovered relevant vulnerability.

##### When a security problem is discovered

**What to do first depends on whose system it is.** In a system your team owns, contain the harm before treating the problem as an ordinary bug. In someone else's, report it first and contain only what you are authorized to touch. Beginning engineers are not expected to lead a major incident response alone; they are expected to recognize that a suspected security problem needs prompt, careful escalation rather than casual discussion in a public issue.

Depending on the situation, containment might mean disabling a vulnerable feature, revoking an exposed credential, restricting access, or taking an affected service temporarily offline.

**Stop exploring once you believe you have found a real problem.** Probing further can cause additional damage and makes the record harder to interpret afterwards.

**Preserve what someone will need in order to understand the problem:** the time, what you did, and the smallest reproduction that demonstrates it. Capture the reproduction before revoking or disabling anything, when capturing and containing are both possible, because containing the harm can destroy the record of it. Do not copy out the sensitive data you were able to reach, because that spreads the exposure you are reporting.

**Report through a private channel rather than a public one.** Use the project's security contact or reporting process where one exists, and course staff otherwise. If nobody acknowledges the report, follow this fallback order rather than wait indefinitely or raise it in public: the project's documented security policy, then its maintainers or the repository owner, then the hosting platform's own vulnerability reporting mechanism. For coursework, course staff are the fallback.

Then correct the cause, check for related weaknesses, verify the fix, and recover normal service carefully. **Withholding details until the people responsible have had a reasonable chance to act is called _coordinated disclosure_**, and many projects publish a policy describing how they expect it to work.

</div>

<div id="extras">
</div>
