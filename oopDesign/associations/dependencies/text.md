<div id="title">

#### Dependencies

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain dependencies among classes</span>

<div id="body">

Dependencies are objects that are not directly linked in the object network can still interact with each other. These are a weaker form of associations we call _dependencies_.

<tip-box> 

{{ icon_example }} A `Course` object can have a dependency on a `Registrar` object to obtain the maximum number of students it can support. 

</tip-box>

##### **Implementing dependencies**

Dependencies result from interactions between objects that do not result in a long-term link between the said objects.

<tip-box>

{{ icon_example }} In the code below, `Foo` has a dependency on `Bar` but it is not an association because it is only a <tooltip content="temporary">transient</tooltip> interaction and there is no long term relationship between a `Foo` object and a `Bar` object. %%i.e. the `Foo` object does not keep the `Bar` object it receives as a parameter%%.

<table> 
<tr>
  <td>

Java :arrow_heading_down:
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
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

Python :arrow_heading_down:
```python
class Foo:
    
    def calculate(self, bar):
        return bar.value;

class Bar:
    
    def __init__(self, value):
      self.value = value
```
  </td>
</tr>
</table>

The code above results in a dependency from `Foo` class to the `Bar` class.

</tip-box>


</div>

<div id="extras">
</div>