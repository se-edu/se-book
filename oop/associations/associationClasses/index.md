<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Associations: Association Classes

<div id="main">

At times, there is a need to store additional information about an association. For example, a `Man` class and a `Woman` class linked with a ‘married to’ association might also require the date of marriage to be stored. However, that data is related to the association but not specifically owned by either the `Man` object or the `Woman` object. In such situations, an additional class can be introduced, e.g. a `Marriage` class, to store such information. These classes are called _association classes_.

<panel header="UML: Class Diagrams: Association Classes">
  <include src="../../../uml/classDiagrams/associationClasses/topicPanel.md" />
</panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oop/associations/associationClasses/images/manWoman.png" height="120" />
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
