<div id="title">

#### How

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain how exception handling is done typically</span>

<div id="body">

**Most languages allow code that encountered an "exceptional" situation to encapsulate details of the situation in an _Exception_ object and _throw_/_raise_ that object so that another piece of code can _catch_ it and deal with it.** This is especially useful when the code that encountered the unusual situation does not know how to deal with it.

The extract below from the {{ oracle }} (with slight adaptations) explains how exceptions are typically handled.

<div class="indented">

**When an error occurs at some point in the execution, the code being executed creates an _exception object_ and hands it off to the runtime system.** The exception object contains information about the error, including its type and the state of the program when the error occurred. Creating an exception object and handing it to the runtime system is called _throwing_ an exception.

**After a method throws an exception, the runtime system attempts to find something to handle it in the <tooltip content="the ordered list of methods that had been called to get to the method where the error occurred">_call stack_</tooltip>.** The runtime system searches the call stack for a method that contains a block of code that can handle the exception. This block of code is called an _exception handler_. The search begins with the method in which the error occurred and proceeds through the call stack in the reverse order in which the methods were called. When an appropriate handler is found, the runtime system passes the exception to the handler. An exception handler is considered appropriate if the type of the exception object thrown matches the type that can be handled by the handler.

**The exception handler chosen is said to _catch_ the exception.** If the runtime system exhaustively searches all the methods on the call stack without finding an appropriate exception handler, the program terminates.

</div>

Advantages of exception handling in this way:
* The ability to propagate error information through the call stack.
* The separation of code that deals with 'unusual' situations from the code that does the 'usual' work.

</div>

<div id="extras">

<include src="exercises.md" />

</div>