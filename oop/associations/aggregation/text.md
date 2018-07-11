<div id="title">

#### Aggregation

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain the meaning of aggregations</span>

<div id="body">

**_Aggregation_ represents a _container-contained_ relationship.** It is a weaker relationship than composition.

<tip-box> 

{{ icon_example }} `SportsClub` acts as a _container_ for `Person` objects. `Person` objects can survive without a `SportsClub` object.

</tip-box>

#####  **Implementing aggregation**

Implementation is similar to that of composition except the _containee_ object can exist even after the _container_ object is deleted.

<tip-box>

{{ icon_example }} In the code below, there is an aggregation association between the `Team` class and the `Person` in that a `Team` contains `Person` a object who is the leader of the team.

<table> 
<tr>
  <td valign="top">

Java :arrow_heading_down:
```java
class Team {
    Person leader;
    ...
    void drive(Person p) {
        leader = p;
    }
}
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

Python :arrow_heading_down:
```python
class Team:
  
  def __init__(self):
    self.__leader = None
    
  def drive(self, person):
    self.__leader = person
```
  </td>
</tr>
</table>

</tip-box>

</div>

<div id="extras">
</div>