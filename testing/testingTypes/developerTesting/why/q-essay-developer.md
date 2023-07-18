<panel header="{{ icon_Q_A }} Implications of developers testing their own code">
<question type="text">

Discuss the pros and cons of developers testing their own code.

<div slot="answer">

Pros:

* Can be done early (the earlier we find a bug, the cheaper it is to fix).
* Can be done at lower levels, for example, at the operation and class levels (testers usually test the system at the UI level).
* It is possible to do more thorough testing because developers know the expected external behavior as well as the internal structure of the component.
* It forces developers to take responsibility for their own work (they cannot claim that "testing is the job of the testers").

Cons:

* A developer may subconsciously only test situations that he knows to work (i.e. test it too 'gently').
* A developer may be blind to his own mistakes (if he did not consider a certain combination of input while writing the code, it is possible for him to miss it again during testing).
* A developer may have misunderstood what the SUT is supposed to do in the first place.
* A developer may lack the testing expertise.

</div>
</question>
</panel>
