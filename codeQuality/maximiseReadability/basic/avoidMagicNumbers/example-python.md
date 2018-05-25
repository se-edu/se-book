Note: Python does not have a way to make a variable a constant. However, you can use a normal variable with an `ALL_CAPS` name to simulate a constant.

<table> 
<tr>
  <td valign="top">

{{bad}}
```python
return 3.14236
...
return 9
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

{{good}}
```python
PI = 3.14236
MAX_SIZE = 10
...
return PI
...
return MAX_SIZE-1
```
  </td>
</tr>
</table> 