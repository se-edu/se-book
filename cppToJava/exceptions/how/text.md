<div id="title">

#### How to Use Exceptions

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java Exceptions</span>

<div id="body">
The content below uses extracts from the {{ oracle }}, with some adaptations.

**A program can catch exceptions by using a combination of the `try`, `catch` blocks.**
* The `try` block identifies a block of code in which an exception can occur.
* The `catch` block identifies a block of code, known as an exception handler, that can handle a particular type of exception.

<box>

{{ icon_example }} The `writeList()` method below calls a method `process()` that can cause two type of exceptions. It uses a try-catch construct to deal with each exception.

```java
public void writeList() {
    print("starting method");
    try {
        print("starting process");
        process();
        print("finishing process");

    } catch (IndexOutOfBoundsException e) {
        print("caught IOOBE");

    } catch (IOException e) {
        print("caught IOE");

    }
    print("finishing method");
}
```
Some possible outputs:
No exceptions {{ icon_output }} | `IOException` {{ icon_output }} | `IndexOutOfBoundsException` {{ icon_output }}
--------------------------------|---------------------------------|-----------------------------------------------
<span class="text-monospace">starting method<br>starting process<br>finishing process<br>finishing method</span> | <span class="text-monospace">starting method<br>starting process<br>~~finishing process~~<br>==caught IOE==<br>finishing method </span>| <span class="text-monospace">starting method<br>starting process<br>~~finishing process~~<br>==caught IOOBE==<br>finishing method</span>


</box>

You can **use a `finally` block to specify code that is guaranteed to execute with or without the exception.** This is the right place to close files, recover resources, and otherwise clean up after the code enclosed in the `try` block.

{{ icon_example }} The `writeList()` method below has a `finally` block:

```java
public void writeList() {
    print("starting method");
    try {
        print("starting process");
        process();
        print("finishing process");

    } catch (IndexOutOfBoundsException e) {
        print("caught IOOBE");

    } catch (IOException e) {
        print("caught IOE");

    } finally {
        // clean up
        print("cleaning up");
    }
    print("finishing method");
}
```
Some possible outputs:
No exceptions {{ icon_output }} | `IOException` {{ icon_output }} | `IndexOutOfBoundsException` {{ icon_output }}
--------------------------------|---------------------------------|-----------------------------------------------
<span class="text-monospace">starting method<br>starting process<br>finishing process<br>==cleaning up==<br>finishing method</span> | <span class="text-monospace">starting method<br>starting process<br>~~finishing process~~<br>caught IOE<br>==cleaning up==<br>finishing method </span>| <span class="text-monospace">starting method<br>starting process<br>~~finishing process~~<br>caught IOOBE<br>==cleaning up==<br>finishing method</span>

</box>


* The `try` statement should contain at least one `catch` block or a finally block and may have multiple `catch` blocks.

* The class of the exception object indicates the type of exception thrown. The exception object can contain further information about the error, including an error message.

**You can use the `throw` statement to throw an exception.** The throw statement requires a <tooltip content="Throwable objects are instances of any subclass of the `Throwable` class.">throwable</tooltip> object as the argument.

<box>

{{ icon_example }} Here's an example of a `throw` statement.

```java
if (size == 0) {
    throw new EmptyStackException();
}
```
</box>

In Java, **Checked exceptions are subject to the _Catch or Specify Requirement_**: code that might throw checked exceptions must be enclosed by either of the following:
* A `try` statement that catches the exception. The `try` must provide a handler for the exception.
* A method that specifies that it can throw the exception. The method must provide a `throws` clause that lists the exception.

Unchecked exceptions are not required to follow to the _Catch or Specify Requirement_ but you can apply the requirement to them too.

<box>

{{ icon_example }} Here's an example of a method specifying that it throws certain checked exceptions:

```java
public void writeList() throws IOException, IndexOutOfBoundsException {
    print("starting method");
    process();
    print("finishing method");
}
```
    Some possible outputs:
No exceptions {{ icon_output }} | `IOException` {{ icon_output }} | `IndexOutOfBoundsException` {{ icon_output }}
--------------------------------|---------------------------------|-----------------------------------------------
<span class="text-monospace">starting method<br>finishing method</span> | <span class="text-monospace">starting method<br>~~finishing method~~</span>| <span class="text-monospace">starting method<br>~~finishing method~~</span>

</box>

**Java comes with a collection of [built-in exception classes](https://www.geeksforgeeks.org/built-exceptions-java-examples/)** that you can use. When they are not enough, **it is possible to [create your own exception classes](https://www.javatpoint.com/custom-exception)**.

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>