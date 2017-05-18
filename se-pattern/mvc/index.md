### Model-View-Controller (MVC) Pattern
#### Context
Most applications support storage/retrieval of information, displaying of information to the user (often via multiple UIs having different formats), and changing stored information based on external inputs.

#### Problem
To reduce coupling resulting from the interlinked nature of the features described above.

#### Solution
To decouple data, presentation, and control logic of an application by separating them into three different components: Model, View and Controller.

* View: Displays data, interacts with the user, and pulls data from the model if necessary.
* Controller: Detects UI events such as mouse clicks, button pushes and takes follow up action. Updates/changes the model/view when necessary.
* Model: Stores and maintains data. Updates views if necessary.

The relationship between the components can be observed in the diagram below. Typically, the UI is the combination of view and controller.

<img class="center-block" src="mvc/solution1.png">

Given below is a concrete example of MVC applied to a *student management system*. 
In this scenario, the user is retrieving data of one student.

<img class="center-block" src="mvc/solution2.png">

In the diagram above, when the user clicks on a button using the UI, the ‘click’ event is caught and handled by the UiController.

Note that in a simple UI where there’s only one view, Controller and View can be combined as one class.

There are many variations of the MVC model used in different domains. For example, the one used in a desktop GUI could be different from the one used in a Web application.

<tip-box type="success">

#### What's more...
Study the **"Front Controller"** and **"Page Controller"** patterns yourself, and compare their similarity and difference.

</tip-box>