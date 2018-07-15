<div id="title">

#### Roles

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain/use association roles in class diagrams</span>

<div id="body">

**_Association Role_ labels are used to indicate the role played by the classes in the association.**

<img src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/notation.png" height="60" />

<tip-box>

{{ icon_example }} This association represents a marriage between a `Man` object and a `Woman` object. The respective roles played by objects of these two classes are `husband` and `wife`. 

<img src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/husbandWife.png" width="300" />
<p/>

Note how the variable names match closely with the association roles.

<table> 
<tr>
  <td valign="top">

Java {{ icon_output }}
```java
class Man{
    Woman wife;
}

class Woman{
    Man husband;
}
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

Python {{ icon_output }}
```python
class Man:
  def __init__(self):
    self.wife = None # a Woman object

class Woman:
   def __init__(self):
     self.husband = None # a Man object
```
  </td>
</tr>
</table>

</tip-box>

<tip-box>

{{ icon_example }} The role of `Student` objects in this association is `charges` %%(i.e. Admin is in charge of students)%%

<img src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/adminStudent.png" height="70" />
<p/>

<table> 
<tr>
  <td valign="top">

Java {{ icon_output }}
```java
class Admin{
    List<Student> charges;
}
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

Python {{ icon_output }}
```python
class Admin:
  def __init__(self):
    self.charges = [] # list of Student objects
```
  </td>
</tr>
</table>

</tip-box>


</div>

<div id="extras">
</div>