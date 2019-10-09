<span id="title">Associations as Attributes</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can show an association as an attribute</span>

<div id="body">

**An association can be shown as an attribute instead of a line.** 

Association multiplicities and the default value too can be shown as part of the attribute using the following notation. Both are optional. 

`name: type [multiplicity]  = default value`

<box>

{{ icon_example }} The diagram below depicts a multi-player _Square Game_ being played on a board comprising of 100 squares. Each of the squares may be occupied with any number of pieces, each belonging to a certain player. 

A `Piece` may or may not be on a `Square`.  Note how that association can be replaced by an `isOn` attribute of the `Piece` class. The `isOn` attribute can either be `null` or hold a reference to a `Square` object, matching the `0..1` multiplicity of the association it replaces. The default value is `null`.

<img src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/what/images/squareMultiplicity.png" width="600" />
<p/>

The association that a `Board` has 100 `Square`s can be shown in either of these two ways:

<img src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/what/images/board.png" height="70" />
<p/>

</box>

{{ icon_important_big_red }} Show each association as **either an attribute or a line but not both**. A line is preferred is it is easier to spot.

</div>

<div id="extras">
</div>