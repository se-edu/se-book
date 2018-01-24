<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Self Invocation :two:

</div>

<div id="body">

**UML can show a method of an object calling another of its own methods.**

Notation:

<img src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/notation.png" height="120" />
<p/>

<tip-box>

:package: The `markCellAt(...)` method of a `Logic` object is calling its own `updateState(...)` method.

<img src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/logic.png" height="100" />
<p/>

:package: In this variation, the `Book#write()` method is calling the `Chapter#getText()` method which in turn does a _call back_ by calling the `getAuthor()` method of the calling object.

<img src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/callBack.png" height="150" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>

</div>
