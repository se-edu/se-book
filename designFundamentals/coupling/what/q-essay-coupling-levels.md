<panel header="{{ icon_Q_A }} Coupling levels of alternative designs">
<question has-input="true">

Discuss the coupling levels of alternative designs _x_ and _y_.

<tip-box>

<img src="{{baseUrl}}/designFundamentals/coupling/what/images/alternativeDesigns.png" height="180" />
<p/>

</tip-box>

<div slot="answer">

Overall coupling levels in _x_ and _y_ seem to be similar (neither has more dependencies than the other). (Note that the number of dependency links is not a definitive measure of the level of coupling. Some links may be stronger than the others.). However, in _x_, `A` is highly-coupled to the rest of the system while `B`, `C`, `D`, and `E` are standalone (do not depend on anything else). In _y_, no component is as highly-coupled as `A` of _x_. However, only `D` and `E` are standalone.

</div>
</question>
</panel>
