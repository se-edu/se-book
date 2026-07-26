{% from "common/macros.njk" import show_example %}
<span id="title">Different views of one system</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain why one system can have several architecture diagrams</span>

<div id="body">

**The same system can be drawn in more than one way, depending on what you want to show.** Here are two commonly used views:
1. **A logical view shows the major parts and which parts depend on which.** It says nothing about where any of it runs.
1. **A deployment view shows where the parts actually run.** For the desktop invoice manager the deployment view is almost boring: all four parts run inside one program, on the user's computer.

{% call show_example() %}
The same invoice manager, but two views of the architecture:

<puml src="images/twoViews.puml" width="449" />

<small>%%Each arrow in the logical view is a dependency. The deployment view has no arrows because all four parts run inside one program on one computer.%%</small>
{% endcall %}

That deployment view in the example looks trivial, which is exactly the point. Right now all the interesting structure is logical. When a server is added to let several users share invoices, _both_ views change — the deployment view dramatically, the logical view in a smaller but real way.

**Keeping the views separate prevents a common confusion.**
{% call show_example() %}
"This system has four components" and "this system runs on four computers" are entirely different statements, and one diagram that blurs them will mislead everyone who reads it.
{% endcall %}

<box type="info" seamless>

Formal frameworks define four, five, or more standard views. For example, the [4+1 view model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model).

</box>

</div>

<div id="extras">
</div>
