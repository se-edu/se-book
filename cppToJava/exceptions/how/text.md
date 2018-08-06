<div id="title">

#### How to Use Exceptions

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use Java Exceptions</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

**A program can catch exceptions by using a combination of the `try`, `catch`, and `finally` blocks.** Here is an example:

```java
public void writeList() {
    PrintWriter out = null;

    try {
        System.out.println("Entering" + " try statement");

        out = new PrintWriter(new FileWriter("OutFile.txt"));
        for (int i = 0; i < SIZE; i++) {
            out.println("Value at: " + i + " = " + list.get(i));
        }
    } catch (IndexOutOfBoundsException e) {
        System.err.println("Caught IndexOutOfBoundsException: " + e.getMessage());

    } catch (IOException e) {
        System.err.println("Caught IOException: " +  e.getMessage());

    } finally {
        if (out != null) {
            System.out.println("Closing PrintWriter");
            out.close();
        } else {
            System.out.println("PrintWriter not open");
        }
    }
}
```

* The `try` block identifies a block of code in which an exception can occur.
* The `catch` block identifies a block of code, known as an exception handler, that can handle a particular type of exception.
* The `finally` block identifies a block of code that is guaranteed to execute, and is the right place to close files, recover resources, and otherwise clean up after the code enclosed in the try block.
* The `try` statement should contain at least one `catch` block or a finally block and may have multiple `catch` blocks.

* The class of the exception object indicates the type of exception thrown. The exception object can contain further information about the error, including an error message.

**You can use the `throw` statement to throw an exception.** The throw statement requires a single argument: a throwable object. Throwable objects are instances of any subclass of the `Throwable` class. Here's an example of a throw statement.

```java
if (size == 0) {
    throw new EmptyStackException();
}
```

**If the a method doesn't catch the checked exceptions that can occur within it, it must specify that it can throw these exceptions** using a `throws` clause. Here's an example.

```java
public void writeList() throws IOException, IndexOutOfBoundsException {
    PrintWriter out = new PrintWriter(new FileWriter("OutFile.txt"));
    for (int i = 0; i < SIZE; i++) {
        out.println("Value at: " + i + " = " + list.get(i));
    }
    out.close();
}
```

</blockquote>

</div>

<div id="extras">
</div>