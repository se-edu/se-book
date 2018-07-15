<panel header="{{ icon_Q_A }} What does the navigability given by this diagram mean?">
<question>

<img src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/unitItem.png" height="100" />
<p/>

- ( ) a. A `Unit` object knows about the `Item` object it is linked to
- ( ) b. An `Item` object knows about the `Unit` object it is linked to
- ( ) c. Depends on the programming language

<div slot="answer">

(a)

Explanation: The diagram indicates that `Unit` object should know about the `Item` object. In the implementation, the `Unit` object will hold a `Unit` object in one of its variables.

</div>
</question>
</panel>
