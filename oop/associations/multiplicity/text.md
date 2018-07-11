<div id="title">

#### Multiplicity

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can explain the meaning of multiplicity</span>

<div id="body">

**_Multiplicity_ is the aspect of an OOP solution that dictates how many objects take part in each association.** 

<tip-box> 

{{ icon_example }} The navigability of the association between `Course` objects and `Student` objects tells you how many `Course` objects can be associated with one `Student` object and vice versa. 

</tip-box>

##### <big>Implementing multiplicity</big>

**A normal instance-level variable gives us a `0..1` multiplicity** (also called _optional associations_) because a variable can hold a reference to a single object or `null`.

<tip-box>

{{ icon_example }} In the code below, the `Logic` class has a variable that can hold `0..1` %%i.e., zero or one%% `Minefield` objects.

<include src="../../../uml/classDiagrams/associations/navigability/logic-minefield.md" />

</tip-box>


**A variable can be used to implement a `1` multiplicity too** (also called _compulsory associations_).

<tip-box>

{{ icon_example }} In the code below, the `Logic` class will always have a `ConfigGenerator` object, provided the variable is not set to null at some point.


<tabs> 
  <tab header="Java">

```java
class Logic {
    ConfigGenerator cg = new ConfigGenerator();
    ...
}
```
  </tab>
  <tab header="Python">

```python
class Logic:
  
  def __init__(self):
    self.config_gen = ConfigGenerator()
```
  </tab>
</tabs><hr>


</tip-box>

**Bi-directional associations require matching variables in both classes.**

<tip-box>

{{ icon_example }} In the code below, the `Foo` class has a variable to hold a `Bar` object and vice versa %%i.e., each object can have an association with an object of the other type%%.

<table> 
<tr>
  <td>

Java :arrow_heading_down:
```java
class Foo {
    Bar bar;
    //...
}


class Bar {
    Foo foo;
    //...
}

```
  </td>
  <td valign="bottom">&nbsp;&nbsp;<br><br></td>
  <td valign="bottom">

Python :arrow_heading_down:
```python
class Foo:
  
  def __init__(self, bar):
    self.bar = bar;


class Bar:
  
  def __init__(self, foo):
    self.foo = foo;
    
```
  </td>
</tr>
</table>


</tip-box>

**To implement other multiplicities, choose a suitable data structure** such as Arrays, ArrayLists, HashMaps, Sets, etc.

<tip-box>
<table> 
<tr>
  <td>

Java :arrow_heading_down:
```java
class Minefield {
    Cell[][] cell;
    ...
}
```
  </td>
  <td valign="bottom">&nbsp;&nbsp;<br><br></td>
  <td valign="bottom">

Python :arrow_heading_down:
```python
class Minefield:
  
  def __init__(self):
    self.cells = {1:[], 2:[], 3:[]}
```
  </td>
</tr>
</table>


</tip-box>

</div>

<div id="extras">
</div>