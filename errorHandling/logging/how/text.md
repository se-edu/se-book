<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### How :two:

</div>

<div id="body">

**Most programming environments come with logging systems that allow sophisticated forms of logging.** They have features such as the ability to enable and disable logging easily or to change the logging <tooltip content="how much information to record">intensity</tooltip>.

<tip-box>

:package: This sample Java code uses Java’s default logging mechanism. When running the code, the logging level can be set to `WARNING` so that log messages specified as `INFO` level (which is a lower level than `WARNING`) will not be written to the log file at all.

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
  <include src="resources.md" />
<div>

</div>
