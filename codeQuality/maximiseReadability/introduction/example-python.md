<table> 
<tr>
  <td>

{{bad}}
```python
def calculate_subs():
    if not age:
        if not sub:
            if not not_fulltime:
                subsidy = 500
            else:
                subsidy = 250
        else:
            subsidy = 250
    else:
        subsidy = -1
    return subsidy
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

{{good}}
```python
def calculate_subsidy():
    if is_senior:
        return REJECT_SENIOR
    elif is_already_subsidised:
        return SUBSIDISED_SUBSIDY
    elif is_parttime:
        return FULLTIME_SUBSIDY * RATIO
    else:
        return FULLTIME_SUBSIDY
```
  </td>
</tr>
</table>