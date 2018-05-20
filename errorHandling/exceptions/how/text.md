<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### How :two:

</div>

<div id="body">

**Most languages allow a method/function to encapsulate the unusual situation in an Exception object and 'throw'/'raise' that object so that another piece of code can 'catch' it and deal with it.** This is especially useful when code segment that encountered the unusual situation does not know how to deal with it.

**Exception objects can propagate up the function call hierarchy until it is dealt with.** Usually, an exception thrown by a function is caught by the caller function. If the called function does not know how to deal with the exception it caught, it can throw/raise the Exception object to its own caller. If none of the callers is prepared to deal with the exception, the exceptions can propagate through the <tooltip content="the hieararchy of function calls">function call stack</tooltip> until it is received by the main function and thrown to the runtime, thus halting the system. 

<tip-box>

<tabs> 
  <tab header="Java">

:package: In the code given below, `processArray` can potentially throw an `InvalidInputException`. Because of that, `processInput` method invokes `processArray` method inside a `try{  }` block and has a `catch{  }` block to specify what to do if the exception is actually thrown.

<img src="{{baseUrl}}/errorHandling/exceptions/how/images/processInput.png" width="400" />
<p/>

  </tab>
  <tab header="Python">

:package: In the code given below, `process_array` function can potentially raise a `ValueError` exception. Because of that, `process_input` function invokes `process_array` function inside a `try` clause and has a `except` clause to specify what to do if the exception is actually raised.

<img src="{{baseUrl}}/errorHandling/exceptions/how/images/example-python.png" width="400"/>

  </tab>
</tabs><hr>



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
