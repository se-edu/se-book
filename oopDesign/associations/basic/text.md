<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Basic :one:

</div>

<div id="body">

**Connections between objects are called _associations_.** Objects in an OO solution need to be connected to each other to form a network so that they can interact with each other. Such connections are called _associations_.

<dynamic-panel src="../../../uml/objectDiagrams/objectStructures/full.md" header=":mortar_board: UML &rarr; Object Diagrams &rarr; Object Structures"></dynamic-panel>

<p/>

<tip-box>

:package: An object diagram example showing associations among objects. %%For example, there is an association between the `AgeList` object and the `Main` object.%%

<img src="{{baseUrl}}/oopDesign/associations/basic/images/completeStructure.png" height="120" />

</tip-box>

**Object structures can change over time**.

<tip-box>

:package: In this example, the object structure has changed %%(from left to right) due to a new `Person` object being added and connected to the `Main` object.%%

<img src="{{baseUrl}}/oopDesign/associations/basic/images/ageListCalculator.png" height="100" /> &nbsp; &rarr; &nbsp; 
<img src="{{baseUrl}}/oopDesign/associations/basic/images/ageListCalculatorAdam.png" height="100" />

</tip-box>

**Associations can be reflected among classes too.**

<dynamic-panel src="../../../uml/classDiagrams/associations/basic/full.md" header=":mortar_board: UML &rarr; Class Diagrams &rarr; Associations &rarr; Basic"/>

<tip-box> 

:package: An example class diagram showing associations between classes.

<img src="{{baseUrl}}/oopDesign/associations/basic/images/ageListCalculatorPerson.png" height="100" />
<p/>

</tip-box>

**An association in a class diagram can use _association labels_ and _association roles_ to show additional info.**

<dynamic-panel src="../../../uml/classDiagrams/associations/labels/full.md" header=":mortar_board: UML &rarr; Class Diagrams &rarr; Associations &rarr; Labels"/>
<dynamic-panel src="../../../uml/classDiagrams/associations/roles/full.md" header=":mortar_board: UML &rarr; Class Diagrams &rarr; Associations &rarr; Roles"/>

<p/>

</div>

<div id="extras">
</div>

</div>
