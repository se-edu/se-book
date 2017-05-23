<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

### Putting use cases into good use

<div id="main">

**More on use case diagrams**

Actor generalization

<img src="{{baseUrl}}/requirements/useCases/usage/images/ActorGeneralisation.png" height="250" />

<p/>

Do not over-complicate use case diagrams.

**System as an actor**

Some include ‘System’ as an actor to indicate that something is done by the system itself without being initiated by a user or an external system. For example, the diagram below can be used to indicate that the system generates daily reports at midnight.

<img src="{{baseUrl}}/requirements/useCases/usage/images/SystemAsActor.jpg" height="250" />

<p/>

However, others argue that only use cases providing value to an external user/system should be shown in the use case diagram. For example, they argue that ‘view daily report’ should be the use case and  ‘generate daily report’ is not to be shown in the use case diagram because it is simply something the system has to do to support the ‘view daily report’ use case.

We recommend that you follow the latter view (i.e. not to use System as a user). Limit use cases for modeling behaviors that involve an external actor.

**More on use case descriptions**

UML is not very specific about the text contents of a use case. Hence, there are many styles for writing use cases. For example, the steps can be written as a continuous paragraph.
Use cases should be easy to read. Note that there is no strict rule about writing all details of all steps or a need to use all the elements of a use case.

**Pros and cons**

Here are some of the advantages of documenting system requirements as use cases:

*	Since they use a simple notation and plain English descriptions, they are easy for users to understand and give feedback.
*	They decouple user intention from mechanism (note that use cases should not include UI-specific details), allowing the system designers more freedom to optimize how a functionality is provided to a user.
*	Identifying all possible extensions encourages us to consider all situations that a software product might face during its operation.
*	Separating typical scenarios from special cases encourages us to optimize the typical scenarios.

One of the main disadvantages of use cases is that they are not good for capturing requirements that does not involve a user interacting with the system. Hence, they should not be used as the sole means to specify requirements.


</div>

</div>
