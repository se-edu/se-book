<span id="title">Roles</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain/use association roles in class diagrams</span>

<div id="body">

**_Association Role_ are used to indicate the role played by the classes in the association.**

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/notation.png" height="60" />

<box>

{{ icon_example }} This association represents a marriage between a `Man` object and a `Woman` object. The respective roles played by objects of these two classes are `husband` and `wife`.

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/husbandWife.png" width="300" />
<p/>

Note how the variable names match closely with the association roles.
<div class="alt-java">

```java
class Man {
    Woman wife;
}

class Woman {
    Man husband;
}
```
</div>
<div class="alt-python">

```python
class Man:
  def __init__(self):
    self.wife = None # a Woman object

class Woman:
   def __init__(self):
     self.husband = None # a Man object
```
</div>

</box>

<box>

{{ icon_example }} The role of `Student` objects in this association is `charges` %%(i.e., Admin is in charge of students)%%

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/adminStudent.png" height="70" />
<p/>

<div class="alt-java">

```java
class Admin {
    List<Student> charges;
}
```
</div>
<div class="alt-python">

```python
class Admin:
  def __init__(self):
    self.charges = [] # list of Student objects
```
</div>

</box>

Association roles are optional to show. They are particularly useful for differentiating among multiple associations between the same two classes.
<box>

{{ icon_example }} In each the three associations between the `Flight` class and the `Airport` class given below, the `Airport` class plays a different role.

<pic eager src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/flightAirport.png" height="100" />
<p/>

</box>

</div>

<div id="extras">
</div>
