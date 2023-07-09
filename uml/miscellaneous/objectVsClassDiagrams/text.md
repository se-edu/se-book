<span id="title">Object versus class diagrams</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can distinguish between class diagrams and object diagrams</span>

<div id="body">

Compared to the notation for class diagrams, object diagrams differ in the following ways:
* Show objects instead of classes:
  * Instance name may be shown
  * There is a `:` before the class name
  * Instance and class names are underlined
* Methods are omitted
* Multiplicities are omitted. Reason: an association line in an object diagram represents a connection to exactly one object (i.e., the multiplicity is always 1).

Furthermore, **multiple object diagrams can correspond to a single class diagram**.

<box>

{{ icon_example }} Both object diagrams are derived from the same class diagram shown earlier. In other words, each of these object diagrams shows ‘an instance of’ the same class diagram.

<pic src="{{baseUrl}}/uml/miscellaneous/objectVsClassDiagrams/images/professorStudentAdmin.png" height="85" />
<p/>

<pic src="{{baseUrl}}/uml/miscellaneous/objectVsClassDiagrams/images/professorStudent.png" height="150" />
<p/>

</box>

When the class diagram has an inheritance relationship, **the object diagram should show either an object of the parent class or the child class, but not both**.

<box>

{{ icon_example }} Suppose `Employee` is a child class of the `Person` class. The class diagram will be as follows:
<puml src="images/cd-ParentAndChild.puml" />

Now, how do you show an `Employee` object named `jake`?

* {{ icon_x_red }} <puml src="images/od-ParentAndChild.puml" /> This is not correct, as there should be only one object.
* {{ icon_tick_green }} <puml src="images/od-ChildOnly.puml" /> This is OK.

* {{ icon_tick_green }} <puml src="images/od-ParentOnly.puml" /> This is OK, as `jake` _is_ a `Person` too.
  That is, we can show the parent class instead of the child class if the child class doesn't matter to the purpose of the diagram (i.e., the reader of this diagram will not need to know that `jake` is in fact an `Employee`).

</box>

**Association labels/roles _can_ be omitted unless they add value** (e.g., showing them is useful if there are multiple associations between the two classes in concern -- otherwise you wouldn't know which association the object diagram is showing)

<box>

{{ icon_example }} Consider this class diagram and the object diagram:
<puml src="images/cd-StudentDegree.puml" />
<puml src="images/od-StudentDegree.puml" />

We can clearly see that both Adam and Eve lives in hall h1 (i.e., OK to omit the association label `lives in`) but we can't see if History is Adam's major or his minor (i.e., the diagram should have included either an association label or a role there). In contrast, we can see Eve is an English major.

</box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
