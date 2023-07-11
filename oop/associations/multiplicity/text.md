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

<div class="alt-java">

{{ icon_example }} In the code below, the `Logic` class will always have a `ConfigGenerator` object, provided the variable is not set to `null` at some point.

```java
class Logic {
    ConfigGenerator cg = new ConfigGenerator();
    ...
}
```
</div>

<div class="alt-python">

{{ icon_example }} In the `Logic` class, ensure there is a variable that refers to a `ConfigGenerator` object.

</div>


</box>

**To implement other multiplicities, choose a suitable data structure** such as Arrays, ArrayLists, HashMaps, Sets, etc.

<box>
<div class="alt-java">

{{ icon_example }} This code uses a two-dimensional array to implement a 1-to-many association from the `Minefield` to `Cell`.
```java
class Minefield {
    Cell[][] cell;
    //...
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
