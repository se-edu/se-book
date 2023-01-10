<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain code reviews</span>

<div id="body">

**Code review is the systematic examination of code with the intention of finding where the code can be improved.**

Reviews can be done in various forms. Some examples below:

* **Pull Request reviews**

  * Project Management Platforms such as GitHub and BitBucket allow the new code to be proposed as _Pull Requests_ and provide the ability for others to review the code in the PR.

* **In <trigger trigger="click" for="modal:codeReview-pairProgramming">pair programming</trigger>**

  * As pair programming involves two programmers working on the same code at the same time, there is an implicit review of the code by the other member of the pair.


<modal large header="Pair Programming" id="modal:codeReview-pairProgramming">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-pair-programming" trim />
</box>

<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Pair_programming_1.jpg" width="400"/><br>
<sub>[[image credit: Wikipedia](https://en.wikipedia.org/wiki/Pair_programming)]</sub>


{{ icon_video }} A good introduction to pair programming:

@[youtube](ET3Q6zNK3Io)

</modal>

* **Formal inspections**

  * Inspections involve a group of people systematically examining project artifacts to discover defects. Members of the inspection team play various roles during the process, such as:

    * the author - the creator of the artifact
    * the moderator - the planner and executor of the inspection meeting
    * the secretary - the recorder of the findings of the inspection
    * the inspector/reviewer - the one who inspects/reviews the artifact

Advantages of code review over testing:

* It can detect functionality defects as well as other problems such as coding standard violations.
* It can verify non-code artifacts and incomplete code.
* It does not require test drivers or stubs.

Disadvantages:

* It is a manual process and therefore, error prone.

</div>

<div id="extras">
<include src="resources.md" />
</div>
