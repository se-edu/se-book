<span id="title">Single responsibility principle</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain single responsibility principle</span>

<div id="body">

<box type="definition" seamless>
<include src="../../common/definitions.md#def-single-responsibility-principle" trim />
</box>

If a class has only one responsibility, it needs to change only when there is a change to that responsibility.

<box>

{{ icon_example }} Consider a `TextUi` class that does parsing of the user commands as well as interacting with the user. That class needs to change when the formatting of the UI changes as well as when the syntax of the user command changes. Hence, such a class does not follow the SRP.

</box>

>:fas-quote-left: Gather together the things that change for the same reasons. Separate those things that change for different reasons. :fas-quote-right: <sub>―- _Agile Software Development, Principles, Patterns, and Practices_ by Robert C. Martin</sub>

</div>

<div id="extras">

<include src="resourcesPanel.md" boilerplate/>

</div>
