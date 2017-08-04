<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling &rarr; Assertions &rarr;</div>

<div id="title">

#### What :two:

</div>

<div id="body">

Assertions are **used to confirm assumptions about the program state**. An assertion can be used to express something like ‘when the execution comes to this point, the variable v cannot be null’. This implies that if v is null at that point, the code has a bug. If the runtime detects such an ‘assertion failure’ (think of it as an ‘assumption violation), the runtime will typically take some drastic action such as terminating the execution with an error message. This is because an assertion failure is a confirmation of the code having a bug and the sooner the execution stops, the safer it is.

<tip-box>

Example:

```java
int timeout = Config.getTimeout(); // line 1
assert timeout > 0; // line 2
setTimeout(timeout); // line 3
```

In the Java code given above, the assertion in line 2 verifies the assumption that `timeout` returned by `Config.getTimeout()` is greater than 0. The only reason for it to return a zero or lower value in line 1 is the presence of a bug in the system.

</tip-box>

</div>

<div id="extras">
<div>

</div>
