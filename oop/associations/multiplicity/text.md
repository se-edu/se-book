{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Multiplicity</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of multiplicity</span>

<div id="body">

**{{ show_term("Multiplicity") }} is the aspect of an OOP solution that dictates how many objects take part in each association.**<br>
{{ label_example }} %%The multiplicity of the association between `Course` objects and `Student` objects tells you how many `Course` objects can be associated with one `Student` object and vice versa.%%

##### Implementing multiplicity

**A normal instance-level variable gives us a `0..1` multiplicity** (also called _optional associations_) because a variable can hold a reference to a single object or `null`.

{% call show_example() %}
In the code below, the `Logic` class has a variable that can hold `0..1` %%i.e., zero or one%% `Minefield` objects.

<include src="../../../uml/classDiagrams/associations/navigability/logic-minefield.md" />
{% endcall %}

**A variable can be used to implement a `1` multiplicity too** (also called _compulsory associations_).

{% call show_example() %}
Implementing a compulsory (`1`) association:
<div class="alt-java">

In the code below, the `Logic` class will always have a `ConfigGenerator` object, provided the variable is not set to `null` at some point.

```java
class Logic {
    ConfigGenerator cg = new ConfigGenerator();
    ...
}
```
</div>

<div class="alt-python">

In the `Logic` class, ensure there is a variable that refers to a `ConfigGenerator` object.

</div>
{% endcall %}

**To implement other multiplicities, choose a suitable data structure** such as Arrays, ArrayLists, HashMaps, Sets, etc.

{% call show_example() %}
Implementing a 1-to-many association from `Minefield` to `Cell`:
<div class="alt-java">

This code uses a two-dimensional array.
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
{% endcall %}

</div>

<div id="extras">
</div>
