<panel header="{{ icon_Q_A }} setWife">
<question has-input="true">

Use equivalence partitions and boundary values to choose test inputs for testing the setWife operation in the Man class.

<img src="{{baseUrl}}/testCaseDesign/summary/exercises/images/manWoman.png" height="90" />
<p/>

<div slot="answer">

<img src="{{baseUrl}}/testCaseDesign/summary/exercises/images/manWomanPartitions.png" height="300" />
<p/>

Partitioning ‘married’ as ‘to same woman’ and ‘to different woman’ seems redundant at first. Arguments for having it:

* The behavior (e.g. the error message shown) may be different in those two situations.
* The ‘to same woman’ partition has a risk of misunderstanding between developer and user. For example, the developer might think it is OK to ignore the request while the users might expect to see an error message.

</div>
</question>
</panel>
