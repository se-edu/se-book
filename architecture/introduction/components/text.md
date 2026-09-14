{% from "common/macros.njk" import show_term with context %}
{% from "common/macros.njk" import show_example with context %}
<span id="title">Components, interfaces, and dependencies</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain what components, interfaces, and dependencies are</span>

<div id="body">

**Three concepts appear frequently in architecture descriptions: components, interfaces, dependencies.**

**A {{ show_term("component") }} is a major part of the system with one coherent responsibility.**
{% call show_example() %}
`Storage`'s work concerns persistent data. A single `Invoice` class is too small to be an architectural component.
{% endcall %}

**An {{ show_term("interface") }} is the agreement stating how the rest of the system may use a component.** It is more than a list of operations. A complete interface also covers:

* the data each operation accepts and returns;
* what happens when an operation succeeds or fails; and
* for a component reached over a network, the format and protocol of the messages.

{% call show_example() %}
`Storage` might offer `saveInvoices(invoices)` and `readInvoices()`, _and_ specify that a corrupt file causes a particular error rather than a crash.
{% endcall %}

**A {{ show_term("dependency") }} exists when one component relies on another to do its job.** Dependencies have a direction.
{% call show_example() %}
`Logic` depends on `Storage`, because it cannot save without it. `Storage` does not depend on `Logic`: it can be compiled, tested, and understood without knowing that commands exist.
{% endcall %}

**A component is not a special programming construct.** There is no `component` keyword; a component is whatever unit of code the team agrees to treat as one part with one responsibility. It may be a separate library, a language-level module, or an entirely separate program reached over a network.

{% call show_example() %}
In a Java project a component is often a package (or group of packages) plus a type declaring what it offers:

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
{% endcall %}

**A dependency arrow describes reliance, not necessarily a method call.** Whether that reliance is a method call, a message, or a network request is usually indicated in the <tooltip content="i.e., a description of which type of arrow/line indicates what">legend</tooltip>.
</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
