<div id="title">

#### What are Exceptions?

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Java Exceptions</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

<tip-box type="definition">

<include src="../../../common/definitions.md#def-exception" />

</tip-box>

**When an error occurs within a method, the method creates an _exception object_ and hands it off to the runtime system.** The exception object contains information about the error, including its type and the state of the program when the error occurred. Creating an exception object and handing it to the runtime system is called _throwing_ an exception.

**After a method throws an exception, the runtime system attempts to find something to handle it in the <tooltip content="the ordered list of methods that had been called to get to the method where the error occurred">_call stack_</tooltip>.** The runtime system searches the call stack for a method that contains a block of code that can handle the exception. This block of code is called an _exception handler_. The search begins with the method in which the error occurred and proceeds through the call stack in the reverse order in which the methods were called. When an appropriate handler is found, the runtime system passes the exception to the handler. An exception handler is considered appropriate if the type of the exception object thrown matches the type that can be handled by the handler.

**The exception handler chosen is said to _catch_ the exception.** If the runtime system exhaustively searches all the methods on the call stack without finding an appropriate exception handler, the program terminates.

**Java code must honor the _Catch or Specify_ Requirement.** This means that code that might throw certain exceptions must be enclosed by either of the following:
* A `try` statement that catches the exception. The `try` must provide a handler for the exception.
* A method that specifies that it can throw the exception. The method must provide a `throws` clause that lists the exception.

**There are three basic categories of exceptions, only one of which is subject to the 'Catch or Specify' Requirement.**

* **_Checked_ exceptions**: These are exceptional conditions that a well-written application should anticipate and recover from. For example, suppose an application prompts a user for an input file name, then opens the file by passing the name to the constructor for java.io.FileReader. Normally, the user provides the name of an existing, readable file, so the construction of the `FileReader` object succeeds, and the execution of the application proceeds normally. But sometimes the user supplies the name of a nonexistent file, and the constructor throws `java.io.FileNotFoundException`. A well-written program will catch this exception and notify the user of the mistake, possibly prompting for a corrected file name.
  * ==Checked exceptions are subject to the Catch or Specify Requirement.==
  * All exceptions are checked exceptions, except for `Error`, `RuntimeException`, and their subclasses.
<p/>

* **Errors**: These are exceptional conditions that are external to the application, and that the application usually cannot anticipate or recover from. For example, suppose that an application successfully opens a file for input, but is unable to read the file because of a hardware or system malfunction. The unsuccessful read will throw `java.io.IOError`. An application might choose to catch this exception, in order to notify the user of the problem — but it also might make sense for the program to print a stack trace and exit.
  * Errors are not subject to the 'Catch or Specify' Requirement.
  * Errors are those exceptions indicated by `Error` and its subclasses.
<p/>

* **Runtime exceptions**: These are exceptional conditions that are internal to the application, and that the application usually cannot anticipate or recover from. These usually indicate programming bugs, such as logic errors or improper use of an API. For example, consider the application described previously that passes a file name to the constructor for FileReader. If a logic error causes a null to be passed to the constructor, the constructor will throw `NullPointerException`. The application can catch this exception, but it probably makes more sense to eliminate the bug that caused the exception to occur.
  * Runtime exceptions are not subject to the 'Catch or Specify' Requirement.
  * Runtime exceptions are those indicated by `RuntimeException` and its subclasses.

**Errors and runtime exceptions are collectively known as _unchecked_ exceptions.**

</blockquote>

</div>

<div id="extras">
</div>