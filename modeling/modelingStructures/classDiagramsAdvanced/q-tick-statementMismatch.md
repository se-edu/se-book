<panel header=":lock::key: Which one of the statement below does not match the class diagram.">
<question>

Which one of the statement below does not match the class diagram.

<img src="{{baseUrl}}/modeling/modelingStructures/classDiagramsAdvanced/images/mismatch.png" height="290" />
<p/>

- [ ] a. A Snake must belong to at least one board.
- [ ] b. A SnakeHeadSquare can contain only one Snake head.
- [ ] c. A Square can contain a Snake head.
- [ ] d. A Snake head can be in more than one SnakeHeadSquare
- [ ] e. The Board has exactly 5 snakes.


<div slot="answer">

- [x] a. A Snake must belong to at least one board.
- [ ] b. A SnakeHeadSquare can contain only one Snake head.
- [ ] c. A Square can contain a Snake head.
- [ ] d. A Snake head can be in more than one SnakeHeadSquare
- [ ] e. The Board has exactly 5 snakes.

Explanation:

(a) does not match because a Snake may or may not belong to a board (multiplicity is 0..1).
(b) matches the diagram because the multiplicity given in 1.
(c) matches the diagram because SnakeHeadSquare is a Sqaure (due to inheritance).
(d) matches the diagram because the multiplicity given is * .
(e) matches the diagram because the multiplicity given in 5.

</div>
</question>
</panel>
