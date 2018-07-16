<panel header="{{ icon_Q_A }} Which activity diagrams are correct?">
<question>

Which of these activity diagrams use the correct UML notation?

- [ ] i 
- [ ] ii
- [ ] iii
- [ ] iv
- [ ] v
- [ ] vi

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/q-correctNotation1.png" width="500" />
<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/q-correctNotation2.png" width="500" />
<p/>

<div slot="answer">

* i : :+1: Correct. There can be more than two alternate paths. 
* ii : :+1: Correct. An alternate path can divide into more branches.
* iii : :+1: Correct. A branch can join other branches.
* iv : Incorrect. At `x=5` both guard conditions become true.
* v : :+1: Correct. It is fine for a branch to form a loop by going back to the original branch node.
* iv : Incorrect. Guard conditions should be given in square brackets.

</div>
</question>
</panel>
