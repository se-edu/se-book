<span id="title">When</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use assertions optimally</span>

<div id="body">

**It is recommended that assertions be used liberally in the code.** Their impact on performance is low, and worth the additional safety they provide.

**Do not use assertions to do _work_** because assertions can be disabled. If not, your program will stop working when assertions are not enabled.

<box>

{{ icon_example }} The code below will not invoke the `writeFile()` method when assertions are disabled. %%If that method is performing some work that is necessary for your program, your program will not work correctly when assertions are disabled.%%

```java{.no-line-numbers}
...
assert writeFile() : "File writing is supposed to return true";
```

</box>

**Assertions are suitable for verifying assumptions about _Internal Invariants_, _Control-Flow Invariants_,
_Preconditions_, _Postconditions_, and _Class Invariants_.** Refer to [Programming with Assertions (second half)](http://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html#usage) to learn more.

**Exceptions and assertions are two complementary ways of handling errors in software but they serve different purposes.** Therefore, both assertions and exceptions should be used in code.

* The raising of an exception indicates an unusual condition created by the user %%(e.g.  user inputs an unacceptable input)%% or the environment %%(e.g., a file needed for the program is missing)%%.
* An assertion failure indicates the programmer made a mistake in the code %%(e.g., a null value is returned from a method that is not supposed to return null under any circumstances)%%.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
