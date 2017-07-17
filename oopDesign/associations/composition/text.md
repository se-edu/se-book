<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Associations :arrow_right:</div>

<div id="title">

#### Composition :two:

</div>

<div id="body">

A composition is an association that represents a strong “whole-part” relationship. When the “whole” is destroyed, “parts” are destroyed too.

<dynamic-panel src="../../../uml/classDiagrams/composition/topicPanel.md" header="UML: Class Diagrams: Composition" is-open></dynamic-panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/associations/composition/images/boardSquare.png" height="50" />
<p/>

</tip-box>

In addition, composition also implies that **there cannot be cyclical links**. In the example below, the notation represents a ‘sub-folder’ relationship between two folders while implying that a Folder cannot be a sub-folder of itself. If the diamond is removed, it is no longer a composition relationship and technically, allows a folder to be subfolder of itself.

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/associations/composition/images/folder.png" height="80" />
<p/>

</tip-box>

</div>

</div>
