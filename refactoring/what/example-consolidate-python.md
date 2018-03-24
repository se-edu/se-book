<table> 
<tr>
  <td valign="top">

```python
if is_special_deal:
    total = price * 0.95
    send()
else:
    total = price * 0.98
    send()
```
  </td>
  <td valign="center">&nbsp;→&nbsp;</td>
  <td valign="top">

```python
if is_special_deal:
    total = price * 0.95
else:
    total = price * 0.98
    
send()
```
  </td>
</tr>
</table>