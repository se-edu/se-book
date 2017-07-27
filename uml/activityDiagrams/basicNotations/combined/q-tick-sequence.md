<panel header=":lock::key: Which of these sequence of actions is not allowed by the given activity diagram?">
<question>

Which of these sequence of actions is not allowed by the given activity diagram?

- [ ] a. start a b c d end
- [ ] b. start a b c d e f g c d end
- [ ] c. start a b c d e  g f c d end
- [ ] d. start a b c d g c d end

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/combined/images/sequence.png" height="190" />
<p/>

<div slot="answer">

- [ ] a. start a b c d end
- [ ] b. start a b c d e f g c d end
- [ ] c. start a b c d e  g f c d end
- [x] d. start a b c d g c d end

Explanation: ‘-e-f-’ and ‘-g-’ are parallel paths. Both paths should complete before the execution reaches c again.

</div>
</question>
</panel>
