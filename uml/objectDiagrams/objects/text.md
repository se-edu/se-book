<span id="title">Objects</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw UML objects</span>

<div id="body">

Notation:

<pic eager src="{{baseUrl}}/uml/objectDiagrams/objects/images/notation.png" height="85" />
<p/>

* The class name and object name are underlined e.g., <u>`car1:Car`</u>.
   * <u>`objectName:ClassName`</u> is meant to say 'an instance of `ClassName` identified as `objectName`'.
   * Object name can be omitted e.g., <u>`:Car`</u> which is meant to say 'an _unnamed_ instance of a `Car` object'.
* Objects can show the value of attributes, in the format `attribute = value` format.
  * Visibility modifiers and attribute types omitted because they can be implied from the class diagram e.g., `size = 3`, not `+size: int = 3`.
  * Class-level attributes are omitted, as they belong to the class, not a specific instance of the class.
  * Attributes compartment can be omitted if it is not relevant to the purpose of the diagram.
* Operations compartment is omitted altogether, as object diagrams focus on state at a moment in time, not behavior or available operations.


<box>

{{ icon_example }} Some example objects:

<pic eager src="{{baseUrl}}/uml/objectDiagrams/objects/images/professorStudent.png" height="65" />
<p/>

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
