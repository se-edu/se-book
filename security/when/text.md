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
| Code review and testing | Review security-sensitive paths and test abuse cases, trust boundaries, and permissions. |
| Integration and release | Check dependencies and secrets, use secure configuration and defaults, and remove development credentials and diagnostics. |
| Operation and maintenance | Monitor important failures, update relevant components, remove unused access, and prepare to contain and recover from incidents. |

The table is a timing guide. Apply the threat-modeling, implementation, and verification practices while the relevant decisions are still easy to change, and continue maintaining the controls after release.

**State security needs as testable properties rather than vague wishes.**
{% call show_example() %}
"The system must be secure" gives the team no direction. "Only an event's organizers can view its attendee list" identifies the asset, permitted actors, and protected action. A corresponding misuse case is "a student changes an event identifier to download another event's list."
{% endcall %}

**Revisit the security analysis whenever an important assumption changes.** Common triggers include:

* a new kind of user or permission;
* new sensitive data;
* a new external service or dependency;
* a new interface or deployment environment;
* a changed trust boundary; or
* information about a newly discovered relevant vulnerability.

##### When a security problem is discovered

**Contain the harm before treating a security problem as an ordinary bug.** Depending on the situation, containment might mean disabling a vulnerable feature, revoking an exposed credential, restricting access, or taking an affected service temporarily offline.

Preserve useful evidence, notify the appropriate project owner, correct the cause, check for related weaknesses, verify the fix, and recover normal service carefully. Do not publicize details that would make exploitation easier before the people responsible have had a reasonable chance to act.

Beginning engineers are not expected to lead a major incident response alone. They are expected to recognize that a suspected security problem needs prompt, careful escalation rather than casual discussion in a public issue.

</div>

<div id="extras">
</div>
