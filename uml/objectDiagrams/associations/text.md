<span id="title">Associations</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret simple associations among objects</span>

<div id="body">

A solid line indicates an association between two objects.

<pic eager src="{{baseUrl}}/uml/objectDiagrams/associations/images/notation.png" width="300" />

<box>

{{ icon_example }} An example object diagram showing two associations:<br>
<pic eager src="{{baseUrl}}/uml/objectDiagrams/associations/images/example.png" width="300" />

</box>

Object diagrams do not show the following elements that are otherwise present in class diagrams:

* Inheritance relationships: Class hierarchies are defined in class diagrams; object diagrams need only show the concrete class of each instance.
* Multiplicity constraints: Object diagrams show actual links between specific objects, not all permitted cardinalities.
* Abstract classes and interfaces: These cannot be instantiated, so they do not appear in instance-level snapshots.
* Dependencies: These exist between classes, not objects.

Association roles/labels are typically omitted unless they help to differentiate between different association links between the same two types of objects.

</div>

<div id="extras">
</div>
