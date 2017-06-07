<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Associations: Composition

<div id="main">

A composition is an association that represents a strong “whole-part” relationship. When the “whole” is destroyed, “parts” are destroyed too.

<panel header="UML: Class Diagrams: Composition">
  <include src="../../../uml/classDiagrams/composition/topicPanel.md" />
</panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oop/associations/composition/images/boardSquare.png" height="50" />
<p/>

</tip-box>

In addition, composition also implies that **there cannot be cyclical links**. In the example below, the notation represents a ‘sub-folder’ relationship between two folders while implying that a Folder cannot be a sub-folder of itself. If the diamond is removed, it is no longer a composition relationship and technically, allows a folder to be subfolder of itself.

<tip-box>

Example:

<img src="{{baseUrl}}/oop/associations/composition/images/folder.png" height="80" />
<p/>

</tip-box>

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

  <panel header=":package: Resources" expandable type="seamless">
    <include src="resources.md" />
  </panel>

</panel>

</div>
</div>
