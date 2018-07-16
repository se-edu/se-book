<div id="title">

#### Usage

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can optimize the use of use cases</span>

<div id="body">

**You can use actor generalization in use case diagrams** using a symbol similar to that of UML notation for inheritance. 

<tip-box> 

{{ icon_example }} In this example, actor `Blogger` can do all the use cases the actor `Guest` can do, as a result of the actor generalization relationship given in the diagram.

<img src="{{baseUrl}}/specifyingRequirements/useCases/usage/images/actorGeneralisation.png" height="250" />
</tip-box>

:bulb: Do not over-complicate use case diagrams by trying to include everything possible. A use case diagram is a brief summary of the use cases that is used as a starting point. Details of the use cases can be given in the use case descriptions.

**Some include ‘System’ as an actor to indicate that something is done by the system itself without being initiated by a user or an external system.** 

<tip-box> 

{{ icon_example }} The diagram below can be used to indicate that the system generates daily reports at midnight.

<img src="{{baseUrl}}/specifyingRequirements/useCases/usage/images/systemAsActor.jpg" height="200" />

</tip-box> 


However, others argue that only use cases providing value to an external user/system should be shown in the use case diagram. For example, they argue that ‘view daily report’ should be the use case and  `generate daily report` is not to be shown in the use case diagram because it is simply something the system has to do to support the `view daily report` use case.

We recommend that you follow the latter view (i.e. not to use System as a user). Limit use cases for modeling behaviors that involve an external actor.

**UML is not very specific about the text contents of a use case.** Hence, there are many styles for writing use cases. For example, the steps can be written as a continuous paragraph.
Use cases should be easy to read. Note that there is no strict rule about writing all details of all steps or a need to use all the elements of a use case.

**There are some advantages of documenting system requirements as use cases:**

* Because they use a simple notation and plain English descriptions, they are easy for users to understand and give feedback.
* They decouple user intention from mechanism (note that use cases should not include UI-specific details), allowing the system designers more freedom to optimize how a functionality is provided to a user.
* Identifying all possible extensions encourages us to consider all situations that a software product might face during its operation.
* Separating typical scenarios from special cases encourages us to optimize the typical scenarios.

**One of the main disadvantages of use cases is that they are not good for capturing requirements that does not involve a user interacting with the system.** Hence, they should not be used as the sole means to specify requirements.

</div>

<div id="extras">

<include src="exercises.md" />

</div>