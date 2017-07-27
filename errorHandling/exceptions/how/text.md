<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling :arrow_right: Exceptions :arrow_right:</div>

<div id="title">

#### How :two:

</div>

<div id="body">

However, the code segment that encountered the unusual situation might not know how to recover from it. That is why most languages allow a method to encapsulate the unusual situation in an Exception object and ‘throw’ that object so that another piece of code can ‘catch’ it and deal with it. Usually, an exception thrown by a method is caught by the caller method. If the called method does not know how to deal with the exception it caught, it will throw the Exception object to its own caller. If none of the callers is prepared to deal with the exception, the exceptions can propagate through the method call stack until it is received by the main method and thrown to the runtime, thus halting the system. In the Java code given below, `processArray` can potentially throw an `InvalidInputException`. Because of that, `processInput` method invokes `processArray` method inside a `try{  }` block and has a `catch{  }` block to specify what to do if the exception is actually thrown.

<tip-box>

Example:

<img src="{{baseUrl}}/errorHandling/exceptions/how/images/processInput.png" height="320" />
<p/>

</tip-box>

Advantages of exception handling in this way:

*	The ability to propagate error information through the call stack.
*	The separation of code that deals with ‘unusual’ situations from the code that does the ‘usual’ work.

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
