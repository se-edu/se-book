<span id="title">Navigability</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of navigability</span>

<div id="body">

When two classes are linked by an association, it does not necessarily mean both objects taking part in an instance of the association _knows about_ (i.e., has a reference to) each other. **The concept of _navigability_ tells us if an object taking part in association knows about the other.** In other words, it tells us if we can 'navigate' from the one object to the other in a given direction -- because if the object 'knows' about the other, it has a reference to the other object, and we can use that reference to 'navigate to' (i.e., access) that other object.

**Navigability can be _unidirectional_ or _bidirectional_**. Suppose there is an association between the classes `Box` and `Rope`, and the `Box` object `b` and the `Rope` object `r` is taking part in one instance of that association.
* **Unidirectional**: If the navigability is from `Box` to `Rope`, `b` will have a reference to `r` but `r` will not have a reference to `b`. That is, one can _navigate_ from `b` to `r` using the `b`'s object reference of `r` (but not in the other direction).<br>
  Similarly, if the navigability is in the other direction, `r` will have a reference to `b` but `b` will not have a reference to `r`.
* **Bidirectional**: `b` will have a reference to `r` and `r` will have a reference to `b` i.e., the two objects will be pointing to each other for the same single instance of the association.

Note that two unidirectional associations in opposite directions do not add up to a single bidirectional association.
<box>

{{ icon_example }} In the code below, there is a bidirectional association between the `Person` class and the `Cat` class i.e., if `Person` `p` is the owner of the `Cat` `c`, `p` it will result in `p` and `c` having references to each other.


<div class="alt-java">

```java
class Person {
    Cat pet;
    //...
}

class Cat{
    Person owner;
    //...
}
```
</div>
<div class="alt-python">

```python
class Person:

  def __init__(self):
    self.pet = None  # a Cat object


class Cat:

  def __init__(self):
    self.owner = None  # a Person object
```
</div>

The code below has two unidirectional associations between the `Person` class and the `Cat` class (in opposite directions). Because the breeder is not necessarily the same person keeping the cat as a pet, they are two separate associations, not a bidirectional association.

<div class="alt-java">

```java{highlight-lines="7[7:14]"}
class Person {
    Cat pet;
    //...
}

class Cat{
    Person breeder;
    //...
}
```
</div>
<div class="alt-python">

```python
class Person:

  def __init__(self):
    self.pet = None  # a Cat object


class Cat:

  def __init__(self):
    self.breeder = None  # a Person object
```
</div>


</box>
</div>

<div id="extras">

</div>
