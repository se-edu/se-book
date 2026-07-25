<span id="title">Components, interfaces, and dependencies</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain what components, interfaces, and dependencies are</span>

<div id="body">

**Three words do most of the work in architecture descriptions: components, interfaces, dependencies.**

**A component is a major part of the system with one coherent responsibility.**<br>
{{ label_example }} `Storage`'s work concerns persistent data. A single `Invoice` class is too small to be an architectural component.

**An interface is the agreement stating how the rest of the system may use a component.** It is more than a list of operations. A complete interface also covers:

* the data each operation accepts and returns;
* what happens when an operation succeeds or fails; and
* for a component reached over a network, the format and protocol of the messages.

{{ label_example }} `Storage` might offer `saveInvoices(invoices)` and `readInvoices()`, _and_ specify that a corrupt file causes a particular error rather than a crash.

**A dependency exists when one component relies on another to do its job.** Dependencies have a direction, and that direction matters more than almost anything else in an architecture.<br>
{{ label_example }} `Logic` depends on `Storage`, because it cannot save without it. `Storage` does not depend on `Logic`: it can be compiled, tested, and understood without knowing that commands exist.

**A component is not a special programming construct.** There is no `component` keyword; a component is whatever unit of code the team agrees to treat as one part with one responsibility. It may be a separate library, a language-level module, or an entirely separate program reached over a network. Its agreed responsibility and interface make it a component, not its folder layout.

<box>

{{ label_example }} In a Java project a component is often a package (or group of packages) plus a type declaring what it offers:

<tree>
{{ icon_folder }} src/main/java/invoicemanager/
  {{ icon_folder }} ui/
  {{ icon_folder }} logic/
  {{ icon_folder }} model/
  {{ icon_folder }} storage/
    {{ icon_file }} Storage.java      ← declares what Storage offers
    {{ icon_file }} JsonStorage.java  ← one implementation
    {{ icon_file }} ...               ← other classes, private to this component
</tree>

</box>

**A dependency arrow describes reliance, not necessarily a method call.** Whether that reliance is a method call, a message, or a network request is exactly what the legend must tell you.<br>
{{ label_example }} If a diagram shows `Logic` depends on `Storage` and its legend says an arrow means _depends on_, then some code in `Logic` relies on what `Storage` offers, and no code in `Storage` relies on `Logic`.

**Depending on the interface rather than a specific implementation is what makes a component replaceable.** Such a replacement works only if it honors the same behavior, including its failure behavior — matching method names is not enough.<br>
 {{ label_example }} If `Logic` relies on the `Storage` agreement rather than on `JsonStorage` directly, a `DatabaseStorage` can take its place with few changes elsewhere.
</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
