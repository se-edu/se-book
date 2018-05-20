<tip-box>

:package: In the example below, `Student` class overrides the `print_info` method of its parent class `Person`:

<table> 
<tr>
  <td>

```python
class Person:
  def __init__(self, name):
    self.name = name
    
  def print_info(self):
    print('My name is', self.name)
    
```

  </td>
  <td valign="bottom">&nbsp;&nbsp;<br><br></td>
  <td valign="bottom">

```python 
class Student(Person):
  def __init__(self, name, matric):
    self.name = name
    self.matric = matric
    
  def print_info(self):
    print(self.name, 'is a student')
```

  </td>
</tr>
</table>

<table> 
<tr>
  <td>

```python
amy = Person('Amy')
amy.print_info()

ben = Student('Ben', 'A12345')
ben.print_info()
```
  </td>
  <td valign="bottom">&nbsp;→&nbsp;<br><br></td>
  <td valign="bottom">

```
My name is Amy
Ben is a student
```
  </td>
</tr>
</table>

</tip-box>