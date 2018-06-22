<div id="title">

#### Association Classes

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain the meaning of association classes</span>

<div id="body">

**An _association class_ represents additional information about an association.** It is a normal class but plays a special role from a design point of view.
 
<tip-box> 

{{ icon_example }} A `Man` class and a `Woman` class is linked with a ‘married to’ association and there is a need to store the date of marriage. However, that data is related to the association rather than specifically owned by either the `Man` object or the `Woman` object. In such situations, an additional association class can be introduced, e.g. a `Marriage` class, to store such information. 

<img src="{{baseUrl}}/oopDesign/associations/associationClasses/images/manWoman.png" height="120" />

</tip-box>

<panel src="../../../uml/classDiagrams/associationClasses/what/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} UML → Class Diagrams → Association Classes" expanded /><p/>


</div>

<div id="extras">
</div>