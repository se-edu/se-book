<span id="title">Aggregation</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of aggregations</span>

<div id="body">

**_Aggregation_ represents a _container-contained_ relationship.** It is a weaker relationship than composition.

<box>

{{ icon_example }} `SportsClub` can act as a _container_ for `Person` objects who are members of the club. `Person` objects can survive without a `SportsClub` object.

</box>

#####  Implementing aggregation

Implementation is similar to that of composition except the _containee_ object can exist even after the _container_ object is deleted.

<box>

{{ icon_example }} In the code below, there is an aggregation association between the `Team` class and the `Person` class in that a `Team` contains a `Person` object who is the leader of the team.

<div class="alt-java">

```java
class Team {
    Person leader;
    ...
    void setLeader(Person p) {
        leader = p;
    }
}
```
</div>
<div class="alt-python">

```python
class Team:
  
  def __init__(self):
    self.__leader = None
    
  def set_leader(self, person):
    self.__leader = person
```
</div>

</box>

</div>

<div id="extras">
</div>