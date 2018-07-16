<div id="title">

#### Self Invocation

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret sequence diagrams with self invocation</span>

<div id="body">

**UML can show a method of an object calling another of its own methods.**

Notation:

<img src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/notation.png" height="120" />
<p/>

<tip-box>

{{ icon_example }} The `markCellAt(...)` method of a `Logic` object is calling its own `updateState(...)` method.

<img src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/logic.png" height="100" />
<p/>

{{ icon_example }} In this variation, the `Book#write()` method is calling the `Chapter#getText()` method which in turn does a _call back_ by calling the `getAuthor()` method of the calling object.

<img src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/callBack.png" height="150" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>