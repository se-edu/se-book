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

**A {{ show_term("trust boundary") }} is a place where data or control passes between parts with different levels of trust.** Examples include a browser calling a server, a server reading an uploaded file, an application querying a database, and a build process downloading a dependency.

{% call show_example() %}
A simple sketch of the event system is enough:

```text
student's browser
        |
        | untrusted request
= = = = | = = = = = = = = = = = = = = = = = =  trust boundary
        v
registration server - - - - -> email service
        |                  (boundary: another
        | database query     organization's service)
= = = = | = = = = = = = = = = = = = = = = = =  trust boundary
        v
registration database
```

Each marked line is a place where trust changes. Data or control
crossing one, in either direction, has to be treated according to the
trust level on the receiving side.
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

STRIDE is one optional checklist for teams that want named categories. It can help prompt questions, but it is not necessary for a useful threat model.

| Category | The question it prompts | In the event system |
|---|---|---|
| Spoofing | Can someone claim to be another user or service? | Signing in as an organizer with a stolen password |
| Tampering | Can someone change data or code they should not? | Editing a registration record through an unprotected endpoint |
| Repudiation | Can someone deny having acted, with no record to contradict them? | Deleting an event with nothing recorded about who did it |
| Information disclosure | Can someone read what they should not? | Reading another event's attendee list |
| Denial of service | Can someone make the service unusable? | Flooding registration during a popular sign-up period |
| Elevation of privilege | Can someone gain rights they were never granted? | A student making themselves an organizer |
</panel>
<panel header="###### 4. Estimate and prioritize risks" expanded>

**Spend effort where plausible threats could cause serious harm.** Exact numerical estimates are rarely available, especially early in a project. A simple scale such as low, medium, and high can still support useful decisions if the team records its assumptions.

Estimate likelihood by considering whether the feature is reachable, whether exploitation requires special access, and how easily the attack can be repeated or automated. Estimate impact by considering the sensitivity and amount of affected data, the privileges at risk, the number of people affected, whether the damage is reversible, and how long a service could be unavailable.

**Combine the two ratings using a rule the team agrees in advance**, so that two people analyzing the same threat reach the same answer:

| Likelihood ↓ / Impact → | Low | Medium | High |
|---|---|---|---|
| **High** | Medium | High | High |
| **Medium** | Low | Medium | High |
| **Low** | Low | Low | Medium |

The table is a starting point, not an answer. A team may override a cell, but it should record why.

{% call show_example() %}
Three event-system threats, rated on that scale with the assumption behind each rating recorded:

| Threat | Likelihood | Impact | Risk | Response |
|---|---|---|---|---|
| A student changes an identifier to read another event's attendee list | High: reachable by anyone signed in, and trivial to repeat | Medium: names and email addresses for one event | High | Check ownership on every request |
| A compromised organizer account grants organizer rights to others | Low: requires an account compromise first | High: privileges spread, and the change is hard to notice | Medium | Log privilege changes and allow them to be revoked |
| Automated sign-ups flood registration during a popular event | Medium: needs no account, and is easy to script | Medium: service lost during the window that matters, but recoverable | Medium | Limit how often one source can attempt registration |

The first threat is rated highest even though its impact is not the largest, because it needs no special access and can be repeated at will.
{% endcall %}

Do not spend most of the security budget on an exciting but implausible attack while ignoring ordinary permission checks and exposed credentials.
</panel>
<panel header="###### 5. Choose controls" expanded>

**Prefer controls that prevent a problem, while preparing to detect, contain, and recover from failures that prevention misses.** Prefer, too, a control people can use correctly: one that is routinely worked around protects nothing.

{% call show_example() %}
For an attendee list, controls might include:

* checking the requester's permission before returning attendee data;
* returning only fields the organizer needs;
* recording access to sensitive lists;
* limiting unusually frequent requests, which protects availability; and
* allowing organizer access to be revoked.
{% endcall %}

One control can address several threats, and one threat may need several controls.

**Not every risk gets a control.** A risk can be _reduced_ with a control, _removed_ by dropping the feature or the data that creates it, or _accepted_ as a cost of doing the useful thing. Accepting is a legitimate decision, but only when it is recorded with its reason, its owner, and the date when it will be reconsidered. An unrecorded acceptance is indistinguishable from an oversight.
</panel>
<panel header="###### 6. Verify controls and record assumptions" expanded>

**A control is only a claim until it has been reviewed or tested.** Verify the paths an attacker would try, not only the intended path.

{% call show_example() %}
For the attendee list, the correct organizer is the least informative case to test. The cases that decide whether the control works are the ones it is supposed to refuse.
{% endcall %}

Record the assumptions on which the controls depend. **Re-rate the risk with the controls in place**, using the same matrix, and record what remains and who accepts it. Keep the threat model near the design or feature it describes so that it can be revisited when the system or those assumptions change.
</panel>

