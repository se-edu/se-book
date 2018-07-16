<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain models</span>

<div id="body">

**A _model_ is a representation of something else.** 

<tip-box> 

{{ icon_example }} A <trigger trigger="click" for="modal:modellingIntro-classDiagram">class diagram</trigger> is a model that represents a software design.

<!-- TODO: give non-software examples -->

</tip-box>

<modal large title="Class diagrams" id="modal:modellingIntro-classDiagram">

A _class diagram_ is a diagram drawn using the UML modelling notation.<br>
{{ icon_example }} An example class diagram:<br>
  
<img src="{{baseUrl}}/uml/classDiagrams/introduction/what/images/classDiagramExample1.png" width="600" />

</modal>

**A _model_ provides a simpler view of a complex entity because a model captures only a selected aspect.** This omission of some aspects implies models are <trigger trigger="click" for="modal:modellingIntro-abstraction">abstractions</trigger>.

<modal large title="%%Textbook {{ icon_embedding }}%%" id="modal:modellingIntro-abstraction">
  <include src="../../../../book/designFundamentals/abstraction/what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<tip-box> 

{{ icon_example }} A class diagram captures the structure of the software design but not the behavior.

</tip-box>

**Multiple models of the same entity may be needed to capture it fully.** 

<tip-box> 

{{ icon_example }} In addition to a class diagram (or even multiple class diagrams), a number of other diagrams may be needed to capture various interesting aspects of the software.

</tip-box>

</div>

<div id="extras">
</div>