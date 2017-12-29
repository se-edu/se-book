<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### OO Structures :one:

</div>

<div id="body">

An OO solution is basically a network of objects interacting with each other. Therefore, **it is useful to be able to model how the relevant objects are 'networked' together** inside a software %%&nbsp;i.e. how the objects are connect together%%. 

<tip-box> 

:package: Given below is an illustration of some objects and how they are connected together. %%&nbsp;Note: the diagram uses an ad-hoc notation.%%
<p><img src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/objectsAdHoc.png" width="500" />
<p/>

</tip-box>

Note that these **object structures within the same software can change over time**.

<tip-box> 

:package: Given below is how the object structure in the previous example could have looked like at a different time.
<p><img src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/objectsAdHoc2.png" width="500" />
<p/>

</tip-box>

However, object structures do not change at random; they change based on a set of rules, as was decided by the designer of that software. Those **rules that object structures need to follow can be illustrated as a _class structure_** %%&nbsp;i.e. a structure that exists among the relevant classes%%.

<tip-box> 

:package: Here is a class structure (drawn using an ad-hoc notation) that matches the object structures given in the previous two examples. For example, note how this class structure does not allow any connection between `Genre` objects and `Author` objects, a rule followed by the two object structures above.
<p><img src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/classesAdHoc.png" width="500" />
<p/>

</tip-box>

UML Object Diagrams are used to model object structures and UML class diagrams are used to model class structures of an OO solution.

<dynamic-panel src="../../../../book/uml/objectDiagrams/introduction/full.md" header=":mortar_board: UML → Object Diagrams → Introduction" /> 
<dynamic-panel src="../../../../book/uml/classDiagrams/introduction/what/full.md" header=":mortar_board: UML → Class Diagrams → Introduction → What" />

<tip-box> 

:package: Here is an object diagram for the above example:
<p><img src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/objectDiagram.png" width="500" />

:package: And here is the class diagram for it:
<p><img src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/classDiagram.png" width="500" />
<p/>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md"/>
</div>

</div>
