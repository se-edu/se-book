<div id="title">

#### Navigability :two:

</div>

<div id="body">

**We use arrow heads to indication the navigability of an association.**

<tip-box>

:package: `Logic` is aware of `Minefield`, but `Minefield` is not aware of `Logic`

<img src="{{baseUrl}}/uml/classDiagrams/associations/navigability/images/logicMinefield.png" height="40" />
<p/>

```java
class Logic{
    Minefield minefield;
}

class Minefield{
    ...
}
```

<!-- TODO: add an example of a bidirectional association -->

**Navigability can be shown in class diagrams as well as object diagrams**.

<!-- TODO: add an example of navigability in an object diagram -->

</tip-box>

</div>

<div id="extras">
</div>

</div>
