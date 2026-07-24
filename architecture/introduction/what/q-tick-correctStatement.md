<panel header="{{ icon_Q_A }} Statements about architecture">

Choose the correct statement.

- [ ] a. The architecture of a system should be simple enough for all team members to understand it.
- [ ] b. The architecture is primarily a high-level design of the system.
- [ ] c. The architecture is usually decided by the project manager.
- [ ] d. The architecture can contain details private to a component.

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

(a)(b)

~~(c)~~ Reason: Architecture is a technical decision made by the development team. In a larger organization someone in an _architect_ role may lead it, but a project manager's job is planning and coordination, not the technical structure.

~~(d)~~ Reason:
>... private details of elements—details having to do solely with internal implementation—are not architectural.

(An internal decision can still _become_ architecturally significant when it affects the system as a whole—but that is no longer a detail private to the component.)


</panel>
</panel>
