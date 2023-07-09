<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Model View Controller (MVC) design pattern</span>

<div id="body">

**Context**

Most applications support storage/retrieval of information, displaying of information to the user (often via multiple UIs having different formats), and changing stored information based on external inputs.

**Problem**

The high coupling that can result from the interlinked nature of the features described above.

**Solution**

Decouple data, presentation, and control logic of an application by separating them into three different components: _Model_, _View_ and _Controller_.

* _View_: Displays data, interacts with the user, and pulls data from the model if necessary.
* _Controller_: Detects UI events such as mouse clicks and button pushes, and takes follow up action. Updates/changes the model/view when necessary.
* _Model_: Stores and maintains data. Updates the view if necessary.

The relationship between the components can be observed in the diagram below. Typically, the UI is the combination of _View_ and _Controller_.

<pic src="{{baseUrl}}/designPatterns/modelViewController/what/images/classDiagram.png" width="400" />
<p/>

<box>

{{ icon_example }} Given below is a concrete example of MVC applied to a student management system. In this scenario, the user is retrieving the data of a student.

<pic src="{{baseUrl}}/designPatterns/modelViewController/what/images/sequenceDiagram.png" width="500" />
<p/>

In the diagram above, when the user clicks on a button using the UI, the ‘click’ event is caught and handled by the `UiController`. The `ref` frame indicates that the interactions within that frame have been extracted out to another separate sequence diagram.

</box>

Note that in a simple UI where there’s only one view, _Controller_ and _View_ can be combined as one class.

There are many variations of the MVC model used in different domains. For example, the one used in a desktop GUI could be different from the one used in a web application.

</div>

<div id="extras">
</div>
