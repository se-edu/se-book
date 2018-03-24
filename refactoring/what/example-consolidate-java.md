<table> 
<tr>
  <td valign="top">

```java
if (isSpecialDeal()) {
    total = price * 0.95;
    send();
} else {
    total = price * 0.98;
    send();
}
```
  </td>
  <td valign="center">&nbsp;→&nbsp;</td>
  <td valign="top">

```java
if (isSpecialDeal()){
    total = price * 0.95;
} else {
    total = price * 0.98;
}
send();

```
  </td>
</tr>
</table>