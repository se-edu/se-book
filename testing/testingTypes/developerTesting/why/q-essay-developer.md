<panel header=":lock::key: Discuss advantages and disadvantages of developers testing their own code.">
<question has-input="true">

Discuss advantages and disadvantages of developers testing their own code.

<div slot="answer">

Advantages:

* Can be done early (the earlier we find a bug, the cheaper it is to fix).
* Can be done at lower levels, for examples, at operation and class level (testers usually test the system at UI level).
* It is possible to do more thorough testing since developers know the expected external behavior as well as the internal structure of the component.
* It forces developers to take responsibility for their own work (they cannot claim that “testing is the job of the testers”).

Disadvantages:

* Developer may unconsciously test only situations that he knows to work (i.e. test it too “gently”).
* Developer may be blind to his own mistakes (if he did not consider a certain combination of input while writing code, he is likely to miss it again during testing).
* Developer may have misunderstood what the SUT is supposed to do in the first place.
* Developer may lack the testing expertise.

</div>
</question>
</panel>
