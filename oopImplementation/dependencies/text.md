<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming →</div>

<div id="title">

#### Implementing Dependencies :two:

</div>

<div id="body">

Dependencies result from interactions between objects that do not result in a long-term link between the said objects.

<tip-box>

:package: In the code below, `Foo` has a dependency on `Bar` but it is not an association because it is only a <tooltip content="temporary">transient</tooltip> interaction and there is no long term relationship between a `Foo` object and a `Bar` object. %%i.e. the `Foo` object does not keep the `Bar` object it receives as a parameter%%.

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

The code above results in this dependency.

<img src="{{baseUrl}}/oopImplementation/dependencies/images/fooBarDependency.png" height="40" />

</tip-box>

</div>

<div id="extras">
</div>

</div>
