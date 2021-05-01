<span id="title">Dependencies</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain dependencies among classes</span>

<div id="body">

In the context of OOP associations, **a _dependency_ is a need for one class to depend on another without having a direct association in the same direction.** Reason for the exclusion: If there is an association from class `Foo` to class `Bar` (i.e., navigable from `Foo` to `Bar`), that means `Foo` is _obviously_ dependent on `Bar` and hence there is no point in mentioning _dependency_ specifically. In other words, we are only concerned about _non-obvious_ dependencies here. One cause of such dependencies is interactions between objects that do not have a long-term link between them.

<box>

{{ icon_example }} A `Course` class can have a dependency on a `Registrar` class because the `Course` class needs to refer to the `Registrar` class to obtain the the maximum number of students it can support (e.g., `Registrar.MAX_COURSE_CAPACITY`).

</box>

<box>

{{ icon_example }} In the code below, `Foo` has a dependency on `Bar` but it is not an association because it is only a <tooltip content="temporary">transient</tooltip> interaction and there is no long term relationship between a `Foo` object and a `Bar` object. %%i.e. the `Foo` object does not keep the `Bar` object it receives as a parameter%%.

<div class="alt-java">

```java
class Foo {
    
    int calculate(Bar bar) {
        return bar.getValue();
    }
}

class Bar {
    int value;
    
    int getValue() {
        return value;
    }
}
```
</div>
<div class="alt-python">

```python
class Foo:
    
    def calculate(self, bar):
        return bar.value;

class Bar:
    
    def __init__(self, value):
      self.value = value
```
</div>

</box>


</div>

<div id="extras">
</div>