<p/>

<box type="info" seamless>

**A concise statement can connect an asset, security goal, adversary, and assumption**:

> `<Asset>` should retain `<security property>` against `<adversary or misuse>` under `<relevant assumptions>`.


{{ label_example }} %%Attendee email addresses should remain confidential from other students, even if they change identifiers in a request.%%

This statement is more useful than "the attendee list must be secure" because it can guide both design and testing.
</box>

<p/>

**The last two steps carry most of the work, so the rest of this topic expands them.** Sections B to F cover how to choose and implement controls; section G covers how to verify them.

---------------------------------------------------------------------

##### B. Apply secure design principles

Apply the following six design principles:

<panel header="###### P1: Give only the permissions that are needed" expanded>

**_Least privilege_ means giving each user, component, and process only the permissions it needs for its current job.**
{% call show_example() %}
An event organizer needs access to their own event's attendee list, not every event's list. A component that sends email does not need permission to change registrations. A build job that only reads source code does not need production database credentials.
{% endcall %}

Smaller privileges reduce both the chance of misuse and the damage caused by a compromised component.
</panel>

<panel header="###### P2: Deny by default" expanded>

**_Deny by default_ means access is refused unless a rule explicitly permits it.** When a new action, role, or resource is added, it should begin inaccessible rather than accidentally available to everyone.

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

**Deny by default is the access-control case of a wider principle, _secure by default_: a system should be safe in the configuration it ships with.** The rest of that principle covers everything an installation starts with, such as no default accounts or passwords, debug and diagnostic interfaces turned off, network exposure limited to what is needed, and data retained no longer than necessary.
</panel>

<panel header="###### P3: Expose less" expanded>

**Minimizing the _attack surface_ means reducing the features, interfaces, data, permissions, and dependencies available to be attacked.** Remove unused endpoints, default accounts, debug interfaces, old code paths, unnecessary data fields, and unneeded packages.

Every extra part has a maintenance cost even if it currently appears harmless. A feature that does not exist does not need to be configured, patched, monitored, or defended.
</panel>

<panel header="###### P4: Put more than one control around important assets" expanded>

**_Defense in depth_ means protecting an important asset with several independent controls, so that one failure is not enough.**
{% call show_example() %}
An attendee list can be protected by an application permission check, by database permissions that let the reporting account read only the rows it needs, and by access logging that lets an unusual read be noticed when someone reviews it.
{% endcall %}

A second control limits or reveals the damage when the first is missing, misconfigured, or bypassed.
</panel>

<panel header="###### P5: Fail securely" expanded>

**When something goes wrong, the failure should deny rather than allow.** An error should not grant access, skip validation, or reveal sensitive internals.
{% call show_example() %}
If the check that answers "is this user an organizer of this event?" fails or times out, the attendee list request should be refused rather than served.
{% endcall %}

When the system cannot establish that an action is permitted, denial is the safer outcome. Denying on failure trades availability for the other two goals, so a check that denies when it fails needs availability attention of its own.
</panel>

<panel header="###### P6: Use established security mechanisms" expanded>

**Authentication, password storage, encryption, and session management are easy to get subtly wrong, so prefer mechanisms many people have already reviewed and attacked.**
{% call show_example() %}
Use the authentication and session support your stack already maintains, such as Spring Security for Java, Django's authentication system for Python, or a maintained session middleware for Node. Inventing a scheme that stores a user identifier in a cookie and trusts it on the next request is the common alternative, and it fails because that cookie is under the client's control and carries nothing the server can verify.
{% endcall %}
</panel>
<p/>

---------------------------------------------------------------------

##### C. Handle untrusted data safely

External data includes more than text typed into a form. Requests, file uploads, command-line arguments, environment variables, configuration, database records, messages, dependency metadata, and responses from other services can all cross trust boundaries.

**Untrusted data creates three separate responsibilities:** validate it for its intended use when it enters, keep it separate from instructions wherever it reaches an interpreter, and encode it for each output context it is placed into.

###### C1. Validate at the boundary

**Validation checks whether data is acceptable for its intended purpose.** Check its type, form, length, range, and meaning as early as practical.

{% call show_example() %}
An event identifier might need to be a positive integer referring to an existing event. An event name might need a reasonable maximum length. A start time might need to precede an end time.
{% endcall %}

Prefer an _allowlist_, which describes acceptable data, over a _denylist_ of known-bad strings. Attackers can often express the same harmful meaning in forms a denylist did not anticipate: a rule that rejects `<script` is bypassed by `<ScRiPt`, by `<img onerror=...>`, and by encoded forms the browser decodes only after the check has run.

Client-side validation can improve usability, but it is not a security boundary because a client can be modified or bypassed. **Validation that protects server-side assets must also occur on the trusted side of the boundary.**

###### C2. Keep data separate from commands

