<span id="title">Navigability</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of navigability</span>

<div id="body">

When two classes are linked by an association, it does not necessarily mean the two objects taking part in an instance of the association _knows about_ (i.e., has a reference to) each other. **The concept of which object in the association knows about the other object is called _navigability_.**

**Navigability can be _unidirectional_ or _bidirectional_**. Suppose there is an association between the classes `Box` and `Rope`, and the `Box` object `b` and the `Rope` object `r` is taking part in one instance of that association.
* **Unidirectional**: If the navigability is from `Box` to `Rope`, `b` will have a reference to `r` but `r` will not have a reference to `b`. Similarly, if the navigability is in the other direction, `r` will have a reference to `b` but `b` will not have a reference to `r`.
* **Bidirectional**: `b` will have a reference to `r` and `r` will have a reference to `b` i.e., the two objects will be pointing to each other.
</div>

<div id="extras">

</div>