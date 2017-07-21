<div id="path">UML :arrow_right: Class Diagrams :arrow_right:</div>

<div id="title">

#### What :three:

</div>

<div id="body">

An attribute is sometimes used to represent an association. The diagram below depicts a multiplayer _Square Game_ being played on a board comprising of one hundred squares. Each of the squares may be occupied with any number of Pieces, each belonging to a certain player. A piece may or may not be on a square.  Note how the association `’is on’` can be replaced by an `isOn` attribute of the `Piece` class. In order to realize the 0..1 multiplicity, the isOn attribute can either be null or hold a reference to a Square object.

<tip-box>

<img src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/what/images/squareMultiplicity.png" height="300" />
<p/>

</tip-box>

In addition, association multiplicities of two or more can be made as part of the attribute using

* name: type ==[multiplicity]==  = default value

<tip-box>

<img src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/what/images/board.png" height="70" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>

</div>
