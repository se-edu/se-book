<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain the meaning of composition</span>

<div id="title">

#### Composition

</div>

<div id="body">

**A composition is an association that represents a strong _whole-part_ relationship.** When the _whole_ is destroyed, _parts_ are destroyed too.

<panel src="../../../uml/classDiagrams/composition/what/unit-inElsewhere-asFlat.md#title-and-body" boilerplate header="{{ icon_prereq }} Tools → UML → Class Diagrams → Composition" expanded/>

<p/>

<tip-box>

{{ icon_example }} A `Board` (used for playing board games) consists of `Square` objects.

<img src="{{baseUrl}}/oopDesign/associations/composition/images/boardSquare.png" height="50" />
<p/>

</tip-box>

**Composition also implies that there cannot be cyclical links**. 

<tip-box>

{{ icon_example }} In this ‘sub-folder’ association, a `Folder` cannot be a sub-folder of itself. If the diamond is removed, it is no longer a composition relationship and technically, allows a folder to be sub-folder of itself.

<img src="{{baseUrl}}/oopDesign/associations/composition/images/folder.png" height="80" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>