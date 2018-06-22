<div id="title">

#### Aggregation

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain the meaning of aggregations</span>

<div id="body">

**_Aggregation_ represents a _container-contained_ relationship.** It is a weaker relationship than composition.

<panel src="../../../uml/classDiagrams/aggregation/what/unit-inElsewhere-asFlat.md#title-and-body" boilerplate header="{{glyphicon_education}} Tools → UML → Class Diagrams → Aggregation" expanded/>

<p/>

<tip-box> 

{{ icon_example }} `Club` acts as a _container_ for `Person` objects. `Person` objects can survive without a `Club` object.

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