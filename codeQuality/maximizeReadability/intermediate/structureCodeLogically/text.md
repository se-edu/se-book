<span id="title">Structure code logically</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: structure code logically </span>

<div id="body">

**Lay out the code so that it adheres to the logical structure.** The code should read like a story. Just like how you use section breaks, chapters and paragraphs to organize a story, use classes, methods, indentation and line spacing in your code to group related segments of the code.  For example, you can use blank lines to separate groups of related statements.

Sometimes, the correctness of your code does not depend on the order in which you perform certain intermediary steps. Nevertheless, this order may affect the clarity of the story you are trying to tell. Choose the order that makes the story most readable.

<box>

<table>
<tbody>
<tr>
  <td valign="top">

{{bad}}
```java{.no-line-numbers}
statement A1
statement A2
statement A3
statement B1
statement C1
statement B2
statement C2
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

{{good}}
```java{.no-line-numbers}
statement A1
statement A2
statement A3

statement B1
statement B2

statement C1
statement C2
```
  </td>
</tr>
</tbody>
</table>

</box>

</div>

<div id="extras">
</div>
