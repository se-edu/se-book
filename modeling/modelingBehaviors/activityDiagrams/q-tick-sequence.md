<panel header="{{ icon_Q_A }} Which sequences are not allowed?">

Which of these sequences of actions is not allowed by the given activity diagram?

- [ ] i. start a b c d end
- [ ] ii. start a b c d e f g c d end
- [ ] iii. start a b c d e  g f c d end
- [ ] iv. start a b c d g c d end

<pic eager src="{{baseUrl}}/modeling/modelingBehaviors/activityDiagrams/images/sequence.png" height="190" />
<p/>

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

(iv)

Explanation: `-e-f-` and `-g-` are parallel paths. Both paths should complete before the execution reaches `c` again.

</panel>
</panel>
