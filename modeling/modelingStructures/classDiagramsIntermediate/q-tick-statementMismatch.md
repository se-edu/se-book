<panel header="{{ icon_Q_A }} Statements about class diagrams">

Which of these statements match the class diagram?

<puml eager src="{{baseUrl}}/modeling/modelingStructures/classDiagramsIntermediate/images/snakes-board-piece.puml" height="290" />
<p/>

- [ ] a. A `Snake` must belong to exactly one `Board`.
- [ ] b. A `Piece` can be not on a `Board`.
- [ ] c. A `Board` can have up to two `Piece`s.
- [ ] d. A `SnakeHeadSquare` contains exactly one `Snake`'s head.
- [ ] e. A `Board` can have 100 or fewer `Square`s.
- [ ] f. A `SnakeTailSquare` may or may not contain a tail of a `Snake`
- [ ] g. The `Board` can have two `Snake`s.


<panel type="seamless" header="{{ icon_A }} Answer" minimized>

(a)(b)(c)(d)~~(e)(f)(g)~~

Explanation:

(a) matches (multiplicity is `1`)<br>
(b) matches (multiplicity is `0..1` which means a `Piece` can be on `0` `Board`s)<br>
(c) matches (multiplicity is `0..2`)<br>
(d) matches (multiplicity is `1`)<br>
(e) doesn't match (a `Board` must have exactly 100 `Square`s)<br>
(f) doesn't match (multiplicity is `1`, not `0..1`)<br>
(g) doesn't match (multiplicity is `3..5`, which doesn't include `2`)<br>


</panel>
</panel>
