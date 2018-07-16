<panel header="{{ icon_Q_A }} Statements about class diagram.">
<question>

Which of these statements match the class diagram?

<img src="{{baseUrl}}/modeling/modelingStructures/classDiagramsIntermediate/images/mismatch.png" height="290" />
<p/>

- [ ] a. A `Snake` must belong to at least one `Board`.
- [ ] b. A `SnakeHeadSquare` can contain only one `Snake` head.
- [ ] c. A `Square` can contain a `Snake` head.
- [ ] d. A `Snake` head can be in more than one `SnakeHeadSquare`
- [ ] e. The `Board` has exactly 5 `Snake`s.


<div slot="answer">

~~(a)~~(b)(c)(d)(e)

Explanation:

(a) does not match because a `Snake` may or may not belong to a `Board` (multiplicity is `0..1`)<br>
(b) matches the diagram because the multiplicity given in `1`<br>
(c) matches the diagram because `SnakeHeadSquare` is a `Square` (due to inheritance)<br>
(d) matches the diagram because the multiplicity given is `*`<br>
(e) matches the diagram because the multiplicity given in `5`<br>

</div>
</question>
</panel>
