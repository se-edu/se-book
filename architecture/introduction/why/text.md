<span id="title">Why</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain why software architecture matters</span>

<div id="body">

**A useful architecture limits how far many changes spread through the system.**

<box>

{{ label_example }} Consider the following changes to an invoice manager application:

* Store invoices in a database instead of a file: The main change should stay inside `Storage`, as long as its existing interface can still express what is needed.
* Add a command-line interface alongside the graphical one: Most new code belongs in `Ui`; both interfaces can drive the same `Logic`.
* Test invoice operations without launching a window: Because `Logic` does not depend on `Ui`, tests can call it directly.
* Let several developers work at once: Clear component boundaries reduce how often two people must edit the same file.
</box>

**Architecture does not restrain the spread of _every_ change.** That is not necessarily an architectural failure: some change genuinely cross several responsibilities.<br>
{{ label_example }} Adding a new property to every invoice can touch the interface, the rules, the model, and the storage format.

**Architecture also shapes the system's quality attributes** — the properties that decide whether the software is good enough for its purpose. Common quality attributes include:

* **Modifiability** — how easily it can be changed
* **Performance** — how quickly it responds
* **Reliability** — how well it keeps working when something fails
* **Security** — how well it protects data and resists misuse
* **Deployability** — how easily a new version reaches users

**Quality attributes often conflict, and that is the central difficulty of architecture.** Splitting a system across machines can allow independent scaling while making it slower and adding network failures. Adding component boundaries can make change easier to contain while adding interfaces that developers must learn and maintain.

**There is no architecture that is best on every attribute** — only one that fits the qualities and likely changes that matter for the system being built.

</div>

<div id="extras">
</div>