**Do not construct executable commands by concatenating untrusted strings.** When an interpreter cannot distinguish data from instructions, an attacker may be able to change what gets executed.

{% call show_example() %}
This query construction is unsafe:

```text
query = "SELECT student_name, email FROM registrations WHERE event_id = " + eventId
database.execute(query)
```

Use an API that sends the instruction and the data separately:

```text
query = "SELECT student_name, email FROM registrations WHERE event_id = ?"
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

**The attack this prevents is _cross-site scripting_ (XSS):** content supplied by one user is executed as a script in another user's browser.

HTML text, HTML attributes, URLs, scripts, styles, and other destinations have different encoding rules. Prefer framework features that encode safely by default, and avoid raw-output features unless the content comes from a source the system itself controls. An authenticated user is not such a source: the organizer in the example above was signed in. **When a feature genuinely requires user-authored markup, neither plain encoding nor raw output will do:** run the content through a maintained HTML sanitizer that keeps a known set of tags and attributes and discards the rest.

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

Distinguishing *not found* from *not permitted* is safe here, because any student may see that an event exists. When the existence of the resource is itself sensitive, such as one student's registration, return the same response for both and record the difference only in the server's own logs.
{% endcall %}

Authorization belongs on the trusted side. A disabled button, hidden menu item, or client-side route guard is a usability feature, not sufficient protection.

**Apply the same authorization rule to every path to the action.** If an operation is available through a web page, mobile endpoint, import feature, and administrator tool, a forgotten path can bypass a check applied only in the user interface.

---------------------------------------------------------------------

##### E. Protect secrets, credentials, and sensitive data

**A secret should be available only to the people and components that need it.** API keys, private keys, access tokens, and database passwords should not be hard-coded, committed to version control, pasted into AI prompts, included in screenshots, or written to logs.

**Keep a secret in a store built for the purpose, and let the deployment supply it to the process that needs it.** Depending on the environment, that store is a CI/CD secret store, the platform's own protected configuration, or a dedicated secret manager. The shape is the same in each case: the value sits in an access-controlled store, the deployment injects it at run time, and only the identities and components explicitly granted access can read it. Environment variables and untracked `.env` files are a common way to *receive* an injected secret, but they are not themselves protected storage: their contents can reach logs, crash dumps, and child processes, and keeping a file out of version control avoids only one leak path.

Give each credential the smallest useful permissions, use different credentials for different environments, and make replacement possible. If a secret is exposed, remove it from the code and revoke or rotate it; deleting the visible line does not make the old value secret again.

**Do not collect or return sensitive data merely because it is convenient.** Select only the attendee fields needed by the feature, restrict who can access them, and remove them when there is no longer a reason to retain them.

**Passwords require specialized handling.** Never store plaintext passwords or protect them using reversible encryption. Prefer an established authentication provider.

A _password verifier_ is the value a system keeps in order to check a password without storing the password itself. If the system must store verifiers rather than use an established provider, use a vetted password-hashing facility designed for that purpose, together with its current recommended configuration. **Such facilities are deliberately expensive to compute, and they salt each password separately**, because the threat is an attacker who has already stolen the stored values and can then guess offline, in parallel, as fast as hardware allows. An ordinary fast hash such as SHA-256 is unsuitable for that reason. Argon2id, scrypt, bcrypt, and PBKDF2 are the usual choices, and the [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) tracks which to prefer and with what parameters. Do not invent a password-storage scheme.

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

Keep the dependency set small. **Commit the ecosystem's lock file**, so the exact resolved versions, including the transitive ones nobody chose deliberately, are recorded and reproducible. **Check those resolved versions against published advisories using a maintained scanner**, rather than against the version numbers written by hand in the build file. When an advisory matches, judge it by actual exposure: whether your code reaches the vulnerable path at all, and what the impact would be if it did. Test before updating, and when an update has to wait, record the decision, who owns it, and when it will be looked at again. Do not blindly update everything without testing, but do not leave a known relevant vulnerability unassessed.

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

**Turn important threat statements into negative tests and misuse cases.**
{% call show_example() %}
If a requirement says only an event's organizer can see its attendees, test the correct organizer, an unrelated organizer, an attendee, an anonymous user, and a revoked organizer.
{% endcall %}

Also test boundaries such as empty input, maximum lengths, unexpected encodings, repeated requests, missing resources, and surprising operation orders. Maximum lengths and repeated requests are availability tests: they ask what one caller can consume. The aim is to challenge the assumptions on which the control depends, not merely to generate many random tests.

Compilers, linters, static analysis, secret scanning, dependency analysis, and dynamic testing can catch different kinds of weakness. **A clean scan does not prove that software is secure.** It means only that the tool did not report a problem within the checks it performed.

Run ordinary regression tests after a security change. A control that breaks required behavior is not a complete solution, and a functional fix can accidentally weaken a security property elsewhere.

</div>

<div id="extras">
</div>
