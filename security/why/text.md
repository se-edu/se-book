{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can explain why software engineers must consider security</span>
<span id="title">Why</span>

<div id="body">

**Software can pass its normal tests and still be insecure.** Functional tests usually ask whether expected users can perform expected actions. Security also asks what happens when someone deliberately uses unexpected inputs, identities, permissions, sequences, and volumes.

{% call show_example() %}
Consider a registration page that correctly displays registration `381` to its owner:

```text
/registrations/381
```

If changing the address to `/registrations/382` reveals another student's record, the feature works according to its happy path but has broken access control. The server checked that the requester was signed in; it did not check that the requester was authorized to view that particular record.
{% endcall %}

**Authentication and authorization answer different questions.**

* _Authentication_ establishes an identity: "Who is making this request?"
* _Authorization_ decides whether that identity may perform a specific action on a specific resource: "May this user view this registration?"

A user can be correctly authenticated and still be unauthorized. In most systems, authorization must be checked for every protected action, not just when the user first signs in.

##### Security failures cause real harm

**A security failure can harm people who never chose to accept the risk.** Exposed personal data can lead to harassment or fraud. Altered records can cause financial or academic consequences. An unavailable service can exclude users from something time-sensitive. Compromised software can also be used to attack other systems.

The engineer who writes a small part of the program may not see these consequences directly. Nevertheless, small implementation choices can have system-wide effects. A missing permission check, leaked credential, or unsafe library call can bypass otherwise sound requirements, design, and testing.

**Security problems also become more expensive after release.** Correcting one line of code may be the easy part. The response may also require investigating what happened, recovering data, revoking credentials, updating dependencies, deploying urgently, notifying affected people, and rebuilding trust.

##### Attackers can exploit any undefended path

**An attacker needs one usable path to an asset, while defenders must protect every reachable path that matters.**
{% call show_example() %}
A team may secure the main web page but forget an older API, an import feature, an administrator script, or a default account. The forgotten path can be enough.
{% endcall %}

This asymmetry motivates several practices covered later:

* reduce the number of exposed features and dependencies;
* apply authorization checks consistently;
* use secure defaults;
* place more than one control around important assets;
* monitor for important failures; and
* keep software and its dependencies maintained.

##### Security includes people and processes

**A control that people cannot use correctly will often be bypassed.**
{% call show_example() %}
If secure setup is much harder than insecure setup, developers will postpone it. If every harmless action triggers an alarming warning, users will learn to ignore warnings. If a password policy makes passwords impossible to remember, users may record them somewhere unsafe.
{% endcall %}

Software engineers do not control every human decision, and this textbook does not teach {{ show_term("social engineering", "Social engineering is a psychological manipulation tactic used to trick people into making security mistakes or handing over confidential information.") }} in depth. However, engineers influence interfaces, workflows, defaults, documentation, and operational procedures. Good security makes the safe action understandable and practical.

</div>

<div id="extras">
</div>
