<span id="title">Use the default branch</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: use the default branch </span>

<div id="body">

**Always include a default branch in `case` statements.** This ensures that all possible outcomes have been considered at the branching point.

**Furthermore, use the `default` branch for the intended default action and not just to execute the last option.** If there is no default action, you can use the `default` branch to detect errors (i.e., if execution reached the `default` branch, raise a suitable error). This also applies to the final `else` of an `if-else` construct. That is, the final `else` should mean 'everything else', and not the final option. Do not use `else` when an `if` condition can be explicitly specified, unless there is absolutely no other possibility.

<box>

<table>
<tbody>
<tr>
  <td valign="top">

{{bad}}
```java{.no-line-numbers}
if (red) print "red";
else print "blue";
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

{{good}}
```java{.no-line-numbers}
if (red) print "red";
else if (blue) print "blue";
else error("incorrect input");
```
  </td>
</tr>
</tbody>
</table>

</box>
</div>

<div id="extras">
</div>
