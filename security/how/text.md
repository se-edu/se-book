{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can identify and reduce basic security risks</span>
<span id="title">How</span>

<div id="body">

**Secure software results from combining threat modeling, secure design, careful implementation, and verification.** It cannot be obtained by applying one tool or adding one library.

##### A. Use lightweight threat modeling

**{{ show_term("Threat modeling") }} is a structured way to ask what needs protection, what could go wrong, and what should be done about it.** It can be performed with a whiteboard, a short document, or comments on a design diagram. The value comes from the questions, not the format.

Use the following six-step method:

<panel header="###### 1. Identify assets and stakeholders" expanded>

**Start with what matters, not with a list of attacks.** Ask:

* What information does the system hold?
* What actions can it perform?
* Which services must remain available?
* Who benefits if these work correctly?
* Who could be harmed if they do not?

{% call show_example() %}
For the event system, assets include attendee details, registration records, organizer privileges, and availability during sign-up periods.
{% endcall %}
</panel>
<panel header="###### 2. Sketch the system and its trust boundaries" expanded>

**A _trust boundary_ is a place where data or control passes between parts with different levels of trust.** Examples include a browser calling a server, a server reading an uploaded file, an application querying a database, and a build process downloading a dependency.

{% call show_example() %}
A simple sketch of the event system is enough:

```text
student's browser
        |
        | untrusted request
        v
registration server -----> email service
        |
        | database query
        v
registration database
```
{% endcall %}

Do not label the entire "inside" of a system as trusted without thought. A database can contain malicious text entered earlier by a user. A partner service can be unavailable or compromised. A configuration file can be edited by someone with different privileges. **Trust should be earned at each boundary, not inherited forever from where data was first seen.**
</panel>
<panel header="###### 3. Identify plausible threats" expanded>


**Ask how each important asset could be read, changed, impersonated, exhausted, or bypassed by someone who should not be able to do so.** Consider both outsiders and legitimate users exceeding their authority.

{% call show_example() %}
For the attendee list:

* Can an anonymous user obtain it?
* Can a student or an organizer of a different event obtain it?
* Can someone bypass a permission check by changing an identifier?
* Can an attacker cause the list to be sent to an unintended destination?
* Can a large number of requests make the feature unavailable?
{% endcall %}

STRIDE is one optional checklist for teams that want named categories: spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. It can help prompt questions, but it is not necessary for a useful threat model.
</panel>
<panel header="###### 4. Estimate and prioritize risks" expanded>

**Spend effort where plausible threats could cause serious harm.** Exact numerical estimates are rarely available, especially early in a project. A simple scale such as low, medium, and high can still support useful decisions if the team records its assumptions.

Estimate likelihood by considering whether the feature is reachable, whether exploitation requires special access, and how easily the attack can be repeated or automated. Estimate impact by considering the sensitivity and amount of affected data, the privileges at risk, the number of people affected, whether the damage is reversible, and how long a service could be unavailable.

Do not spend most of the security budget on an exciting but implausible attack while ignoring ordinary permission checks and exposed credentials.
</panel>
<panel header="###### 5. Choose controls" expanded>

**Prefer controls that prevent a problem, while preparing to detect, contain, and recover from failures that prevention misses.**

{% call show_example() %}
For an attendee list, controls might include:

* checking the requester's permission before returning attendee data;
* returning only fields the organizer needs;
* recording access to sensitive lists;
* limiting unusually frequent requests; and
* allowing organizer access to be revoked.
{% endcall %}

One control can address several threats, and one threat may need several controls.
</panel>
<panel header="###### 6. Choose controls" expanded>

**A control is only a claim until it has been reviewed or tested.** Verify the paths an attacker would try, not only the intended path.

{% call show_example() %}
For the attendee list, test the correct organizer as well as an anonymous user, an attendee, an unrelated organizer, a malformed event identifier, and a user whose access has been revoked.
{% endcall %}

Record the assumptions on which the controls depend. Keep the threat model near the design or feature it describes so that it can be revisited when the system or those assumptions change.
</panel>

<p/>

<box type="info" seamless>

**A concise statement can connect an asset, security goal, adversary, and assumption**:

> `<Asset>` should retain `<security property>` against `<adversary or misuse>` under `<relevant assumptions>`.


{{ label_example }} %%Attendee email addresses should remain confidential from other students, even if they change identifiers in a request.%%

This statement is more useful than "the attendee list must be secure" because it can guide both design and testing.
</box>

---------------------------------------------------------------------

##### B. Apply secure design principles

Apply the following core three design principles:

<panel header="###### P1: Give only the permissions that are needed" expanded>

**_Least privilege_ means giving each user, component, and process only the permissions it needs for its current job.**
{% call show_example() %}
An event organizer needs access to their own event's attendee list, not every event's list. A component that sends email does not need permission to change registrations. A build job that only reads source code does not need production database credentials.
{% endcall %}

Smaller privileges reduce both the chance of misuse and the damage caused by a compromised component.
</panel>

<panel header="###### P2: Deny unless access has been allowed" expanded>

**A _secure default_ denies access unless a rule explicitly permits it.** When a new action, role, or resource is added, it should begin inaccessible rather than accidentally available to everyone.

{% call show_example() %}
Prefer:

```text
if user may view this event:
    return attendee list
otherwise:
    deny
```

over a growing collection of special cases that attempt to identify everyone who should be denied.
{% endcall %}

An allow rule is usually easier to review than an incomplete list of forbidden cases.
</panel>

<panel header="###### P3: Expose less" expanded>

**Minimizing the _attack surface_ means reducing the features, interfaces, data, permissions, and dependencies available to be attacked.** Remove unused endpoints, default accounts, debug interfaces, old code paths, unnecessary data fields, and unneeded packages.

Every extra part has a maintenance cost even if it currently appears harmless. A feature that does not exist does not need to be configured, patched, monitored, or defended.
</panel>
<p/>


The following related principles are useful too:

* **Use _defense in depth_ around important assets.** For example, combine an application permission check with restricted database permissions and useful access logging. A second control can limit damage if the first fails.
* **Fail securely.** An error should not grant access, skip validation, or reveal sensitive internals. When the system is unsure whether an action is permitted, denial is usually safer than permission.
* **Use established security mechanisms.** Authentication, password storage, encryption, and session management are easy to get subtly wrong. Prefer maintained platform facilities and well-reviewed libraries over inventing a scheme.

---------------------------------------------------------------------

##### C. Handle untrusted data safely

External data includes more than text typed into a form. Requests, file uploads, command-line arguments, environment variables, configuration, database records, messages, dependency metadata, and responses from other services can all cross trust boundaries.

**Handle untrusted data in three different places: when it enters, when it is used, and when it leaves for another context.**

###### C1. Validate at the boundary

**Validation checks whether data is acceptable for its intended purpose.** Check its type, form, length, range, and meaning as early as practical.

{% call show_example() %}
An event identifier might need to be a positive integer referring to an existing event. An event name might need a reasonable maximum length. A start time might need to precede an end time.
{% endcall %}

Prefer an _allowlist_ that describes acceptable data over a list of known-bad strings. Attackers can often express the same harmful meaning in forms a denylist did not anticipate.

Client-side validation can improve usability, but it is not a security boundary because a client can be modified or bypassed. **Validation that protects server-side assets must also occur on the trusted side of the boundary.**

###### C2. Keep data separate from commands

**Do not construct executable commands by concatenating untrusted strings.** When an interpreter cannot distinguish data from instructions, an attacker may be able to change what gets executed.

{% call show_example() %}
This query construction is unsafe:

```text
query = "SELECT * FROM registrations WHERE event_id = " + eventId
database.execute(query)
```

Use an API that sends the instruction and the data separately:

```text
query = "SELECT * FROM registrations WHERE event_id = ?"
database.execute(query, [eventId])
```
{% endcall %}

The same principle applies to operating-system commands, templates, directory services, and other interpreters. Prefer APIs that accept structured arguments. Escaping a manually assembled command is usually harder to get right.

###### C3. Encode for the output context

**Before placing untrusted data into structured output, encode it for that specific destination context.** Text that is harmless in one context may become executable in another.

{% call show_example() %}
Suppose an organizer enters this as an event name:

```text
<script>performUnwantedAction()</script>
```

Rendering it as raw HTML could cause the browser to execute it:

```text
page.setRawHtml(event.name)    // unsafe for untrusted text
```

Rendering it through an ordinary text API preserves the visible characters without treating them as markup:

```text
page.setText(event.name)       // preferred for plain text
```
{% endcall %}

HTML text, HTML attributes, URLs, scripts, styles, and other destinations have different encoding rules. Prefer framework features that encode safely by default, and avoid raw-output features unless the content has a trusted origin and a clear reason to contain markup.

**Input validation does not replace output encoding.** A valid event name can legitimately contain characters with special meaning in HTML. Parameterized queries do not replace output encoding either; the two controls protect different boundaries.

---------------------------------------------------------------------

##### D. Authenticate identity and authorize every protected action

**Derive identity from an authentication mechanism the trusted part of the system can verify.** Do not trust a user identifier, role, or `isAdmin` flag merely because the client sent it.

**After identifying the requester, authorize the particular action on the particular resource.** "This user is an organizer" may still be insufficient; the relevant rule might be "this user is an organizer of this event."

{% call show_example() %}
A safer attendee-list operation has this shape:

```text
function getAttendees(request, session):
    user = authenticatedUserFrom(session)
    event = findEvent(request.eventId)

    if event does not exist:
        return notFound

    if user is not an organizer of event:
        return denied

    return only the attendee fields this organizer needs
```
{% endcall %}

Authorization belongs on the trusted side. A disabled button, hidden menu item, or client-side route guard is a usability feature, not sufficient protection.

**Apply the same authorization rule to every path to the action.** If an operation is available through a web page, mobile endpoint, import feature, and administrator tool, a forgotten path can bypass a check applied only in the user interface.

---------------------------------------------------------------------

##### E. Protect secrets, credentials, and sensitive data

**A secret should be available only to the people and components that need it.** API keys, private keys, access tokens, and database passwords should not be hard-coded, committed to version control, pasted into AI prompts, included in screenshots, or written to logs.

Use the deployment environment's supported mechanism for protected configuration or secret storage. Give each credential the smallest useful permissions, use different credentials for different environments, and make replacement possible. If a secret is exposed, remove it from the code and revoke or rotate it; deleting the visible line does not make the old value secret again.

**Do not collect or return sensitive data merely because it is convenient.** Select only the attendee fields needed by the feature, restrict who can access them, and remove them when there is no longer a reason to retain them.

**Passwords require specialized handling.** Never store plaintext passwords or protect them using reversible encryption. Prefer an established authentication provider. If the system must store password verifiers itself, use a vetted password-hashing facility designed for that purpose, together with its current recommended configuration. Do not invent a password-storage scheme.

**Errors should help legitimate users without teaching an attacker about the system.** Avoid returning stack traces, queries, filesystem paths, credentials, or private records. Keep detailed diagnostics in appropriately protected logs, and remember that logs themselves can contain sensitive data.

---------------------------------------------------------------------

##### F. Treat dependencies as part of the product

**Reused code runs with the permissions of your software and therefore becomes part of its security.** This includes libraries, frameworks, build plugins, container images, development tools, and transitive dependencies pulled in by other packages.

Before adding a dependency, ask:

* Is it from the intended project and a trustworthy source?
* Is it maintained and suitable for this use?
* Does the platform already provide the small capability we need?
* What other packages and permissions will it add?
* Can the team monitor and update it?

Keep the dependency set small, record versions in the normal way for the ecosystem, and respond to security advisories according to actual exposure and impact. Do not blindly update everything without testing, but do not leave a known relevant vulnerability unassessed.

---------------------------------------------------------------------

##### G. Verify security-relevant behavior

**Security verification needs both tools and human reasoning.** A tool can recognize certain patterns, but it does not fully understand the system's assets, stakeholders, permissions, and assumptions.

Focus review on security-sensitive boundaries such as:

* authentication and authorization;
* untrusted input and rendered output;
* queries, commands, files, and external services;
* secrets, sensitive data, errors, and logs; and
* dependencies, permissions, and configuration.

Ask the author to explain the security rule and how the code enforces it. Code that no reviewer can explain is not ready merely because it looks polished.

**Turn important threat statements into negative tests and abuse cases.**
{% call show_example() %}
If a requirement says only an event's organizer can see its attendees, test the correct organizer, an unrelated organizer, an attendee, an anonymous user, and a revoked organizer.
{% endcall %}

Also test boundaries such as empty input, maximum lengths, unexpected encodings, repeated requests, missing resources, and surprising operation orders. The aim is to challenge the assumptions on which the control depends, not merely to generate many random tests.

Compilers, linters, static analysis, secret scanning, dependency analysis, and dynamic testing can catch different kinds of weakness. **A clean scan does not prove that software is secure.** It means only that the tool did not report a problem within the checks it performed.

Run ordinary regression tests after a security change. A control that breaks required behavior is not a complete solution, and a functional fix can accidentally weaken a security property elsewhere.

</div>

<div id="extras">
</div>
