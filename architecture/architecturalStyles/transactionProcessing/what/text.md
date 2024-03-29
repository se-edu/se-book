<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can identify transaction processing architectural style</span>

<div id="body">

**The _transaction processing_ style divides the workload of the system down to a number of _transactions_ which are then given to a _dispatcher_ that controls the execution of each transaction.** Task queuing, ordering, undo etc. are handled by the dispatcher.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/transactionProcessing/what/images/transactionProcessing.png" height="120" />

<box>

{{ icon_example }} In this example from a banking system, transactions are generated by the terminals used by <tooltip content="employees of a bank who deal directly with customers">tellers</tooltip>, which are then sent to a central dispatching unit, which in turn dispatches the transactions to various other units to execute.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/transactionProcessing/what/images/transactionProcessingExamples.png" height="120" />

</box>

</div>

<div id="extras">
</div>
