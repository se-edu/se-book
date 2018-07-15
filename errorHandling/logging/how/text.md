<div id="title">

#### How

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use logging</span>

<div id="body">

**Most programming environments come with logging systems that allow sophisticated forms of logging.** They have features such as the ability to enable and disable logging easily or to change the logging <tooltip content="how much information to record">intensity</tooltip>.

<tip-box>

{{ icon_example }} This sample Java code uses Java’s default logging mechanism. 

First, import the relevant Java package:
```java
import java.util.logging.*;
```

Next, create a `Logger`:
```java
private static Logger logger = Logger.getLogger("Foo");
```

Now, you can use the `Logger` object to log information. Note the use of <popover content="`INFO`, `WARNING` etc.">logging level</popover>  for each message. When running the code, the logging level can be set to `WARNING` so that log messages specified as `INFO` level (which is a lower level than `WARNING`) will not be written to the log file at all.

```java
// log a message at INFO level
logger.log(Level.INFO, "going to start processing");
//...
processInput();
if(error){
    //log a message at WARNING level
    logger.log(Level.WARNING, "processing error", ex);
}
//...
logger.log(Level.INFO, "end of processing");
```
</tip-box>

</div>

<div id="extras">
  <include src="resources.md" />
</div>