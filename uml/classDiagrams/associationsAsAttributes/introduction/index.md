<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Associations As Attributes

<div id="main">

An attribute is sometimes used to represent an association. The diagram below depicts a multiplayer _Square Game_ being played on a board comprising of one hundred squares. Each of the squares may be occupied with any number of Pieces, each belonging to a certain player. A piece may or may not be on a square.  Note how the association `’is on’` can be replaced by an `isOn` attribute of the `Piece` class. In order to realize the 0..1 multiplicity, the isOn attribute can either be null or hold a reference to a Square object.

<tip-box>

<img src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/introduction/images/squareMultiplicity.png" height="300" />
<p/>

</tip-box>

In addition, association multiplicities of two or more can be made as part of the attribute using

* name: type ==[multiplicity]==  = default value

<tip-box>

<img src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/introduction/images/board.png" height="70" />
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

  <panel header=":laughing: Humor" expandable type="seamless">
    <include src="humor.md" />
  </panel>

</panel>

</div>
</div>
