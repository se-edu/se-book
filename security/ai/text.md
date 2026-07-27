{% from "common/macros.njk" import show_example with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use AI coding tools without delegating security responsibility</span>

<span id="title">AI coding tools</span>

<div id="body">

**Responsibility for AI-assisted code remains with the engineer and team that accept and deploy it.** AI coding tools can explain code, suggest designs, generate implementations and tests, review changes, and operate development tools. Their names and capabilities will change; this rule does not.

##### Treat generated code as an untrusted contribution

**AI-generated code must earn its place in the codebase through understanding, review, and verification.** Fluent output can compile and pass happy-path tests while omitting authorization, mishandling errors, using an unsafe API, exposing a secret, inventing a dependency, or relying on an assumption that is false in the actual system.

The risk is not that all generated code is insecure. Human-written code can contain the same weaknesses. The risk is _automation bias_: polished and confident output can feel more trustworthy than the available evidence justifies. Research has found cases in which developers using an AI assistant produced less secure solutions while being more confident that their solutions were secure.

**Do not use fluency, speed, compilation, or generated tests as evidence of security.** Evidence comes from understanding the change, checking its assumptions, and independently exercising the relevant security properties.

##### Protect the information given to a tool

**Do not give a coding tool information it is not authorized to receive.** Follow the project's rules and the tool's approved configuration. Do not paste secrets, private keys, personal data, confidential logs, or proprietary source into an unapproved service.

Be aware that a tool may receive more context than the text explicitly pasted into its prompt. Depending on its capabilities and configuration, it may read nearby files, terminal output, version-control history, issue descriptions, connected services, and environment variables. Inspect and restrict that access when sensitive information is present.

##### Limit what an acting tool can do

**The more an AI tool can act, the more important least privilege and explicit approval become.** A tool that can edit files, run commands, install packages, access the network, or deploy software can cause harm even when its proposed code is never committed.

Give the tool only the access needed for the current task. Prefer a development environment isolated from valuable data and production systems. Require human approval for high-impact actions such as changing permissions, using credentials, installing an unexpected dependency, publishing artifacts, or modifying external services.

Treat instructions found in source files, web pages, dependency documentation, issue text, and generated output as untrusted data. A tool should not gain authority merely because an instruction appeared in content it was asked to read.

##### Verify commands, APIs, and dependencies

**Do not execute a generated command or install a generated dependency until you understand why it is needed and what it can affect.** Confirm names and APIs against authoritative documentation. A plausible package name may be mistaken, malicious, or unrelated to the intended project.

Inspect changes to configuration, build scripts, lock files, permissions, and automated workflows as carefully as application code. A two-line source change can cause a package manager or deployment system to execute much more code elsewhere.

##### Use an acceptance workflow

Apply the following process to AI-assisted changes:

1. **Constrain the task.** State the requirement, security properties, trust boundaries, allowed dependencies, and relevant misuse cases.
1. **Inspect the entire change.** Understand every line of source, configuration, tests, and dependency metadata.
1. **Trace untrusted data and protected actions.** Identify where inputs originate, how they are validated, where they are interpreted or rendered, and where authorization is enforced.
1. **Test adversarial cases.** Add negative tests, boundary values, unexpected sequences, and cross-user permission tests rather than accepting only generated happy-path tests.
1. **Use independent checks.** Run the project's tests and relevant static, secret, and dependency checks. Seek human review for high-impact changes.
1. **Accept responsibility.** Commit the change only when you can explain why it meets the requirement and why its security controls are adequate.

If a generated patch is too large to understand, split it into smaller changes or regenerate it in stages. **Code that is cheap to generate is not necessarily cheap to verify.**

##### Use AI to support, not replace, security reasoning

**An AI assistant can help generate questions, but it cannot establish that its own answer is complete or correct.** Useful tasks include:

* brainstorming assets, stakeholders, threats, and misuse cases;
* explaining an unfamiliar API or warning;
* suggesting boundary and negative tests;
* comparing a change with a stated security requirement; and
* identifying areas that deserve human review.

Treat each suggestion as a hypothesis. Check it against the actual requirements, code, environment, and authoritative documentation. Asking the same tool to declare its own code secure is not an independent review.


{% call show_example() %}
Suppose an AI assistant produces an attendee-list endpoint for the event system and a test for the correct organizer. The generated endpoint accepts an `organizerId` from the request and treats that client-supplied value as proof of authority.

A security-minded review should:

1. Replace the untrusted `organizerId` claim with authenticated identity, then check that the user organizes the requested event.
1. Return only the attendee fields the feature needs.
1. Add tests for an attendee, an unrelated organizer, an anonymous request, a changed event identifier, and revoked access.
1. Check every suggested dependency and remove it if the platform already provides the capability.
1. Accept the change only when the engineer can explain the final authorization rule and its tests.

The same review would be required if a teammate wrote the code. AI changes the speed and source of the draft, not the security standard applied to the result.
{% endcall %}

</div>

<div id="extras">
</div>
