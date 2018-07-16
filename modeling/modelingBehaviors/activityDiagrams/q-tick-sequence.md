<panel header="{{ icon_Q_A }} Which sequences are not allowed?">
<question>

Which of these sequence of actions is not allowed by the given activity diagram?

- [ ] i. start a b c d end
- [ ] ii. start a b c d e f g c d end
- [ ] iii. start a b c d e  g f c d end
- [ ] iv. start a b c d g c d end

<img src="{{baseUrl}}/modeling/modelingBehaviors/activityDiagrams/images/sequence.png" height="190" />
<p/>

<div slot="answer">

(iv)

Explanation: `-e-f-` and `-g-` are parallel paths. Both paths should complete before the execution reaches `c` again.

</div>
</question>
</panel>
