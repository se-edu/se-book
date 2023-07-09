<span id="title">Dependencies</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use dependencies in a class diagram</span>

<div id="body">

**UML uses a dashed arrow to show dependencies.**

<pic src="{{baseUrl}}/uml/classDiagrams/dependencies/what/images/notation.png" width="350" />

<box>

{{ icon_example }} Two examples of dependencies:

<pic src="{{baseUrl}}/uml/classDiagrams/dependencies/what/images/examples.png" width="450" />
<p/>

</box>

**Dependencies vs associations:**
* An association is a relationship resulting from one object keeping a reference to another object (i.e., storing an object in an instance variable). While such a relationship forms a _dependency_, we need not show that as a dependency arrow in the class diagram if the association is already indicated in the diagram. That is, showing a dependency arrow does not add any value to the diagram.<br>
  Similarly, an inheritance results in a dependency from the child class to the parent class but we don't show it as a dependency arrow either, for the same reason as above.
* **Use a dependency arrow to indicate a dependency only if that dependency is not already captured by the diagram in another way** (for instance, as an association or an inheritance) e.g., class `Foo` accessing a constant in `Bar` but there is no association/inheritance from `Foo` to `Bar`.
</div>

<div id="extras">
</div>
