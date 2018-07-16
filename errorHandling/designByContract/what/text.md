<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Design-by-Contract approach</span>

<div id="title">

#### Design by Contract

</div>

<div id="body">

**<tooltip content="term was coined by Bertrand Meyer">Design by contract (DbC)</tooltip> is an approach for designing software that requires defining formal, precise and verifiable interface specifications for software components.** 

Suppose an operation is implemented with the behavior specified precisely in the API (preconditions, post conditions, exceptions etc.). When following the defensive approach, the code should first check if the preconditions have been met. Typically, exceptions are thrown if preconditions are violated. In contrast, the _Design-by-Contract (DbC)_ approach to coding assumes that it is the responsibility of the caller to ensure all preconditions are met. The operation will honor the contract only if the preconditions have been met. If any of them have not been met, the behavior of the operation is "unspecified". 

Languages such as Eiffel have native support for DbC. For example, preconditions of an operation can be specified in Eiffel and the language runtime will check precondition violations without the need to do it explicitly in the code. To follow the DbC approach in languages such as Java and C++ where there is no built-in DbC support, assertions can be used to confirm pre-conditions.

</div>

<div id="extras">

<include src="exercises.md" />

</div>