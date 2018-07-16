<panel header="{{ icon_Q_A }} Which activity diagrams are correct?">
<question>

Which of these activity diagrams use the correct UML notation?

- [ ] i 
- [ ] ii
- [ ] iii
- [ ] iv

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/parallelPaths/images/q-correctNotation.png" width="500" />
<p/>

<div slot="answer">

* i : :+1: Correct. There can be more than two parallel paths. 
* ii : Incorrect. All parallel paths that started from a fork should end in the same join node.
* iii : Incorrect. Parallel paths must end with a join node.
* iv : :+1: Correct. A parallel path can have multiple actions.

</div>
</question>
</panel>
