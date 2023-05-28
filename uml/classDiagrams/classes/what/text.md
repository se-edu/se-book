<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can draw UML classes</span>

<div id="body">

The basic UML notations used to represent a _class_:<br>

<pic src="{{baseUrl}}/uml/classDiagrams/classes/what/images/basicNotation.png" height="130" />
<p/>

<box>

{{ icon_example }} A `Table` class shown in UML notation:

<div class="alt-java">
<pic src="{{baseUrl}}/uml/classDiagrams/classes/what/images/operations.png" height="150" />
</div>
<div class="alt-python">
<puml>
@startuml
skinparam classAttributeIconSize 0
skinparam backgroundcolor transparent
skinparam shadowing false
hide circle
class Table {
number: int = 0
chairs: Chair[ ] = [ ]
get_number(): int
set_number(n:int)
}
@enduml
</puml>
</div>
<p/>

<panel type="seamless" header="The equivalent code">
<div class="alt-java">

```java
class Table {

    Integer number;
    Chair[] chairs = null;

    Integer getNumber() {
        // ...
    }

    void setNumber(Integer n) {
        // ...
    }
}
```
</div>
<div class="alt-python">

```python
class Table:

  def __init__(self):
    self.number = 0
    self.chairs = []

  def get_number(self):
    # ...

  def set_number(self, n):
    # ...
```
</div>

</panel>

</box>

**The 'Operations' compartment and/or the 'Attributes' compartment may be omitted** if such details are not important for the task at hand. Similarly, _some_ attributes/operations can be omitted if not relevant. 'Attributes' always appear above the 'Operations' compartment. All operations should be in one compartment rather than each operation in a separate compartment. Same goes for attributes.

<box>

<pic src="{{baseUrl}}/uml/classDiagrams/classes/what/images/classes.png" height="100" />

</box>

**The _visibility_ of attributes and operations is used to indicate the level of access allowed for each attribute or operation.** The types of visibility and their exact meanings depend on the programming language used. Here are some common visibilities and how they are indicated in a class diagram:

* `+` : public
* `-` : private
* `#` : protected
* `~` : package private

<panel type="seamless" header="How visibilities map to programming language features">

Visibility | Java | Python
-----------|------|-------
`-` private | `private` | at least two leading underscores (and at most one trailing underscores) in the name
`#` protected | `protected` | one leading underscore in the name
`+` public | `public` | all other cases
`~` package private | default visibility | not applicable

</panel><p/>

<box>

{{ icon_example }} `Table` class with visibilities shown:
<div class="alt-java">
<pic src="{{baseUrl}}/uml/classDiagrams/classes/what/images/operationsVisibility.png" height="150" />
</div>
<div class="alt-python">
<puml>
@startuml
skinparam classAttributeIconSize 0
skinparam backgroundcolor transparent
skinparam shadowing false
hide circle
class Table {
<b><color:red>-</color>__number</b>: int = 0
<b><color:red>-</color></b>__chairs: Chair[ ] = [ ]
<b><color:red>+</color></b>get_number(): int
<b><color:red>+</color></b>set_number(n:int)
}
@enduml
</puml>
</div>
<p/>

<panel type="seamless" header="The equivalent code">
<div class="alt-java">

```java
class Table {

    private Integer number;
    private Chair[] chairs = null;

    public Integer getNumber() {
        //...
    }

    public void setNumber(Integer n) {
        //...
    }
}
```
</div>
<div class="alt-python">

```python
class Table:

  def __init__(self):
    self.__number = 0
    self.__chairs = []

  def get_number(self):
    # ...

  def set_number(self, n):
    # ...
```
</div>

</panel>

</box>


<div class="alt-java">


**Generic classes can be shown as given below**. The notation format is shown on the left, followed by two examples.

<pic src="images/generic.png" width="618"/>
<p/>
</div>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
