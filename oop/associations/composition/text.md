<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of composition</span>

<div id="title">

#### Composition

</div>

<div id="body">

**A composition is an association that represents a strong _whole-part_ relationship.** When the _whole_ is destroyed, _parts_ are destroyed too.

<tip-box>

{{ icon_example }} A `Board` (used for playing board games) consists of `Square` objects.

</tip-box>

**Composition also implies that there cannot be cyclical links**. 

<tip-box>

{{ icon_example }} The ‘sub-folder’ association between `Folder` objects is a composition type association. That means if the `Folder` object `foo` is a sub folder of `Folder` object `bar`, `bar` cannot be a sub-folder of `foo`. 

</tip-box>

##### Implementing composition

**Composition is implemented using a normal variable.** If correctly implemented, the ‘part’ object will be deleted when the ‘whole’ object is deleted. Ideally, the ‘part’ object may not even be visible to clients of the ‘whole’ object.

<tip-box>

{{ icon_example }} In the code below, the `Email` has a composition type relationship with the `Subject` class, in the sense that the subject is part of the email.

<div class="alt-java">

```java
class Email {
    private Subject subject;
  ...
}
```

</div>
<div class="alt-python">

```python
class Email:
  
  def __init__(self):
    self.__subject = Subject()
```
</div>


</tip-box>


</div>

<div id="extras">
</div>