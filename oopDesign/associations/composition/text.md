<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming → Associations →</div>

<div id="title">

#### Composition :two:

</div>

<div id="body">

**A composition is an association that represents a strong _whole-part_ relationship.** When the _whole_ is destroyed, _parts_ are destroyed too.

<panel src="../../../uml/classDiagrams/composition/what/full.md#titel-and-body" header=":mortar_board: Tools → UML → Class Diagrams → Composition" expanded/>

<p/>

<tip-box>

:package: A `Board` (used for playing board games) consists of `Square` objects.

<img src="{{baseUrl}}/oopDesign/associations/composition/images/boardSquare.png" height="50" />
<p/>

</tip-box>

**Composition also implies that there cannot be cyclical links**. 

<tip-box>

:package: In this ‘sub-folder’ association, a `Folder` cannot be a sub-folder of itself. If the diamond is removed, it is no longer a composition relationship and technically, allows a folder to be sub-folder of itself.

<img src="{{baseUrl}}/oopDesign/associations/composition/images/folder.png" height="80" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>

</div>
