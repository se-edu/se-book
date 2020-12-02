<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of composition</span>

<span id="title">Composition</span>

<div id="body">

**A composition is an association that represents a strong _whole-part_ relationship.** When the _whole_ is destroyed, _parts_ are destroyed too i.e., the _part_ should not exist without being attached to a _whole_.

<box>

{{ icon_example }} A `Board` (used for playing board games) consists of `Square` objects.

</box>

**Composition also implies that there cannot be cyclical links**. 

<box>

{{ icon_example }} The ‘sub-folder’ association between `Folder` objects is a composition type association. That means if the `Folder` object `foo` is a sub-folder of `Folder` object `bar`, `bar` cannot be a sub-folder of `foo`. 

</box>

**Whether a relationship is a composition can depend on the context**.

<box>

{{ icon_example }} Is the relationship between `Email` and `EmailSubject` composition? That is, is the email subject _part_ of an email to the extent that an email subject cannot exist without an email?
* When modeling an application that sends emails, the answer is 'yes'.
* When modeling an application that gather analytics about email traffic, the answer may be 'no' %%(e.g., the application might collect just the email subjects for text analysis)%%.

</box>

**A common use of composition is when parts of a big class is carved out as smaller classes** for the ease of managing the internal design. In such cases, the classes extracted out still act as _parts_ of the bigger class and the outside world has no business knowing about them.

**Cascading deletion alone is not sufficient for composition.** Suppose there is a design in which `Person` objects are attached to `Task` objects and the former get deleted whenever the latter is deleted. This fact alone does not mean there is a composition relationship between the two classes. For it to be composition, a `Person` must be an integral _part_ of a `Task` in the context of that association, at the concept level (not simply at implementation level).

**Identifying and keeping track of composition relationships in the design has benefits** such as helping to maintain the data integrity of the system. For example, when you know that a certain relationship is a composition, you can take extra care in your implementation to ensure that when the _whole_ object is deleted, all its _parts_ are deleted too.


##### Implementing composition

**Composition is implemented using a normal variable.** If correctly implemented, the ‘part’ object will be deleted when the ‘whole’ object is deleted. Ideally, the ‘part’ object may not even be visible to clients of the ‘whole’ object.

<box>


<div class="alt-java float-right ml-5">

```java
class Email {
    private Subject subject;
  ...
}
```

</div>
<div class="alt-python  float-right ml-5">

```python
class Email:

  def __init__(self):
    self.__subject = Subject()
```
</div>

{{ icon_example }} In this code, the `Email` has a composition type relationship with the `Subject` class, in the sense that the subject is part of the email.

</box>


</div>

<div id="extras">
</div>