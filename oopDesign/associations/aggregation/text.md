<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Aggregation :three:

</div>

<div id="body">

**_Aggregation_ represents a _container-contained_ relationship.** It is a weaker relationship than composition.

<panel src="../../../uml/classDiagrams/aggregation/what/full.md" header=":mortar_board: UML → Class Diagrams → Aggregation" expanded/>

<p/>

<tip-box> 

:package: `Club` acts as a _container_ for `Person` objects. `Person` objects can survive without a `Club` object.

<img src="{{baseUrl}}/oopDesign/associations/aggregation/images/clubPerson.png" height="80" />
<p/>

</tip-box>


<tip-box type="tip"> 

**Aggregation vs Composition**

The distinction between composition (&#9670;) and aggregation (&#9671;) is rather blurred. Martin Fowler’s famous book _UML Distilled_ advocates omitting the aggregation symbol altogether because using it adds more confusion than clarity.

</tip-box>


</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
