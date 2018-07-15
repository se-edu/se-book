<div id="title">

#### Use the Default Branch

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: use the default branch </span>

<div id="body">

Always include a default branch in `case` statements.

Furthermore, use it for the intended default action and not just to execute the last option. If there is no default action, you can use the 'default' branch to detect errors (i.e. if execution reached the `default` branch, throw an exception). This also applies to the final `else` of an `if-else` construct. That is, the final `else` should mean 'everything else', and not the final option. Do not use `else` when an `if` condition can be explicitly specified, unless there is absolutely no other possibility.

<tip-box>

{{bad}}
```java
if (red) print "red";
else print "blue";
```
{{good}}
```java
if (red) print "red";
else if (blue) print "blue";
else error("incorrect input");
```

</tip-box>


</div>

<div id="extras">
</div>