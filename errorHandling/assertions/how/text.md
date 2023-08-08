<span id="title">How</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use assertions</span>

<div id="body">

Use the `assert` keyword to define assertions.

<box>

{{ icon_example }} This assertion will fail with the message `x should be 0` if `x` is not 0 at this point.

```java
x = getX();
assert x == 0 : "x should be 0";
...
```

</box>

**Assertions can be disabled without modifying the code.**

<box>

{{ icon_example }} `java -enableassertions HelloWorld` (or `java -ea HelloWorld`) will run `HelloWorld` with assertions enabled while `java -disableassertions HelloWorld` will run it without verifying assertions.

</box>


<box type="important">

**Java disables assertions by default.** This could create a situation where you think all assertions are being verified as `true` while in fact they are not being verified at all. Therefore, remember to enable assertions when you run the program if you want them to be in effect.

</box>

{{ icon_tip }} Enable assertions in Intellij ([how?](https://se-education.org/guides/tutorials/intellijUsefulSettings.html)) and get an assertion to fail temporarily (e.g. insert an `assert false` into the code temporarily) to confirm assertions are being verified.

{{ icon_info }} **Java `assert` vs JUnit assertions: Both check for a given condition but JUnit assertions are more powerful and customized for testing.** In addition, JUnit assertions are not disabled by default. Use JUnit assertions in test code and Java `assert` in functional code.
</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
