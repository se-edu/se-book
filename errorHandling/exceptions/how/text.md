<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### How :two:

</div>

<div id="body">

**Most languages allow a method to encapsulate the unusual situation in an Exception object and 'throw' that object so that another piece of code can 'catch' it and deal with it.** This is especially useful when code segment that encountered the unusual situation does not know how to deal with it.

**Exception objects can propagate up the method call hierarchy until it is dealt with.** Usually, an exception thrown by a method is caught by the caller method. If the called method does not know how to deal with the exception it caught, it will throw the Exception object to its own caller. If none of the callers is prepared to deal with the exception, the exceptions can propagate through the method call stack until it is received by the main method and thrown to the runtime, thus halting the system. 

<tip-box>

:package: In the code given below, `processArray` can potentially throw an `InvalidInputException`. Because of that, `processInput` method invokes `processArray` method inside a `try{  }` block and has a `catch{  }` block to specify what to do if the exception is actually thrown.

<img src="{{baseUrl}}/errorHandling/exceptions/how/images/processInput.png" height="320" />
<p/>

</tip-box>

Advantages of exception handling in this way:

* The ability to propagate error information through the call stack.
* The separation of code that deals with 'unusual' situations from the code that does the 'usual' work.

</div>

<div id="extras">

<include src="resources.md" />
<include src="exercises.md" />

</div>

</div>
