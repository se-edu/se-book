<span id="title">Self invocation</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret sequence diagrams with self invocation</span>

<div id="body">

**UML can show a method of an object calling another of its own methods.**

Notation:

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/notation.png" width="200" />
<p/>

<box>

{{ icon_example }} The `markCellAt(...)` method of a `Logic` object is calling its own `updateState(...)` method.

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/logic.png" width="350" />
<p/>

{{ icon_example }} In this variation, the `Book#write()` method is calling the `Chapter#getText()` method which in turn does a _call back_ by calling the `getAuthor()` method of the calling object.

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/selfInvocation/images/callBack.png" width="350" />
<p/>

</box>

{{ icon_tip }} **'Unroll' chained/compound method calls before drawing sequence diagram.** Consider the Java statement `new Book().add(new Chapter());`{.java}. How do we show it as a sequence diagram? First, 'unroll' it into a simpler series of statements, which can then be drawn as a sequence diagram easily. For example, that statement is equivalent to the following:
```java{.no-line-numbers}
Book b = new Book();
Chapter c = new Chapter();
b.add(c);
```

</div>

<div id="extras">
</div>
