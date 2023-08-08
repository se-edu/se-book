<span id="title">Make the happy path prominent</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: make the happy path prominent </span>

<div id="body">

**The _happy path_ should be clear and prominent in your code.** Restructure the code to make the happy path (i.e. the execution path taken when everything goes well) less-nested as much as possible. It is the ‘unusual’ cases that should be nested. Someone reading the code should not get distracted by alternative paths taken when error conditions happen. One technique that could help in this regard is the use of [guard clauses](http://wiki.c2.com/?GuardClause).

<box>

{{ icon_example }} The following example shows how guard clauses can be used to reduce the nesting of the happy path.

{{bad}}
```java{highlight-lines="3['start();'],4-6"}
if (!isUnusualCase) {  //detecting an unusual condition
    if (!isErrorCase) {
        start();    //main path
        process();
        cleanup();
        exit();
    } else {
        handleError();
    }
} else {
    handleUnusualCase(); //handling that unusual condition
}
```
In the code above,
* unusual condition detections are separated from their handling.
* the main path is nested deeply.

{{good}}
```java{highlight-lines="1['//Guard Clause'],6['//Guard Clause'],11-14"}
if (isUnusualCase) { //Guard Clause
    handleUnusualCase();
    return;
}

if (isErrorCase) { //Guard Clause
    handleError();
    return;
}

start();
process();
cleanup();
exit();
```
In contrast, the above code
* deals with unusual conditions as soon as they are detected so that the reader doesn't have to remember them for long.
* keeps the main path un-indented.

</box>

<box>

{{ icon_example }} The following pseudocode example shows how to reduce the nesting of the happy path inside a loop using a `continue` statement:


<table>
<tbody>
<tr>
  <td valign="top">

{{bad}}
```java
for (condition1)
    if (condition2)
        statement A
        statement B
        statement C
        statement D
statement E
```
  </td>
  <td>&nbsp;&nbsp;<br><br></td>
  <td valign="top">

{{good}}
```java{highlight-lines="2['not'],3"}
for (condition1)
    if (not condition2)
        continue
    statement A
    statement B
    statement C
    statement D
statement E
```
  </td>
</tr>
</tbody>
</table>

</box>


</div>

<div id="extras">
</div>
