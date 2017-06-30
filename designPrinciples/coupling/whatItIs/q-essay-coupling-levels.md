<panel header="Q: Discuss the coupling levels of alternative designs x and y.">
<question has-input="true">

Discuss the coupling levels of alternative designs x and y.

<tip-box>

<img src="{{baseUrl}}/designPrinciples/coupling/whatItIs/images/alternativeDesigns.png" height="180" />
<p/>

</tip-box>

<div slot="answer">

Overall coupling levels in _x_ and _y_ seem to be similar (neither has more dependencies than the other). (Note that the number of dependency links is not a definitive measure of the level of coupling. Some links may be stronger than the others.). However, in _x_, A is highly-coupled to the rest of the system while _B_, _C_, _D_, and _E_ are standalone (do not depend on anything else). In _y_, no component is as highly-coupled as _A_ of _x_. However, only _D_ and _E_ are standalone.

</div>
</question>
</panel>
