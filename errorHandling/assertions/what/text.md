<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain assertions</span>

<div id="body">

**_Assertions_ are used to define assumptions about the program state so that the runtime can verify them.** An assertion failure indicates a possible bug in the code %%because the code has resulted in a program state that violates an assumption about how the code _should_ behave%%.

<box>

{{ icon_example }} An assertion can be used to express something like _when the execution comes to this point, the variable `v` cannot be null_.

</box>

**If the runtime detects an _assertion failure_, it typically takes some drastic action** such as terminating the execution with an error message. This is because an assertion failure indicates a possible bug and the sooner the execution stops, the safer it is.

<box>

{{ icon_example }} In the Java code below, suppose you set an assertion that `timeout` returned by `Config.getTimeout()` is greater than `0`. Now, if `Config.getTimeout()` returns `-1` in a specific execution of this line, the runtime can detect it as an _assertion failure_ -- i.e., an assumption about the expected behavior of the code turned out to be wrong which could potentially be the result of a bug -- and take some drastic action such as terminating the execution.

```java{.no-line-numbers}
int timeout = Config.getTimeout();
// set assertion here ...
```

</box>

</div>

<div id="extras">
</div>
