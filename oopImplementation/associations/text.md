<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Implementing Associations :one:

</div>

<div id="body">

<p/>

**We use instance level variables to implement associations.** 

**A normal instance-level variable gives us a `0..1` multiplicity** (also called _optional associations_) because a variable can hold a reference to a single object or `null`.

<tip-box>

<img src="{{baseUrl}}/oopImplementation/associations/images/logicMinefield.png" height="40" />
<p/>

<include src="../../uml/classDiagrams/associations/navigability/logic-minefield.md" />

</tip-box>


**A variable can be used to implement a `1` multiplicity too** (also called _compulsory associations_).

<tip-box>

<img src="{{baseUrl}}/oopImplementation/associations/images/logicConfigGenerator.png" height="40" />
<p/>

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

<img src="{{baseUrl}}/oopImplementation/associations/images/fooBar.png" height="40" />
<p/>

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
 <include src="exercises.md"/>
</div>

</div>
