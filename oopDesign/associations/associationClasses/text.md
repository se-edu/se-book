<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Associations :arrow_right:</div>

<div id="title">

#### Association Classes :three:

</div>

<div id="body">

At times, there is a need to store additional information about an association. For example, a `Man` class and a `Woman` class linked with a ‘married to’ association might also require the date of marriage to be stored. However, that data is related to the association but not specifically owned by either the `Man` object or the `Woman` object. In such situations, an additional class can be introduced, e.g. a `Marriage` class, to store such information. These classes are called _association classes_.

<dynamic-panel src="../../../uml/classDiagrams/associationClasses/topicPanel.md" header="UML: Class Diagrams: Association Classes" is-open></dynamic-panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/associations/associationClasses/images/manWoman.png" height="120" />
<p/>

</tip-box>

</div>

</div>
