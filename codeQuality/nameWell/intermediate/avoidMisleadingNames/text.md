{% from "common/macros.njk" import show_example with context %}
<span id="title">Avoid misleading names</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: avoid misleading names </span>

<div id="body">

**Related things should be named similarly, while unrelated things should NOT.**

{% call show_example() %}
Consider these variables:
* `colorBlack`: hex value for color black
* `colorWhite`: hex value for color white
* `colorBlue`: number of times blue is used
* `hexForRed`: hex value for color red

This is misleading because `colorBlue` is named similarly to `colorWhite` and `colorBlack` but has a different purpose while `hexForRed` is named differently but has a very similar purpose to the first two variables. The following is better:
* `hexForBlack` `hexForWhite` `hexForRed`
* `blueColorCount`
{% endcall %}

Avoid misleading or ambiguous names (e.g., those with multiple meanings), similar-sounding names, hard-to-pronounce ones (e.g., avoid ambiguities like "is that a lowercase L, capital I or number 1?", or "is that number 0 or letter O?"), almost similar names.

{% call show_example() %}
Names that are misleading, ambiguous, or hard to say:

| {{bad}}        | {{good}}        |  Reason      |
| --------------- | --------------- |  --------------- |
|`phase0`  |`phaseZero`  |  Is that zero or letter O? |
|`rwrLgtDirn`  |`rowerLegitDirection`  |  Hard to pronounce |
|`right` `left` `wrong`  |`rightDirection` `leftDirection` `wrongResponse`  |  `right` is for 'correct' or 'opposite of 'left'? |
|`redBooks` `readBooks`  |`redColorBooks` `booksRead` |  `red` and `read` (past tense) sound the same |
|`FiletMignon`  |`egg` |  If the requirement is just a name of a food, `egg` is a much easier choice to type/say than `FiletMignon` |
{% endcall %}


</div>

<div id="extras">
</div>
