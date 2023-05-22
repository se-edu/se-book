<span id="title">Associations as attributes</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can show an association as an attribute</span>

<div id="body">

**An association can be shown as an attribute instead of a line.**

Association multiplicities and the default value can be shown as part of the attribute using the following notation. Both are optional.

`name: type [multiplicity]  = default value`

<box>

{{ icon_example }} The diagram below depicts a multi-player _Square Game_ being played on a board comprising of 100 squares. Each of the squares may be occupied with any number of pieces, each belonging to a certain player.

A `Piece` may or may not be on a `Square`.  Note how that association can be replaced by an `isOn` attribute of the `Piece` class. The `isOn` attribute can either be `null` or hold a reference to a `Square` object, matching the `0..1` multiplicity of the association it replaces. The default value is `null`.

<pic src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/what/images/squareMultiplicity.png" width="600" />
<p/>

The association that a `Board` has 100 `Square`s can be shown in either of these two ways:

<pic src="{{baseUrl}}/uml/classDiagrams/associationsAsAttributes/what/images/board.png" height="70" />
<p/>

</box>

{{ icon_important_big_red }} Show each association as **either an attribute or a line but not both**. A line is preferred as it is easier to spot.

<box>

{{ icon_example }} Diagram (a) given below shows the 'author' association between the `Book` class and the `Person` class as a line while (b) shows the same association as an attribute in the `Book` class. Both are correct and the two are equivalent. But (c) is not correct as it uses both a line and an attribute to show the same association.

{{ icon_tick_green }} (a) <puml src="images/cd-BookAuthor1.puml" /><br>
{{ icon_tick_green }} (b) <puml src="images/cd-BookAuthor2.puml" /><br>
{{ icon_x_red }} (c) <puml src="images/cd-BookAuthor3.puml" />

</box>

</div>

<div id="extras">
</div>
