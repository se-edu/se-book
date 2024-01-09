<span id="title">Object deletion</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret sequence diagrams with object deletion</span>

<div id="body">

**UML uses an `X` at the end of the lifeline of an object to show its deletion.**

Notation:

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/objectDeletion/images/notation.png" height="100" />
<p/>

<box>

{{ icon_example }} Note how the below diagram shows the deletion of the `Minefield` object.

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/objectDeletion/images/logicMinefield.png" height="120" />
<p/>

</box>

Although languages such as Java do not support a `delete` operation (because they use automatic memory management), **you can use the object deletion notation to indicate the point at which the object becomes _ready to be garbage-collected_** (i.e., the point at which it ceases to be referenced).

<box>

{{ icon_example }} Note how `d` lifeline ends with an `X` to show that it is 'deleted' (i.e., ready to be garbage collected) after the `cook()` method returns.

```java{.no-line-numbers}
class Chef {
    void cook() {
        Dish d = new Dish();
    }
}
```

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/objectDeletion/images/chefCookDish.png" width="300" />
<p/>

</box>

</div>

<div id="extras">
</div>
