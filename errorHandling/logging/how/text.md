<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling &rarr; Logging &rarr;</div>

<div id="title">

#### How :two:

</div>

<div id="body">

While it is relatively easy to implement a customized logging system (e.g. by inserting file I/O statements to write to a log file), most programming environments come with logging systems that allow more sophisticated forms of logging. For example, being able to enable and disable logging easily or to change the logging intensity/verbosity (i.e. how much information to record).

Given below is a sample Java code that uses Java’s default logging mechanism. When running the code, the logging level can be set to WARNING so that log messages specified as INFO level will not be written to the log file at all.

<tip-box>

Example:

```java
import java.util.logging.*;

public class Foo{
    // Obtain a suitable logger.
    private static Logger logger = Logger.getLogger("Foo");

    public void bar() {
        // log a message at INFO level
        logger.log(Level.INFO, "going to start processing");
        try {
            processInput();
        } catch (Exception ex) {
            //log a message at WARNING level
            logger.log(Level.WARNING, "processing error", ex);
        }
        logger.log(Level.INFO, "end of processing");
    }
}
```


</tip-box>

</div>

<div id="extras">
<div>

</div>
