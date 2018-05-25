<table> 
<tr>
  <td valign="top">

{{bad}}
```java
return 3.14236;
...
return 9;
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

{{good}}
```java
static final double PI = 3.14236;
static final int MAX_SIZE = 10;
...
return PI;
...
return MAX_SIZE-1;
```
  </td>
</tr>
</table> 





