<span id="title">Multiplicity</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of multiplicity</span>

<div id="body">

**_Multiplicity_ is the aspect of an OOP solution that dictates how many objects take part in each association.** 

<box>

{{ icon_example }} The multiplicity of the association between `Course` objects and `Student` objects tells you how many `Course` objects can be associated with one `Student` object and vice versa.

</box>

##### Implementing multiplicity

**A normal instance-level variable gives us a `0..1` multiplicity** (also called _optional associations_) because a variable can hold a reference to a single object or `null`.

<box>

{{ icon_example }} In the code below, the `Logic` class has a variable that can hold `0..1` %%i.e., zero or one%% `Minefield` objects.

<include src="../../../uml/classDiagrams/associations/navigability/logic-minefield.md" />

</box>


**A variable can be used to implement a `1` multiplicity too** (also called _compulsory associations_).

<box>

{{ icon_example }} In the code below, the `Logic` class will always have a `ConfigGenerator` object, provided the variable is not set to `null` at some point.


<div class="alt-java">

```java
class Logic {
    ConfigGenerator cg = new ConfigGenerator();
    ...
}
```
</div>
<div class="alt-python">

```python
class Logic:

  def __init__(self):
    self.config_gen = ConfigGenerator()
```
</div>


</box>

**Bi-directional associations require matching variables in both classes.**

<box>

{{ icon_example }} In the code below, the `Foo` class has a variable to hold a `Bar` object and vice versa %%i.e., each object can have an association with an object of the other type%%.

<div class="alt-java">

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
</div>
<div class="alt-python">

```python
class Foo:
  
  def __init__(self, bar):
    self.bar = bar;


class Bar:
  
  def __init__(self, foo):
    self.foo = foo;
    
```
</div>


</box>

**To implement other multiplicities, choose a suitable data structure** such as Arrays, ArrayLists, HashMaps, Sets, etc.

<box>
<div class="alt-java">

{{ icon_example }} This code uses a two-dimensional array to implement a 1-to-many association from the `Minefield` to `Cell`.
```java
class Minefield {
    Cell[][] cell;
    ...
}
```
</div>
<div class="alt-python">

```python
class Minefield:
  
  def __init__(self):
    self.cells = {1:[], 2:[], 3:[]}
```
</div>


</box>

</div>

<div id="extras">
</div>
