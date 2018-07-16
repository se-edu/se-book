<div id="title">

#### Make the Happy Path Prominent

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: make the happy path prominent </span>

<div id="body">

The happy path (i.e. the execution path taken when everything goes well) should be clear and prominent in your code. Restructure the code to make the happy path unindented as much as possible. It is the ‘unusual’ cases that should be indented. Someone reading the code should not get distracted by alternative paths taken when error conditions happen. One technique that could help in this regard is the use of [guard clauses](http://wiki.c2.com/?GuardClause).

<tip-box>

Example:

{{bad}}
```java
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
* Unusual condition detection is separated from their handling.
* Main path is nested deeply.

{{good}}
```java
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

</tip-box>


</div>

<div id="extras">
</div>