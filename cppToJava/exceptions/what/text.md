<div id="title">

#### What are Exceptions?

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Java Exceptions</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with some adaptations.

<div class="indented">

**There are three basic categories of exceptions In Java:**

* **==_Checked_ exceptions==: exceptional conditions that a well-written application should anticipate and recover from.** All exceptions are checked exceptions, except for `Error`, `RuntimeException`, and their subclasses.

<div class="indented-level2">
<box>

{{ icon_example }} Suppose an application prompts a user for an input file name, then opens the file by passing the name to the constructor for java.io.FileReader. Normally, the user provides the name of an existing, readable file, so the construction of the `FileReader` object succeeds, and the execution of the application proceeds normally. But sometimes the user supplies the name of a nonexistent file, and the constructor throws `java.io.FileNotFoundException`. A well-written program will catch this exception and notify the user of the mistake, possibly prompting for a corrected file name.

</box>
</div>
<p/>

* **==_Errors_==: exceptional conditions that are external to the application, and that the application usually cannot anticipate or recover from.** Errors are those exceptions indicated by `Error` and its subclasses.

<div class="indented-level2">
<box>

{{ icon_example }} Suppose that an application successfully opens a file for input, but is unable to read the file because of a hardware or system malfunction. The unsuccessful read will throw `java.io.IOError`. An application might choose to catch this exception, in order to notify the user of the problem — but it also might make sense for the program to print a stack trace and exit.

</box>
</div>
<p/>

* **==_Runtime exceptions_==: conditions that are internal to the application, and that the application usually cannot anticipate or recover from.** Runtime exceptions are those indicated by `RuntimeException` and its subclasses. These usually indicate programming bugs, such as logic errors or improper use of an API.

<div class="indented-level2">
<box>

{{ icon_example }} Consider the application described previously that passes a file name to the constructor for FileReader. If a logic error causes a null to be passed to the constructor, the constructor will throw `NullPointerException`. The application can catch this exception, but it probably makes more sense to eliminate the bug that caused the exception to occur.

</box>
</div>
<p/>

**Errors and runtime exceptions are collectively known as ==_unchecked_ exceptions==.**

</div>

</div>

<div id="extras">
</div>