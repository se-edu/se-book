<span id="title">OO structures</span>

<span id="outcomes">{{ icon_outcome }} Can explain structure modeling of OO solutions</span>

<div id="body">

An OO solution is basically a network of objects interacting with each other. Therefore, **it is useful to be able to model how the relevant objects are 'networked' together** inside a software %%i.e. how the objects are connected together%%.

<box>

{{ icon_example }} Given below is an illustration of some objects and how they are connected together. %%Note: the diagram uses an ad-hoc notation.%%
<p><pic src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/objectsAdHoc.png" width="500" />
<p/>

</box>

Note that these **object structures within the same software can change over time**.

<box>

{{ icon_example }} Given below is how the object structure in the previous example could have looked like at a different time.
<p><pic src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/objectsAdHoc2.png" width="500" />
<p/>

</box>

However, object structures do not change at random; they change based on a set of rules set by the designer of that software. Those **rules that object structures need to follow can be illustrated as a _class structure_** %%i.e. a structure that exists among the relevant classes%%.

<box>

{{ icon_example }} Here is a class structure (drawn using an ad-hoc notation) that matches the object structures given in the previous two examples. For example, note how this class structure does not allow any connection between `Genre` objects and `Author` objects, a rule followed by the two object structures above.
<p><pic src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/classesAdHoc.png" width="500" />
<p/>

</box>

**UML _Object Diagrams_ model object structures. UML _Class Diagrams_ model class structures.**

<box>

{{ icon_example }} Here is an object diagram for the above example:
<p><pic src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/objectDiagram.png" width="500" />

{{ icon_example }} And here is the class diagram for it:
<p><pic src="{{baseUrl}}/modeling/modelingStructures/ooStructures/images/classDiagram.png" width="500" />
<p/>

</box>

</div>

<div id="extras">
  <include src="exercises.md"/>
</div>
