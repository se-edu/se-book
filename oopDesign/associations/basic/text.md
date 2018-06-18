<div id="title">

#### Basic :one:

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain associations :one:</span>

<div id="body">

Objects in an OO solution need to be connected to each other to form a network so that they can interact with each other. Such **connections between objects are called _associations_.**

<panel src="../../../uml/objectDiagrams/associations/unit-inElsewhere-asFlat.md#title-and-body" boilerplate header="{{glyphicon_education}} Tools → UML → Object Diagrams → Associations → What" expanded />

<p/>

<tip-box>

:package: An object diagram example showing associations among objects. %%For example, there is an association between the `AgeList` object and the `Main` object.%%

<img src="{{baseUrl}}/oopDesign/associations/basic/images/completeStructure.png" height="120" />

</tip-box>

**Associations in an object structure can change over time**.

<tip-box>

:package: In this example, the associations in the object structure have changed %%(from left to right) due to a new `Person` object being connected to the `Main` object.%%

<img src="{{baseUrl}}/oopDesign/associations/basic/images/ageListCalculator.png" height="100" /> &nbsp; → &nbsp; 
<img src="{{baseUrl}}/oopDesign/associations/basic/images/ageListCalculatorAdam.png" height="100" />

</tip-box>

**Associations among objects are reflected correspondingly in the class diagram too**, as it is the class diagram that dictates the nature of the associations allowed in the object structures.

<panel src="../../../uml/classDiagrams/associations/basic/unit-inElsewhere-asFlat.md#title-and-body" boilerplate header="{{glyphicon_education}} Tools → UML → Class Diagrams → Associations → Basic" expanded/>

<tip-box> 

:package: An example class diagram showing associations between classes.

<img src="{{baseUrl}}/oopDesign/associations/basic/images/ageListCalculatorPerson.png" height="100" />
<p/>

</tip-box>

<panel src="../../../uml/classDiagrams/associations/roles/unit-inElsewhere-asFlat.md#title-and-body" boilerplate header="{{glyphicon_education}} Tools → UML → Class Diagrams → Associations → Roles" expanded />
<panel src="../../../uml/classDiagrams/associations/labels/unit-inElsewhere-asFlat.md#title-and-body" boilerplate header="{{glyphicon_education}} Tools → UML → Class Diagrams → Associations → Labels" expanded />



</div>

<div id="extras">
</div>