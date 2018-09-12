<div id="title">

#### How

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Error Handling → Assertions → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use assertions</span>

<div id="body">

Use the `assert` keyword to define assertions.

<tip-box> 

{{ icon_example }} This assertion will fail with the message `x should be 0` if `x` is not 0 at this point.

```java
x = getX();
assert x == 0 : "x should be 0";
...
```

</tip-box>

**Assertions can be disabled without modifying the code.**

<tip-box> 

{{ icon_example }} `java -enableassertions HelloWorld` (or `java -ea HelloWorld`) will run `HelloWorld` with assertions enabled while `java -disableassertions HelloWorld` will run it without verifying assertions.

</tip-box>


<tip-box type="important">

**Java disables assertions by default.** This could create a situation where you think all assertions are being verified as `true` while in fact they are not being verified at all. Therefore, remember to enable assertions when you run the program if you want them to be in effect.

</tip-box>

:bulb: Enable assertions in Intellij ([how?](https://stackoverflow.com/questions/18168257/where-to-add-compiler-options-like-ea-in-intellij-idea)) and get an assertion to fail temporarily (e.g. insert an `assert false` into the code temporarily) to confirm assertions are being verified.

{{ icon_info }} **Java `assert` vs JUnit assertions: They are similar in purpose but JUnit assertions are more powerful and customized for testing.** In addition, JUnit assertions are not disabled by default. We recommend you use JUnit assertions in test code and Java `assert` in functional code.

</div>

<div id="extras">
  <include src="resources.md" />
</div>