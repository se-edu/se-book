<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Implementing Aggregation :two:

</div>

<div id="body">

Implementation is similar to that of composition except the _containee_ object can exist even after the _container_ object is deleted.

<tip-box>

:package: Example:

<img src="{{baseUrl}}/oopImplementation/aggregation/images/carPerson.png" height="40" />

<table> 
<tr>
  <td valign="top">

Java :arrow_heading_down:
```java
class Car {
    Person driver;
    ...
    void drive(Person p) {
        driver = p;
    }
}
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

Python :arrow_heading_down:
```python
class Car:
  
  def __init__(self):
    self.__driver = None
    
  def drive(self, person):
    self.__driver = person
```
  </td>
</tr>
</table>



</tip-box>

</div>

<div id="extras">
</div>

</div>
