<div id="title">

#### Dependencies

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain dependencies among classes</span>

<div id="body">

In the context of OOP associations, **a _dependency_ is a need for one class to depend on another without having a direction association with it.** One cause of dependencies is interactions between objects that do not have a long-term link between them.

<tip-box> 

{{ icon_example }} A `Course` object can have a dependency on a `Registrar` object to obtain the maximum number of students it can support. 

</tip-box>

##### Implementing dependencies

<tip-box>

{{ icon_example }} In the code below, `Foo` has a dependency on `Bar` but it is not an association because it is only a <tooltip content="temporary">transient</tooltip> interaction and there is no long term relationship between a `Foo` object and a `Bar` object. %%i.e. the `Foo` object does not keep the `Bar` object it receives as a parameter%%.

<div class="alt-java">

```java
class Foo{
    
    int calculate(Bar bar){
        return bar.getValue();
    }
}

class Bar{
    int value;
    
    int getValue(){
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

</tip-box>


</div>

<div id="extras">
</div>