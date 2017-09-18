<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### What :two:

</div>

<div id="body">

**_Assertions_ are used to define assumptions about the program state so that the runtime can verify them.** An assertion failure indicates a possible bug in the code %%because the code has resulted in a program state that violates an assumption about how the code _should_ behave%%.

<tip-box> 

:package: An assertion can be used to express something like _when the execution comes to this point, the variable `v` cannot be null_. 

</tip-box>
 
**If the runtime detects an _assertion failure_, it typically take some drastic action** such as terminating the execution with an error message. This is because an assertion failure indicates a possible bug and the sooner the execution stops, the safer it is.

<tip-box>

:package: In the Java code below, the assertion in line 2 verifies the assumption that `timeout` returned by `Config.getTimeout()` is greater than 0. The only reason for it to return a zero or lower value in line 1 is the presence of a bug in the system.

```java
int timeout = Config.getTimeout(); // line 1
assert timeout > 0; // line 2
setTimeout(timeout); // line 3
```

</tip-box>

</div>

<div id="extras">
<div>

</div>
