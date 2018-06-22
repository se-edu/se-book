<div id="title">

#### Implementing Aggregation

</div>

<span id="prereqs"><dynamic-panel src="../../oopDesign/associations/aggregation/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → OOP → Associations → Aggregation%%" /></span>

<span id="outcomes">{{glyphicon_flag}} Can implement aggregation</span>

<div id="body">

Implementation is similar to that of composition except the _containee_ object can exist even after the _container_ object is deleted.

<tip-box>

{{ icon_example }} Example:

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