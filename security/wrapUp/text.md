<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can review a security-relevant change using a checklist</span>

<span id="title">Wrap-up</span>

<div id="body">

##### Summary

**Security protects assets and stakeholders from misuse and harm, whether deliberate or accidental.** Analysis assumes the deliberate case because it is the harder one, but accidents need attention of their own. A security mindset questions assumptions and considers what someone could do when trust is misplaced.

**Secure software engineering is risk management, not a promise of perfection.** Identify assets, stakeholders, trust boundaries, threats, and risks; then select controls whose benefits justify their costs.

**Use a small set of durable principles.** Grant least privilege, deny by default, minimize attack surface, handle untrusted data at every boundary, enforce authorization on the trusted side, protect secrets and sensitive data, keep one caller from consuming the service, and treat dependencies as part of the product.

**Verify security properties with reasoning, review, misuse cases, and several layers of automated checks.** A passing happy path or clean scan does not prove security.

**Consider security throughout the software lifecycle and whenever assumptions change.** Requirements, design, implementation, release, operation, and maintenance each create security decisions.

**Treat AI-generated code and actions as untrusted until they have been understood and verified.** Limit what tools can see and do, independently check their work, and retain human accountability for accepted changes.

##### Checklist

Before accepting a security-relevant change, ask:

- [ ] What assets and stakeholders could this change affect?
- [ ] Where does untrusted data or a less-trusted actor cross a boundary?
- [ ] Who is authenticated, and is each protected action authorized?
- [ ] Could data become executable code, a command, a query, or active content in an output?
- [ ] Are secrets, credentials, sensitive data, errors, and logs handled safely?
- [ ] Did the change add or alter a dependency, permission, interface, trust boundary, or configuration?
- [ ] Which misuse, boundary, and cross-user cases have been reviewed and tested?
- [ ] What risk remains after this change, who accepted it, and what would trigger revisiting it?
- [ ] Does this control make the safe path the easy one, or will people route around it?
- [ ] Could this change let one caller consume enough resources to deny service to others?
- [ ] If an AI tool contributed, were its inputs, permissions, commands, dependencies, and full output checked?
- [ ] Can I explain and take responsibility for the accepted change?

##### Further reading

* [OpenSSF: Developing Secure Software](https://training.linuxfoundation.org/training/developing-secure-software-lfd121/) provides free, developer-oriented material covering security across requirements, design, reuse, implementation, verification, deployment, and vulnerability response.
* [OWASP Top 10 Proactive Controls](https://top10proactive.owasp.org/the-top-10/) gives practical defensive guidance for software developers.
* [OWASP Top 10](https://owasp.org/www-project-top-ten/) is a widely used awareness document for common web-application risks.
* [Brown University CSCI 0320: Security and Threat Modeling](https://cs0320.github.io/notes/security/security_and_threat_modeling.html) introduces threat modeling in an undergraduate software engineering context.
* [University of Washington CSE 484](https://courses.cs.washington.edu/courses/cse484/) provides further material on threat modeling and computer security.
* [Do Users Write More Insecure Code with AI Assistants?](https://arxiv.org/abs/2211.03622) reports a controlled study of security and confidence during AI-assisted programming.
* [Security Weaknesses of Copilot-Generated Code in GitHub Projects](https://arxiv.org/abs/2310.02059) studies security weaknesses in AI-generated code found in public projects.

</div>

<div id="extras">
</div>
